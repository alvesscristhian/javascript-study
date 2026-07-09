import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';

export default [
    js.configs.recommended,

    react.configs.flat.recommended,

    {
        plugins: {
            'react-hooks': reactHooks,
            react,
        },

        rules: {
            ...reactHooks.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
        },
    },

    prettier,

    {
        files: ['**/*.{js,jsx}'],

        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                jest: true,
            },
        },

        settings: {
            react: {
                version: 'detect',
            },
        },
    },
];
