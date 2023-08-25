import './globals.css'
import { Red_Hat_Display } from 'next/font/google'
import SideBar from "@/components/sideBar.js"
import HeaderDashboard from '@/components/headerDashboard'
import Head from 'next/head'

const redHatDisplay = Red_Hat_Display({ subsets: ['latin'] })


export const metadata = {
  title: 'Providenzz - Dashboard',
  description: 'Dashboard',
}

export default function DashboardLayout({ children }) {
  return (
      <html lang="en">
        
        <body className={`${redHatDisplay.className}`}> 
        
        
                     
          <div className="h-screen flex flex-col">
                <div className="flex flex-1">
                    <div className='fixed'>
                      <SideBar></SideBar>
                    </div>
                    <div className='w-full flex flex-col items-center p-2 bg-scroll ml-64'>
                      <HeaderDashboard></HeaderDashboard>                      
                      {children}
                    </div>
                </div>
            </div>
        </body>
      </html>
  )
}
