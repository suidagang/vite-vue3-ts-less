/**
 * @type {import('stylelint').Config}
 */
module.exports = {
	// root: true,
	extends: [
		'stylelint-config-standard',
		'stylelint-config-recommended-vue',
		'stylelint-config-rational-order',
	],
	plugins: ['stylelint-prettier'],
	ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json'],
	rules: {
		'no-empty-source': true, //.vue文件是否能有空style标签
		'prettier/prettier': true,
	},
};
