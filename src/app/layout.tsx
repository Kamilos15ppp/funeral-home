import type { Metadata } from 'next';
import { seo } from '@/utils/seo';

import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pl'>
      <body>{children}</body>
    </html>
  );
}
