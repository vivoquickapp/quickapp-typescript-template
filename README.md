<div align="center">
  <a href="https://quickapp.vivo.com.cn/?utm_source=github.com">
    <img width="200" height="200" src="https://raw.githubusercontent.com/vivoquickapp/quickapp-typescript-template/master/src/assets/images/logo.png" alt="Quickapp Typescript Template">
  </a>
</div>

<h1 align="center">Quickapp TypeScript Template</h1>

<div align="center">
  🔨 使用 TypeScript 进行<strong><a href="https://www.quickapp.cn/?utm_source=nicelinks.site">快应用</a></strong>开发示例
</div>

<br>

<div align="center">
  <a href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/node-%3E=%206.0.0-green.svg" alt="node version">
  </a>
  <a href="https://nicelinks.site/post/5c16083e819ae45de1453caa">
    <img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat" alt="Prettier">
  </a>
  <a href="https://github.com/vivoquickapp/quickapp-typescript-template">
    <img src="https://img.shields.io/github/license/vivoquickapp/quickapp-typescript-template.svg" alt="LICENSE">
  </a>
  <a href="https://nice.lovejade.cn/zh/article/quickapp-boilerplate-template.html">
    <img src="https://img.shields.io/badge/chat-on%20blog-brightgreen.svg" alt="Chat On My Blog">
  </a>
  <a href="https://aboutme.lovejade.cn/?from=github"><img src="https://img.shields.io/badge/Author-vivoer-%23a696c8.svg" alt="vivo Developer"></a>
</div>

## 目标与哲学

[快应用](https://www.quickapp.cn/?utm_source=nicelinks.site)是基于手机硬件平台的新型应用形态，标准是由主流手机厂商组成的`快应用联盟`联合制定。其标准的诞生将在研发接口、能力接入、开发者服务等层面建设标准平台，以平台化的生态模式对个人开发者和企业开发者全品类开放。[快应用](https://www.quickapp.cn/?utm_source=nicelinks.site)具备传统 APP 完整的应用体验，`无需安装、即点即用`；`覆盖 10 亿设备`，`与操作系统深度集成，探索新型应用场景`。快应用 ── **复杂生活的简单答案，让生活更顺畅**。

[快应用](https://www.quickapp.cn/?utm_source=nicelinks.site)是一种新型的应用形态，由国内九大手机厂商基于硬件平台共同推出；秒开即点即用，更易于应用的传播和留存，可以为用户提供更高效的服务。在可预见的未来，其将有不错的应用场景和发展空间。此 [Quickapp Typescript Template](https://github.com/vivoquickapp/quickapp-typescript-template) 仓库的建立，旨在探索如何使用 TypeScript 开发[快应用](https://www.quickapp.cn/?utm_source=nicelinks.site)，为广大`快应用开发者`提供便利和参考。关于[快应用](https://www.quickapp.cn/?utm_source=nicelinks.site)开发更详细资料，可参见[快应用教程资源列表](https://github.com/nicejade/nice-front-end-tutorial/blob/master/tutorial/quickapp-tutorial.md)。

## 组织结构

```
├── sign                # 存储 rpk 包签名模块;
│   ├── debug           # 调试环境证书/私钥文件
│   └── release         # 正式环境证书/私钥文件
└── src
│   ├── assets          # 公用的资源(Images/Styles/字体...)
│   │   ├──images       # 存储 png/jpg/svg 等公共图片资源
│   │   └──styles       # 存放 less/css/sass 等公共样式资源
│   ├── helper          # 项目自定义辅助各类工具
│   │   ├──apis         # 存储与后台请求接口相关(已封装好)
│   │   ├──ajax.js      # 对系统提供的 fetch api 进行链式封装
│   │   └──util.js      # 存放项目所需公共工具类方法
│   ├── pages           # 统一存放项目页面级代码
│   ├── app.ux          # 应用程序代码的人口文件
│   └── manifest.json   # 配置应用基本信息
└── package.json        # 定义项目需要的各种模块及配置信息
```

## 如何使用

```bash
git clone https://github.com/vivoquickapp/quickapp-typescript-template.git
cd quickapp-typescript-template
yarn && yarn start
# OR
npm i && npm start
```

此模版基于 `babel-loader` 方式，使得可以用 TypeScript 开发快应用；同时，为了做到**开箱即用**，有对模版做了加工处理；具体说明如下：

* **对项目结构进行优化**；如上组织结构所示，将各资源模块，更专业的分门别类，使之可以便捷的去编写、维护、查找，同时也是基于前端开发既定共识去设计，更容易为初接触者所理解 & 上手；
* [X] **更优雅的处理数据请求**；采用 `Promise` 对系统内置请求 `@system.fetch` 进行封装，并抛出至全局，使得可以极简的进行链式调用，同时便捷地处理返回数据，并能够使用 `finally`，设计详情可参见[如何优雅处理「快应用」数据请求 ](https://quickapp.lovejade.cn/how-to-elegantly-handle-quickapp-request/)；
* [X] **内置了样式处理方案**；「快应用」支持 `less`, `sass` 的预编译；这里采取 `less` 方案，并内置了部分变量，以及常用混合方法，使得可以轻松开启样式编写、复用、修改等；
* [X] **封装了常用方法**；在 `helper/utils` 路径下，有对日期、字符串、系统等常用方法，分别进行封装，统一暴露给 `global.$utils`，使得维护方式更加合理且健壮，同时又可以便捷的使用，高效开发；当然，你也可以根据需要自行增删、抑或扩展；
* [X] **集成 [Prettier](https://prettier.io/)；在检测代码中潜在问题的同时，统一团队代码规范、风格（`js`，`less`，`scss`等），从而促使写出高质量代码，以提升工作效率(尤其针对团队开发)。
* [X] **编写 [prettier-plugin-quickapp](https://github.com/nicejade/prettier-plugin-quickapp) 插件**；为快应用编写 `prettier` 插件，使其可以针对 `.ux`/`.mix` 文件也能很好地工作，从而进一步完善代码风格及规范。
**新增文件监听命令**：引入 [onchange](https://github.com/Qard/onchange) 依赖来监听文件变化；使得在开发时，运行 `yarn prettier-watch` 命令，即可对所修改的 `*.md` `*.ux` `*.js` 等文件，进行 **Prettier** 格式化，从而大幅度提升编写效率。
* ......

