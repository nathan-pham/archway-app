const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/"
	},
	plugins: [
    new HtmlWebpackPlugin({
			template: "./template.html",
			filename: "index.html",
			inject: "body",
    })
  ],
	module: {
		rules: [
			{
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource"
			},
			{
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      }
		]
	},
	resolve: {
    extensions: ['*', '.js']
  }
}