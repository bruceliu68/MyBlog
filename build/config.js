const path = require("path");
const assetsPublicPath = "/";
const PORT = process.env.PORT || 8000;

module.exports = {
	common: {
		htmlTemplatePath: path.resolve(__dirname, "../src/index.html")
	},
	dev: {
		hot: true,
		assetsSubDirectory: "static",
		assetsPublicPath,
		// proxyTable: {
		// 	"/creditApi": {
		// 		"target": "http://10.57.17.87:8099",
		// 		"changeOrigin": true,
		// 		"pathRewrite": {
		// 			"^/creditApi": "/api"
		// 		}
		// 	}
		// },
		port: PORT,
		autoOpenBrowser: true,
		devtool: "eval-source-map",
		publicPath: assetsPublicPath
	},
	build: {
		assetsRoot: path.resolve(__dirname, "../dist"),
		assetsSubDirectory: "static",
		assetsPublicPath,
		devtool: "source-map"
	}
};
