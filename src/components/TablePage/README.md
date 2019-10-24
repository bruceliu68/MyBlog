## 表格+分页组件 - 采用antd第三方库

## props参数：
| 参数         | 说明    |  类型   | 默认值 |
| :--------:  | :-----: | :----:   | :----: |
| bordered    | 是否展示外边框和列边框  |   boolean    |   false     |
| columns     | 表格列的配置描述，配置同antd  |   ColumnProps[]     |  -    |
| data   | 数据数组  |  any[]    |     |
| paginationInfo   | 分页数据  |  Obj{currentPage,pageSize,total}    |     |
| loading   | 页面是否加载中  |  boolean    |  false   |
| onPaginationChange   | 页码改变的回调，参数是改变后的页码及每页条数  |  Function(page, pageSize)    |  noop   |
| onShowSizeChange   | pageSize 变化的回调  |  Function(current, size)    |  noop   |

