/*
 * @Author: liubo
 * @CreatDate: 2018-09-30 17:13:02
 * @Describe: 测试首页
 */

import "./index.less";
import React, { PureComponent } from "react";
import BgCanvas from "@/components/BgCanvas";

class Home extends PureComponent {

	render() {
		return (
			<div className="g-home">
				<div className="wrap">
					<img className="pic" src={require("./img/mypic.jpeg")} alt="" />
					<label className="title">TDS-PRO</label>
					<div className="txt">欢迎参观我的网站</div>
				</div>
				<div className="copyright">Copyright @2019 Bruceliu出品</div>
				<BgCanvas />
			</div>
		);
	}
}

export default Home;
