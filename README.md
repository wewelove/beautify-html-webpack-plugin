# beautify-html-webpack-plugin

[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) 插件的 `beforeEmit` 钩子，美化 html 输出。

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
  indent_size: 2,
  indent_with_tabs: false,
  html: {
    end_with_newline: true,
    indent_size: 2,
    indent_with_tabs: false,
    indent_inner_html: true,
    preserve_newlines: true,
    inline: ['i', 'b', 'span'],
    unformatted: []
  },
  css: {
    indent_size: 4
  },
  js: {
    indent_size: 4
  }
}
```

## 参考

- [js-beautify](https://www.npmjs.com/package/)  
- [pretty](https://github.com/jonschlinkert/pretty)