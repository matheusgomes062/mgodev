const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/matheusgomes062',
  title: 'MG.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Matheus Gomes.',
  role: 'about.role',
  description: 'about.description',
  bg_image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
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
    bgImage: 'https://user-images.githubusercontent.com/47605309/155584050-fe6039f7-2616-4fab-9403-ba7b7743d8f4.png',
  },
  {
    name: 'projects.title2',
    description: 'projects.description2',
    stack: ['Markdown'],
    sourceCode: 'https://github.com/matheusgomes062/guia-markdown',
    livePreview: 'https://drive.google.com/file/d/18sS8Pb7p22uRgDwFTOh1kI4VaVSWDy9Y/view?usp=sharing',
    bgImage: 'https://user-images.githubusercontent.com/47605309/155583890-adb2059d-f0fc-43e5-814c-e3963fbe6501.png',
  },
  {
    name: 'projects.title3',
    description: 'projects.description3',
    stack: ['Vue3', 'TypeScript', 'Vite2', 'Pinia', 'Cypress', 'pnpm', 'ESBuild', 'File based routing', 'PWA', 'i18n', 'a11y', 'SEO', 'PugJs', 'Composition Api', 'Vitest', 'WindiCSS', 'Markdown', 'SSG', 'BEM'],
    sourceCode: 'https://github.com/matheusgomes062/mgodev',
    livePreview: 'https://mgodev.vercel.app/',
    bgImage: 'https://user-images.githubusercontent.com/47605309/155583590-fd3f2eca-79b7-4625-902a-d6260b6e4fce.png',
  },
  // {
  //   name: 'projects.title4',
  //   description: 'projects.description4',
  //   stack: ['React-Native', 'Yarn'],
  //   sourceCode: 'https://github.com/matheusgomes062/Blood-Donation-App',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  { name: 'HTML', icon: 'logos:html-5' },
  { name: 'CSS', icon: 'logos:css-3' },
  { name: 'Javascript', icon: 'logos:javascript' },
  { name: 'Typesript', icon: 'logos:typescript-icon' },
  { name: 'Vue 2/3', icon: 'logos:vue' },
  { name: 'NuxtJs', icon: 'logos:nuxt-icon' },
  { name: 'Vuetify', icon: 'logos:vuetifyjs' },
  { name: 'Bootstrap', icon: 'logos:bootstrap' },
  { name: 'Element UI', icon: 'logos-element' },
  { name: 'Vite', icon: 'logos-vitejs' },
  { name: 'Pinia', icon: 'twemoji-pineapple' },
  { name: 'Storybook', icon: 'logos-storybook-icon' },
  { name: 'C#', icon: 'simple-icons:csharp' },
  { name: '.NET', icon: 'cib-dot-net' },
  { name: 'Node Js', icon: 'logos:nodejs-icon' },
  { name: 'React', icon: 'logos-react' },
  { name: 'React-Native', icon: 'tabler:brand-react-native' },
  { name: 'Sass', icon: 'logos-sass' },
  { name: 'Adobe Xd', icon: 'ci-adobe-xd' },
  { name: 'Figma', icon: 'logos-figma' },
  { name: 'REST API', icon: 'eos-icons:api-outlined' },
  { name: 'Git', icon: 'logos-git-icon' },
  { name: 'Jest', icon: 'vscode-icons:file-type-jest' },
  { name: 'WindiCSS', icon: 'simple-icons:windicss' },
  { name: 'Tailwind', icon: 'logos:tailwindcss-icon' },
  { name: 'Vitest', icon: 'vscode-icons:file-type-vitest' },

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'matheusgomes062@gmail.com',
}

const devToUrl = 'https://dev.to/api/articles?username=matheusgomes062'

export { header, about, projects, skills, contact, devToUrl }
