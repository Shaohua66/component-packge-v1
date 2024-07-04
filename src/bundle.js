// font awesome 的一些文件
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(fas)

// 自定义样式文件
import './styles/index.scss'

// 自定义组件文件
import Button from './components/button'
import Icon from './components/icons'

const componentArr = [Button, Icon]

// 注册组件
const install = (app) => {
  componentArr.forEach((component) => {
    app.component(component.name, component)
  })
  app.component('font-awesome-icon', FontAwesomeIcon)
}

// 全部导出
export default {
  install
}

// 按需导出
export { install, Button, Icon }
