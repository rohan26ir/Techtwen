'use client';

import { useState, useRef, useEffect } from 'react';
import Lottie from "lottie-react";
import { X, Send, Trash2 } from "lucide-react";
import chatbot from '@/public/lottie/chatbot.json';

// Define your Q&A pairs here
const chatResponses: Record<string, string> = {
  // ... (keep all chatResponses the same)
  // Greetings
  'hello': 'Hi there! Welcome to TechTwen. How can we help you build your digital solution today?',
  'hi': 'Hello! Looking to bring your software idea to life? Let me help you!',
  'hey': 'Hey! Ready to discuss your next web or software project?',
  'good morning': 'Good morning! Let\'s kickstart your development journey today!',
  'good afternoon': 'Good afternoon! What web or software solution can we build for you?',
  'good evening': 'Good evening! How can we help transform your digital vision?',
  
  // Common questions
  'how are you': "I'm doing great! Excited to help you with your development needs. What project do you have in mind?",
  'what is your name': "I'm TechTwen's virtual assistant, here to guide you through our development services!",
  'who are you': "I'm your tech consultation assistant at TechTwen - a software development company specializing in web and mobile solutions.",
  'what can you do': 'I can help you learn about our development services, get project estimates, discuss technologies, and connect you with our team!',
  
  // Services - Web Development
  'what are your services': 'We specialize in custom web development, mobile apps, e-commerce solutions, SaaS platforms, API development, cloud solutions, and UI/UX design. What interests you?',
  'services': 'TechTwen offers: Web Development (React, Next.js, Node.js), Mobile Apps (React Native, Flutter), E-commerce, SaaS Development, API Integration, Cloud Deployment, and UI/UX Design.',
  'web development': 'We build modern, scalable web applications using cutting-edge technologies like React, Next.js, Vue.js, and Node.js. Need a custom web solution?',
  'mobile app': 'We develop cross-platform mobile apps using React Native and Flutter, delivering native performance for both iOS and Android. Want to discuss your app idea?',
  'e-commerce': 'We create powerful e-commerce platforms with Shopify, WooCommerce, or custom solutions with payment integration, inventory management, and analytics.',
  'website': 'We build responsive, SEO-friendly websites tailored to your business needs. Looking for a corporate site, portfolio, or landing page?',
  'app development': 'We develop custom applications - web apps, mobile apps, progressive web apps (PWA), and desktop applications. What type of app do you need?',
  
  // Technologies
  'technologies': 'We work with React, Next.js, Node.js, TypeScript, Python, Flutter, React Native, PostgreSQL, MongoDB, AWS, Docker, and more!',
  'tech stack': 'Our primary stack: Frontend - React/Next.js/Vue, Backend - Node.js/Python/Django, Mobile - React Native/Flutter, Database - PostgreSQL/MongoDB, Cloud - AWS/Azure/Vercel.',
  'react': 'Yes! React is one of our core technologies. We build dynamic, high-performance web apps with React and Next.js.',
  'nextjs': 'Absolutely! We specialize in Next.js for SEO-optimized, fast-loading web applications with server-side rendering.',
  'nodejs': 'We use Node.js for scalable backend development, RESTful APIs, and real-time applications.',
  'database': 'We work with SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Firebase) databases based on your project requirements.',
  
  // Pricing & Process
  'pricing': 'Our pricing depends on project scope, complexity, and timeline. Small projects start from $2,000, mid-size from $10,000, and enterprise solutions are custom-quoted. Want a detailed estimate?',
  'price': 'Project costs vary based on features and requirements. Share your project details at info@techtwen.com for a personalized quote!',
  'cost': 'Development costs depend on complexity, timeline, and tech stack. Contact us for a free consultation and accurate estimate!',
  'how much': 'Pricing varies by project. Simple websites: $2,000-$5,000, Complex web apps: $10,000-$50,000+, Mobile apps: $15,000-$80,000+. Let\'s discuss your specific needs!',
  'estimate': 'We provide free project estimates! Share your requirements at info@techtwen.com or schedule a consultation call.',
  'timeline': 'Project timelines vary: Simple websites (2-4 weeks), Web applications (2-4 months), Mobile apps (3-6 months), Enterprise solutions (6+ months). Depends on complexity!',
  'process': 'Our process: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development & Testing, 4) Deployment, 5) Maintenance & Support. We follow Agile methodology!',
  
  // Portfolio & Experience
  'portfolio': 'We\'ve built 100+ successful projects including e-commerce platforms, SaaS applications, booking systems, and mobile apps. Visit techtwen.com/portfolio to see our work!',
  'experience': 'TechTwen has 5+ years of experience delivering custom software solutions for startups, SMBs, and enterprises across various industries.',
  'projects': 'We\'ve completed projects in e-commerce, healthcare, education, finance, logistics, and more. What industry are you in?',
  'clients': 'We\'ve worked with startups, growing businesses, and established enterprises across the globe, delivering innovative digital solutions.',
  
  // Contact & Support
  'contact': 'Reach us at: Email: info@techtwen.com | Phone: +1 (555) 123-4567 | Or fill out our contact form at techtwen.com/contact',
  'email': 'Email us at info@techtwen.com - we typically respond within 24 hours!',
  'phone': 'Call us at +1 (555) 123-4567 (Mon-Fri, 9 AM - 6 PM EST) or schedule a call at techtwen.com/schedule',
  'hours': 'We\'re available Monday to Friday, 9 AM to 6 PM EST. For urgent inquiries, email info@techtwen.com anytime!',
  'working hours': 'Our team works Monday through Friday, 9 AM - 6 PM EST. We respond to emails and messages within 24 hours.',
  'location': 'We\'re a remote-first company serving clients worldwide, with team members across North America and Europe.',
  'meeting': 'Let\'s schedule a free consultation! Book a time at techtwen.com/schedule or email info@techtwen.com with your availability.',
  
  // Specific Queries
  'saas': 'We build scalable SaaS platforms with subscription management, user authentication, analytics, and integrations. Have a SaaS idea?',
  'api': 'We develop and integrate RESTful APIs, GraphQL APIs, third-party integrations (payment gateways, CRMs, etc.), and microservices architecture.',
  'maintenance': 'We offer ongoing maintenance and support packages including bug fixes, updates, security patches, and feature enhancements. Starting at $500/month.',
  'design': 'Our UI/UX team creates intuitive, modern designs with user research, wireframing, prototyping, and design systems. Design-first approach!',
  'startup': 'Perfect! We love working with startups. We offer MVP development, technical consulting, and scalable solutions within budget. Let\'s build your vision!',
  'mvp': 'We specialize in rapid MVP development to validate your idea quickly. Typical MVP timeline: 4-8 weeks. Let\'s discuss your concept!',
  
  // Support & Help
  'help': 'I can help with: Services info, Project estimates, Technology questions, Portfolio examples, Scheduling consultations, or General inquiries. What do you need?',
  'support': 'How can I assist? Ask about our development services, technologies, pricing, timeline, or schedule a free consultation!',
  'question': 'Sure! Ask me anything about web development, mobile apps, our process, technologies, or how we can help your business!',
  
  // Thanks & Goodbye
  'thank you': "You're welcome! Ready to start your project? Email info@techtwen.com or visit techtwen.com. Have a great day!",
  'thanks': "Happy to help! Feel free to reach out anytime at info@techtwen.com. Let's build something amazing together!",
  'bye': 'Goodbye! Remember, we\'re just an email away at info@techtwen.com. Looking forward to working with you!',
  'goodbye': 'Take care! Visit techtwen.com to learn more or contact us to start your project. See you soon!',
  
  // Default response
  'default': "Thanks for reaching out! I'd love to help you. I can answer questions about our development services, tech stack, pricing, or how we work. What would you like to know?"
};

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
  id: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load chat history from localStorage on mount
