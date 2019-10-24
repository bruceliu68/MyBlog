/*
 * @Author: liubo 
 * @CreatDate: 2018-09-30 17:13:02 
 * @Describe: 菜单组件
 */

import React, {PureComponent} from "react";
import {connect} from "dva";

import "./index.less";

class BasicSideMenu extends PureComponent {
    state = {};

    // constructor(props) {
    //     super(props);
    // }
    
    componentDidMount () {
    }
    
    clickMenu(path) {
        const { menuList, history } = this.props;
        const rootPath = menuList[1].path;
        const connectPath = `/${rootPath}/${path}`;
        history.push(connectPath);
    }

    render() {
        const { menuList, location } = this.props;
        let routers = Object.assign([], menuList[1].children);
        routers.splice(0, 1);
        const pathname = location.pathname;

        return (
           <div className="g-side-menu">
                <div className="title">简介</div>
                <ul>
                    {
                        routers && routers.length > 0 && routers.map((item, index) => {
                            let upperName = item.path.slice(0,1).toUpperCase() + item.path.slice(1);
                            return <li 
                                        key={index + 1} 
                                        path={item.path}
                                        className={pathname.includes(item.path) ? "active" : "" }
                                        onClick={this.clickMenu.bind(this, item.path)}>
                                        {`${upperName} ${item.name}`}
                                </li>;
                        })
                    }
                </ul>
           </div>
        );
    }
}

export default connect()(BasicSideMenu);
