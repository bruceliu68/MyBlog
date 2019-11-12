import React, { PureComponent } from "react";
import { Modal, Row, Col, Select, message } from "antd";
import CommonEditor from "@/components/CommonEditor";

const { Option } = Select;

class CodeModal extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			code: "",
			codeLang: null,
			langList: [
				{ name: "ASP", value: "asp" },
				{ name: "Actionscript/Flash/Flex", value: "actionscript" },
				{ name: "Bash/Bat", value: "bash" },
				{ name: "CSS", value: "css" },
				{ name: "C", value: "c" },
				{ name: "C++", value: "cpp" },
				{ name: "C#", value: "csharp" },
				{ name: "Coffeescript", value: "coffeescript" },
				{ name: "D", value: "d" },
				{ name: "Dart", value: "dart" },
				{ name: "Groovy", value: "groovy" },
				{ name: "Html", value: "html" },
				{ name: "Java", value: "java" },
				{ name: "Json", value: "json" },
				{ name: "Javascript", value: "javascript" },
				{ name: "Lua", value: "lua" },
				{ name: "Less", value: "less" },
				{ name: "Markdown", value: "markdown" },
				{ name: "Objective-c", value: "objective-c" },
				{ name: "Php", value: "php" },
				{ name: "Python", value: "python" },
				{ name: "Ruby", value: "ruby" },
				{ name: "SQL", value: "sql" },
				{ name: "Sass/Scss", value: "sass" },
				{ name: "Shell", value: "shell" },
				{ name: "Swift", value: "swift" },
				{ name: "VB", value: "vb" },
				{ name: "XML", value: "xml" },
				{ name: "Yaml", value: "yaml" },
				{ name: "其他", value: "" }
			]
		};
	}

	handleCancel = () => {
		this.props.onCancel();
		this.setState({
			code: "",
			codeLang: null
		});
	}

	handleOk = () => {
		const { code, codeLang } = this.state;
		if (!codeLang) return message.warning("代码语言不能为空");
		let a = "```";
		let value = `${a}${codeLang}\n${code}\n${a}`;
		this.props.onOk({
			value,
			ch: value.length
		});
		this.handleCancel();
	}

	changeField(e, field) {
		let obj = {};
		obj[field] = e;
		this.setState({ ...obj });
	}

	getCode(code) {
		this.setState({
			code
		});
	}

	render() {
		const { codeLang, langList } = this.state;
		const { visible } = this.props;

		return (
			<Modal
				title="添加代码块"
				width={700}
				visible={visible}
				onOk={this.handleOk}
				onCancel={this.handleCancel}
			>
				<Row type="flex" justify="space-around" align="middle" gutter={[0, { md: 24 }]}>
					<Col span={3}>代码语言</Col>
					<Col span={20}>
						<Select
							showSearch
							optionFilterProp="children"
							dropdownMatchSelectWidth={false}
							value={codeLang ? codeLang : undefined}
							placeholder="请选择语言"
							style={{ width: 200 }}
							onChange={(e) => this.changeField(e, "codeLang")}
						>
							{
								langList.map((item, index) => {
									return (
										<Option value={item.value} key={index}>
											{item.name}
										</Option>
									);
								})
							}
						</Select>
					</Col>
				</Row>
				<Row type="flex" justify="space-around" align="middle" gutter={[0, { md: 24 }]}>
					<Col span={24}>
						<CommonEditor
							defaultCode=""
							onChange={(code) => this.getCode(code)}
						/>
					</Col>
				</Row>
			</Modal>
		);
	}
}

export default CodeModal;
