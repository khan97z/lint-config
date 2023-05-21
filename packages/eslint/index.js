module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      tsx: true,
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        tabWidth: 2
      }
    ],
    'linebreak-style': ['error', 'unix'],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    semi: [2, 'never'],
    'no-param-reassign': 0,
    'no-undef': 'off',
    'no-useless-escape': 'off',
    // 禁止出现未使用过的变量
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],

    /** typescript */
    '@typescript-eslint/no-unused-vars': [2],
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // 关闭any类型的警告
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',

    /** import */
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 0,
    // 在模块导入顺序中强制执行约定
    'import/order': 'error',
    // 确保所有导入出现在其他语句之前
    'import/first': 'error',
    // 禁止使用可变的变量导出
    'import/no-mutable-exports': 'error',
    // 确保导入指向可以解析的文件/模块
    'import/no-unresolved': 'off',
    // 禁止使用绝对路径导入模块
    'import/no-absolute-path': 'off',
    // 报告使用导出名称作为默认导出属性
    'import/no-named-as-default-member': 'off',
    // 报告使用导出名称作为默认导出标识符
    'import/no-named-as-default': 'off',
    // 禁止命名空间
    'import/namespace': 'off',

    /** vue */
    // 是否要求组件名称始终为多字
    'vue/multi-word-component-names': 'off',
    // 禁止向模板添加多个根节点
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: []
      }
    ],
    'vue/prefer-import-from-vue': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    // 强制defineProps和defineEmits的顺序
    'vue/define-macros-order': [
      'error',
      {
        order: ['defineProps', 'defineEmits']
      }
    ],
    // 统一html注释间距
    'vue/html-comment-content-spacing': [
      'error',
      'always',
      {
        exceptions: ['-']
      }
    ],
    // 块级标签强制换行
    'vue/block-tag-newline': [
      'error',
      {
        singleline: 'always',
        multiline: 'always'
      }
    ],
    'vue/comment-directive': 'off'
  },
  globals: {
    uni: true,
    wx: true,
    defineProps: true,
    defineEmits: true,
    defineOptions: true,
    defineExopse: true,
    withDefaults: true
  }
}
