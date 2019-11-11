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
			}
		});
	}

	componentDidUpdate(prevProps) {
		const defaultCode = prevProps.defaultCode;
		const nextDefaultCode = this.props.defaultCode;
		if (defaultCode !== nextDefaultCode) {
			this.CodeMirrorEditor.setValue(nextDefaultCode);
		}
	}

	render() {
		return (
			<div className="m-markdown-editor">
				<textarea ref={this.ref}></textarea>
				<Toolbar />
			</div>
		);
	}
}

export default MarkdownEditor;
