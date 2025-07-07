const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
	entry: {
		index: './src/index.js',
		courses: './src/pages/courses.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	devServer: {
		static: './dist'
	},
	module: {
		rules: [
			{
				test: /\.(css)$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.s[a|c]ss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpeg|jpg|svg|gif)$/,
				type: 'asset/resource'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			chunks: ['index'],
			inject: true,
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			template: './src/pages/courses.html',
			chunks: ['courses'],
			inject: true,
			filename: 'courses.html'
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, './src/assets/images/*'),
					to: path.resolve(__dirname, 'dist'),
					context: 'src'
				}
			]
		})
		// new BundleAnalyzerPlugin({}) // umcomment to analyze dependencies
	],
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}
};
