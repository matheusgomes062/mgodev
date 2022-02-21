import { defineStore } from 'pinia'
import type { Post } from './mocks'

export interface RootState {
  posts: PostsState
}

export interface PostsState {
  /**
   * o(n) when searching
   */
  ids: string[]
  /**
   * o(1) when searching
   */
  all: Map<string, Post>
  loaded: boolean
}

export const usePostsStore = defineStore ('posts', {
  state: () =>
    ({
      posts: {
        ids: [],
        all: new Map(),
        loaded: false,
      },
    } as RootState),
})
