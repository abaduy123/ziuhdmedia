import { ArrowUp, Instagram, Youtube, TwitterIcon as TikTok, Twitter, BarChart3, Target } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      icon: Instagram,
      title: "Instagram Marketing",
      description: "Leverage Instagram influencers to showcase your brand through stories, posts, and reels.",
      features: ["Story campaigns", "Feed posts", "Reels content", "IGTV partnerships"],
    },
    
    {
      icon: Youtube,
      title: "YouTube Collaborations",
      description: "Partner with YouTube creators for long-form content and product integrations.",
      features: ["Sponsored videos", "Product reviews", "Channel partnerships", "Live streams"],
    },
    
   
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <ArrowUp className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive influencer marketing solutions to elevate your brand across all major platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader>
                <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                  <service.icon className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <ArrowUp className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
