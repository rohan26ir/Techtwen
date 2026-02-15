'use client'

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Log form data as JSON
    console.log('Form Data (JSON):', JSON.stringify(formData, null, 2));
    console.log('Form Data (Object):', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Form submitted successfully! Check console for JSON data.');
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full bg-background p-4">
      <div className="">
        

        {/* Form Container */}
        <div className="bg-card border border-border rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.05)] dark:shadow-[8px_8px_20px_rgba(0,0,0,0.3),-8px_-8px_20px_rgba(255,255,255,0.02)]">
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 md:space-y-8">
            {/* Full Name Field */}
            <div className="space-y-2 sm:space-y-3">
              <label 
                htmlFor="name" 
                className="block text-xs sm:text-sm font-medium text-foreground pl-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-background border border-border rounded-lg sm:rounded-xl md:rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.05)] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.3),-4px_-4px_10px_rgba(255,255,255,0.02)] focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground transition-all duration-300 text-sm sm:text-base"
                placeholder="John Doe"
                required
              />
            </div>

            {/* Email Address Field */}
            <div className="space-y-2 sm:space-y-3">
              <label 
                htmlFor="email" 
                className="block text-xs sm:text-sm font-medium text-foreground pl-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-background border border-border rounded-lg sm:rounded-xl md:rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.05)] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.3),-4px_-4px_10px_rgba(255,255,255,0.02)] focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground transition-all duration-300 text-sm sm:text-base"
                placeholder="john@example.com"
                required
              />
            </div>

            {/* Subject Of Interest Field */}
            <div className="space-y-2 sm:space-y-3">
              <label 
                htmlFor="subject" 
                className="block text-xs sm:text-sm font-medium text-foreground pl-1"
              >
                Subject Of Interest
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-background border border-border rounded-lg sm:rounded-xl md:rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.05)] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.3),-4px_-4px_10px_rgba(255,255,255,0.02)] focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground transition-all duration-300 text-sm sm:text-base"
                placeholder="Regarding Project"
                required
              />
            </div>

            {/* Message Field */}
            <div className="space-y-2 sm:space-y-3">
              <label 
                htmlFor="message" 
                className="block text-xs sm:text-sm font-medium text-foreground pl-1"
              >
                How may we assist you?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 sm:px-5 md:px-6 py-3 sm:py-3.5 md:py-4 bg-background border border-border rounded-lg sm:rounded-xl md:rounded-2xl shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.05)] dark:shadow-[4px_4px_10px_rgba(0,0,0,0.3),-4px_-4px_10px_rgba(255,255,255,0.02)] focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground resize-none transition-all duration-300 text-sm sm:text-base"
                placeholder="Give us more info..."
                required
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2 sm:pt-3 md:pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 md:py-5 bg-primary text-primary-foreground font-medium rounded-lg sm:rounded-xl md:rounded-2xl hover:bg-primary/90 disabled:bg-primary/50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 text-sm sm:text-base md:text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Your Message</span>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}