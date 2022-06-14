import { App } from 'vue'
import Shishi from './Index.vue'

Shishi.install = (app: App): void => {
  app.component(Shishi.name, Shishi)
}

export default Shishi