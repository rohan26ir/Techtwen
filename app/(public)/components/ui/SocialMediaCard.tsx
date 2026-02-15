import Link from "next/link"
import { Facebook, Phone, Mail } from "lucide-react"

export default function SocialMediaCard() {
  const SocialMedia = [
    {
      id: 1,
      Name: "Facebook",
      description: 'Stay updated with our latest news, products, and community updates on Facebook.',
      icon: Facebook,
      CTA: "Like the page",
      path: "https://facebook.com/@techtwen",
      color: "group-hover:text-[#1877F2]",
      darkColor: "dark:group-hover:text-[#1877F2]"
    },
    {
      id: 2,
      Name: "Phone",
      description: 'Get in touch with our team directly. We\'re available Monday to Friday, 9 AM - 6 PM.',
      icon: Phone,
      CTA: "Send a message",
      path: "tel:+1234567890",
      color: "group-hover:text-[#10B981]",
      darkColor: "dark:group-hover:text-[#10B981]"
    },
    {
      id: 3,
      Name: "Email",
      description: 'Schedule a consultation call with our experts to discuss your needs and goals.',
      icon: Mail,
      CTA: "Book a call",
      path: "mailto:contact@techtwen.com",
      color: "group-hover:text-[#EF4444]",
      darkColor: "dark:group-hover:text-[#EF4444]"
    },
  ]

  return (
    <div className="w-full p-4 ">
      <div className="">
        

        {/* Social Media Cards Grid */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
          {SocialMedia.map((item) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.id}
                className="group w-full"
              >
                <div className="bg-card border border-border w-full rounded-lg sm:rounded-xl md:rounded-2xl p-4  shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.05)] dark:shadow-[2px_2px_8px_rgba(0,0,0,0.3),-2px_-2px_8px_rgba(255,255,255,0.02)] hover:shadow-[4px_4px_8px_rgba(0,0,0,0.15),-4px_-4px_8px_rgba(255,255,255,0.08)] dark:hover:shadow-[4px_4px_12px_rgba(0,0,0,0.4),-4px_-4px_12px_rgba(255,255,255,0.03)] transition-all duration-300">
                  
                  {/* Content Container */}
                  <div className="flex flex-col items-start gap-4">
                    {/* Icon Container */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-background border border-border rounded-lg sm:rounded-xl shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.05)] dark:shadow-[2px_2px_6px_rgba(0,0,0,0.3),-2px_-2px_6px_rgba(255,255,255,0.02)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent 
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-foreground transition-colors duration-300 ${item.color} ${item.darkColor}`} 
                      />
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 w-full space-y-3 sm:space-y-4">
                      {/* Description */}
                      <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                        {item.description}
                      </p>

                      {/* CTA Link */}
                      <Link 
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <div className="bg-primary text-primary-foreground px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-medium text-xs sm:text-sm md:text-base hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg hover:translate-y-0.5 active:translate-y-0 w-fit">
                          {item.CTA}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}