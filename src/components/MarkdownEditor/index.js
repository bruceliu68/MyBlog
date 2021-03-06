import React, { PureComponent } from "react";
import * as CodeMirror from "codemirror/lib/codemirror";
import "codemirror/mode/markdown/markdown";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "./index.less";
import Toolbar from "./Toolbar";

class MarkdownEditor extends PureComponent {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
		this.state = {
			value: null
		};
	}

	componentDidMount() {
		const { current } = this.ref;
		const { defaultCode = "" } = this.props;

		this.CodeMirrorEditor = CodeMirror.fromTextArea(current, {
			mode: "text/markdown",
			theme: "material",
			lineNumbers: true
		});
		this.CodeMirrorEditor.setValue(defaultCode);
		this.CodeMirrorEditor.on("changes", (cm) => {
			if (this.props.onChange) {
				this.props.onChange(cm.getValue());
				this.setState({ value: cm.getValue() });
			}
		});
	}

	componentDidUpdate(prevProps) {
		const defaultCode = prevProps.defaultCode;
		const nextDefaultCode = this.props.defaultCode;
		if (defaultCode !== nextDefaultCode) {
			this.CodeMirrorEditor.setValue(nextDefaultCode);
			this.setState({ value: nextDefaultCode });
		}
	}

	clickTag = (item) => {
		if (item.ch) {
			const getCursor = this.CodeMirrorEditor.getCursor();
			this.CodeMirrorEditor.replaceSelection(item.value);
			this.CodeMirrorEditor.setCursor(getCursor.line, getCursor.ch + item.ch);
			this.CodeMirrorEditor.focus();
		}
	}

	render() {
		const { value } = this.state;

		return (
			<div className="m-markdown-editor">
				<textarea ref={this.ref}></textarea>
				<Toolbar
					value={value}
					onClickTag={this.clickTag}
				/>
			</div>
		);
	}
}

export default MarkdownEditor;
