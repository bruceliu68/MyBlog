# formula-edit-react

> 计算公式编辑器

- 支持@变量和#方法，并支持智能提示
- 支持主题切换
- 支持行数显示、只读模式
- 支持代码高亮
- 支持代码错误提示

## Usage

### formula-edit-react

安装

```sh
npm install --save-dev formula-edit-react
```
使用

```
<FormulaEdit
    theme="day" // 主题
    height={200} // 高度
    defaultValue={defaultCode} // 初始化值
    fieldList={fieldList} // @唤起
    methodList={methodList} // #唤起
    normalList={normalList} // 自定义无需校验关键词
    readOnly={false} // 是否只读
    lineNumber={true} // 是否显示列数
    onChange={getCode} // 回调
/>
```

## fieldList 输入@符号才能调起
```
fieldList: [
    { name: "放款金额", value: "fkje"},
    { name: "实际放款金额", value: "sjfkje"},
    { name: "借款人姓名", value: "jkrxm"},
    { name: "借款人手机号", value: "jkrsjh"},
    { name: "借款人身份证", value: "jkrsfz"},
],
```
## methodList 输入#符号才能调起
```
methodList: [
    { name: "平均值", value: "平均值(,)", realValue: "avg" },
    { name: "最大值", value: "最大值(,)", realValue: "max" },
    { name: "最小值", value: "最小值(,)", realValue: "min" },
    { name: "求和", value: "求和(,)", realValue: "sum" }
],
```
## normalList 自定义无需校验关键词
```
normalList: [
    { name: "且", value: "and" },
    { name: "或", value: "or" }
],
```

## 编辑器效果
![day主题](https://github.com/bruceliu68/formulaEdit-react/raw/master/src/img/pic1.png "day主题")

![night主题](https://github.com/bruceliu68/formulaEdit-react/raw/master/src/img/pic2.png "night主题")

## props参数：
|    参数    | 类型    |  默认值   |  是否必填  | 说明         |
| :------:  | :-----: | :----:   | :------: | :----------: |
| defaultValue | string  |  无      |   非必填    | 初始化赋值     |
| height    | number  |  300     |   非必填  | 高度设置       |
| theme    | string  |  day     |   非必填  | 主题: 目前只支持两种：day，night |
| readOnly  | boolean |  false   |   非必填  | 设置只读       |
| lineNumber  | boolean |  false   |   非必填  | 设置行号       |
| fieldList | array   |  无      |   非必填  | 字段列表       |
| methodList | array   |  无      |   非必填  | 方法列表       |
| normalList | array   |  无      |   非必填  | 自定义关键词列表       |
| onChange  | function(code, obj)|  无      |   非必填    | 返回code, obj      |

## License
MIT