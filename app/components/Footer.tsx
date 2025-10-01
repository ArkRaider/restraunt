import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-background-dark border-t border-text/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-heading text-xl sm:text-2xl font-bold text-text dark:text-white inline-block mb-4 sm:mb-6">
              Savoria
            </Link>
            <p className="text-xs sm:text-sm text-text-muted dark:text-white/70 leading-relaxed">
              Experience culinary excellence with chef-crafted dishes made from the finest ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-text dark:text-white font-medium mb-4 sm:mb-6">
              Explore
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link href="/" className="text-xs sm:text-sm text-text-muted dark:text-white/70 hover:text-text dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-xs sm:text-sm text-text-muted dark:text-white/70 hover:text-text dark:hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-xs sm:text-sm text-text-muted dark:text-white/70 hover:text-text dark:hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-xs sm:text-sm text-text-muted dark:text-white/70 hover:text-text dark:hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-text dark:text-white font-medium mb-4 sm:mb-6">
              Contact
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-text-muted dark:text-white/70">
              <li>
                <a href="tel:+1234567890" className="hover:text-text dark:hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="mailto:info@savoria.com" className="hover:text-text dark:hover:text-white transition-colors">
                  info@savoria.com
                </a>
              </li>
              <li>
                123 Gourmet Street<br />
                Culinary District, CD 12345
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xs sm:text-sm uppercase tracking-[0.2em] text-text dark:text-white font-medium mb-4 sm:mb-6">
              Hours
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-text-muted dark:text-white/70">
              <li>Mon - Fri: 11AM - 10PM</li>
              <li>Saturday: 10AM - 11PM</li>
              <li>Sunday: 10AM - 9PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-text/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-text-muted dark:text-white/70">
            &copy; {currentYear} Savoria. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 sm:gap-6">
            <a
              href="#"
              className="text-text-muted dark:text-white/70 hover:text-text dark:hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-text-muted dark:text-white/70 hover:text-text dark:hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            </a>
            <a
              href="#"
              className="text-text-muted dark:text-white/70 hover:text-text dark:hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}