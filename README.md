# beautify-html-webpack-plugin

`beautify-html-webpack-plugin` 是 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) 插件的钩子，实现 `HTML` 格式化输出，适用 [Webpack4](https://webpack.js.org/)。

## 安装

```bash
  npm i --save-dev beautify-html-webpack-plugin
```

```bash
  yarn add --dev beautify-html-webpack-plugin
```

## 使用

**webpack.config.js**

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BeautifyHtmlWebpackPlugin = require('beautify-html-webpack-plugin');

module.exports = {
  entry: {
    index: "./index.ts",
  },
  output: {
    path: "./dist",
    filename: "[name].bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "./dist/index.html"
    }),
    new BeautifyHtmlWebpackPlugin(options)
  ]
}
```

`options` 默认设置如下，详情参考 [js-beautify](https://www.npmjs.com/package/js-beautify)。

```js
{
  "indent_size": 2,
  "indent_char": " ",
  "indent_with_tabs": false,
  "editorconfig": false,
  "eol": "\n",
  "end_with_newline": false,
  "indent_level": 0,
  "preserve_newlines": true,
  "max_preserve_newlines": 2,
  "space_in_paren": false,
  "space_in_empty_paren": false,
  "jslint_happy": false,
  "space_after_anon_function": false,
  "space_after_named_function": false,
  "brace_style": "collapse",
  "unindent_chained_methods": false,
  "break_chained_methods": false,
  "keep_array_indentation": false,
  "unescape_strings": false,
  "wrap_line_length": 0,
  "e4x": false,
  "comma_first": false,
  "operator_position": "before-newline",
  "indent_empty_lines": false,
  "templating": ["auto"]
}
```

## 参考

- [js-beautify](https://www.npmjs.com/package/js-beautify)  
- [pretty](https://github.com/jonschlinkert/pretty)