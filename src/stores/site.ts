import { defineStore } from 'pinia'

export const useSiteStore = defineStore ('site', {
  state: () => {
    return {
      scrollToTopIsVisible: false,
    }
  },
})
