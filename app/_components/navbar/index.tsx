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
    <nav className="w-full fixed flex flex-col items-center justify-between py-6 text-primaryGreen font-bold bg-white text-lg">
      <div className="flex flex-row align-between gap-24">
        {barsList.map((barItem) => (
          <a href={barItem.anchorId} key={barItem.id}>
            {barItem.text}
          </a>
        ))}
      </div>
    </nav>
  )
}
