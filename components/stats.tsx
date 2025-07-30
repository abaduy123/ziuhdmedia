import { ArrowUp } from "lucide-react"

export function Stats() {
  const stats = [
    { number: "500+", label: "Successful Campaigns", growth: "+25%" },
    { number: "50M+", label: "Total Reach", growth: "+40%" },
    { number: "1000+", label: "Influencer Partners", growth: "+30%" },
    { number: "95%", label: "Client Satisfaction", growth: "+5%" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl md:text-4xl font-bold text-purple-600">{stat.number}</span>
                <div className="flex items-center ml-2 text-green-500">
                  <ArrowUp className="h-4 w-4" />
                  <span className="text-sm font-medium">{stat.growth}</span>
                </div>
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
