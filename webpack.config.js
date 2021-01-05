const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src/main.js"),
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/images/",
                            publicPath: ""
                        }
                    }
                ]
            }
        ]
    }
}