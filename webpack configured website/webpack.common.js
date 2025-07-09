const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const purgePath = {
	src: path.join(__dirname, 'src')
};

module.exports = {
	entry: {
		index: './src/index.js',
		courses: './src/pages/courses.js'
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true
	},
	module: {
		rules: [
			{
				test: /\.(png|jpeg|jpg|svg|gif)$/,
				type: 'asset/resource'
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			mmnt: 'moment'
		}),
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
		})
	],
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}
};
