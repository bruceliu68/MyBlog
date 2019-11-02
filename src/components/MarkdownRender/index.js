import React, { PureComponent } from "react";
import Marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import "./index.less";

class MarkdownRender extends PureComponent {
	constructor() {
		super();
		Marked.setOptions({
			renderer: new Marked.Renderer(),
			highlight: function(code) {
				return hljs.highlightAuto(code).value;
			},
			baseUrl: null,
			breaks: false,
			gfm: true, // gfm风格
			tables: true,
			headerIds: true,
			headerPrefix: "",
			langPrefix: "language-",
			mangle: true,
			pedantic: false,
			sanitize: false,
			sanitizer: null,
			silent: false,
			smartLists: false,
			smartypants: false,
			xhtml: false
		});
	}

	render() {
		const { source = "" } = this.props;

		return (
			<div
				className="m-markdown-render markdown-body"
				dangerouslySetInnerHTML={{ __html: Marked(source ? source : "") }}
			>
			</div>
		);
	}
}

export default MarkdownRender;
