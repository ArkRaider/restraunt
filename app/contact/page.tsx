'use client';

import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
            Contact Us
          </p>
          <h1 className="text-5xl sm:text-6xl font-heading font-bold text-text dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-text-muted dark:text-white/70 text-lg max-w-2xl mx-auto">
            Have questions or feedback? We&apos;d love to hear from you
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-surface dark:bg-white/5 rounded-[24px] p-8 shadow-lg">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="text-7xl mb-6">✓</div>
                <h3 className="text-3xl font-heading font-bold text-accent mb-4">
                  Message Sent!
                </h3>
                <p className="text-text-muted dark:text-white/70 text-lg">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-heading font-bold text-text dark:text-white mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-text dark:text-white font-semibold mb-2">
                      Your Name *
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

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-text dark:text-white font-semibold mb-2">
                      Email Address *
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

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-text dark:text-white font-semibold mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-[12px] border-2 border-text-muted/20 dark:border-white/20 bg-white dark:bg-white/10 text-text dark:text-white focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Reservation Inquiry</option>
                      <option value="menu">Menu Question</option>
                      <option value="event">Private Event</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-text dark:text-white font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-[12px] border-2 border-text-muted/20 dark:border-white/20 bg-white dark:bg-white/10 text-text dark:text-white focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary text-white px-8 py-4 rounded-[9999px] font-semibold text-lg hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location */}
            <div className="bg-surface dark:bg-white/5 rounded-[24px] p-8 shadow-lg">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-heading font-bold text-text dark:text-white mb-4">
                Visit Us
              </h3>
              <p className="text-text-muted dark:text-white/70 mb-4">
                123 Gourmet Street<br />
                Culinary District, CD 12345<br />
                United States
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Get Directions
                <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Phone & Email */}
            <div className="bg-surface dark:bg-white/5 rounded-[24px] p-8 shadow-lg">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-heading font-bold text-text dark:text-white mb-4">
                Contact Details
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-text dark:text-white font-semibold mb-1">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-text-muted dark:text-white/70 hover:text-primary transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <p className="text-text dark:text-white font-semibold mb-1">Email</p>
                  <a
                    href="mailto:info@savoria.com"
                    className="text-text-muted dark:text-white/70 hover:text-primary transition-colors"
                  >
                    info@savoria.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-surface dark:bg-white/5 rounded-[24px] p-8 shadow-lg">
              <div className="text-5xl mb-4">🕐</div>
              <h3 className="text-2xl font-heading font-bold text-text dark:text-white mb-4">
                Business Hours
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

            {/* Social Media */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-[24px] p-8">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-heading font-bold text-text dark:text-white mb-4">
                Follow Us
              </h3>
              <p className="text-text-muted dark:text-white/70 mb-4">
                Stay connected and get updates on special events and menu additions
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                    <circle cx="18.406" cy="5.594" r="1.44" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}