'use client';

import Lottie from "lottie-react";
// import { Bot } from "lucide-react";
import chatbot from '@/public/lottie/chatbot.json'


export default function ChatBot() {
  return(
    <div className="fixed bottom-2 right-2 z-50 cursor-pointer">
      <div>

        <div className="relative h-16 w-14 rounded-lg   flex flex-col justify-center items-end ">
          <Lottie 
          animationData={chatbot} 
          loop={true}
          className="relative z-20"
          ></Lottie>

          <div className="absolute bottom-0 z-10 h-10 w-14 rounded-lg bg-[#442B3D]"></div>
        </div>

      </div>
    </div>
  )
}