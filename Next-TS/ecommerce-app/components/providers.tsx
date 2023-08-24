"use client"

import { CartProvider } from "use-shopping-cart"

import { Toaster } from "@/components/ui/toaster"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

interface Props {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return (
    <CartProvider currency="USD" shouldPersist cartMode="checkout-session">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        <TailwindIndicator/>
      </ThemeProvider>
    </CartProvider>
  )
}