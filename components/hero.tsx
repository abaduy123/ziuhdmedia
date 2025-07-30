import { ArrowUp, TrendingUp, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 text-purple-600">
              <ArrowUp className="h-8 w-8" />
              <TrendingUp className="h-8 w-8" />
              <ArrowUp className="h-8 w-8" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Elevate Your Brand with
            <span className="text-purple-600 block">Influencer Marketing</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with the right influencers, amplify your message, and drive real results. ZUHD Media transforms your
            brand's story into viral success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3" >
              <a href="#contact">
                Start Your Campaign
                <ArrowUp className="ml-2 h-5 w-5" />
              </a>
              
            </Button>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Authentic Connections</h3>
              <p className="text-gray-600 text-center">
                Build genuine relationships between your brand and target audience
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Measurable Growth</h3>
              <p className="text-gray-600 text-center">
                Track ROI and engagement with detailed analytics and reporting
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Viral Impact</h3>
              <p className="text-gray-600 text-center">
                Create content that resonates and spreads across social platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
