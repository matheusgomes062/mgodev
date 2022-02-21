import { createPinia } from 'pinia'
import { beforeEach, vi } from 'vitest'
import { createI18n } from 'vue-i18n'
// import { about } from '../../locales/en.yml'

const createLocalStorage = () => {
  let state: Record<string, any> = {}

  const localStorageMock: Storage = {
    getItem: vi.fn(x => state[x]),
    setItem: vi.fn((x, v) => state[x] = v),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    removeItem: vi.fn((x, v) => delete state[x]),
    clear: vi.fn(() => state = {}),
  }

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  })
}

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('../../locales/*.y(a)?ml'))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(14, yaml ? -5 : -4), value.default]
    }),
)

// export const i18n = createI18n({
//   locale: 'en',
//   about,
// })

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
})

export const pinia = createPinia()

beforeEach(() => {
  createLocalStorage()
  document.body.innerHTML = ''
  document.head.innerHTML = ''
})
