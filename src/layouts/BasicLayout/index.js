/*
 * @Author: liubo 
 * @CreatDate: 2018-09-30 17:13:02 
 * @Describe: 布局组件
 */

import React, {PureComponent} from "react";
import {connect} from "dva";
import { Layout, Menu } from "antd";
import { Route, Redirect, Switch} from "dva/router";
import BasicSideMenu from "../Common/BasicSideMenu";
import "./index.less";

const { Header, Sider, Content } = Layout;

class BasicLayout extends PureComponent {
    state = {};

    constructor(props) {
        super(props);
        this.menus = props.navData.reduce((arr, current) => arr.concat(current.children.filter(item => item.name !== "other")), []);
    }
    
    componentDidMount () {
    }

    clickMenu({ item, key, keyPath }) {
        const { history } = this.props;
        const path = item.props.path;
        history.push(path);
    }

    render() {
        const { globalStore, getRouteData, history, location } = this.props;
        const { hideSider } = globalStore;
        const pathname = location.pathname;

        return (
           <div className="g-layout">
                <Layout>
                    <Header>
                        <label className="logo"><span>TDS</span><b>PRO</b></label>
                        <Menu
                            mode="horizontal"
                            onClick={this.clickMenu.bind(this)}
                        >
                            <Menu.Item 
                                className={pathname.includes("/home") ? "ant-menu-item-selected" : "" } 
                                path={"/home"}>首页</Menu.Item>
                            <Menu.Item className={pathname.includes("/component") ? "ant-menu-item-selected" : "" } 
                             path={"/component/index"}>组件</Menu.Item>
                        </Menu>
                    </Header>
                    <Layout style={{height: "calc(100vh - 64px)"}}>
                        {
                            !hideSider &&
                            <Sider width={256}>
                                <BasicSideMenu
                                    menuList={this.menus}
                                    history={history}
                                    location={location}
                                />
                            </Sider>   
                        }
                        <Content>
                            <Switch>
                                {
                                    getRouteData("BasicLayout").map(item =>
                                        (
                                            <Route
                                                exact={item.exact}
                                                key={item.path}
                                                path={item.path}
                                                component={item.component}
                                            />
                                        )
                                    )
                                }
                                <Redirect exact from="/" to="/home"/>
                                <Redirect exact to="/home"/>
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
           </div>
        );
    }
}

export default connect(state => ({
	globalStore: state.global,
}))(BasicLayout);
