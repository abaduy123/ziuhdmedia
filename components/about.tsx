import { ArrowUp, Award, Users, Zap } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-4">
              <ArrowUp className="h-6 w-6 text-purple-600 mr-2" />
              <span className="text-purple-600 font-semibold">About ZUHD Media</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Driving Growth Through
              <span className="text-purple-600"> Authentic Influence</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              At ZUHD Media, we believe in the power of authentic connections. Our team of experts specializes in
              creating influencer marketing campaigns that don't just reach audiences—they resonate with them.
            </p>

            <p className="text-gray-600 mb-8">
              With years of experience in digital marketing and a network of trusted influencers across all major
              platforms, we help brands tell their stories in ways that drive real engagement and measurable results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Expert Team</h3>
                <p className="text-sm text-gray-600">Industry professionals with proven track records</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Vast Network</h3>
                <p className="text-sm text-gray-600">1000+ verified influencers across all niches</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-3">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Fast Results</h3>
                <p className="text-sm text-gray-600">Quick campaign setup and rapid ROI delivery</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-8">
              <Image
                src="/in.webp?height=400&width=500"
                alt="ZUHD Media Team"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <ArrowUp className="h-5 w-5 text-green-500" />
                <span className="text-sm font-semibold text-gray-900">500% Average ROI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
