import { Inter, Poppins, Urbanist } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['600'],
  display: 'swap',
})

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['800'],
  display: 'swap',
})

export const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
})