import React, { PureComponent } from "react";
import * as CodeMirror from "codemirror/lib/codemirror";
import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

class CommonEditor extends PureComponent {
	constructor(props) {
		super(props);
		this.ref = React.createRef();
	}

	componentDidMount() {
		const { current } = this.ref;
		const { defaultCode = "" } = this.props;

		this.CodeMirrorEditor = CodeMirror.fromTextArea(current, {
			mode: "text/javascript",
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
			<div className="m-common-editor">
				<textarea ref={this.ref}></textarea>
			</div>
		);
	}
}

export default CommonEditor;
