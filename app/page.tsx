import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { Partner } from "@/components/parteners"

import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Partner/>
      <Services />
      <About />
      
      <Contact />
      <Footer />
    </main>
  )
}
