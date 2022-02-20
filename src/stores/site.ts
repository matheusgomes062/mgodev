import { defineStore } from 'pinia'

export const useSiteStore = defineStore ('site', {
  state: () => {
    return {
      scrollToTopIsVisible: false,
      showNavList: false,
    }
  },

  actions: {
    fill(payload: boolean) {
      this.showNavList = payload
    },
  },
})
