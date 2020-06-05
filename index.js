const pretty = require('pretty');
const lodash = require('lodash');

const HtmlWebpackPlugin = require('html-webpack-plugin');

class BeautifyHtmlWebpackPlugin {
  // 构造函数, 处理 options
  constructor(options) {
    this.options = lodash.merge({
      indent_size: 2,
      indent_with_tabs: false,
      html: {
        end_with_newline: true,
        indent_size: 2,
        indent_with_tabs: false,
        indent_inner_html: true,
        preserve_newlines: true,
        inline: ['i', 'b', 'span'],
        unformatted: ['p']
      },
      css: {
        indent_size: 4
      },
      js: {
        indent_size: 4
      }
    }, options);
  }
  // html 美化
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