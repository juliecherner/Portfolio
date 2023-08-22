const barsList = ['About me', 'Skills', 'Action', 'Contact']
export default function Navbar() {
  return (
    <main>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        Julie navbar
      </div>
      <div>
        {barsList.map((barItem) => (
          <div key={barItem}>{barItem}</div>
        ))}
      </div>
    </main>
  )
}
