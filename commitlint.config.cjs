module.exports = {
	extends: ['@commitlint/config-conventional', 'cz'],
	rules: {
		'type-enum': [
			2,
			'always',
			[
				// 编译相关的修改，例如发布版本，对项目构建或者依赖的改动
				'build',
				// 新功能(feature)
				'feat',
				// 修复bug
				'fix',
				// 更新某功能
				'update',
				// 重构
				'refactor',
				// 文档
				'docs',
				// 构建过程或者辅助工具的变动,如增加依赖库等
				'chore',
				// 不影响代码运行的变动
				'style',
				// 撤销commit,回滚到上一个版本
				'revert',
				// 性能优化
				'perf',
				// 测试(单元,集成测试)
				'test',
			],
		],
		'type-case': [0],
		'type-empty': [0],
		'scope-empty': [0],
		'scope-case': [0],
		'subject-full-stop': [0, 'never'],
		'subject-case': [0, 'never'],
		'header-max-length': [0, 'always', 74],
	},
	prompt: {
		messages: {
			type: '选择你要提交的类型 :',
			scope: '选择一个提交范围（可选）:',
			customScope: '请输入自定义的提交范围 :',
			subject: '填写简短精炼的变更描述 :\n',
			body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
			breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
			footerPrefixesSelect: '选择关联issue前缀（可选）:',
			customFooterPrefix: '输入自定义issue前缀 :',
			footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
			generatingByAI: '正在通过 AI 生成你的提交简短描述...',
			generatedSelectByAI: '选择一个 AI 生成的简短描述:',
			confirmCommit: '是否提交或修改commit ?',
		},
		// prettier-ignore
		types: [
				{ value: "feat",     name: "特性:     ✨  新增功能", emoji: ":sparkles:" },
				{ value: "fix",      name: "修复:     🐛  修复缺陷", emoji: ":bug:" },
				{ value: "docs",     name: "文档:     📝  文档变更", emoji: ":memo:" },
				{ value: "style",    name: "格式:     💄  代码格式（不影响功能，例如空格、分号等格式修正）", emoji: ":lipstick:" },
				{ value: "refactor", name: "重构:     ♻️  代码重构（不包括 bug 修复、功能新增）", emoji: ":recycle:" },
				{ value: "perf",     name: "性能:     ⚡️  性能优化", emoji: ":zap:" },
				{ value: "test",     name: "测试:     ✅  添加疏漏测试或已有测试改动", emoji: ":white_check_mark:"},
				{ value: "build",    name: "构建:     📦️  构建流程、外部依赖变更（如升级 npm 包、修改 vite 配置等）", emoji: ":package:"},
				{ value: "ci",       name: "集成:     🎡  修改 CI 配置、脚本",  emoji: ":ferris_wheel:"},
				{ value: "revert",   name: "回退:     ⏪️  回滚 commit",emoji: ":rewind:"},
				{ value: "chore",    name: "其他:     🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）", emoji: ":hammer:"},
			],
		useEmoji: true,
		emojiAlign: 'center',
		useAI: false,
		aiNumber: 1,
		themeColorCode: '',
		scopes: [],
		allowCustomScopes: true,
		allowEmptyScopes: true,
		customScopesAlign: 'bottom',
		customScopesAlias: 'custom',
		emptyScopesAlias: 'empty',
		upperCaseSubject: false,
		markBreakingChangeMode: false,
		allowBreakingChanges: ['feat', 'fix'],
		breaklineNumber: 100,
		breaklineChar: '|',
		skipQuestions: [],
		issuePrefixes: [
			{ value: 'closed', name: 'closed:   ISSUES has been processed' },
		],
		customIssuePrefixAlign: 'top',
		emptyIssuePrefixAlias: 'skip',
		customIssuePrefixAlias: 'custom',
		allowCustomIssuePrefix: true,
		allowEmptyIssuePrefix: true,
		confirmColorize: true,
		maxHeaderLength: Infinity,
		maxSubjectLength: Infinity,
		minSubjectLength: 0,
		scopeOverrides: undefined,
		defaultBody: '',
		defaultIssues: '',
		defaultScope: '',
		defaultSubject: '',
	},
};
