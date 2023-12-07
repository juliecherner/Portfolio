import { Employment as EmploymentType } from '@/types/employment'

export const employment: EmploymentType[] = [
  {
    company: 'FrrCode',
    url: 'https://frrcode.com',
    sphere: 'Software Services',
    period: '2023-present',
    position: 'Full Stack Engineer',
    responsibilities: [
      'Backend development with Node, Nest.js and MongoDB',

      'Creating CI/CD pipelines with GitHub Actions',
      'Dockerizing of Monolith apps',
      'Developing functionality for Angular project, using RxJS',
      'Applied Figma layouts with SASS',
      'Creating Next.js project, using MUI and Tailwind CSS',
      'Writing unit, API, E2E tests with Jest, Cypress',
    ],
  },
  {
    company: 'Dorix Software Solutions',
    url: 'https://dorix.co.il',
    sphere: 'SaaS Point-of-Sale',
    period: '2022-2023',
    position: 'Full Stack Engineer',
    responsibilities: [
      'Developed features for React project, managed global state with Redux Toolkit, used MUI',
      'Added functionality to Angular project, used RxJs, component library Angular Material,',
      'Implemented pixel-perfect UI with SASS',
      'Developed monolith with Nest.js',
      'Added functionality to Express.js microservices',
      'Worked with NoSQL and SQL databases: MongoDB, Redis, AWS Redshift',
      'Used CI/CD tool Codefresh, deployed on AWS',
      'Dockerized applications, provide basic Kubernetes administration with Helm',
    ],
  },
  {
    company: 'Velocity Ventures',
    url: 'https://www.linkedin.com/company/velocityventures',
    sphere: 'Investment fund',
    period: '2022',
    position: 'Full Stack Engineer',
    responsibilities: [
      'Created frontend with React, MUI, Tailwind CSS, Chart.js',
      'Developed backend with Node and Express.js, JWT, MongoDB',
      'Built web scrapping scripts with Puppeteer.js',
    ],
  },
  {
    company: 'AGNN',
    url: 'https://agnn.by',
    sphere: 'Legal and Tourism Services',
    period: '2021',
    position: 'Frontend Developer',
    responsibilities: [
      'Developed features for Angular projects, managed observables with RxJS',
      'Used UI component library Angular Material',
      'Designed and implemented responsive UI with SASS, CSS',
    ],
  }
]
