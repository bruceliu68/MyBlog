import "./index.less";
import React, { PureComponent } from "react";
import { Icon } from "antd";
import MarkdownEditor from "@/components/MarkdownEditor";
import ReactMarkdown from "react-markdown";

class MarkdownTool extends PureComponent {
	constructor() {
		super();
		this.state = {
			code: null
		};
	}

	goBack() {
		window.location.href = `${location.origin}/tool/index`;
	}

	getCode(code) {
		this.setState({
			code
		});
	}

	render() {
		const { code } = this.state;

		return (
			<div className="g-markdown">
				<div className="header">
					<span className="goback" onClick={() => this.goBack()}>
						<Icon type="left" />返回
					</span>
				</div>
				<div className="body">
					<div className="editor">
						<MarkdownEditor
							defaultCode=""
							onChange={(code) => this.getCode(code)}
						/>
					</div>
					<div className="context">
						<ReactMarkdown source={code} />
					</div>
				</div>
			</div>
		);
	}
}

export default MarkdownTool;
