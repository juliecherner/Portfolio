'use client'
import { useState } from 'react'

export default function ShowButton() {
  const [areContactsShown, setShowContacts] = useState<boolean>(false)
  return (
    <div className="h-12 mt-6 text-center">
      {areContactsShown ? (
        <div className="flex flex-col md:flex-row">
          <p>juliecherner.dev@gmail.com</p>
          <span className="hidden md:inline px-2">|</span>
          <p>+972 53 390 30 33</p>
        </div>
      ) : (
        <button
          className="bg-primaryGreen hover:bg-green-600 text-white font-bold py-1 px-6 rounded"
          onClick={() => setShowContacts(true)}
        >
          See email and phone
        </button>
      )}
    </div>
  )
}
