import Link from "next/link"
export default function PageList() {
  const productId = 100
  return (
  <>
  <Link href="/">Home</Link>
  <h1>Products</h1>
  <h2><Link href="products/1">Product 1</Link></h2>
  <h2><Link href="products/2">Product 2</Link></h2>
  <h2><Link href="products/3">Product 3</Link></h2>
  <h2><Link href={`products/${productId}`}>Product 100</Link></h2>

  </>
  )
}
