'use client'
import { useState } from 'react'

export default function ShowButton() {
  const [areContactsShown, setShowContacts] = useState<boolean>(false)
  return (
    <div className="h-12 mt-6">
      {areContactsShown ? (
        <div> juliechernen@gmail.com | +972 53 390 30 33</div>
      ) : (
        <button
          className="bg-primaryGreen hover:bg-green-600 text-white font-bold py-1 px-2 rounded"
          onClick={() => setShowContacts(true)}
        >
          See email and phone
        </button>
      )}
    </div>
  )
}
