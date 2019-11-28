function genID() {
	return Number(Math.random().toString().substr(3, 8) + Date.now()).toString(36);
}

const javascript = [
	{ id: 1, title: "基本数据结构" },
	{ id: 2, title: "递归算法" }
];

const css = [

];

const html = [

];

const node = [

];

const mobile = [

];

const client = [

];

const other = [

];

let all = [];
all = all.concat(javascript).concat(css).concat(html).concat(node).concat(mobile).concat(client).concat(other);

const MapJson = {
	"all": all,
	"javascript": javascript,
	"css": css,
	"html": html,
	"node": node,
	"mobile": mobile,
	"client": client,
	"other": other
};

export default MapJson;
