import React, {useState} from "react"
import { loadStripe } from "@stripe/stripe-js"
export default function Home(){
  
  const redirectToCheckout = async (event) => {
    event.preventDefault()
    const stripe = await  loadStripe("pk_test_51Hw43jD4nu4HBHFEwBBKxLhHvcjwQ9ctapobZRK4yFvrzTkZCRYMUkUcSnskbxXJSIpvwWtAsEsKJQ43UtmZE3d200R8PsbCQW")
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1Hw49uD4nu4HBHFEaTkMVTpz", quantity: 1 }],
      successUrl: `http://localhost:8000/payment-success`,
      cancelUrl: `http://localhost:8000/payment-error`,
    })
    if (error) {
      console.warn("Error:", error)
    }
  }

return <button onClick={redirectToCheckout}>Buy Laptops</button>
}