import Link from 'next/link'
export default async function notFound() {
  return (
    <div>
      <div>Page is not found</div>
      <Link href="/">Home page</Link>
    </div>
  )
}
