import Image from "next/image"
import Link from "next/link"
import { ArrowUp, Instagram, Twitter, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
             
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Elevating brands through authentic influencer partnerships and data-driven marketing strategies. Your
              success is our mission.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <ArrowUp className="h-5 w-5 text-purple-400 mr-2" />
              Services
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Instagram Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  TikTok Campaigns
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  YouTube Collaborations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Twitter Influence
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Analytics & Reporting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <ArrowUp className="h-5 w-5 text-purple-400 mr-2" />
              Company
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 ZUHD Media. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <ArrowUp className="h-4 w-4 text-purple-400 mr-2" />
            <span className="text-sm text-gray-400">Elevating brands to new heights</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
