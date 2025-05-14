import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'color theme app',
  description: 'Created by satyam singh',
  generator: 'satyam singh'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
