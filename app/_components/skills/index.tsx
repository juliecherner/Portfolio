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

export default async function Skills() {
  const articlesPromise = getArticles()
  const projectsPromise = getProjects()

  const [articles, projects] = await Promise.all([
    articlesPromise,
    projectsPromise,
  ])

  return (
    <main>
      <div>Work experience</div>
      <div>Skills</div>
      <div>Project types: description - technologies</div>
      <div>
        {JSON.stringify(articles)}
        {JSON.stringify(projects)}
        {/* {projects.map((project: any) => (
          <div key={projects.id}>{projects.name}</div>
        ))} */}
      </div>
    </main>
  )
}
