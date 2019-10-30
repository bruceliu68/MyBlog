import "./index.less";
import React from "react";
import { init } from "@rematch/core";
import * as models from "./models";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { routes } from "./router";
import Error from "@/pages/Error";
import Header from "@/components/Header";

const store = init({
	models
});

const { dispatch } = store;

window.dispatch = dispatch;

class App extends React.Component {

	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Header />
					<div className="g-body">
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
