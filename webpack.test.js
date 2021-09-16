const path = require("path");
const { merge } = require("webpack-merge");
const common = require("../defaultjs-html-components/webpack.common.js");

module.exports = merge(common, {	
	resolve: {
		alias: {
			"@src": path.resolve(__dirname + '/src'),
			"@test": path.resolve(__dirname + '/test'),
			"@modules": path.resolve(__dirname + '/node_modules')
		}
	},
	mode: "development",
	optimization: {
		minimize: false,
		usedExports: false,
	},
	devtool: "inline-source-map",
	output: {
		path: path.resolve(__dirname, "runtime"),
	},
	plugins: []
});
