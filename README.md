# component-packge-v1

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

# Icon组件设计

> Icon组件封装了font awesome，https://docs.fontawesome.com/web/use-with/vue/add-icons/
> 组件支持的属性如下

## 支持的属性

| 属性名       | 作用             | 类型             | 是否必须 | 默认值 | 可选值                                                                           |
| ------------ | ---------------- | ---------------- | -------- | ------ | -------------------------------------------------------------------------------- |
| icon         | 设置图标         | String           | 是       | 无     | 参照font awesome                                                                 |
| size         | 图标大小         | String           | 否       | 无     | 参照font awesome                                                                 |
| rotation     | 旋转             | [String, Number] | 否       | 无     | 参照font awesome                                                                 |
| flip         | 翻转             | [String, Number] | 否       | 无     | 参照font awesome                                                                 |
| beat         | beat动画         | Boolean          | 否       | 无     | 参照font awesome                                                                 |
| beat-fade    | beat-fade动画    | Boolean          | 否       | 无     | 参照font awesome                                                                 |
| bounce       | bounce动画       | Boolean          | 否       | 无     | 参照font awesome                                                                 |
| fade         | fade动画         | Boolean          | 否       | 无     | 参照font awesome                                                                 |
| shake        | shake动画        | Boolean          | 否       | 无     | 参照font awesome                                                                 |
| spin         | spin动画         | Boolean          | 否       | 无     | 参照font awesome                                                                 |
| spin-reverse | spin-reverse动画 | Boolean          | 否       | 无     | 参照font awesome                                                                 |
| spin-pulse   | spin-pulse动画   | Boolean          | 否       | 无     | 参照font awesome                                                                 |
| type         | 主题类型         | String           | 否       | 无     | primary: #409eff,success: #67c23a,warning: #e6a23c,danger: #f56c6c,info: #909399 |
| color        | 自定义颜色       | String           | 否       | 无     | 参照font awesome                                                                 |
