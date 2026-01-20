"use client"

import { ArrowUp } from "lucide-react"
import Image from "next/image"

export function Partner() {
  const brands = [
    {
      name: "OpusClip",
      logo: "/OpusClip.png",
    },
    {
      name: "ExitLag",
      logo: "/ExitLag.png",
    },
    {
      name: "FlexiSpot",
      logo: "/Flexispot.png",
    },
  ]

  return (
    <section id="partners" className="py-20 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ArrowUp className="h-6 w-6 text-purple-600 mr-2" />
            <span className="text-purple-600 font-semibold">Our Partners</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Brands That <span className="text-purple-600">Trust Us</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with forward-thinking brands to deliver impactful influencer marketing campaigns
            that drive real results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="p-8 transition flex items-center justify-center"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={100}
                height={50}
                className="object-contain hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
