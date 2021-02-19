const apiMocker = require("mocker-api");
const path = require("path");
module.exports = {
	//Solution For Issue:You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
	//zhengkai.blog.csdn.net
	runtimeCompiler: true,
	devServer: {
		port: 8002,
		before(app) {
			apiMocker(app, path.resolve("./mocker/index.js"), {
				proxy: {
					"/repos/(.*)": "https://api.github.com/",
				},
				changeHost: true,
			});
		},
	},
};
