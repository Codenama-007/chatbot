// This will be the main page 
import React from 'react'
import { SidebarProvider , SidebarInset} from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/AppSidebar'
import ChatComponent from "@/components/ChatComponent"

const page = () => {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <SidebarInset>
        <ChatComponent/>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default page
