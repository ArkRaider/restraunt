'use client';

import { ThemeProvider } from '../context/ThemeContext';
import Header from './Header';
import Footer from './Footer';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
