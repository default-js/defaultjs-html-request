const { merge } = require("webpack-merge");
const common = require("./karma.common.js");

module.exports = (config) => {
	config.set(merge(common, {
		logLevel : config.LOG_INFO,
		browsers : [/*"ChromeHeadless",*/ "Chrome" /*,  "Firefox", "PhantomJS","Safari", "ChromeHeadless"*/ ],
		autoWatch : true,
		singleRun : false,
		concurrency : Infinity
	}))
}
