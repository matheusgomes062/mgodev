const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/matheusgomes062',
  title: 'MG.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Matheus Gomes',
  role: 'about.role',
  description: 'about.description',
  resume: 'about.resumeUrl',
  social: {
    linkedin: 'https://www.linkedin.com/in/matheus-gomes-dev/',
    github: 'https://github.com/matheusgomes062',
    stackoverflow: 'https://stackoverflow.com/users/10568034/matheus-gomes',
    devto: 'https://dev.to/matheusgomes062',
    medium: 'https://matheusgomes062.medium.com/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'projects.title1',
    description: 'projects.description1',
    stack: ['Vue2', 'SASS', 'Vuex', 'Vue Router', 'Element UI', 'PugJs', 'Vercel', 'Bootstrap'],
    sourceCode: 'https://github.com/matheusgomes062/app-resiliencia',
    livePreview: 'https://app-resiliencia.vercel.app/',
  },
  {
    name: 'projects.title2',
    description: 'projects.description2',
    stack: ['Markdown'],
    sourceCode: 'https://github.com/matheusgomes062/guia-markdown',
    livePreview: 'https://drive.google.com/file/d/18sS8Pb7p22uRgDwFTOh1kI4VaVSWDy9Y/view?usp=sharing',
  },
  {
    name: 'projects.title3',
    description: 'projects.description3',
    stack: ['Vue3', 'TypeScript', 'Vite2', 'Pinia', 'Cypress', 'pnpm', 'ESBuild', 'File based routing', 'PWA', 'i18n', 'a11y', 'SEO', 'Composition Api', 'Vitest', 'WindiCSS', 'Markdown', 'SSG'],
    sourceCode: 'https://github.com/matheusgomes062/mgodev',
    livePreview: 'https://mgodev.vercel.app/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Vue2',
  'Vue3',
  'NuxtJs',
  'Vuex',
  'Vue Router',
  'Vuetify',
  'Bootstrap',
  'Element UI',
  'Vite',
  'Pinia',
  'Storybook',
  'Clean Code',
  'C#',
  '.NET',
  'NodeJs',
  'XUnity',
  'React',
  'React-Native',
  'SASS',
  'Presentation Design',
  'SCRUM',
  'UX/UI',
  'Adobe XD',
  'Figma',
  'Web Design',
  'AI',
  'REST API',
  'Git',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'matheusgomes062@gmail.com',
}

const devToUrl = 'https://dev.to/api/articles?username=matheusgomes062'

export { header, about, projects, skills, contact, devToUrl }
