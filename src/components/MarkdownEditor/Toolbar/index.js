import "./index.less";
import React, { PureComponent } from "react";
import { Tooltip, Divider } from "antd";

class Toolbar extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			tags: [
				{ name: "粗体", value: "****", icon: "biconcuti" },
				{ name: "删除线", value: "~~~~", icon: "biconshanchuxian" },
				{ name: "斜体", value: "**", icon: "biconxieti" },
				{ type: "vertical" }
			]
		};
	}

	componentDidMount() {
	}

	render() {
		const { tags } = this.state;

		return (
			<div className="m-markdown-editor-toolbar">
				<ul>
					{
						tags.map((item, index) => {
							let dom;
							if (!item.type) {
								dom = (
									<Tooltip title={item.name} key={index}>
										<li className="u-tag">
											<i className={`biconfont ${item.icon}`}></i>
										</li>
									</Tooltip>
								);
							} else {
								dom = (
									<li className="u-line"><Divider type={item.type} key={index} /></li>
								);
							}
							return dom;
						})
					}
				</ul>
			</div>
		);
	}
}

export default Toolbar;
