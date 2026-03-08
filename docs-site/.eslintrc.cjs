module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    rules: {
        // Vue-specific
        'vue/multi-word-component-names': 'off',
        'vue/no-v-html': 'off',
        'vue/require-default-prop': 'warn',
        'vue/require-prop-types': 'warn',
        'vue/html-self-closing': ['warn', {
            html: { void: 'always', normal: 'never', component: 'always' }
        }],

        // General
        'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'prefer-const': 'warn',
        'no-var': 'error',
        'eqeqeq': ['error', 'always']
    },
    overrides: [
        {
            files: ['*.vue'],
            parser: 'vue-eslint-parser'
        }
    ]
}
