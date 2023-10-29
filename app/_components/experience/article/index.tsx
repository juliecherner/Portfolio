import { Article as ArticleType } from '@/types/article'

type ArticleProps = {
  article: ArticleType
}
export default function Article({ article }: ArticleProps) {
  return (
    <div className="flex flex-col gap-1 overflow-hidden border border-2 border-primaryGreen p-2 rounded mb-2">
      <p className="font-bold">Title: {article.title}</p>
      <p className="truncate">Description: {article.description}</p>
      <p>Reading time: {article.reading_time_minutes} minutes</p>
      <p>Published: {article.readable_publish_date}</p>
      <p>Reactions: {article.public_reactions_count}</p>
      <p>Comments: {article.comments_count}</p>
      <div className="flex flex-col gap-1">
        {article?.tag_list?.length ? (
          <div className="flex flex-wrap items-center gap-1">
            <p>Tags:</p>
            {article.tag_list.map((tag: string) => (
              <div
                key={tag}
                className="bg-white border border-2 boder-primaryGreen font-bold px-2 rounded"
              >
                {tag}
              </div>
            ))}
          </div>
        ) : (
          <p>No tags</p>
        )}
      </div>
      <a href={article.url} target="_blank">
        <button className="mt-4 bg-primaryGreen hover:bg-green-600 text-white font-bold py-1 px-2 rounded mb-2">
          Read
        </button>
      </a>
    </div>
  )
}

// <div className="flex flex-col gap-1 border border-2 border-primaryGreen p-2 rounded mb-2">
//   <p>Name: {project.name}</p>
//   <p>Description: {project.description}</p>
//   <p>Language: {project.language}</p>
//   <p>Last updated: {formatDate(project.updated_at)}</p>
//   <p>Stars: {project.stargazers_count}</p>
//   <div className="flex flex-col gap-1">
//     <p>Technologies</p>

//     {project.topics.length > 0 ? (
//       <div className="flex flex-wrap gap-1">
//         {project.topics.map((topic: string) => (
//           <div
//             key={topic}
//             className="inline-block bg-primaryGreen hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
//           >
//             {topic}
//           </div>
//         ))}
//       </div>
//     ) : (
//       'Technologies are not specified'
//     )}
//   </div>
//   <div>
//     {project.homepage ? (
//       <a href={project.homepage}>
//         <button className="border border-primaryGreen font-bold py-1 px-2 rounded mb-2">
//           See deployment
//         </button>
//       </a>
//     ) : (
//       'Not deployed'
//     )}
//   </div>
//   <a href={project.html_url}>
//     <button className="inline-block bg-primaryGreen hover:bg-green-600 text-white font-bold py-1 px-2 rounded mb-2">
//       See project on Github
//     </button>
//   </a>
// </div>
