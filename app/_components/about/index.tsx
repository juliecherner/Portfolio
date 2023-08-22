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
      <div className="h-full">
        <Image
          src="/images/personal-photo.jpg"
          alt="Photo"
          style={borderStyle}
          priority={true}
          height={0}
          width={320}
        />
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <div className="text-primaryGreen font-bold">
            My name is Julie Cherner and I am a Full Stack Engineer.
          </div>
          <div>
            My pleasure is to introduce my personal website featuring my
            portfolio. This digital platform encapsulates my interests, growth
            and achievements. Through this experience, you will witness my
            dedication to mastering the art of web development.
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
