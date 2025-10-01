import Link from 'next/link';

const featuredDishes = [
  {
    id: 1,
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon with herb butter and seasonal vegetables',
    price: '$32',
    image: '🐟',
  },
  {
    id: 2,
    name: 'Beef Wellington',
    description: 'Tender beef fillet wrapped in puff pastry with mushroom duxelles',
    price: '$48',
    image: '🥩',
  },
  {
    id: 3,
    name: 'Truffle Pasta',
    description: 'Handmade pasta with black truffle and wild mushrooms',
    price: '$38',
    image: '🍝',
  },
  {
    id: 4,
    name: 'Chocolate Soufflé',
    description: 'Rich dark chocolate soufflé with vanilla ice cream',
    price: '$14',
    image: '🍫',
  },
];

export default function FeaturedDishes() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background-alt dark:bg-background-dark/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-text-muted dark:text-white/60 font-medium mb-3 sm:mb-4">
            Our Specialties
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-light text-text dark:text-white mb-4 sm:mb-6">
            Signature <span className="font-bold">Dishes</span>
          </h2>
          <p className="text-base sm:text-lg text-text-muted dark:text-white/70 max-w-2xl">
            Each dish is carefully crafted with passion and the finest ingredients
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredDishes.map((dish, index) => (
            <div
              key={dish.id}
              className="group"
            >
              {/* Image Container */}
              <div className="aspect-square bg-white dark:bg-white/5 mb-4 sm:mb-6 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl sm:text-7xl lg:text-8xl">
                  {dish.image}
                </div>
                <div className="absolute inset-0 bg-text/0 dark:bg-white/0 group-hover:bg-text/5 dark:group-hover:bg-white/10 transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-baseline gap-2">
                  <h3 className="text-lg sm:text-xl font-heading font-medium text-text dark:text-white">
                    {dish.name}
                  </h3>
                  <span className="text-base sm:text-lg font-medium text-text dark:text-white whitespace-nowrap">
                    {dish.price}
                  </span>
                </div>

                <p className="text-sm text-text-muted dark:text-white/70 leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Menu Link */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <Link
            href="/menu"
            className="group inline-flex items-center gap-3 text-text dark:text-white text-xs sm:text-sm uppercase tracking-[0.2em] font-medium border-b-2 border-text dark:border-white pb-1 hover:border-primary dark:hover:border-primary transition-colors duration-300"
          >
            View Full Menu
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
    </section>
  );
}