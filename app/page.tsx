import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import About from '@/components/about'
import Contacts from '@/components/contacts'
import Animation from '@/components/animation'

const NoSSRExperience = dynamic(() => import('@/components/experience'), {
  ssr: false,
})

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between px-12 md:px-16 lg:px-24 xl:px-44 md:text-lg lg:text-xl xl:text-2xl lg:leading-relaxed">
      <Navbar />
      <About />
      <NoSSRExperience />
      <Animation />
      <Contacts />
    </main>
  )
}
