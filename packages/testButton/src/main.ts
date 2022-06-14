import { App } from 'vue'
import TestButton from './Index.vue'

TestButton.install = (app: App): void => {
  app.component(TestButton.name, TestButton)
}

export default TestButton