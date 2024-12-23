import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

const jetbrainsMono = localFont({
  src: [
    {
      path: './fonts/JetBrainsMono-Regular.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/JetBrainsMono-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/JetBrainsMono-Light.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/JetBrainsMono-SemiBold.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: './fonts/JetBrainsMono-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Lowercase B Ventures',
  description: 'Lowercase B Ventures backs transformative AI-native startups.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
