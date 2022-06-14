
/**
 * 全局注册组件 下文注释：重要、勿删，plop在自动新增组件的时候注入，不需要手动添加
 */
import { defineClientAppEnhance } from '@vuepress/client'
import 'element-plus/theme-chalk/src/index.scss'
// -- APPSTART ITEMS HERE --
import OaShishi from '@dongdong-components/shishi'
import OaTestButton from '@dongdong-components/testButton'
import OaTestUserAvatar from '@dongdong-components/TestUserAvatar'
import OaUserAvatar from '@dongdong-components/UserAvatar'
import OaTest from '@dongdong-components/test'

export default defineClientAppEnhance(({ app }) => {
  // -- APPEND ITEMS HERE --
app.component('OaShishi',OaShishi)
app.component('OaTestButton',OaTestButton)
app.component('OaTestUserAvatar',OaTestUserAvatar)
app.component('OaUserAvatar',OaUserAvatar)
app.component('OaTest',OaTest)
})