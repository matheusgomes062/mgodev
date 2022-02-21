import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import About from '../src/components/About.vue'
import Header from '../src/components/Header.vue'
import Navbar from '../src/components/Navbar.vue'
import { i18n, pinia } from './setup/setup'

describe('Header.vue', () => {
  it('should render', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [i18n, pinia],
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})

describe('Navbar.vue', () => {
  it('should render', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [i18n, pinia],
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should change dark theme icon when clicked', async() => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [i18n, pinia],
      },
    })
    await wrapper.get('[data-test="nav_theme"]').trigger('click')
    expect(wrapper.html()).toContain('data-test="sun"')
  })
})

describe('About.vue', () => {
  it('should render', () => {
    const wrapper = mount(About, {
      global: {
        plugins: [i18n],
      },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
