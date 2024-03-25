import { Article as ArticleType } from '@/types/article'

type ArticleProps = {
  article: ArticleType
}
export default function Article({ article }: ArticleProps) {
  return (
    <div className="flex flex-col gap-1 lg:gap-4 overflow-hidden bg-opacity-70 p-2 rounded mb-2">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 bg-primaryGreen opacity-60 font-bold text-white px-4 py-2 rounded">
        <p>
          {article.title}
        </p>

        <a href={article.url} target="_blank">
          <button className="text-primaryGreen bg-white hover:text-white hover:bg-green-600 py-1 px-6 rounded">
            Read
          </button>
        </a>
      </div>
      <p className="truncate font-bold">Description: {article.description}</p>
      <p>
        Reading time: {article.reading_time_minutes} minutes, published:{' '}
        {article.readable_publish_date}
      </p>
      <p>
        Reactions: {article.public_reactions_count}, comments:{' '}
        {article.comments_count}
      </p>
      <div className="flex flex-col gap-1">
        {article?.tag_list?.length ? (
          <div className="flex flex-wrap items-center gap-1">
            <p className="font-bold">Tags:</p>
            {article.tag_list.map((tag: string) => (
              <div
                key={tag}
                className="text-primaryGreen border border-2 border-primaryGreen font-bold px-2 rounded"
              >
                {tag}
              </div>
            ))}
          </div>
        ) : (
          <p>No tags</p>
        )}
      </div>
    </div>
  )
}
