const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js',
		product: './src/product.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	plugins: [
		new htmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			chunks: ['index'],
			inject: true,
			filename: 'index.html'
		}),
		new htmlWebpackPlugin({
			template: path.resolve(__dirname, './src/product.html'),
			chunks: ['product'],
			inject: true,
			filename: 'product.html'
		})
	]
};
