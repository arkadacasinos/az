import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const geist = Geist({ subsets: ['latin', 'cyrillic'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin', 'cyrillic'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Azino777 — официальный сайт и азино мобайл',
  description: 'Azino777: обзор официального сайта, мобильной версии, регистрации, входа и ответов на частые вопросы.',
  keywords: [
    'азино777 официальный',
    'азино мобайл',
    'азино777 официальный сайт',
    'азино',
    'азино777',
    'азино 777',
    'azino777 официальный',
    'azino777',
    'azino 777',
    'азино777 казино',
    'азино казино',
  ],
  generator: 'v0.app',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Azino777 — официальный сайт и азино мобайл',
    description: 'Информационный обзор Azino777: доступ, мобильная версия и регистрация.',
    url: '/',
    siteName: 'Azino777',
    locale: 'ru_RU',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f7f2',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <meta name="yandex-verification" content="c64d639dc1f65664" />
      </body>
    </html>
  )
}
