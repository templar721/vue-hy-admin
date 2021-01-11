import { createApp } from 'vue'
import App from './App.vue'

import router, { setupRouter } from '/@/router'
// import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// import 'dayjs/locale/zh-cn'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import '/@/styles/index.scss'

import '/@/router/interceptor'

const app = createApp(App)
setupRouter(app)
app.use(ElementPlus, { size: 'small', locale })
// app.use(store)

router.isReady().then(() => {
  app.mount('#app')
})
