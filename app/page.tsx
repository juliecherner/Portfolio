import dynamic from 'next/dynamic'
import Navbar from '@/components/navbar'
import About from '@/components/about'
import Contacts from '@/components/contacts'
import Action from '@/components/action'

const NoSSRSkills = dynamic(() => import('@/components/skills'), { ssr: false })

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-12">
      <Navbar />
      <About />
      <NoSSRSkills />
      <Action />
      <Contacts />
    </main>
  )
}
