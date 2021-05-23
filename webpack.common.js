const glob = require("glob");
const path = require("path");

const entries = {};
entries["module-bundle"] = "./index.js";
entries["browser-bundle"] = "./browser-bundle.js";

module.exports = {
	entry: entries,
	resolve: {
		alias: {
			"@src": path.resolve(__dirname + "/src"),
			"@test": path.resolve(__dirname + "/test"),
			"@modules": path.resolve(__dirname + "/node_modules"),
		},
	},
	target: "web",
};
