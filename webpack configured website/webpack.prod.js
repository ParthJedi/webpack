const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob');
const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const purgePath = {
	src: path.join(__dirname, 'src')
};

module.exports = merge(commonConfig, {
	mode: 'production',
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
	]
});
