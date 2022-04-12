# uni-app-pnpm

## 指南

### 安装依赖
1. 首先安装 pnpm：`npm i -g pnpm@6`
2. 在根目录执行 `pnpm install`

### 运行 invoice 子项目
```
pnpm --filter uni-app-pnpm-invoice dev:h5
```

### build invoice 子项目
```
pnpm --filter uni-app-pnpm-invoice build:h5
```

## TODO
1. [cli 项目不支持 pnpm、Monorepo · Issue #2987 · dcloudio/uni-app](https://github.com/dcloudio/uni-app/issues/2987)
2. 代码中路径上的 @ 怎么处理？只能写相对路径吗，会很麻烦
3. 尽管 ts compile 没问题，但是 vs code 里面 vetur 会有提示红线，比如 index.vue
4. 源码引用-使用包名引用 时，在 vs code 中点击文件链接，去打的是类似 `/uni-app-pnpm/packages/invoice/node_modules/uni-app-pnpm-common/src/utils/index.ts` 的地方，要是有人改了这个文件怎么办？
5. 图片引用的测试
6. 