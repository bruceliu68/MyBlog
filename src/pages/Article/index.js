import "./index.less";
import React, { PureComponent } from "react";
import { Tabs, Empty } from "antd";
import MapJson from "./TableData";

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
				{ name: "移动端", value: "mobile" },
				{ name: "客户端", value: "client" },
				{ name: "其他", value: "other" }
			],
			activeKey: "0"
		};
	}

    changeTabs = (key) => {
    	this.setState({ activeKey: key });
    }

    handleClick(id) {
    	console.log(id);
    }

    render() {
    	const { list, activeKey } = this.state;

    	return (
    		<div className="g-article">
    			<Tabs
    				size="small"
    				animated={false}
    				activeKey={activeKey}
    				onChange={this.changeTabs}
    			>
    				{
    					list.map((item, index) => {
    						const dataSource = MapJson[item.value];
    						return (
    							<TabPane tab={item.name} key={index}>
    								<ul>
    									{
    										dataSource &&
                                            dataSource.length > 0 &&
                                            dataSource.map((item, index) => {
                                            	return (
                                            		<li key={index} onClick={() => this.handleClick(item.id)}>
                                            			{item.title}
                                            		</li>
                                            	);
                                            })
    									}
    								</ul>
    								{
    									!dataSource ||
                                        dataSource.length === 0 &&
                                        <Empty />
    								}
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
