/*
 * @Author: liubo 
 * @CreatDate: 2018-09-30 17:13:02 
 * @Describe: 简介
 */

import React, { PureComponent } from "react";
import { connect } from "dva";

class Component extends PureComponent {
  state = {};

  // constructor(props) {
  //     super(props);
  // }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        欢迎光临！
      </div>
    );
  }
}

export default connect()(Component);
