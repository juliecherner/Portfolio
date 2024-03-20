import { Article as ArticleType } from '@/types/article'

type ArticleProps = {
  article: ArticleType
}
export default function Article({ article }: ArticleProps) {
  return (
    <div className="flex flex-col gap-1 lg:gap-4 overflow-hidden bg-primaryGreen text-white bg-opacity-70 p-2 rounded mb-2">
      <p className="font-bold text-black opacity-100">Title: {article.title}</p>
      <p className="truncate">Description: {article.description}</p>
      <p>Reading time: {article.reading_time_minutes} minutes</p>
      <p>Published: {article.readable_publish_date}</p>
      <p>Reactions: {article.public_reactions_count}, comments: {article.comments_count}</p>
      <div className="flex flex-col gap-1">
        {article?.tag_list?.length ? (
          <div className="flex flex-wrap items-center gap-1">
            <p>Tags:</p>
            {article.tag_list.map((tag: string) => (
              <div
                key={tag}
                className="border border-2 boder-primaryGreen font-bold px-2 rounded"
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
        <button className="mt-4 bg-white hover:bg-green-600 text-black font-bold py-1 px-2 rounded mb-2">
          Read
        </button>
      </a>
    </div>
  )
}
