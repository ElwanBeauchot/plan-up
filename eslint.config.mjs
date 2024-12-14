import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['webpack.config.js', 'postcss.config.js', ],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            prettier: pluginPrettier,
            react: pluginReact,
        },
        rules: {
            'prettier/prettier': ['error'],
        },
    },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    configPrettier,
];
