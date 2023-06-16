module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'standard-with-typescript',
		'plugin:vue/vue3-essential',
		'prettier',
		'./.eslintrc-auto-import.json',
	],
	// 新增
	parser: 'vue-eslint-parser',
	settings: {
		'import/extensions': [
			'.js',
			'.jsx',
			'.ts',
			'.tsx',
			'.vue',
			'.less',
			'.css',
		],
		// 'import/parsers': {
		// 	'@typescript-eslint/parser': ['.ts', '.tsx'],
		// },
		// 'import/resolver': {
		// 	typescript: {
		// 		directory: './tsconfig.json',
		// 	},
		// 	node: {
		// 		extensions: ['.js', '.tsx'],
		// 	},
		// },
	},
	parserOptions: {
		// 新增
		parser: '@typescript-eslint/parser',
		// 新增
		project: ['tsconfig.json'],
		// 新增
		extraFileExtensions: ['.vue'],
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {},
};
