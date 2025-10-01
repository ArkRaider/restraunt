import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-12">
          {/* Main CTA */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-light text-text dark:text-white leading-tight">
              Ready to <span className="font-bold">Experience</span><br />
              Something Special?
            </h2>
            <p className="text-base sm:text-lg text-text-muted dark:text-white/70 max-w-2xl mx-auto">
              Reserve your table and let us create an unforgettable dining experience
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
            <Link
              href="/reservations"
              className="inline-flex items-center justify-center gap-3 bg-text dark:bg-white text-white dark:text-text px-8 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm uppercase tracking-wider font-medium hover:bg-text/90 dark:hover:bg-white/90 transition-all duration-300"
            >
              Make a Reservation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border-2 border-text dark:border-white text-text dark:text-white px-8 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm uppercase tracking-wider font-medium hover:bg-text hover:text-white dark:hover:bg-white dark:hover:text-text transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Contact Info */}
          <div className="pt-12 sm:pt-16 lg:pt-20 grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 border-t border-text/10 dark:border-white/10">
            <div>
              <div className="text-xs sm:text-sm uppercase tracking-[0.2em] text-text dark:text-white font-medium mb-2 sm:mb-3">
                Phone
              </div>
              <a
                href="tel:+1234567890"
                className="text-sm sm:text-base text-text-muted dark:text-white/70 hover:text-text dark:hover:text-white transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>
            <div>
              <div className="text-xs sm:text-sm uppercase tracking-[0.2em] text-text dark:text-white font-medium mb-2 sm:mb-3">
                Email
              </div>
              <a
                href="mailto:info@savoria.com"
                className="text-sm sm:text-base text-text-muted dark:text-white/70 hover:text-text dark:hover:text-white transition-colors"
              >
                info@savoria.com
              </a>
            </div>
            <div>
              <div className="text-xs sm:text-sm uppercase tracking-[0.2em] text-text dark:text-white font-medium mb-2 sm:mb-3">
                Address
              </div>
              <p className="text-sm sm:text-base text-text-muted dark:text-white/70">
                123 Gourmet Street<br />
                Culinary District, CD 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}