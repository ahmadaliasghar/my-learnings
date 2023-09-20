"use client"

import { CartProvider } from "use-shopping-cart"

import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { loadStripe } from "@stripe/stripe-js"

interface Props {
  children: React.ReactNode
}
const stripePromise:string = "pk_test_51NQ6emFiqR7NdfZAS0hIjXdEs04e1etMHL7WW2AGlKdpX6jXZOLFeLKqggUTXyknDalUVbLbCJXljYupqEJrW0Vq00jNNTROu4";

export function Providers({ children }: Props) {
  return (
    <CartProvider currency="USD" shouldPersist cartMode="checkout-session" stripe={stripePromise}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        <TailwindIndicator/>
      </ThemeProvider>
    </CartProvider>
  )
}
