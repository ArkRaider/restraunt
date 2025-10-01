'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-background-dark transition-colors duration-300">
      {/* Simple accent line */}
      <div className="absolute left-0 top-1/4 w-1 h-20 sm:h-32 bg-primary"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-text-muted dark:text-white/60 font-medium">
                Welcome to Savoria
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-light text-text dark:text-white leading-[0.95]">
                Where Every<br />
                <span className="font-bold">Meal Tells</span><br />
                <span className="italic text-primary">a Story</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-text-muted dark:text-white/70 leading-relaxed max-w-lg">
              Experience culinary artistry where chef-crafted masterpieces
              meet locally-sourced ingredients.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <Link
                href="/menu"
                className="group inline-flex items-center justify-center gap-3 bg-text dark:bg-white text-white dark:text-text px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-wider font-medium hover:bg-text/90 dark:hover:bg-white/90 transition-all duration-300"
              >
                Explore Menu
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/reservations"
                className="group inline-flex items-center justify-center gap-3 border-2 border-text dark:border-white text-text dark:text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-wider font-medium hover:bg-text hover:text-white dark:hover:bg-white dark:hover:text-text transition-all duration-300"
              >
                Reserve Table
              </Link>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-[4/5] bg-background-alt dark:bg-white/5 relative overflow-hidden">
              {/* Large decorative emoji or image placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-7xl sm:text-9xl opacity-20">🍽️</div>
              </div>

              {/* Floating info card */}
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-white dark:bg-background-dark p-4 sm:p-6 shadow-xl max-w-[250px] sm:max-w-xs border dark:border-white/10">
                <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                  <div className="text-3xl sm:text-4xl">⭐</div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-heading font-bold text-text dark:text-white">4.9</div>
                    <div className="text-xs text-text-muted dark:text-white/60 uppercase tracking-wider">Rating</div>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-text-muted dark:text-white/70">
                  Rated excellent by 10,000+ guests
                </p>
              </div>
            </div>

            {/* Accent element */}
            <div className="absolute -right-2 sm:-right-4 -bottom-2 sm:-bottom-4 w-24 sm:w-32 h-24 sm:h-32 bg-primary opacity-10 -z-10"></div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-20 pt-8 sm:pt-12 border-t border-text/10 dark:border-white/10 max-w-2xl">
          <div>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-text dark:text-white mb-1">15+</div>
            <div className="text-xs text-text-muted dark:text-white/60 uppercase tracking-wider">Years</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-text dark:text-white mb-1">50+</div>
            <div className="text-xs text-text-muted dark:text-white/60 uppercase tracking-wider">Dishes</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-text dark:text-white mb-1">10K+</div>
            <div className="text-xs text-text-muted dark:text-white/60 uppercase tracking-wider">Guests</div>
          </div>
        </div>
      </div>
    </section>
  );
}