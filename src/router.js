import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import cloneDeep from "lodash/cloneDeep";
import { LocaleProvider } from "antd";
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { getNavData } from "./common/nav";

function getLayout(navData, path) {
	if (!navData.some(item => item.layout === path) ||
		!(navData.filter(item => item.layout === path)[0].children)) {
		return null;
	}
	let route = navData.filter(item => item.layout === path)[0];
	return {
		component: route.component,
		layout: route.layout,
		name: route.name,
		path: route.path,
	};
}

function getPlainNode(nodeList, parentPath = "") {
	const arr = [];
	nodeList.forEach((node) => {
		const item = node;
		item.path = `${parentPath}/${item.path || ""}`.replace(/\/+/g, "/");
		item.exact = true;
		if (item.children && !item.component) {
			arr.push(...getPlainNode(item.children, item.path));
		} else {
			if (item.children && item.component) {
				item.exact = false;
			}
			arr.push(item);
		}
	});
	return arr;
}

function getRouteData(navData, path) {
	if (!navData.some(item => item.layout === path) ||
		!(navData.filter(item => item.layout === path)[0].children)) {
		return null;
	}
	let route = cloneDeep(navData.filter(item => {
		return item.layout === path;
	})[0]);
	let nodeList = getPlainNode(route.children);
	return nodeList;
}

// 登录验证
function requireAuth(Layout, props, passProps) {
    return <Layout {...props} {...passProps} />;
}

function RouterConfig({ history, app }) {
  let navData = getNavData(app);
  let BasicLayout = getLayout(navData, "BasicLayout").component;
  let passProps = {
		app,
		navData: navData.filter((item) => {
			return item.layout !== "UserLayout";
		}), // 剔除掉无需登录模块
		getRouteData: (path) => {
			return getRouteData(navData, path);
		},
	};

  return (
	<LocaleProvider locale={zhCN}>
		<Router history={history}>
			<Switch>
				<Route path="/" render={props => requireAuth(BasicLayout, props, passProps)}/>
			</Switch>
		</Router>
	</LocaleProvider>
  );
}

export default RouterConfig;
