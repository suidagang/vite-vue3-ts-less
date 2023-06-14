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
	],
	// 新增
	parser: 'vue-eslint-parser',
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
