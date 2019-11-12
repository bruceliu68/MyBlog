import "./index.less";
import React, { PureComponent } from "react";
import { Tooltip, Divider, message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import LinkModal from "./Modal/LinkModal";
import PicModal from "./Modal/PicModal";
import CodeModal from "./Modal/CodeModal";
import TableModal from "./Modal/TableModal";

class Toolbar extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			tags: [
				{ name: "复制", value: "", icon: "biconfuzhi", flag: "copy" },
				{ type: "vertical" },
				{ name: "粗体", value: "****", icon: "biconcuti", ch: 2 },
				{ name: "删除线", value: "~~~~", icon: "biconshanchuxian", ch: 2 },
				{ name: "斜体", value: "**", icon: "biconxieti", ch: 1 },
				{ name: "引用", value: "> ", icon: "biconyinyong", ch: 2 },
				{ type: "vertical" },
				{ name: "标题1", value: "# ", icon: "biconh3", ch: 2 },
				{ name: "标题2", value: "## ", icon: "biconh", ch: 3 },
				{ name: "标题3", value: "### ", icon: "biconh1", ch: 4 },
				{ name: "标题4", value: "#### ", icon: "biconh11", ch: 5 },
				{ name: "标题5", value: "##### ", icon: "biconh2", ch: 6 },
				{ name: "标题6", value: "###### ", icon: "biconh1-copy-copy-copy-copy", ch: 7 },
				{ type: "vertical" },
				{ name: "无需列表", value: "- ", icon: "biconwuxuliebiao", ch: 2 },
				{ name: "有序列表", value: "1. ", icon: "biconyouxuliebiao", ch: 3 },
				{ name: "横线", value: "------------", icon: "biconhengxian", ch: 12 },
				{ type: "vertical" },
				{ name: "链接", value: "", icon: "biconlianjie", flag: "link" },
				{ name: "添加图片", value: "", icon: "bicontubiao02", flag: "pic" },
				{ name: "行内代码", value: "``", icon: "bicondaima", ch: 1 },
				{ name: "代码块", value: "", icon: "bicondaima1", flag: "code" },
				{ name: "表格", value: "", icon: "biconbiaoge", flag: "table" }
			],
			linkVisible: false,
			picVisible: false,
			codeVisible: false,
			tableVisible: false
		};
	}

	clickTag(item) {
		if (item.flag === "link") {
			this.setState({ linkVisible: true });
		} else if (item.flag === "pic") {
			this.setState({ picVisible: true });
		} else if (item.flag === "code") {
			this.setState({ codeVisible: true });
		} else if (item.flag === "table") {
			this.setState({ tableVisible: true });
		} else {
			this.props.onClickTag(item);
		}
	}

	cancelModal = () => {
		this.setState({
			linkVisible: false,
			picVisible: false,
			codeVisible: false,
			tableVisible: false
		});
	}

	copy = () => {
		message.success("成功复制到剪切板");
	}

	render() {
		const { tags, linkVisible, picVisible, codeVisible, tableVisible } = this.state;
		const { value } = this.props;

		return (
			<div className="m-markdown-editor-toolbar">
				<ul>
					{
						tags.map((item, index) => {
							let dom;
							if (!item.type) {
								if (item.flag === "copy") {
									dom = (
										<CopyToClipboard
											text={value}
											onCopy={this.copy}
										>
											<Tooltip title={item.name} key={index}>
												<li className="u-tag" onClick={() => this.clickTag(item)}>
													<i className={`biconfont ${item.icon}`}></i>
												</li>
											</Tooltip>
										</CopyToClipboard>
									);
								} else {
									dom = (
										<Tooltip title={item.name} key={index}>
											<li className="u-tag" onClick={() => this.clickTag(item)}>
												<i className={`biconfont ${item.icon}`}></i>
											</li>
										</Tooltip>
									);
								}
							} else {
								dom = (
									<li className="u-line"><Divider type={item.type} key={index} /></li>
								);
							}
							return dom;
						})
					}
				</ul>
				<LinkModal
					visible={linkVisible}
					onCancel={this.cancelModal}
					onOk={(item) => this.clickTag(item)}
				/>
				<PicModal
					visible={picVisible}
					onCancel={this.cancelModal}
					onOk={(item) => this.clickTag(item)}
				/>
				<CodeModal
					visible={codeVisible}
					onCancel={this.cancelModal}
					onOk={(item) => this.clickTag(item)}
				/>
				<TableModal
					visible={tableVisible}
					onCancel={this.cancelModal}
					onOk={(item) => this.clickTag(item)}
				/>
			</div>
		);
	}
}

export default Toolbar;
