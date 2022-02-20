import { defineStore } from 'pinia'

export const useSiteStore = defineStore ('site', {
  state: () => {
    return {
      scrollToTopIsVisible: false,
      showNavList: false,
    }
  },

  actions: {
    toggleNavList(payload: boolean) {
      this.showNavList = payload
    },
    setScrollToTop(payload: boolean) {
      this.scrollToTopIsVisible = payload
    },
  },
})
