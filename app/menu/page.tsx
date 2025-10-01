'use client';

import { useState } from 'react';

const menuData = {
  appetizers: [
    { name: 'Bruschetta Trio', description: 'Classic tomato, mushroom tapenade, and white bean on toasted bread', price: '$12', image: '🥖' },
    { name: 'Shrimp Cocktail', description: 'Fresh jumbo shrimp with zesty cocktail sauce', price: '$16', image: '🍤' },
    { name: 'Caesar Salad', description: 'Crisp romaine, parmesan, croutons, house-made dressing', price: '$10', image: '🥗' },
    { name: 'French Onion Soup', description: 'Caramelized onions, beef broth, gruyere cheese', price: '$9', image: '🍲' },
  ],
  mains: [
    { name: 'Grilled Salmon', description: 'Fresh Atlantic salmon with herb butter, seasonal vegetables, and lemon risotto', price: '$32', image: '🐟' },
    { name: 'Beef Wellington', description: 'Tender beef fillet wrapped in puff pastry with mushroom duxelles', price: '$48', image: '🥩' },
    { name: 'Truffle Pasta', description: 'Handmade pasta with black truffle, parmesan, and wild mushrooms', price: '$38', image: '🍝' },
    { name: 'Roasted Duck', description: 'Crispy duck breast with orange glaze and root vegetables', price: '$42', image: '🦆' },
    { name: 'Vegetable Risotto', description: 'Creamy arborio rice with seasonal vegetables and parmesan', price: '$28', image: '🍚' },
    { name: 'Lamb Chops', description: 'Herb-crusted rack of lamb with mint sauce and potatoes', price: '$45', image: '🍖' },
  ],
  desserts: [
    { name: 'Chocolate Soufflé', description: 'Rich dark chocolate soufflé with vanilla ice cream', price: '$14', image: '🍫' },
    { name: 'Crème Brûlée', description: 'Classic vanilla custard with caramelized sugar', price: '$12', image: '🍮' },
    { name: 'Tiramisu', description: 'Italian classic with espresso-soaked ladyfingers', price: '$13', image: '🍰' },
    { name: 'Berry Tart', description: 'Mixed berries on vanilla cream in buttery pastry', price: '$11', image: '🫐' },
  ],
  drinks: [
    { name: 'House Wine', description: 'Red, white, or rosé by the glass', price: '$12', image: '🍷' },
    { name: 'Craft Cocktails', description: 'Signature cocktails made by our mixologist', price: '$15', image: '🍸' },
    { name: 'Fresh Juices', description: 'Orange, apple, or seasonal fruit juices', price: '$6', image: '🧃' },
    { name: 'Specialty Coffee', description: 'Espresso, cappuccino, or latte', price: '$5', image: '☕' },
  ],
};

const categories = [
  { key: 'appetizers', label: 'Appetizers', icon: '🥗' },
  { key: 'mains', label: 'Main Course', icon: '🍽️' },
  { key: 'desserts', label: 'Desserts', icon: '🍰' },
  { key: 'drinks', label: 'Drinks', icon: '🍷' },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  return (
    <div className="min-h-screen bg-background-alt dark:bg-background-dark transition-colors duration-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-secondary dark:text-primary font-body font-medium text-lg uppercase tracking-wide mb-2">
            Our Menu
          </p>
          <h1 className="text-5xl sm:text-6xl font-heading font-bold text-text dark:text-white mb-4">
            Culinary Excellence
          </h1>
          <p className="text-text-muted dark:text-white/70 text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, crafted with passion and the finest ingredients
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-[9999px] font-semibold transition-all duration-200 ${
                activeCategory === category.key
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-surface dark:bg-white/10 text-text dark:text-white hover:bg-primary/10 dark:hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData[activeCategory as keyof typeof menuData].map((item, index) => (
            <div
              key={index}
              className="bg-surface dark:bg-white/5 rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 flex items-center justify-center text-7xl">
                {item.image}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-heading font-bold text-text dark:text-white">
                    {item.name}
                  </h3>
                  <span className="text-primary font-bold text-lg whitespace-nowrap ml-4">
                    {item.price}
                  </span>
                </div>
                <p className="text-text-muted dark:text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/reservations"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-[9999px] font-semibold text-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Reserve Your Table
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}