import moment from 'moment'

export interface Post {
  id: string
  title: string
  created: moment.Moment
  html?: string
  markdown?: string
  authorId: string
}

// 2020-01-01
export const today: Post = {
  id: '1',
  title: 'Today',
  created: moment().subtract(1, 'second'),
  authorId: '1',
}

export const thisWeek: Post = {
  id: '2',
  title: 'This Week',
  created: moment().subtract(2, 'days'),
  authorId: '1',
}

export const thisMonth: Post = {
  id: '3',
  title: 'This Month',
  created: moment().subtract(12, 'days'),
  authorId: '1',
}

export const demoData: Post[] = [
  {
    id: '4',
    title: '🐙 Understanding Vue 3 Reactivity',
    created: moment().subtract(1, 'second'),
    authorId: '1',
  },
  {
    id: '5',
    title: '😎 Writing a Custom Renderer',
    created: moment().subtract(1, 'second'),
    authorId: '1',
  },
  {
    id: '6',
    title: '🔮 A Futuristic Functional Language for Web Dev - ESNext Pipelines',
    created: moment().subtract(1, 'second'),
    authorId: '1',
  },
  {
    id: '7',
    title: '🏪 Building a Type Safe Store',
    created: moment().subtract(1, 'second'),
    authorId: '1',
  },
  {
    id: '8',
    title: '🧪 Cypress Component Testing',
    created: moment().subtract(1, 'second'),
    authorId: '1',
  },
]
