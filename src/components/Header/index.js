/*
 * @Author: liubo
 * @CreatDate: 2018-09-30 17:13:02
 * @Describe: 头部组件
 */

import "./index.less";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends PureComponent {

	constructor() {
		super();
		this.state = {
			list: [
				{ name: "首页", url: "/" },
				{ name: "组件", url: "/component" },
				{ name: "工具", url: "/tool" }
			]
		};
	}

	componentDidMount() {
		const { list } = this.state;
		let active = null;
		const path = window.location.pathname;
		if (path === "/") {
			active = 0;
		} else {
			const obj = list.findIndex(item => {
				if (item.url !== "/" && path.includes(item.url) === true) {
					return true;
				}
			});
			if (obj) active = obj;
		}
		dispatch({
			type: "global/changeState",
			payload: {
				headerActive: active
			}
		});
	}

	handleClick(active) {
		dispatch({
			type: "global/changeState",
			payload: {
				headerActive: active
			}
		});
	}

	render() {
		const { list } = this.state;
		const { headerActive } = this.props.globalState;

		return (
			<div className="g-header">
				<label className="logo"><span>TDS</span><b>PRO</b></label>
				<ul className="clearfix">
					{
						list.map((item, index) => {
							return (
								<li
									key={index}
									className={headerActive === index ? "active" : null}
									onClick={() => this.handleClick(index)}
								>
									<Link to={item.url}>
										{item.name}
									</Link>
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	globalState: state.global
});

export default connect(mapStateToProps)(Header);