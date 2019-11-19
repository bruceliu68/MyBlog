import "./index.less";
import React, { PureComponent } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

class Article extends PureComponent {

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
			],
			activeKey: "0"
		};
	}

    changeTabs = (key) => {
    	this.setState({ activeKey: key });
    }

    render() {
    	const { list, activeKey } = this.state;

    	return (
    		<div className="g-article">
    			<Tabs
    				size="small"
    				activeKey={activeKey}
    				onChange={this.changeTabs}
    			>
    				{
    					list.map((item, index) => {
    						return (
    							<TabPane tab={item.name} key={index}>
    								{item.name}
    							</TabPane>
    						);
    					})
    				}
    			</Tabs>
    		</div>
    	);
    }
}

export default Article;
