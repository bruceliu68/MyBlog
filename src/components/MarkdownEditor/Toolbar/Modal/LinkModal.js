import React, { PureComponent } from "react";
import { Modal, Row, Col, Input, message } from "antd";

class LinkModal extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			address: "http://",
			title: null
		};
	}

	handleCancel = () => {
		this.props.onCancel();
		this.setState({
			address: "http://",
			title: null
		});
	}

	handleOk = () => {
		const { address, title } = this.state;
		if (!title) return message.warning("标题不能为空");
		if (!address) return message.warning("地址不能为空");
		const value = `[${title}](${address} "${title}")`;
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

	render() {
		const { address, title } = this.state;
		const { visible } = this.props;

		return (
			<Modal
				title="添加链接"
				visible={visible}
				onOk={this.handleOk}
				onCancel={this.handleCancel}
				destroyOnClose
			>
				<Row type="flex" justify="space-around" align="middle" gutter={[0, { md: 24 }]}>
					<Col span={4}>链接标题</Col>
					<Col span={20}>
						<Input
							value={title}
							onChange={(e) => this.changeField(e.target.value, "title")}
						/>
					</Col>
				</Row>
				<Row type="flex" justify="space-around" align="middle" gutter={[0, { md: 24 }]}>
					<Col span={4}>链接地址</Col>
					<Col span={20}>
						<Input
							value={address}
							onChange={(e) => this.changeField(e.target.value, "address")}
						/>
					</Col>
				</Row>
			</Modal>
		);
	}
}

export default LinkModal;
