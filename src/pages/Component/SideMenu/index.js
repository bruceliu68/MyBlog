import "./index.less";
import React, { PureComponent } from "react";
import { connect } from "react-redux";

class SideMenu extends PureComponent {

	componentDidMount() {
		const { menuList, name } = this.props;
		const index = menuList.findIndex(item => {
			if (item.url === name) return true;
		});
		if (index || index === 0) {
			dispatch({
				type: "component/changeState",
				payload: {
					sideMenuActive: index
				}
			});
		}
	}

	clickItem(item, index) {
		const { history } = this.props;
		dispatch({
			type: "component/changeState",
			payload: {
				sideMenuActive: index
			}
		});
		history.push(`/component/${item.url}`);
	}

	render() {
		const { menuList, componentState } = this.props;
		const { sideMenuActive } = componentState;

		return (
			<div className="m-side-menu">
				<div className="title">简介</div>
				<ul>
					{
						menuList.map((item, index) => {
							return (
								<li
									key={index}
									className={sideMenuActive === index ? "active" : null}
									onClick={() => this.clickItem(item, index)}
								>
									{item.name}
								</li>
							);
						})
					}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	componentState: state.component
});

export default connect(mapStateToProps)(SideMenu);
