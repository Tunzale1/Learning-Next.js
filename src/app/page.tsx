import Link from "next/link"

export default function Home() {
  return <><h1>Home Page, Welcome home!</h1>
  <Link href="./blog"> BLog</Link>
  <Link href="./products">Products</Link>
  </>
}
