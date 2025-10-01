'use client';

import { useState } from 'react';

const galleryItems = [
  { id: 1, category: 'food', title: 'Signature Salmon', emoji: '🐟', gradient: 'from-blue-400/20 to-cyan-400/20' },
  { id: 2, category: 'food', title: 'Beef Wellington', emoji: '🥩', gradient: 'from-red-400/20 to-orange-400/20' },
  { id: 3, category: 'food', title: 'Truffle Pasta', emoji: '🍝', gradient: 'from-yellow-400/20 to-amber-400/20' },
  { id: 4, category: 'interior', title: 'Main Dining Hall', emoji: '🏛️', gradient: 'from-purple-400/20 to-pink-400/20' },
  { id: 5, category: 'food', title: 'Chocolate Soufflé', emoji: '🍫', gradient: 'from-amber-700/20 to-brown-600/20' },
  { id: 6, category: 'interior', title: 'Private Dining Room', emoji: '🪑', gradient: 'from-indigo-400/20 to-blue-400/20' },
  { id: 7, category: 'food', title: 'Fresh Oysters', emoji: '🦪', gradient: 'from-teal-400/20 to-cyan-400/20' },
  { id: 8, category: 'food', title: 'Artisan Bread', emoji: '🥖', gradient: 'from-orange-300/20 to-yellow-300/20' },
  { id: 9, category: 'interior', title: 'Bar Area', emoji: '🍸', gradient: 'from-green-400/20 to-emerald-400/20' },
  { id: 10, category: 'food', title: 'Chef Special', emoji: '👨‍🍳', gradient: 'from-red-400/20 to-pink-400/20' },
  { id: 11, category: 'food', title: 'Berry Dessert', emoji: '🫐', gradient: 'from-purple-400/20 to-violet-400/20' },
  { id: 12, category: 'interior', title: 'Outdoor Patio', emoji: '🌿', gradient: 'from-green-300/20 to-lime-300/20' },
];

const categories = [
  { key: 'all', label: 'All' },
  { key: 'food', label: 'Food' },
  { key: 'interior', label: 'Interior' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background-alt dark:bg-background-dark transition-colors duration-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-secondary dark:text-primary font-body font-medium text-lg uppercase tracking-wide mb-2">
            Gallery
          </p>
          <h1 className="text-5xl sm:text-6xl font-heading font-bold text-text dark:text-white mb-4">
            Visual Journey
          </h1>
          <p className="text-text-muted dark:text-white/70 text-lg max-w-2xl mx-auto">
            Explore our culinary creations and elegant dining spaces
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12">
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
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.id)}
              className="group relative bg-surface dark:bg-white/5 rounded-[16px] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className={`h-64 bg-gradient-to-br ${item.gradient} flex items-center justify-center text-8xl transition-transform duration-300 group-hover:scale-110`}>
                {item.emoji}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-heading font-bold text-xl">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm capitalize">
                    {item.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted dark:text-white/70 text-lg">No images found in this category</p>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 dark:bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="bg-surface dark:bg-white/10 rounded-[24px] p-8 max-w-4xl w-full">
              {galleryItems.find(item => item.id === selectedImage) && (
                <>
                  <div className={`h-96 bg-gradient-to-br ${galleryItems.find(item => item.id === selectedImage)?.gradient} flex items-center justify-center text-9xl rounded-[16px] mb-6`}>
                    {galleryItems.find(item => item.id === selectedImage)?.emoji}
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-text dark:text-white mb-2">
                    {galleryItems.find(item => item.id === selectedImage)?.title}
                  </h2>
                  <p className="text-text-muted dark:text-white/70 capitalize">
                    {galleryItems.find(item => item.id === selectedImage)?.category}
                  </p>
                </>
              )}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-text-muted dark:text-white/70 mb-6 text-lg">
            Ready to experience it yourself?
          </p>
          <a
            href="/reservations"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-[9999px] font-semibold text-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Book Your Table
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}