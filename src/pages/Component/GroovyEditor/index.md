# groovy-edit-react

> groovy语法编辑器

- 支持groovy和Java语法智能提示，并支持自定义语法提示
- 支持主题切换
- 支持代码折叠、行数显示、只读模式
- 支持代码高亮

## Usage

### groovy-edit-react

安装

```sh
npm install --save-dev groovy-edit-react
```
使用

```
<GroovyEditor
    defaultCode={defaultCode}
    readOnly={true}
    height={300}
    theme="night"
    activeLine={true}
    fold={true}
    keywords=["const", "var"]
    onChange={(code) => this.getCode(code)}
/>
```

## keywords 自定义关键词
```
keywords: ["const", "var"]
```

## 编辑器效果
![主题](https://github.com/bruceliu68/GroovyEditor/raw/master/src/img/pic.png "主题")

## props参数：
|    参数    | 类型    |  默认值   |  是否必填  | 说明         |
| :------:  | :-----: | :----:   | :------: | :----------: |
| defaultCode | string |  ""     |   非必填    | 初始化赋值     |
| code | string |  ""     |   非必填    |      |
| readOnly  | boolean |  false   |   非必填  | 设置只读       |
| height | number   |  300     |   非必填  | 编辑器高度       |
| theme  | string   |  "day"     |   非必填  | 主题："day"和"night" |
| activeLine   | boolean   |  true     |   非必填  | 当前行选中标识  |
| fold   | boolean   |  true     |   非必填  | 代码折叠  |
| keywords   | array   |  []     |   非必填  | 自定义提示关键词  |
| onChange  | function|  无      |   非必填  | 返回code       |

## License
MIT