"use client"

import { ChatbotUISVG } from "@/components/icons/chatbotui-svg"
import { IconArrowRight } from "@tabler/icons-react"
import { useTheme } from "next-themes"
import Link from "next/link"

export default function HomePage() {
  const { theme } = useTheme()

  return (
    <div className="flex size-full flex-col items-center justify-center">

      <div className="mt-2 text-4xl font-bold">Enterprise Chatbot</div>
      <div className="mt-2 text-4xl font-bold">Responsible AI Acknowledgement</div>

      {/* Responsible AI Acknowledgement */}
      <div className="mt-2 text-center text-xl">
        By logging in I am agreeing to use AI responsibly: I will not submit PII/client data. I remain personally accountable.
      </div>
      
      <Link
        className="mt-4 flex w-[200px] items-center justify-center rounded-md bg-blue-500 p-2 font-semibold"
        href="/login"
      >
        Start Chatting
        <IconArrowRight className="ml-1" size={20} />
      </Link>
    </div>
  )
}
