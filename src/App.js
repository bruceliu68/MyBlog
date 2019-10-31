import "./index.less";
import React from "react";
import { init } from "@rematch/core";
import * as models from "./models";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { routes } from "./router";
import Error from "@/pages/Error";
import Header from "@/components/Header";

const store = init({
	models
});

const history = createBrowserHistory();

const { dispatch } = store;
window.dispatch = dispatch;

class App extends React.Component {

	constructor() {
		super();
		this.state = {
			noHeaderPage: [
				"/tool/markdown"
			]
		};
	}

	render() {
		const { noHeaderPage } = this.state;
		let isShowHeader = true;
		const href = window.location.href;
		noHeaderPage.forEach(item => {
			if (href.includes(item)) isShowHeader = false;
		});

		return (
			<Provider store={store}>
				<BrowserRouter history={history}>
					{
						isShowHeader &&
						<Header />
					}
					<div className={isShowHeader ? "g-body" : "g-body2"}>
						<Switch>
							{
								routes.map(route => (
									<Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
								))
							}
							<Route component={Error} />
						</Switch>
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default App;
