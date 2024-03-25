import Image from 'next/image'
import ShowButton from './showButton'
import { TABS } from '../navbar/constants'
import { contactIcons } from './constants'

export default function Contacts() {
  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="flex flex-col justify-center items-center">
        <div id={TABS.CONTACTS} className="font-bold">
          Let's be in touch!
        </div>
        <ShowButton />
      </div>
      <div className="grid grid-cols-2 lg:flex lg:flex-row items-between justify-bottom items-bottom gap-12 py-24">
        {contactIcons.map((icon) => (
          <div
            key={icon.altName}
            className="flex items-center justify-center block"
          >
            <a href={icon.url} target="_blank">
              <Image
                src={icon.relativePath}
                width={icon.width}
                height={icon.height}
                alt={icon.altName}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
