const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Food Critic',
    content: 'Savoria offers an exceptional dining experience. The attention to detail in every dish is remarkable, and the ambiance is simply perfect.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Regular Customer',
    content: 'I\'ve been coming here for years, and the quality never disappoints. The chef\'s creativity and the service excellence make every visit memorable.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Business Executive',
    content: 'Perfect venue for business dinners. The private dining area is elegant, and the menu offers something for everyone.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background-alt dark:bg-background-dark/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-text-muted dark:text-white/60 font-medium mb-3 sm:mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-light text-text dark:text-white mb-4 sm:mb-6">
            Guest <span className="font-bold">Reviews</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="space-y-4 sm:space-y-6">
              {/* Quote */}
              <div className="text-5xl sm:text-6xl text-text/10 dark:text-white/10 font-serif leading-none">&ldquo;</div>

              {/* Content */}
              <p className="text-sm sm:text-base text-text dark:text-white leading-relaxed">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="pt-4 sm:pt-6 border-t border-text/10 dark:border-white/10">
                <div className="font-heading font-medium text-text dark:text-white mb-1">
                  {testimonial.name}
                </div>
                <div className="text-xs sm:text-sm text-text-muted dark:text-white/60 uppercase tracking-wider">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Display */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-16 lg:pt-20 border-t border-text/10 dark:border-white/10 text-center">
          <div className="inline-block">
            <div className="text-5xl sm:text-6xl font-heading font-bold text-text dark:text-white mb-3 sm:mb-4">4.9</div>
            <div className="flex gap-1 justify-center mb-2 sm:mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 sm:w-6 sm:h-6 text-text dark:text-white fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <div className="text-xs sm:text-sm text-text-muted dark:text-white/60 uppercase tracking-wider">
              Based on 10,000+ reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}