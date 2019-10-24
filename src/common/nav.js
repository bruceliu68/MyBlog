import dynamic from "dva/dynamic";

// dynamic包装 函数
const dynamicWrapper = (app, models, component) => dynamic({
	app,
	models: () => models.map(m => import(`../models/${m}.js`)),
	component,
});

// 抽象化菜单配置
const getNavList = (app) => {
	let navList = {};
	navList.home = [
		{
			name: "首页",
			path: "home",
			// icon: "home",
			component: dynamicWrapper(app, [], () => import("../pages/Home")),
		},
    ];
    navList.component = [
		{
			name: "简介",
			path: "index",
			component: dynamicWrapper(app, [], () => import("../pages/Component")),
		},
		{
			name: "表格分页",
			path: "tablePage",
			component: dynamicWrapper(app, [], () => import("../pages/TablePage")),
		},
	];
	return navList;
};

// nav data
export const getNavData = app => [
	{
		component: dynamicWrapper(app, [], () => import("../layouts/BasicLayout")),
		layout: "BasicLayout",
		path: "/",
		children: [
			{
				name: "首页",
				path: "",
				children: getNavList(app).home
            },
            {
				name: "组件",
				path: "component",
				children: getNavList(app).component
			},
		],
	},
	// {
	// 	component: dynamicWrapper(app, [], () => import("../layouts/UserLayout/")),
	// 	path: "/user",
	// 	layout: "UserLayout",
	// 	children: [
	// 		{
	// 			name: "账户",
	// 			icon: "user",
	// 			path: "user",
	// 			children: [
	// 				{
	// 					name: "登录",
	// 					path: "login",
	// 					component: dynamicWrapper(app, [], () => import("../routes/User/Login/")),
	// 				},
	// 			],
	// 		},
	// 	],
	// }
];