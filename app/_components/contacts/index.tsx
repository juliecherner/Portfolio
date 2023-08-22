import Image from 'next/image'
import { TABS } from '../navbar/constants'

export default function Contacts() {
  return (
    <main>
      <div id={TABS.CONTACTS}>Links</div>
      <div>
        <a href="https://wa.me/972533903033" target="_blank">
          <Image
            src="/images/WhatsApp-Digital_Stacked_Green.png"
            width={50}
            height={50}
            alt="Whatsapp"
          />
        </a>
      </div>
    </main>
  )
}
