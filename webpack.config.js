
'use strict';

module.exports = {
	entry: "./src/app.js",
	output: {
		path: __dirname,
		filename: "build/bundle.js"
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: "style!css"
		}, {
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel'
		}]
	}
};