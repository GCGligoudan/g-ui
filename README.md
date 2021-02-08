# g-ui

## g-ui移动组件库

### 该项目基于vue2 + typescript + vue-router + less搭建，使用tslint进行语法校验，jest进行单元测试

## 搭建环境

1.下载代码

`git clone https://github.com/gcgligoudan/g-ui.git`

2.推荐使用docker容器作为项目的开发环境，非容器启动忽略此部步骤

`docker-compose up -d`

3.在容器中启动终端，非容器启动忽略此步骤

`docker exec -it g-ui bash`

4.启动项目

```bash

// 安装依赖
yarn install

// 开发模式
yarn run serve

// 构建开发模式的包
yarn run build:dev

// 构建生产包
yarn run build

// 执行测试代码
yarn run test

// 执行语法校验并修复
yarn run lint

// 执行单元测试
yarn run test:unit
```

## 目录划分

```
- dist // 构建后的代码
- coverage //测试代码结果输出目录
- node_modules //node 模块
- public // 公共资源文件
- src // 源码
  - components // 公用组件
  - views // 项目主要页面目录
    - home //
  - utils // 核心（公用）模块
    - request.ts // 封装axios
  - ...
  - App.vue // 项目根组件
  - common.less // 全局公用样式
  - index.d.ts // ui组件类型声明
  - main.ts // 项目启动文件
  - router.ts // 路由
  - shims-tsx.d.ts // 全局.tsx类型声明文件
  - shims-vue.d.ts // 全局.vue类型声明文件
- .gitignore // git配置文件
- babel.config.js // babel配置文件
- docker-compose.yaml // docker-compose配置文件
- jest.config.ts // jest配置文件
- package.json // 项目配置文件
- postcss.config.js // postcss配置文件
- README.md // 项目说明文件
- tsconfig.json // ts配置文件
- tslint.json // tslint配置文件
- vue.config.js // 项目配置文件
- yarn.lock // yarn配置文件
```
