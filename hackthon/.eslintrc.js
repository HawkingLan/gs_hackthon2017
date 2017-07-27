// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // recommend at least one newline at the end of files
        "eol-last": "warn",
        // enforce consistent indentation with 4 space
        "indent": ["error", 4,
            {
                "SwitchCase": 1
            }
        ],
        // require default cases in switch statements
        "default-case": "error",
        //requires all immediately-invoked function expressions to be wrapped in parentheses
        "wrap-iife": ["error", "outside"],
        //ariable name.If ESLint decides that the variable is a constant (all uppercase), then no warning will be thrown
        "camelcase": ["error", {
            properties: "always"
        }],

        "require-jsdoc": ["error", {
            "require": {
                "FunctionDeclaration": true,
                "MethodDefinition": true,
                "ClassDeclaration": false,
                "ArrowFunctionExpression": false
            }
        }],
        "lines-around-comment": ["error", {
            "beforeBlockComment": false,
            "beforeLineComment": false
        }],
        "one-var": ["error", {
            initialized: 'never', //既声明变量又对变量赋值
            uninitialized: 'always' //只声明变量不对变量赋值
        }],

        //enforce consistent spacing before and after keywords
        "keyword-spacing": ["error", {
            "after": true
        }],
        //enforce consistent spacing before and after commas
        "comma-spacing": ["error", {
            "before": false,
            "after": true
        }],
        //t recommend gaps between the function identifier and application
        "no-spaced-func": "error",
        "space-before-function-paren": ["error", "never"],

        //require semicolons at the end of statements
        semi: ["error", "always"],
        //disallows unnecessary semicolons
        "no-extra-semi": "error",
        //enforce spacing around a semicolon
        "semi-spacing": ["error", {
            "before": false,
            "after": true
        }],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}
