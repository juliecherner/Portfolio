import Image from 'next/image'

const borderStyle = {
  borderRadius: '15px',
} as Record<string, string>

export default function About() {
  return (
    <div className="py-12 flex flex-row gap-12 text-justify">
      <Image
        src="/images/personal-photo.jpg"
        width={200}
        height={200}
        alt="Photo"
        style={borderStyle}
      />
      <div className="flex flex-col gap-8">
        <div>
          <div className="text-primaryGreen">
            I am delighted to introduce my personal website featuring my
            portfolio.
          </div>
          This digital platform encapsulates my growth and achievements as a
          Full Stack Engineer. Through my experience and projects, you will
          witness my dedication to mastering the art of web development.
        </div>
        <div>
          <div className="text-primaryGreen">
            Coding, to me, is the ultimate fusion of creativity and logic.
          </div>
          Choosing this career was driven by the thrill of unraveling complex
          challenges and crafting elegant solutions.
        </div>
      </div>
    </div>
  )
}
