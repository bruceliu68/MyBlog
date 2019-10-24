/*
 * @Author: liubo 
 * @CreatDate: 2018-09-20 16:15:15 
 * @Describe: 表格 + 分页组件
 */

import React, { PureComponent } from "react";
import { Table, Pagination } from "antd";

import "./index.less";

export default class TablePage extends PureComponent {

    state = {
    };
    
    componentDidMount () {
    }

    paginationOnChange(page, pageSize) {
        this.props.onPaginationChange(page, pageSize);
    }

    onShowSizeChange(current, size) {
        this.props.onShowSizeChange(current, size);
    }

    render() {
        const { columns, data, paginationInfo, loading, bordered } = this.props;
        const { currentPage, pageSize, total } = paginationInfo;

        return (
            <div className="m-table-page">
                <Table
                    // rowKey={record => record.id}
                    className="u-table"
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    loading={loading}
                    bordered={bordered ? true : false}
                />
                <div className="u-pagination">
                    <span className="u-s1">共 {total} 条记录</span>
                    <Pagination
                        showSizeChanger
                        showQuickJumper
                        onChange={this.paginationOnChange.bind(this)}
                        onShowSizeChange={this.onShowSizeChange.bind(this)}
                        current={currentPage}
                        total={total}
                        pageSize={pageSize}
                    />
                </div>
            </div>
        );
    }
}
