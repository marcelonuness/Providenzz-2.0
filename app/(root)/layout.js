import { Red_Hat_Display } from 'next/font/google'


const redHatDisplay = Red_Hat_Display({ subsets: ['latin'] })


export const metadata = {
  title: 'Providenzz - Home',
  description: 'Home Page',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        
        <body className={`${redHatDisplay.className}`}> 
            {children}           
        </body>
      </html>
  )
}
