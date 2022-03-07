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
    // livePreview: 'https://app-resiliencia.vercel.app/',
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
  { name: 'HTML', icon: 'logos:html-5', learning: false },
  { name: 'CSS', icon: 'logos:css-3', learning: false },
  { name: 'Javascript', icon: 'logos:javascript', learning: false },
  { name: 'Typesript', icon: 'logos:typescript-icon', learning: true },
  { name: 'Vue 2/3', icon: 'logos:vue', learning: false },
  { name: 'NuxtJs', icon: 'logos:nuxt-icon', learning: false },
  { name: 'Vuetify', icon: 'logos:vuetifyjs', learning: false },
  { name: 'Bootstrap', icon: 'logos:bootstrap', learning: false },
  { name: 'Element UI', icon: 'logos-element', learning: false },
  { name: 'Vite', icon: 'logos-vitejs', learning: false },
  { name: 'Pinia', icon: 'twemoji-pineapple', learning: false },
  { name: 'Storybook', icon: 'logos-storybook-icon', learning: false },
  { name: 'C#', icon: 'simple-icons:csharp', learning: false },
  { name: '.NET', icon: 'cib-dot-net', learning: false },
  { name: 'Node Js', icon: 'logos:nodejs-icon', learning: true },
  { name: 'React', icon: 'logos-react', learning: true },
  { name: 'React-Native', icon: 'tabler:brand-react-native', learning: true },
  { name: 'Sass', icon: 'logos-sass', learning: false },
  { name: 'Adobe Xd', icon: 'ci-adobe-xd', learning: false },
  { name: 'Figma', icon: 'logos-figma', learning: false },
  { name: 'REST API', icon: 'eos-icons:api-outlined', learning: false },
  { name: 'Git', icon: 'logos-git-icon', learning: false },
  { name: 'Jest', icon: 'vscode-icons:file-type-jest', learning: true },
  { name: 'WindiCSS', icon: 'simple-icons:windicss', learning: false },
  { name: 'Tailwind', icon: 'logos:tailwindcss-icon', learning: true },
  { name: 'Vitest', icon: 'vscode-icons:file-type-vitest', learning: true },
  { name: 'Typeorm', icon: 'bx:code-curly', learning: true },
  { name: 'GraphQl', icon: 'logos:graphql', learning: true },
  { name: 'AWS - Lambda', icon: 'logos:aws-lambda', learning: true },
  { name: 'AWS - S3', icon: 'logos:aws-s3', learning: true },
  { name: 'AWS - iam', icon: 'logos:aws-iam', learning: true },
  { name: 'Redis', icon: 'logos:redis', learning: true },
  { name: 'Postgresql', icon: 'logos:postgresql', learning: false },
  { name: 'Java', icon: 'logos:java', learning: false, wantsToLearn: true },
  { name: 'Post CSS', icon: 'logos:postcss', learning: true },
  { name: 'Serverless', icon: 'logos:serverless', learning: true },
  { name: 'Blockchain', icon: 'logos:bitcoin', learning: false, wantsToLearn: true },
  { name: 'AI', icon: 'bx:brain', learning: false, wantsToLearn: true },
  { name: 'Svelte', icon: 'logos:svelte-icon', learning: false, wantsToLearn: true },
  { name: 'Express', icon: 'simple-icons:express', learning: false, wantsToLearn: true },
  { name: 'Laravel', icon: 'logos:laravel', learning: false, wantsToLearn: true },
  { name: 'Docker', icon: 'logos:docker-icon', learning: false, wantsToLearn: true },
  { name: 'Kubernetes', icon: 'logos:kubernetes', learning: false, wantsToLearn: true },
  { name: 'Clojure', icon: 'logos:clojure', learning: false, wantsToLearn: true },
  { name: 'Python', icon: 'logos:python', learning: false, wantsToLearn: true },
  { name: 'Houdini', icon: 'simple-icons:houdini', learning: false, wantsToLearn: true },

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'matheusgomes062@gmail.com',
}

const devToUrl = 'https://dev.to/api/articles?username=matheusgomes062'

export { header, about, projects, skills, contact, devToUrl }
