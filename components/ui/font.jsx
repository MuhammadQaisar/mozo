import { Montserrat, Inter } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['600'],
  display: 'swap',
})