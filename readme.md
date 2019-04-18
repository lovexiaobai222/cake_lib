#cake_lib
[English](./README.md) | 简体中文

**此js库基于jslib-base库**

## :star: 特性

- 支持ES6+或TypeScript编写源码，编译生成生产代码
- 集成 babel-runtime (默认关闭)
- 第三方依赖自动注入（自动剔除第三方依赖无用代码tree shaking）
- 多环境支持（支持浏览器原生，支持AMD，CMD，支持Webpack，Rollup，fis等，支持Node）
- 集成代码风格校验(eslint|tslint)
- 集成单元测试环境（mocha）
- 集成测试覆盖率（istanbul）
- 集成可持续构建工具[travis-ci](https://www.travis-ci.org/)
- 支持自定义banner
- 支持一键重命名
- 支持[sideEffects](https://juejin.im/post/5b4ff9ece51d45190c18bb65)
- 集成ISSUE_TEMPLATE
- 集成[jsmini](https://github.com/jsmini)

> 注意: 如果不同时使用 `export` 与 `export default` 可打开 `legacy模式`，`legacy模式` 下的模块系统可以兼容 `ie6-8`，见rollup配置文件

## :pill: 兼容性
单元测试保证支持如下环境：

| IE   | CH   | FF   | SF   | OP   | IOS  | Android   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 6+   | 29+ | 55+  | 9+   | 50+  | 9+   | 4+   | 4+ |

**注意：编译代码依赖ES5环境，对于ie6-8需要引入[es5-shim](http://github.com/es-shims/es5-shim/)才可以兼容，可以查看[demo/demo-global.html](./demo/demo-global.html)中的例子**

## :open_file_folder: 目录介绍

```
.
├── demo 使用demo
├── dist 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
```

## :rocket: 使用者指南

通过npm下载安装代码

```bash
$ npm install --save jslib-base
```

如果你是node环境

```js
var base = require('jslib-base');
```

如果你是webpack等环境

```js
import base from 'jslib-base';
```

如果你是requirejs环境

```js
requirejs(['node_modules/jslib-base/dist/index.aio.js'], function (base) {
    // xxx
})
```

如果你是浏览器环境

```html
<script src="node_modules/jslib-base/dist/index.aio.js"></script>
```

## :bookmark_tabs: 文档
[API](./doc/api.zh-CN.md)

## :kissing_heart: 贡献者指南

支持JS 和 TS 切换，需要更改下面的地方

-  `package.json`中的`srctype`和`scripts`
-  `test/test.js`中`require`文件的方式
-  `test/browser/index.html`中`require`文件的方式

首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试:

```bash
$ npm test
```

> 注意：浏览器环境需要手动测试，位于`test/browser`

修改 package.json 中的版本号，修改 README.md 中的版本号，修改 CHANGELOG.md，然后发布新版

```bash
$ npm run release
```

将新版本发布到npm

```bash
$ npm publish
```

重命名项目名称，首次初始化项目是需要修改名字，或者后面项目要改名时使用，需要修改`rename.js`中的`fromName`和`toName`，然后运行 `npm run rename`，这条命令会自动重命名下面文件中的名字

- README.md 中的信息
- package.json 中的信息
- config/rollup.js 中的信息
- test/browser/index.html 中的仓库名称
- demo/demo-global.html 中的仓库名称

