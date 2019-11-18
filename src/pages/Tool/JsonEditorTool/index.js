import "./index.less";
import React, { PureComponent } from "react";
import { Icon } from "antd";
import JsonEditor from "@/components/JsonEditor";

class JsonEditorTool extends PureComponent {

	constructor() {
		super();
		this.state = {
			initJson: {
				"Array": [1, 2, 3],
				"Boolean": true,
				"Null": null,
				"Number": 123,
				"Object": { "a": "b", "c": "d" },
				"String": "Hello World"
			},
			codeJson: null,
			treeJson: null,
			catchJson: null
		};
	}

	componentDidMount() {
		const { initJson } = this.state;
		this.setState({
			codeJson: initJson,
			treeJson: initJson,
			catchJson: initJson
		});
	}

	changeTreeJson = (json) => {
		this.setState({
			treeJson: json,
			catchJson: json
		});
	}

	changeCodeJson = (json) => {
		this.setState({ catchJson: json });
	}

	transfer = () => {
		const { catchJson } = this.state;
		this.setState({
			codeJson: catchJson,
			treeJson: catchJson
		});
	}

	downloadJson = () => {
		const { treeJson } = this.state;
		const datastr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(treeJson));
		const downloadAnchorNode = document.createElement("a");
		downloadAnchorNode.setAttribute("href", datastr);
		downloadAnchorNode.setAttribute("download", "tem.json");
		downloadAnchorNode.click();
		downloadAnchorNode.remove();
	}

	goBack() {
		window.location.href = `${location.origin}/tool/index`;
	}

	render() {
		const { treeJson, codeJson } = this.state;

		return (
			<div className="g-json-editor">
				<div className="header">
					<span className="goback" onClick={() => this.goBack()}>
						<Icon type="left" />返回
					</span>
					<span className="title">在线Json编辑器</span>
				</div>
				<div className="body">
					<Icon type="download" title="json下载" onClick={this.downloadJson} />
					<div className="editor">
						<JsonEditor
							json={codeJson}
							mode="code"
							onChange={this.changeCodeJson}
						/>
					</div>
					<Icon type="caret-right" onClick={this.transfer} />
					<Icon type="caret-left" onClick={this.transfer} />
					<div className="context">
						<JsonEditor
							json={treeJson}
							mode="tree"
							onChangeJSON={this.changeTreeJson}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default JsonEditorTool;
