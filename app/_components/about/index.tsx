import Image from 'next/image'
import { TABS } from '../navbar/constants'
import GeneralSkills from './generalSkills/index'

const borderStyle = {

    borderRadius: '15px',




} as Record<string, any>

const topics = ['Full Stack', 'Web development', 'CI/CD', 'Latest technologies']

export default function About() {
  return (
    <div>
      <div
        id={TABS.ABOUT}
        className="pt-28 md:pt-36 xl:pt-44 pb-12 px-4 flex flex-col  md:grid md:grid-cols-12 items-center gap-12 text-justify md:flex-row"
      >
        <div className="h-full md:col-span-4 lg:col-span-3">
          <Image
            src="/images/personal-photo.jpg"
            alt="Photo"
            style={borderStyle}
            priority={true}
            height={0}
            width={320}
          />
        </div>
        <div className="flex flex-col justify-center gap-8 md:col-span-8 lg:col-span-9">
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
          <div className="">
            <div className="text-primaryGreen font-bold">
              Coding, to me, is the ultimate fusion of creativity and logic.
            </div>
            Choosing this career was driven by the thrill of unraveling complex
            challenges and crafting elegant solutions.
          </div>
          <div>
            <div className="mb-2 lg:mb-4">Speak with me about:</div>
            <div className="flex flex-col md:flex-row gap-2 lg:gap-4">
           
              {topics.map((topic: string) => (
                <div
                  className="inline-block bg-primaryGreen hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
                  key={topic}
                >
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <GeneralSkills />
      <div className="flex flex-col bg-gray-100 border border-gray-300 rounded-lg p-4 backdrop-blur-lg">
        <div className="flex justify-center">
          <Image
            src="/images/green-tree.png"
            alt="Generated with Gencraft"
            height={0}
            width={500}
          />
        </div>
        <p className="text-sm text-center">*Generated with Gencraft</p>
      </div>
    </div>
  )
}
