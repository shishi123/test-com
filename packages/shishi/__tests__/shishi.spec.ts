import { mount } from '@vue/test-utils'
import OaShishi from '@dongdong-components/shishi'

describe('@dongdong-components/shishi', () => {
  it('create', () => {
    const wrapper = mount(OaShishi)
    expect(wrapper.classes()).toContain('oa-shishi')
  })
})
