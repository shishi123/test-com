import { mount } from '@vue/test-utils'
import OaTestButton from '@dongdong-components/testButton'

describe('@dongdong-components/testButton', () => {
  it('create', () => {
    const wrapper = mount(OaTestButton)
    expect(wrapper.classes()).toContain('oa-testButton')
  })
})
