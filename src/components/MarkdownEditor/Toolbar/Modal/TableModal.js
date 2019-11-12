import React, { PureComponent } from "react";
import { Modal, Row, Col, InputNumber, message, Radio } from "antd";

class TableModal extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			row: 3,
			col: 2,
			align: 1
		};
	}

	handleCancel = () => {
		this.props.onCancel();
		this.setState({
			row: 3,
			col: 2,
			align: 1
		});
	}

	handleOk = () => {
		const { row, col, align } = this.state;

		let oneCol = "|";
		let alignCol = "|";
		for (let i = 0; i < col - 1; i++) {
			oneCol = `${oneCol} |`;
			if (align === 1) {
				alignCol = `${alignCol} ------------ |`;
			} else if (align === 2) {
				alignCol = `${alignCol} :------------ |`;
			} else if (align === 3) {
				alignCol = `${alignCol} :------------: |`;
			} else if (align === 4) {
				alignCol = `${alignCol} ------------: |`;
			}
		}
		let value = `${oneCol}\n${alignCol}`;
		for (let i = 0; i < row - 2; i++) {
			value = `${value}\n${oneCol}`;
		}
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
		const { row, col, align } = this.state;
		const { visible } = this.props;

		return (
			<Modal
				title="添加表格"
				visible={visible}
				onOk={this.handleOk}
				onCancel={this.handleCancel}
				destroyOnClose
			>
				<Row type="flex" justify="space-around" align="middle" gutter={[0, { md: 24 }]}>
					<Col span={4}>单元格数</Col>
					<Col span={20}>
						行数
						<InputNumber
							style={{ margin: "0 20px 0 10px" }}
							min={3}
							value={row}
							onChange={(e) => this.changeField(e, "row")}
						/>
						列数
						<InputNumber
							style={{ margin: "0 20px 0 10px" }}
							min={1}
							value={col}
							onChange={(e) => this.changeField(e, "col")}
						/>
					</Col>
				</Row>
				<Row type="flex" justify="space-around" align="middle" gutter={[0, { md: 24 }]}>
					<Col span={4}>对齐方式</Col>
					<Col span={20}>
						<Radio.Group
							value={align}
							onChange={(e) => this.changeField(e.target.value, "align")}
						>
							<Radio value={1}>默认</Radio>
							<Radio value={2}>左对齐</Radio>
							<Radio value={3}>居中</Radio>
							<Radio value={4}>右对齐</Radio>
						</Radio.Group>
					</Col>
				</Row>
			</Modal>
		);
	}
}

export default TableModal;
