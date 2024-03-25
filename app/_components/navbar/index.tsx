import { TABS } from './constants'

const barsList = [
  {
    id: 1,
    name: TABS.ABOUT,
    text: 'About',
    anchorId: '#about',
  },
  { id: 2, name: TABS.SKILLS, text: 'Skills', anchorId: '#skills' },
  { id: 3, name: TABS.EXPERIENCE, text: 'Experience', anchorId: '#experience' },
  { id: 4, name: TABS.CONTACTS, text: 'Contacts', anchorId: '#contacts' },
]

export default function Navbar() {
  return (
    <nav className="w-full fixed px-12 md:px-24 lg:px-64  py-8 lg:py-12 text-primaryGreen font-bold bg-white">
      <div className="block md:hidden">Julie Cherner, Full Stack Engineer</div>
      <div className="hidden md:flex md:flex-wrap md:justify-between md:gap-2">
        {barsList.map((barItem) => (
          <a href={barItem.anchorId} key={barItem.id}>
            {barItem.text}
          </a>
        ))}</div>
    </nav>
  )
}
