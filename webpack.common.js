const entries = {};
entries["module-bundle"] = "./index.js";
entries["browser-bundle"] = "./browser-bundle.js";

module.exports = {
	entry: entries,
	target: "web",
};
