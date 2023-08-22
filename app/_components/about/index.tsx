import Image from 'next/image'
import { TABS } from '../navbar/constants'

const borderStyle = {
  borderRadius: '15px',
} as Record<string, string>

const topics = [
  'Full Stack development',
  'CI/CD',
  'Design system',
  'Latest technologies',
]

export default function About() {
  return (
    <div id={TABS.ABOUT} className="pt-28 flex flex-row gap-12 text-justify">
      <div className="h-250 w-auto">
        <Image
          src="/images/personal-photo.jpg"
          alt="Photo"
          style={borderStyle}
          priority={true}
          height={270}
          width={250}
        />
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <div className="text-primaryGreen font-bold">
            I am delighted to introduce my personal website featuring my
            portfolio.
          </div>
          <div>
            This digital platform encapsulates my growth and achievements as a
            Full Stack Engineer. Through my experience and projects, you will
            witness my dedication to mastering the art of web development.
          </div>
        </div>
        <div>
          <div className="text-primaryGreen font-bold">
            Coding, to me, is the ultimate fusion of creativity and logic.
          </div>
          Choosing this career was driven by the thrill of unraveling complex
          challenges and crafting elegant solutions.
        </div>
        <div>
          <div className="pb-2">Speak with me about:</div>
          <div className="flex flex-row gap-2">
            {topics.map((topic: string) => (
              <div
                className="bg-primaryGreen hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
                key={topic}
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
