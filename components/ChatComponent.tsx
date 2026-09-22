'use client'

import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React , { useState } from "react";

interface chat {
  message : string 
  response : string
}
const APP_NAME = "ChatBot";
const APP_TAGLINE = "Ask anything and pick up where you left off";

export default function ChatComponent() {
  const [Message, setMessage] = useState("")
  const handleChatbot = async() => {
    if (Message.trim() === ''){
      return ''
    }

    setMessage(Message)
    const response = await fetch("api/chatbot" , {
      "method" : "POST" , 
      headers : {
        "Content-type" : "application/json"
      } ,
      body : JSON.stringify({
        "message" : Message
      })
    })

    const data = await response.json()
    console.log(data)
    console.log(Message)
  }

  return (
    <main className="font-mono-github flex h-screen min-w-0 flex-1 flex-col bg-white text-[#212529]">
      {/* ================= HEADER ================= */}
      <header className="flex items-center gap-4 border-b border-gray-200 px-6 py-4">
        <SidebarTrigger className="text-[#6C757D] hover:bg-[#f1f3f5] hover:text-[#212529]" />
        <div>
          <h1 className="text-lg font-semibold tracking-tight text-[#212529]">
            {APP_NAME}
          </h1>
          <p className="font-mono text-xs text-[#6C757D]">{APP_TAGLINE}</p>
        </div>
      </header>

      {/* ================= MESSAGES ================= */}
      <section className="flex-1 space-y-6 overflow-y-auto px-6 py-8">
        <div className="flex h-full items-center justify-center text-sm text-[#6C757D]">
          Start a conversation by typing a message below.
        </div>
      </section>

      {/* ================= INPUT ================= */}
      <footer className="border-t border-gray-200 bg-white p-4">
        <div className="mx-auto flex max-w-4xl gap-3">
          <Input
          value = {Message} 
          onChange = {(e) => {setMessage(e.target.value)}}
            placeholder={`Ask ${APP_NAME} anything...`}
            className="h-11 w-full border-gray-200 bg-white text-[#212529] placeholder:text-[#6C757D] focus-visible:border-[#007BFF] focus-visible:ring-[#007BFF]/20 shadow-none"
          />

          <button
            type="submit"
            className="h-11 rounded-sm bg-[#007BFF] px-5 font-semibold text-white transition-all duration-200 hover:bg-[#0069d9] shadow-none"
            onClick = {handleChatbot}
          >
            Send
          </button>
        </div>
      </footer>
    </main>
  );
}