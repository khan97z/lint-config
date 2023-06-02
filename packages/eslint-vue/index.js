module.exports = {
  extends: ['plugin:vue/vue3-recommended', '@faxjs/eslint-config-ts'],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        'no-undef': 'off'
      }
    }
  ],
  // 添加uni-app支持
  globals: {
    uni: true,
    wx: true,
    defineProps: true,
    defineEmits: true,
    defineOptions: true,
    defineSlots: true,
    defineExopse: true,
    withDefaults: true
  },
  rules: {
    /* -------------->  Essential        <-------------- */
    // 禁止在组件上使用v-text/v-html
    'vue/no-v-text-v-html-on-component': 'error',
    // 是否要求组件名称始终为多字
    'vue/multi-word-component-names': 'off',

    /* -------------->  Vue3             <-------------- */
    // 强制vue导入不是从@vue/*
    'vue/prefer-import-from-vue': 'off',
    // 强制 props 默认值有效/*
    'vue/require-default-prop': 'off',
    // 需要名称由 $emit（）触发的 emits 选项
    'vue/require-explicit-emits': 'off',
    // 强制执行自动关闭样式
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

    /* -------------->  Vue2             <-------------- */
    // 禁止向模板添加多个根节点
    'vue/no-multiple-template-root': 'off',

    /* -------------->  Recommended      <-------------- */
    // 禁用v-html
    'vue/no-v-html': 'off',
    // 强制组件顶级元素顺序
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ],

    /* -------------->  Uncategorized    <-------------- */
    // 要求或禁止块之间的空格
    'vue/padding-line-between-blocks': ['error', 'always'],
    // 禁止不必要的v-bind
    'vue/no-useless-v-bind': 'error',
    // 禁止在规定的参数名称用v-bind
    'vue/no-restricted-v-bind': ['error', '/^v-/'],
    // 强制模板中的组件命名样式执行特定的大小写
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    // 强制Components在选项中组件名称的大小写
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    // 强制自定义事件名称使用特定大小写
    'vue/custom-event-name-casing': ['error', 'camelCase'],
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
    // 支持<template>中的注释指令
    'vue/comment-directive': 'off',
    // 强制每行的最大属性数
    'vue/max-attributes-per-line': 'off',
    // 需要在单行元素的内容前后换行
    'vue/singleline-html-element-content-newline': 'off',
    // 在模板中的自定义组件上强制执行 v-on 事件命名样式
    'vue/v-on-event-hyphenation': [
      'error',
      'never',
      {
        autofix: true,
        ignore: ['custom-event']
      }
    ],
    // 强制每个组件都应该在它自己的文件中
    'vue/one-component-per-file': 'off',

    /* -------------->  Extensions       <-------------- */
    // 强制括号内使用空格
    'vue/array-bracket-spacing': ['error', 'never'],
    // 强制箭头函数空格
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'vue/block-spacing': ['error', 'always'],
    // 大括号风格要求
    'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }]
  }
};
