import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arya's Website",
  description: "Created by Arya, for yall",
};

export function generateThemeScript() {
  return `
    (function() {
      try {
        const html = document.documentElement;
        const theme = localStorage.getItem('hs_theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = theme === 'dark' || (theme === 'auto' && prefersDark);
        const isLight = theme === 'light' || (theme === 'auto' && !prefersDark);

        if (isDark) html.classList.add('dark');
        if (isLight) html.classList.remove('dark');
      } catch (_) {}
    })();
  `;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: generateThemeScript()}}/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
