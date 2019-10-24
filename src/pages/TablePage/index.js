/*
 * @Author: liubo 
 * @CreatDate: 2018-09-30 17:13:02 
 * @Describe: 表格分页-页面
 */

import React, {PureComponent} from "react";
import {connect} from "dva";
import TablePageComponent from "../../components/TablePage";

class TablePage extends PureComponent {
    state = {
        paginationInfo: {
            currentPage: 1,
            pageSize: 10,
            total: 100,
        },
        columns: [
            { title: "姓名", dataIndex: "name", key: "name" },
            { title: "年龄", dataIndex: "age", key: "age" },
            { title: "住址", dataIndex: "address", key: "address" }
        ]
    };

    // constructor(props) {
    //     super(props);
    // }
    
    componentDidMount () {
    }

    // 分页
    paginationChange(currentPage, pageSize) {
        console.log(currentPage, pageSize);
        this.setState({
            paginationInfo: {
                currentPage,
                pageSize,
                total: 100,
            }
        })
    }

    render() {
        const { paginationInfo, columns } = this.state;

        return ( 
           <div>
             <TablePageComponent 
                columns={columns}
                bordered={true}
                paginationInfo={paginationInfo}
                onPaginationChange={this.paginationChange.bind(this)}
                onShowSizeChange={this.paginationChange.bind(this)} />
           </div>
        );
    }
}

export default connect()(TablePage);
