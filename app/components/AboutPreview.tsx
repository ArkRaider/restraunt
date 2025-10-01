import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] bg-background-alt dark:bg-white/5 relative transition-colors duration-300">
              <div className="absolute inset-0 flex items-center justify-center text-7xl sm:text-8xl lg:text-9xl opacity-20">
                👨‍🍳
              </div>
            </div>
            {/* Accent */}
            <div className="absolute -left-4 -bottom-4 w-24 h-24 sm:w-32 sm:h-32 bg-primary opacity-10 -z-10"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-text-muted dark:text-white/60 font-medium mb-3 sm:mb-4">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-light text-text dark:text-white mb-4 sm:mb-6">
                Passion Meets<br />
                <span className="font-bold">Excellence</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-text-muted dark:text-white/70 leading-relaxed">
              <p>
                Founded in 2009, Savoria started with a simple dream: to create a dining
                experience that celebrates the art of cooking and the joy of sharing
                exceptional food.
              </p>
              <p>
                Our founder and executive chef, Marcus Rivera, trained in the finest kitchens
                of Europe before bringing his vision to life. With a commitment to using only
                the freshest, locally-sourced ingredients, we&apos;ve built a reputation for
                culinary excellence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-text/10 dark:border-white/10">
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
                <div className="text-xs text-text-muted dark:text-white/60 uppercase tracking-wider">Happy Guests</div>
              </div>
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-text dark:text-white text-xs sm:text-sm uppercase tracking-[0.2em] font-medium border-b-2 border-text dark:border-white pb-1 hover:border-primary dark:hover:border-primary transition-colors duration-300"
            >
              Read Our Story
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}