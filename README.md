# mpvue-quickstart

> fork 自 [mpvue/mpvue-quickstart](https://github.com/mpvue/mpvue-quickstart)修改而来。
把官方的quickstart改了改，实现vue代码到h5版和小程序两端代码的编译

## 基本用法
``` bash
$ npm install -g vue-cli
$ vue init dyw934854565/mpvue-quickstart my-project
$ cd my-project
$ npm install
$ npm start #webpack-dev-server build h5版在浏览器端调试开发
$ npm run dev:mp # webpack -w  build 出小程序版代码 到dist目录
```

mpvue详细文档请查阅 [quickstart](http://mpvue.com/mpvue/quickstart/)。

## 代码复用建议
在很多时候，产品可以会要求同时维护h5和小程序两个版本的项目。尽管两端在体验上会有一些差异，但是整体逻辑是一样的。如果分开两个项目维护对于程序员来说代价太大，那么如果在一个项目里复用大部分产品逻辑，工作量会大大减少。

那么有了mpvue，我们得以实现一套vue代码，编译出两个平台的代码。

首先，看一下src目录结构
```
./src/
├── App.vue         // 入口文件，程序启动，对应小程序的app.js，所以这里不会又template
├── adapters        // adapters, 抹平两端差异， 或者通过adapter实现两端差异
│   └── mpvue
│       └── router.js
├── components      // 组件
│   └── card.vue
├── h5              // h5版入口
│   ├── App.vue
│   ├── main.js
│   └── router
│       └── index.js
├── mpvue            // 小程序版入口
│   ├── app.json
│   ├── main.js
│   └── project.config.json
├── pages            // 页面
│   ├── counter
│   │   ├── index.vue
│   │   ├── main.js
│   │   └── main.json
│   └── index
│       ├── index.vue
│       ├── main.js
│       └── main.json
├── store             // vuex
│   └── index.js
└── utils             // 工具库
    └── index.js
```


## 项目里， 我们可以有两种抹平差异

1、像router和store
h5版和小程序版都有入口文件，小程序版同样的可以把$router和$store挂在到vue的原型上
然后在两端可以同时使用this.$router.push()
我们不能直接使用a标签跳转，因为这样h5页面会reload，所以统一用代码跳转页面

2、在组件里，我们可以这样实现差异
```
import router from 'adapters/router'
router.push()
```
在h5版， 会resolve到 `/src/adapters/h5/router`。
在小程序版， 会resolve到 `/src/adapters/mpvue/router`。

## 同样，我们也可以使用adapter的方式来实现差异

adapter也可以是一个组件

小程序里提供的组件，我们是可以直接在vue template里使用的，使用小程序原生的组件可能会获得更好的性能和用户体验，所以也极力的推荐小程序里有原生组件的尽量使用原生组件。如switch，swiper和scroll-view等组件

使用adapter封装以实现差异化


