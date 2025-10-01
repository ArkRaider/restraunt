export default function AboutPage() {
  const team = [
    { name: 'Chef Marcus Rivera', role: 'Executive Chef', image: '👨‍🍳' },
    { name: 'Sofia Chen', role: 'Pastry Chef', image: '👩‍🍳' },
    { name: 'James Anderson', role: 'Sous Chef', image: '👨‍🍳' },
    { name: 'Emma Wilson', role: 'Restaurant Manager', image: '👩‍💼' },
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 dark:from-primary/20 dark:via-secondary/10 dark:to-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-secondary dark:text-primary font-body font-medium text-lg uppercase tracking-wide mb-2">
            About Us
          </p>
          <h1 className="text-5xl sm:text-6xl font-heading font-bold text-text dark:text-white mb-6">
            Our Story
          </h1>
          <p className="text-text-muted dark:text-white/70 text-xl max-w-3xl mx-auto leading-relaxed">
            A journey of passion, flavor, and culinary excellence spanning over 15 years
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading font-bold text-text dark:text-white mb-6">
                Where It All Began
              </h2>
              <div className="space-y-4 text-text-muted dark:text-white/70 leading-relaxed">
                <p>
                  Founded in 2009, Savoria started with a simple dream: to create a dining experience
                  that celebrates the art of cooking and the joy of sharing exceptional food with loved ones.
                </p>
                <p>
                  Our founder and executive chef, Marcus Rivera, trained in the finest kitchens of Europe
                  before bringing his vision to life. With a commitment to using only the freshest,
                  locally-sourced ingredients, we&apos;ve built a reputation for culinary excellence.
                </p>
                <p>
                  Today, Savoria stands as a testament to our dedication to quality, innovation, and
                  hospitality. Every dish tells a story, every meal creates a memory, and every guest
                  becomes part of our growing family.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-[24px] p-12 text-center">
              <div className="text-8xl mb-6">🍽️</div>
              <h3 className="text-2xl font-heading font-bold text-text dark:text-white mb-4">
                Our Philosophy
              </h3>
              <p className="text-text-muted dark:text-white/70 leading-relaxed">
                We believe in honoring traditional cooking techniques while embracing innovation.
                Every ingredient is carefully selected, every recipe thoughtfully crafted, and
                every plate artfully presented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background-alt dark:bg-background-dark/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-text dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-text-muted dark:text-white/70 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface dark:bg-white/5 rounded-[16px] p-8 text-center shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-4">🌱</div>
              <h3 className="text-xl font-heading font-bold text-text dark:text-white mb-3">
                Sustainability
              </h3>
              <p className="text-text-muted dark:text-white/70 leading-relaxed">
                We partner with local farmers and suppliers who share our commitment to sustainable,
                ethical practices.
              </p>
            </div>

            <div className="bg-surface dark:bg-white/5 rounded-[16px] p-8 text-center shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-4">⭐</div>
              <h3 className="text-xl font-heading font-bold text-text dark:text-white mb-3">
                Excellence
              </h3>
              <p className="text-text-muted dark:text-white/70 leading-relaxed">
                From ingredients to service, we maintain the highest standards in every aspect
                of your dining experience.
              </p>
            </div>

            <div className="bg-surface dark:bg-white/5 rounded-[16px] p-8 text-center shadow-md hover:shadow-xl transition-all duration-300">
              <div className="text-6xl mb-4">❤️</div>
              <h3 className="text-xl font-heading font-bold text-text dark:text-white mb-3">
                Passion
              </h3>
              <p className="text-text-muted dark:text-white/70 leading-relaxed">
                Our love for food and hospitality drives us to create memorable experiences
                for every guest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-text dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-text-muted dark:text-white/70 text-lg max-w-2xl mx-auto">
              The talented individuals behind your exceptional dining experience
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-surface dark:bg-white/5 rounded-[16px] p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-7xl mb-4">{member.image}</div>
                <h3 className="text-xl font-heading font-bold text-text dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark dark:from-primary/80 dark:to-primary-dark/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Experience Our Story
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable culinary journey
          </p>
          <a
            href="/reservations"
            className="inline-flex items-center gap-2 bg-white dark:bg-white/90 text-primary px-8 py-4 rounded-[9999px] font-semibold text-lg hover:bg-background-alt dark:hover:bg-white transition-all duration-200 shadow-xl"
          >
            Make a Reservation
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}