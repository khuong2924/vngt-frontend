import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata = {
  title: 'SEO Website',
  description: 'Website được tối ưu SEO với Next.js',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-[var(--font-inter)] bg-white text-black">{children}</body>
    </html>
  )
} 