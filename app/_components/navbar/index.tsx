const barsList = ['About', 'Skills', 'Action', 'Contact']
export default function Navbar() {
  return (
    <div className="text-primaryGreen font-bold">
      <div className="flex flex-row align-between gap-24">
        {barsList.map((barItem) => (
          <div key={barItem}>{barItem}</div>
        ))}
      </div>
    </div>
  )
}
