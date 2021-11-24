/* eslint-disable no-dupe-keys */
module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true
  },
  globals: {
    Text: true,
    after: true,
    before: true
  },
  plugins: [
    'react',
    'promise',
    '@typescript-eslint/eslint-plugin',
    '10x',
    'prettier',
    'react-hooks',
    'eslint-plugin-no-inline-styles'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:import/errors',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    indent: 'off',
    'no-inline-styles/no-inline-styles': 2,
    'comma-dangle': ['error', 'never'],
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-else-if': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty': ['error'],
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-import-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-setter-return': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'use-isnan': 'error',
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: false
      }
    ],
    'no-unexpected-multiline': 'error',
    'accessor-pairs': [
      'error',
      {
        enforceForClassMembers: true
      }
    ],
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    'dot-location': ['error', 'property'],
    eqeqeq: 'error',
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-constructor-return': 'error',
    'no-else-return': [
      'error',
      {
        allowElseIf: false
      }
    ],
    'no-empty-pattern': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': ['error', 'always'],
    'no-script-url': 'error',
    'no-self-assign': [
      'error',
      {
        props: true
      }
    ],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-warning-comments': 'warn',
    'no-with': 'error',
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true
      }
    ],
    'prefer-regex-literals': 'error',
    'react/boolean-prop-naming': [
      'error',
      {
        validateNested: true
      }
    ],
    'react/button-has-type': 'error',
    'react/jsx-child-element-spacing': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-typos': 'error',
    'react/no-string-refs': [
      'error',
      {
        noTemplateLiterals: true
      }
    ],
    'react/no-this-in-sfc': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/prefer-read-only-props': 'error',
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': [
      'off',
      {
        forbidDefaultForRequired: true,
        ignoreFunctionalComponents: true
      }
    ],
    'react/self-closing-comp': 'error',
    'react/state-in-constructor': ['error', 'never'],
    'react/static-property-placement': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': [
      'error',
      {
        nonEmpty: 'tag-aligned',
        selfClosing: false
      }
    ],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'forbid'
      }
    ],
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-first-prop-new-line': 'error',
    'react/jsx-indent': [
      'error',
      'tab',
      {
        checkAttributes: true,
        indentLogicalExpressions: true
      }
    ],
    'react/jsx-indent-props': ['error', 'tab'],
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true
      }
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 3,
        when: 'multiline'
      }
    ],
    'react/jsx-no-bind': [
      'error',
      {
        allowArrowFunctions: true
      }
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: true
      }
    ],
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-useless-fragment': 'error',
    // Disabled for now as it produces too many errors
    // 'react/jsx-one-expression-per-line': ['error', {allow: 'single-child'}],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: true,
        reservedFirst: true
      }
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'never',
        afterOpening: 'never',
        beforeClosing: 'never'
      }
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'ignore',
        logical: 'ignore',
        prop: 'ignore'
      }
    ],

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    radix: 'error',
    'wrap-iife': [
      'error',
      'inside',
      {
        functionPrototypeMethods: true
      }
    ],
    yoda: 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    // disable things not supported in IE11
    'no-restricted-globals': [
      'error',
      'event',
      'fetch',
      'Map',
      'URL',
      'URLSearchParams'
    ],
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'error',
    'no-undef': [
      'error',
      {
        typeof: true
      }
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: /^_$/.source,
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: /^_$/.source
      }
    ],
    'handle-callback-err': 'warn',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': [
      'error',
      {
        grouping: true,
        allowCall: true
      }
    ],
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-restricted-imports': [
      'error',
      'domain',
      'freelist',
      'smalloc',
      'sys',
      'colors'
    ],
    'no-restricted-modules': [
      'error',
      'domain',
      'freelist',
      'smalloc',
      'sys',
      'colors'
    ],
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false
      }
    ],
    camelcase: [
      'error',
      {
        properties: 'always'
      }
    ],
    'capitalized-comments': [
      'error',
      'always',
      {
        // You can also ignore this rule by wrapping the first word in quotes.
        ignorePattern: /pragma|ignore|prettier-ignore/.source,
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true
      }
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': [
      'error',
      'never',
      {
        enforceForClassMembers: true
      }
    ],
    'eol-last': 'error',
    'func-name-matching': [
      'error',
      {
        considerPropertyDescriptor: true
      }
    ],
    'function-call-argument-newline': ['error', 'consistent'],
    'jsx-quotes': 'error',
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': 'error',
    'linebreak-style': [process.platform === 'win32' ? 'off' : 'error', 'unix'],
    'max-nested-callbacks': ['warn', 4],
    'max-statements-per-line': 'error',
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'no-new-object': 'error',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-whitespace-before-property': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'object-curly-spacing': ['error', 'never'],
    'one-var': ['error', 'never'],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': [
      'error',
      'never',
      {
        allowSingleLineBlocks: false
      }
    ],
    'prefer-exponentiation-operator': 'error',
    'quote-props': ['error', 'as-needed'],
    quotes: ['error', 'single'],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    'semi-style': ['error', 'last'],
    semi: ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false
      }
    ],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'constructor-super': 'error',
    'generator-star-spacing': ['error', 'both'],
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': [
      'error',
      {
        enforceForClassMembers: true
      }
    ],
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': ['error', 'both'],
    'react/prop-types': 'off',
    camelcase: 'off',
    // Prettier will take care of it
    '@typescript-eslint/indent': 'off',
    'guard-for-in': 'off',
    'react/forbid-component-props': 'off',
    'no-console': 'warn',
    'no-await-in-loop': 'off',
    'capitalized-comments': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-wrap-multilines': 'off',
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'operator-linebreak': 'off',
    'space-before-function-paren': 'off',
    'react/jsx-child-element-spacing': 'off',
    'no-template-curly-in-string': 'error',
    'default-case': 'error',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    'generator-star-spacing': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: true,
        reservedFirst: true
      }
    ],
    'react/self-closing-comp': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/no-unsafe': 'warn',
    'react/no-did-mount-set-state': 'error',
    'react/no-deprecated': 'warn',
    'react/no-this-in-sfc': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/jsx-indent-props': 'off',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-duplicates': 'error',
    'import/first': 'error',
    // not working well with TS
    'import/named': 'off',
    'import/newline-after-import': 'error',
    'import/order': 'warn',
    'import/no-unassigned-import': 'error',
    // False triggers on TS
    'import/no-unresolved': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    // Too slow
    'import/no-cycle': 'off',
    'import/extensions': ['error', 'never', {json: 'always'}],
    // Slow
    'import/no-self-import': 'off',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-nesting': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/valid-params': 'error',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': [
      'error',
      {
        builtinGlobals: false,
        hoist: 'all'
      }
    ],
    // Leads to errors like <>'     '</>
    'react/jsx-fragments': 'off',
    'react/jsx-closing-tag-location': 'off',
    // We don't want to name it IState
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    // Conflicts with prettier
    'react/jsx-curly-newline': 'off',
    // currently has a bug
    'react/jsx-curly-brace-presence': 'off',
    'require-atomic-updates': 'off',
    '10x/no-full-import': 'error',
    '10x/react-in-scope': 'error',
    '10x/auto-import': [
      'error',
      {
        imports: {
          xns: "import xns from 'xns'",
          styled: "import styled from 'styled-components'",
          sortBy: "import sortBy from 'lodash/sortBy'",
          groupBy: "import groupBy from 'lodash/groupBy'",
          isEmpty: "import isEmpty from 'lodash/isEmpty'",
          lighten: "import {lighten} from 'polished'",
          getWeeksInMonth: "import {getWeeksInMonth} from 'date-fns'",
          startOfMonth: "import {startOfMonth} from 'date-fns'",
          getDaysInMonth: "import {getDaysInMonth} from 'date-fns'",
          getISODay: "import {getISODay} from 'date-fns'",
          format: "import {format} from 'date-fns'",
          getWeek: "import {getWeek} from 'date-fns'",
          setDate: "import {setDate} from 'date-fns'",
          endOfWeek: "import {endOfWeek} from 'date-fns'",
          startOfWeek: "import {startOfWeek} from 'date-fns'"
        }
      }
    ],

    quotes: 'off',
    '@typescript-eslint/explicit-function-return-type': 0,
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    '@typescript-eslint/no-use-before-define': 0,
    'import/no-unassigned-import': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  settings: {
    react: {
      version: '16.9.0'
    }
  },
  overrides: [
    {
      files: ['**.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off'
      }
    }
  ]
};
