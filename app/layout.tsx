import type { Metadata } from 'next';
import Header from './components/Header/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio Ehsonjon',
  description: "This is Ehsonjon Komiljanov's Portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="favicon.png"
        type="image/x-icon"
      />
      <body className={'bg-slate-950'}>
        <Header />
        {children}
      </body>
    </html>
  );
}
