const user = require("./user");
const delay = require("mocker-api/lib/delay");

// 是否禁用代理
const noProxy = process.env.NO_PROXY === "true";

const proxy = {
	// Priority processing.
	_proxy: {
		priority: "mocker",
		proxy: {
			"/repos/(.*)": "https://api.github.com/",
			// '/repos/jaywcjlove/webpack-api-mocker': 'https://api.github.com/repos/jaywcjlove/webpack-api-mocker',
		},
		changeHost: true,
	},
	...user.default,
};
console.log("proxy", proxy);
module.exports = noProxy ? {} : delay(proxy, 1000);
