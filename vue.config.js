const apiMocker = require("mocker-api");
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
let { version } = require("./package.json");
module.exports = {
    //Solution For Issue:You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
    //zhengkai.blog.csdn.net
    runtimeCompiler: true,
    filenameHashing: false,
    devServer: {
        port: 8002,
        before(app) {
            apiMocker(app, path.resolve("./mocker/index.js"), {
                proxy: {
                    "/repos/(.*)": "https://api.github.com/"
                },
                changeHost: true
            });
        }
    },

    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
        // 去除h5预加载
        config.plugins.delete("prefetch");
        // 别名配置
        config.resolve.alias.set("@", path.resolve(__dirname, "./src"));
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === "production") {
            config.mode = "production";
            let optimization = {
                minimize: true,
                minimizer: [new TerserPlugin()]
            };
            config.optimization = optimization;
            config.output = {
                ...config.output,
                filename: `static/js/[name].[contenthash:8].${version}.js`,
                chunkFilename: `static/js/[name].[contenthash:8].${version}.js`
            };
        } else {
        }
    }
};
