import "./index.less";
import React, { PureComponent } from "react";
import { Icon } from "antd";
import MarkdownEditor from "@/components/MarkdownEditor";
import MarkdownRender from "@/components/MarkdownRender";

class MarkdownTool extends PureComponent {
	constructor() {
		super();
		this.ref = React.createRef();
		this.state = {
			code: null,
			editorWidth: document.body.clientWidth / 2,
			contextWidth: document.body.clientWidth / 2,
			mouseDownFlag: false
		};
	}

	componentDidMount() {
		const { current } = this.ref;
		const bodyDom = document.querySelector("body");
		const windowWidth = document.body.clientWidth;
		current.addEventListener("mousedown", () => {
			this.setState({
				mouseDownFlag: true
			});
		});
		bodyDom.addEventListener("mousemove", (event) => {
			const mousePos = this.getMousePos(event);
			const { mouseDownFlag } = this.state;
			if (mouseDownFlag) {
				if (mousePos.x <= 100) {
					this.setState({
						editorWidth: "100px",
						contextWidth: windowWidth - 100 + "px"
					});
				} else if ((windowWidth - mousePos.x) <= 100) {
					this.setState({
						editorWidth: windowWidth - 100 + "px",
						contextWidth: "100px"
					});
				} else {
					this.setState({
						editorWidth: mousePos.x + "px",
						contextWidth: windowWidth - mousePos.x + "px"
					});
				}
			}
		});
		bodyDom.addEventListener("mouseup", () => {
			this.setState({
				mouseDownFlag: false
			});
			console.log(1);
		});
	}

	componentWillUnmount() {
		const { current } = this.ref;
		const bodyDom = document.querySelector("body");
		current.removeEventListener("mousedown");
		bodyDom.removeEventListener("mousemove");
		bodyDom.removeEventListener("mouseup");
	}

	goBack() {
		window.location.href = `${location.origin}/tool/index`;
	}

	getCode(code) {
		this.setState({
			code
		});
	}

	// 获取鼠标位置
	getMousePos = (event) => {
		const e = event || window.event;
		return { x: e.clientX, y: e.clientY };
	}

	render() {
		const { code, editorWidth, contextWidth } = this.state;

		return (
			<div className="g-markdown">
				<div className="header">
					<span className="goback" onClick={() => this.goBack()}>
						<Icon type="left" />返回
					</span>
				</div>
				<div className="body">
					<div className="editor" style={{ width: editorWidth }}>
						<MarkdownEditor
							defaultCode=""
							onChange={(code) => this.getCode(code)}
						/>
					</div>
					<div
						className="drag-line"
						ref={this.ref}
						style={{ left: editorWidth }}
					>
					</div>
					<div className="context" style={{ width: contextWidth }}>
						<MarkdownRender
							source={code}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default MarkdownTool;
