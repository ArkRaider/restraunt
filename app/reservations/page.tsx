'use client';

import { useState, FormEvent } from 'react';

export default function ReservationsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: '',
        specialRequests: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background-alt dark:bg-background-dark transition-colors duration-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-secondary dark:text-primary font-body font-medium text-lg uppercase tracking-wide mb-2">
            Reservations
          </p>
          <h1 className="text-5xl sm:text-6xl font-heading font-bold text-text dark:text-white mb-4">
            Book Your Table
          </h1>
          <p className="text-text-muted dark:text-white/70 text-lg max-w-2xl mx-auto">
            Reserve your spot for an unforgettable dining experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <div className="bg-surface dark:bg-white/5 rounded-[24px] p-8 shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-7xl mb-6">✓</div>
                <h3 className="text-3xl font-heading font-bold text-accent mb-4">
                  Reservation Confirmed!
                </h3>
                <p className="text-text-muted dark:text-white/70 text-lg">
                  We&apos;ve sent a confirmation email to {formData.email}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-text dark:text-white font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-[12px] border-2 border-text-muted/20 dark:border-white/20 bg-white dark:bg-white/10 text-text dark:text-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-text dark:text-white font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-[12px] border-2 border-text-muted/20 dark:border-white/20 bg-white dark:bg-white/10 text-text dark:text-white focus:border-primary focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-text dark:text-white font-semibold mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-[12px] border-2 border-text-muted/20 dark:border-white/20 bg-white dark:bg-white/10 text-text dark:text-white focus:border-primary focus:outline-none transition-colors"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-text dark:text-white font-semibold mb-2">
                      Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-[12px] border-2 border-text-muted/20 dark:border-white/20 bg-white dark:bg-white/10 text-text dark:text-white focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-text dark:text-white font-semibold mb-2">
                      Time *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-[12px] border-2 border-text-muted/20 dark:border-white/20 bg-white dark:bg-white/10 text-text dark:text-white focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select time</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Guests & Occasion */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="guests" className="block text-text dark:text-white font-semibold mb-2">
                      Number of Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-[12px] border-2 border-text-muted/20 dark:border-white/20 bg-white dark:bg-white/10 text-text dark:text-white focus:border-primary focus:outline-none transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                      <option value="9+">9+ Guests</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="occasion" className="block text-text dark:text-white font-semibold mb-2">
                      Occasion
                    </label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-[12px] border-2 border-text-muted/20 dark:border-white/20 bg-white dark:bg-white/10 text-text dark:text-white focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select occasion</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="business">Business Dinner</option>
                      <option value="date">Date Night</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="specialRequests" className="block text-text dark:text-white font-semibold mb-2">
                    Special Requests
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-[12px] border-2 border-text-muted/20 dark:border-white/20 bg-white dark:bg-white/10 text-text dark:text-white focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Any dietary restrictions or special requests..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 rounded-[9999px] font-semibold text-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Confirm Reservation
                </button>
              </form>
            )}
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            {/* Opening Hours */}
            <div className="bg-surface dark:bg-white/5 rounded-[24px] p-8 shadow-lg">
              <div className="text-5xl mb-4">🕐</div>
              <h3 className="text-2xl font-heading font-bold text-text dark:text-white mb-4">
                Opening Hours
              </h3>
              <div className="space-y-2 text-text-muted dark:text-white/70">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 11:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">10:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-surface dark:bg-white/5 rounded-[24px] p-8 shadow-lg">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-heading font-bold text-text dark:text-white mb-4">
                Contact Information
              </h3>
              <div className="space-y-3 text-text-muted dark:text-white/70">
                <div>
                  <p className="font-semibold text-text dark:text-white mb-1">Phone</p>
                  <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-text dark:text-white mb-1">Email</p>
                  <a href="mailto:info@savoria.com" className="hover:text-primary transition-colors">
                    info@savoria.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-text dark:text-white mb-1">Address</p>
                  <p>123 Gourmet Street<br />Culinary District, CD 12345</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-[24px] p-8">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-heading font-bold text-text dark:text-white mb-4">
                Good to Know
              </h3>
              <ul className="space-y-2 text-text-muted dark:text-white/70">
                <li>• We accept reservations up to 30 days in advance</li>
                <li>• Large party bookings (9+) require 48-hour notice</li>
                <li>• Please inform us of any dietary restrictions</li>
                <li>• Dress code: Smart casual</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}