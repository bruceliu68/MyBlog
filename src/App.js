import "./index.less";
import React from "react";
import { init } from "@rematch/core";
import * as models from "./models";
import { Route, Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { routes } from "./router";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
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
				"/tool/markdown",
				"/tool/jsonEditor"
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
			<ConfigProvider locale={zhCN}>
				<Provider store={store}>
					<Router history={history}>
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
					</Router>
				</Provider>
			</ConfigProvider>
		);
	}
}

export default App;
