/*
 * @Author: liubo
 * @CreatDate: 2018-09-30 17:13:02
 * @Describe: 工具页面
 */

import "./index.less";
import React, { PureComponent } from "react";

class Tool extends PureComponent {

	render() {

		return (
			<div className="g-tool">
				<ul className="clearfix">
					<li>
						<img className="pic" src={require("./img/mypic.jpeg")} alt="" />
						<p>在线MarkDown编辑</p>
					</li>
				</ul>
			</div>
		);
	}
}

export default Tool;
