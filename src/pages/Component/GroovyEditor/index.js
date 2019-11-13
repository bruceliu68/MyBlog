import React, { PureComponent } from "react";
import MarkdownRender from "@/components/MarkdownRender";
import IndexMd from "./index.md";

class GroovyEditor extends PureComponent {

	render() {
		return (
			<div className="m-main">
				<MarkdownRender
					source={IndexMd}
				/>
			</div>
		);
	}
}

export default GroovyEditor;
