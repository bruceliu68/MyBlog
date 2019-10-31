/*
 * @Author: liubo
 * @CreatDate: 2018-09-30 17:13:02
 * @Describe: 组件页面
 */

import "./index.less";
import React, { PureComponent } from "react";
import SideMenu from "./SideMenu";
import Introduce from "./Introduce";
import FormulaEditor from "./FormulaEditor";
import GroovyEditor from "./GroovyEditor";

const menuList = [
	{ name: "计算公式编辑器", url: "formulaEditor", component: FormulaEditor },
	{ name: "Groovy编辑器", url: "groovyEditor", component: GroovyEditor }
];

class Component extends PureComponent {

	render() {
		const { history, match } = this.props;
		const { name } = match.params;

		return (
			<>
				<SideMenu history={history} menuList={menuList} name={name} />
				{
					name === "index" &&
					<Introduce />
				}
				{
					menuList.map((item, index) => {
						let dom;
						if (item.url === name) {
							dom = <item.component />;
						}
						return dom;
					})
				}
			</>
		);
	}
}

export default Component;
