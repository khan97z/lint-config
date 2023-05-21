/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
    // 正文空行开头
    'body-leading-blank': [1, 'always'],
    // 页脚空行开头
    'footer-leading-blank': [1, 'always'],
    // 文本长度
    'header-max-length': [2, 'always', 100],
    /**
     * scope：提交范围
     * feat(scope): feat add .....
     *      ^^^^^
     */
    // scope：单词格式
    'scope-case': [2, 'always', 'lower-case'],
    /**
     * subject：commit 描述
     * feat(scope): feat add .....
     *              ^^^^^^^^^^^^^^
     */
    // subject：单词格式
    'subject-case': [1, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    // subject：是否为空
    'subject-empty': [2, 'never'],
    // subject：终止符
    'subject-full-stop': [2, 'never', '.'],
    /**
     * type：commit 类型
     * feat(scope): feat add .....
     * ^^^^
     */
    // type：单词格式
    'type-case': [2, 'always', 'lower-case'],
    // type：是否为空
    'type-empty': [2, 'never'],
    // type：可选值
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'revert',
        'chore',
        'wip',
        'types'
      ]
    ]
  },
  prompt: {
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixsSelect: '选择关联issue前缀（可选）:',
      customFooterPrefixs: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      confirmCommit: '是否提交或修改commit ?'
    },
    types: [
      { value: 'feat', name: 'feat:     新增功能' },
      { value: 'fix', name: 'fix:      修复缺陷' },
      { value: 'docs', name: 'docs:     文档变更' },
      { value: 'style', name: 'style:    代码格式' },
      { value: 'refactor', name: 'refactor: 代码重构' },
      { value: 'perf', name: 'perf:     性能优化' },
      { value: 'test', name: 'test:     添加疏漏测试或已有测试改动' },
      {
        value: 'build',
        name: 'build:    构建流程、外部依赖变更 (如升级 npm 包、修改打包配置等)'
      },
      { value: 'ci', name: 'ci:       修改 CI 配置、脚本' },
      { value: 'revert', name: 'revert:   回滚 commit' },
      {
        value: 'chore',
        name: 'chore:    对构建过程或辅助工具和库的更改 (不影响源文件)'
      },
      { value: 'wip', name: 'wip:      正在开发中' },
      { value: 'types', name: 'types:    类型定义文件修改' }
    ],
    // 是否允许使用Emoji
    useEmoji: false,

    allowEmptyIssuePrefixs: false,
    allowCustomIssuePrefixs: false
  }
}
