/*
 * @Author: liubo
 * @CreatDate: 2018-09-30 17:13:02
 * @Describe: 工具页面
 */

import "./index.less";
import React, { PureComponent } from "react";

class Tool extends PureComponent {

	constructor() {
		super();
		this.state = {
			list: [
				{ name: "在线MarkDown编辑", imgUrl: require("./img/markdown.png"), url: "/tool/markdown" }
			]
		};
	}

	clickItem(item) {
		const origin = window.location.origin;
		window.open(`${origin}${item.url}`);
	}

	render() {
		const { list } = this.state;

		return (
			<div className="g-tool">
				<ul className="clearfix">
					{
						list.map((item, index) => {
							return (
								<li key={index} onClick={() => this.clickItem(item)}>
									<img className="pic" src={item.imgUrl} alt="" />
									<p>{item.name}</p>
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}

export default Tool;