useEffect(() => {
  const loadChatHistory = () => {
    try {
      const savedMessages = localStorage.getItem('chatMessages');
      if (savedMessages) {
        const parsedMessages = JSON.parse(savedMessages);
        // Convert timestamp strings back to Date objects and ensure id exists
        const messagesWithDates = parsedMessages.map((msg: Message) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
          id: msg.id || 'msg-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9)
        }));
        setMessages(messagesWithDates);
      } else {
        // If no history, show welcome message
        setMessages([
          {
            text: "Hello! 👋 How can I help you today?",
            isBot: true,
            timestamp: new Date(),
            id: 'welcome-' + Date.now().toString()
          }
        ]);
      }
    } catch (error) {
      console.error('Error loading chat history:', error);
      // Fallback to welcome message
      setMessages([
        {
          text: "Hello! 👋 How can I help you today?",
          isBot: true,
          timestamp: new Date(),
          id: 'welcome-' + Date.now().toString()
        }
      ]);
    }
  };

  loadChatHistory();
}, []);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      try {
        localStorage.setItem('chatMessages', JSON.stringify(messages));
      } catch (error) {
        console.error('Error saving messages:', error);
      }
    }
  }, [messages]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const getResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase().trim();
    
    // Check for exact matches first
    if (chatResponses[lowercaseMessage]) {
      return chatResponses[lowercaseMessage];
    }
    
    // Check for partial matches
    for (const [key, value] of Object.entries(chatResponses)) {
      if (lowercaseMessage.includes(key)) {
        return value;
      }
    }
    
    // Return default response
    return chatResponses['default'];
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userQuestion = inputValue;

    // Add user message with id
    const userMessage: Message = {
      text: userQuestion,
      isBot: false,
      timestamp: new Date(),
      id: 'user-' + Date.now().toString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Show typing indicator
    setIsTyping(true);

    // Get bot response after a delay
    setTimeout(() => {
      const response = getResponse(userQuestion);
      const botMessage: Message = {
        text: response,
        isBot: true,
        timestamp: new Date(),
        id: 'bot-' + Date.now().toString()
      };
      
      setIsTyping(false);
      setMessages(prev => [...prev, botMessage]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Clear chat history
  const handleClearChat = () => {
    const confirmClear = window.confirm('Are you sure you want to clear the chat history?');
    if (confirmClear) {
      localStorage.removeItem('chatMessages');
      setMessages([
        {
          text: "Hello! 👋 How can I help you today?",
          isBot: true,
          timestamp: new Date(),
          id: 'welcome-' + Date.now().toString()
        }
      ]);
    }
  };

  return (
    <div className="fixed bottom-2 right-2 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-80 h-125 bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-[#442B3D] text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Lottie 
                  animationData={chatbot} 
                  loop={true}
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h3 className="font-semibold">Chat Assistant</h3>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-xs opacity-90">Online</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* Clear chat button */}
              <button
                onClick={handleClearChat}
                className="hover:bg-white/20 p-1.5 rounded-full transition-colors text-xs"
                aria-label="Clear chat"
                title="Clear chat history"
              >
                <Trash2 />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1.5 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                    message.isBot
                      ? 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                      : 'bg-[#442B3D] text-white rounded-tr-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-1.5 ${message.isBot ? 'text-gray-400' : 'text-white/60'}`}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="bg-white text-gray-800 shadow-sm border border-gray-100 rounded-2xl rounded-tl-none px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies (Optional) */}
          <div className="px-4 py-2 bg-white border-t border-gray-100">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {['Services', 'Pricing', 'Contact'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => {
                    setInputValue(suggestion);
                    setTimeout(() => handleSendMessage(), 100);
                  }}
                  className="px-3 py-1.5 text-xs bg-gray-100 hover:bg-gray-200 rounded-full whitespace-nowrap transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#442B3D] focus:border-transparent text-sm"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                className="bg-[#442B3D] text-white p-2.5 rounded-full hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!inputValue.trim() || isTyping}
                aria-label="Send message"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Button */}
      {!isOpen && (
        <div
          onClick={() => setIsOpen(true)}
          className="relative h-16 w-14 rounded-lg flex flex-col justify-center items-end cursor-pointer hover:scale-110 transition-transform group"
        >
          <Lottie 
            animationData={chatbot} 
            loop={true}
            className="relative z-20"
          />
          <div className="absolute bottom-0 z-10 h-10 w-14 rounded-lg bg-[#442B3D] group-hover:shadow-xl transition-shadow"></div>
          
          {/* Notification badge - only show if there are messages */}
          {messages.length > 1 && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center z-30 animate-pulse">
              {messages.length - 1}
            </div>
          )}
        </div>
      )}
    </div>
  );
}