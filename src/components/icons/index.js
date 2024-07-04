import Icon from './Icon.vue'

// 提供具名导入的入口
Icon.install = function (app) {
  app.component(Icon.name, Icon)
}

export default Icon
