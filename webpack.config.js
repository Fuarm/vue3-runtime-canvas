const path = require("path");
const { webpack } = require("webpack");

module.exports = {
    entry: path.resolve(__dirname, "src/main.js"),
    output: {
        filename: "build.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputpath: "assets/",
                            publicPath: ""
                        }
                    }
                ]
            }
        ]
    }
}