import React, { PureComponent } from "react";
import { Button } from "antd";

class Classify extends PureComponent {

	constructor() {
		super();
		this.state = {
			list: [
				{ name: "全部", value: "all" },
				{ name: "Javascript", value: "javascript" },
				{ name: "Css", value: "css" },
				{ name: "Html", value: "html" },
				{ name: "Node", value: "node" },
				{ name: "移动端", value: "moblie" },
				{ name: "客户端", value: "client" },
				{ name: "其他", value: "other" }
			]
		};
	}

	render() {
		const { list } = this.state;

		return (
			<div className="m-classify">
				{
					list.map((item, index) => {
						return (
							<Button key={index}>
								{item.name}
							</Button>
						);
					})
				}
			</div>
		);
	}
}

export default Classify;
