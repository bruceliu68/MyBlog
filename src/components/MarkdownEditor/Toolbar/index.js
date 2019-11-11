import "./index.less";
import React, { PureComponent } from "react";
import { Tooltip, Divider } from "antd";

class Toolbar extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			tags: [
				{ name: "复制", value: "", icon: "biconfuzhi", flag: "copy" },
				{ type: "vertical" },
				{ name: "粗体", value: "****", icon: "biconcuti" },
				{ name: "删除线", value: "~~~~", icon: "biconshanchuxian" },
				{ name: "斜体", value: "**", icon: "biconxieti" },
				{ name: "引用", value: "> ", icon: "biconyinyong" },
				{ type: "vertical" },
				{ name: "标题1", value: "# ", icon: "biconh3" },
				{ name: "标题2", value: "## ", icon: "biconh" },
				{ name: "标题3", value: "### ", icon: "biconh1" },
				{ name: "标题4", value: "#### ", icon: "biconh11" },
				{ name: "标题5", value: "##### ", icon: "biconh2" },
				{ name: "标题6", value: "###### ", icon: "biconh1-copy-copy-copy-copy" },
				{ type: "vertical" },
				{ name: "无需列表", value: "- ", icon: "biconwuxuliebiao" },
				{ name: "有序列表", value: "1. ", icon: "biconyouxuliebiao" },
				{ name: "横线", value: "------------", icon: "biconhengxian" },
				{ type: "vertical" },
				{ name: "链接", value: "", icon: "biconlianjie", flag: "link" },
				{ name: "添加图片", value: "", icon: "bicontubiao02", flag: "pic" },
				{ name: "行内代码", value: "``", icon: "bicondaima" },
				{ name: "代码块", value: "", icon: "bicondaima1", flag: "code" },
				{ name: "表格", value: "", icon: "biconbiaoge", flag: "table" }
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
