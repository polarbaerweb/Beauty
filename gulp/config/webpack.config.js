const conf = {
	module: {
		rules: [
			// JavaScript/TypeScript
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			// Styles (CSS/SCSS)
			{
				test: /\.(css|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader', // SCSS support (if you're using SCSS)
				],
			},
		],
	},
	output: {
		filename: 'app.min.js'
	},
	mode: "development"
};


export default conf