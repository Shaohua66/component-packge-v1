import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入样式
import './styles/index.scss'

// 引入font awesome
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { fas } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(fas)
// 引入自定义组件
import Icon from './components/icons/Icon.vue'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
// 自定义组件注册
app.component('msh-icon', Icon)

app.use(router)

app.mount('#app')
