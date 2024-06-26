import * as React from 'react'
import ThemeRegistry from '@/util/ThemeRegistry/ThemeRegistry'
import { getSanityNavigationElements, getFooterElements } from '@/util/sanity'
import { ClientLayout } from '@/components/language/ClientLayout'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headerData = await getSanityNavigationElements()
  const footerData = await getFooterElements()

  return (
    <html lang='en'>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ThemeRegistry>
          <ClientLayout headerData={headerData} footerData={footerData}>
            {children}
          </ClientLayout>
        </ThemeRegistry>
      </body>
    </html>
  )
}
export const metadata = {
  title: 'Hulen',
  description: 'Hulen',
}
