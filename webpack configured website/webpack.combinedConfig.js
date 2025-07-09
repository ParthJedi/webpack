const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob');

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
	devServer: {
		static: './dist'
	},
	module: {
		rules: [
			{
				test: /\.(css)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.s[a|c]ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
			},
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
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, './src/assets/images/*'),
					to: path.resolve(__dirname, 'dist'),
					context: 'src'
				}
			]
		}),
		new MiniCssExtractPlugin(),
		new PurgeCSSPlugin({
			paths: glob.sync(`${purgePath.src}/**/*`, { nodir: true }),
			safelist: ['dummy-css']
		})
		// new BundleAnalyzerPlugin({}) // umcomment to analyze dependencies
	],
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	}
};
