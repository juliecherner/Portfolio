import { TABS } from '../navbar/constants'
import Project from './project'
import Article from './article'
import { Project as ProjectType } from '@/types/project'
import { Article as ArticleType } from '@/types/article'

const envCacheStrategy = process.env.envCacheStrategy as RequestCache

async function getArticles() {
  const res = await fetch('https://dev.to/api/articles?username=juliecherner', {
    cache: envCacheStrategy,
  })
  return res.json()
}

async function getProjects() {
  const res = await fetch('https://api.github.com/users/juliecherner/repos', {
    cache: envCacheStrategy,
  })
  return res.json()
}

export default async function Experience() {
  const articlesPromise = getArticles()
  const projectsPromise = getProjects()

  const [articles, projects] = await Promise.all([
    articlesPromise,
    projectsPromise,
  ])

  return (
    <div className="flex flex-col w-full">
      <div id={TABS.EXPERIENCE}>
        <div>
          <p className="py-8 font-bold text-primaryGreen">Articles</p>
          <div className="grid grid-cols-2 gap-4">
            {articles.map((article: ArticleType) => (
              <Article key={article.id} article={article} />
            ))}
          </div>
        </div>
        <div>
          <p className="py-8 font-bold text-primaryGreen">Github Projects</p>
          <div className="grid grid-cols-2 gap-4">
            {projects.map((project: ProjectType) => (
              <Project key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
