const pretty = require('pretty');
const lodash = require('lodash');

const HtmlWebpackPlugin = require('html-webpack-plugin');

class BeautifyHtmlWebpackPlugin {
  // 构造函数, 处理 options
  constructor(options) {
    this.options = lodash.merge({
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
    }, options);
  }
  // html 格式化
  apply (compiler) {
    compiler.hooks.compilation.tap('BeautifyHtmlWebpackPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync('BeautifyHtmlWebpackPlugin', (data, cb) => {
        data.html = pretty(data.html, this.options);
        cb(null, data);
      })
    })
  }
}

module.exports = BeautifyHtmlWebpackPlugin