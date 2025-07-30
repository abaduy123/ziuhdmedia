"use client"

import type React from "react"

import { useState, useRef } from "react"
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import emailjs from "@emailjs/browser"

export function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const result = await emailjs.sendForm(
        "service_kj6ucyu", // Your service ID
        "template_oxiuma6", // Your template ID
        form.current,
        "kLCSJh0_YtjpC0bnw", 
      )

      console.log("Email sent successfully:", result.text)
      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you within 24 hours.",
      })

      // Reset form
      form.current.reset()
    } catch (error) {
      console.error("Email sending failed:", error)
      setSubmitStatus({
        type: "error",
        message: "Sorry, there was an error sending your message. Please try again or contact us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <ArrowUp className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Elevate Your Brand?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss how ZUHD Media can help you achieve your influencer marketing goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        id="user_name"
                        name="user_name"
                        type="text"
                        required
                        className="border-gray-300 focus:border-purple-600 focus:ring-purple-600"
                      />
                    </div>
                    <div>
                      <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="user_email"
                        name="user_email"
                        type="email"
                        required
                        className="border-gray-300 focus:border-purple-600 focus:ring-purple-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="user_company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <Input
                      id="user_company"
                      name="user_company"
                      type="text"
                      className="border-gray-300 focus:border-purple-600 focus:ring-purple-600"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="border-gray-300 focus:border-purple-600 focus:ring-purple-600"
                      placeholder="Tell us about your project and goals..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <ArrowUp className="ml-2 h-5 w-5" />
                  </Button>
                </form>

                {submitStatus.type && (
                  <div
                    className={`mt-6 p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-50 border border-green-200 text-green-800"
                        : "bg-red-50 border border-red-200 text-red-800"
                    }`}
                  >
                    <div className="flex items-center">
                      <ArrowUp
                        className={`h-5 w-5 mr-2 ${submitStatus.type === "success" ? "text-green-600" : "text-red-600"}`}
                      />
                      <p className="font-medium">{submitStatus.message}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">contact@zuhdmedia.site</p>
                    
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+966 578932055</p>
                    
                  </div>
                </div>

                
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  )
}
