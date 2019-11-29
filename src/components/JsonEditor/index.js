import React, { PureComponent } from "react";
import JSONEditor from "jsoneditor";
import "jsoneditor/dist/jsoneditor.min.css";
import "./index.less";

class JsonEditor extends PureComponent {

	constructor(props) {
		super(props);
		this.ref = React.createRef();
	}

	componentDidMount() {
		const { mode = "tree" } = this.props;
		const options = {
			mode,
			enableSort: false,
			enableTransform: false,
			onChangeJSON: this.props.onChangeJSON,
			onChange: this.onChange
		};

		const { current } = this.ref;
		this.jsoneditor = new JSONEditor(current, options);
		this.jsoneditor.set(this.props.json);
	}

	componentWillUnmount() {
		if (this.jsoneditor) {
			this.jsoneditor.destroy();
		}
	}

	componentDidUpdate() {
		this.jsoneditor.update(this.props.json);
	}

	onChange = () => {
		try {
			this.props.onChange(this.jsoneditor.get());
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		return (
			<div className="jsoneditor-react-container" ref={this.ref}></div>
		);
	}
}

export default JsonEditor;
