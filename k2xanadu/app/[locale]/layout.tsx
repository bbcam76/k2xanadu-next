import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const dynamic = 'force-static'

async function getMessages(locale: string) {
  try {
    return (await import(`@/locales/${locale}/common.json`)).default
  } catch {
    notFound()
  }
}

export default async function RootLayout({
  children, params
}: { children: ReactNode; params: { locale: string } }) {
  const messages = await getMessages(params.locale)
  return (
    <html lang={params.locale}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Header />
          <main className="mx-auto max-w-7xl px-4 py-10">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
