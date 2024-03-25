import { Employment as EmploymentType } from '@/types/employment'

export const employment: EmploymentType[] = [
  {
    company: 'Freelance',
    url: '',
    sphere: 'Software Services',
    period: '2023-present',
    position: 'Full Stack Engineer',
    responsibilities: [
      'Developing e-service backend with Node (Nest.js), Firebase, Postgres and PrismaORM, adding features to React.js project (+ React Query and Zustand)',
      'Creating e-commerce project with Next.js: React metaframework and Node (Nest.js), MongoDB, deployed on GCP',
      'Integrating with 3rd party APIs',
      'Used Docker and Docker Swarm, building CI/CD with Github Actions',
      'Writing unit and E2E tests with Jest and Cypress',
      'Pixel-perfect Figma layouts with SASS implementation',
    ],
  },
  {
    company: 'Dorix Software Solutions',
    url: 'https://dorix.co.il',
    sphere: 'SaaS Point-of-Sale',
    period: '2022-2023',
    position: 'Full Stack Engineer',
    responsibilities: [
      'Developed backend with Node.js monolith with Nest.js, microservices with Express.js',
      'Worked with NoSQL (MongoDB, Redis) and SQL (AWS Redshift) databases, AWS S3 bucket',
      'Developed features for React.js project (+ Redux Toolkit, MUI)',
      'Added functionality to Angular project (+ RxJs, Angular Material)',
      'Used Codefresh (CI/CD), Dockerized apps, deployed on AWS E2C',
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
    sphere: 'Legal services',
    period: '2021',
    position: 'Frontend Developer',
    responsibilities: [
      'Developed features for Angular projects, managed observables with RxJS',
      'Used UI component library Angular Material, designed and implemented responsive UI with SASS, CSS',
    ],
  },
]
