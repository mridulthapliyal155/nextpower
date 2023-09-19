import Link from "next/link"

export default function Home() {
  return (
    <main>
      <Link href={"/about"}>Navigate to About page</Link>
      <h1>HOME</h1>
    </main>
  )
}
