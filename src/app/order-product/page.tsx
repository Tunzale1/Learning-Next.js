"use client"
import { useRouter } from "next/navigation"

export default function OrderProduct() {
    const router = useRouter()

    const handleClick = () => {
        alert("Placing your order")
        router.push("/")
    } 
  return (
    <div>
        <h1>Order Product</h1>
        <button onClick={handleClick}>Place Order!</button>
    </div>
  )
}
