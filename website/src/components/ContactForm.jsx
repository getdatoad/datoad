import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

export default function ContactForm({ isOpen, onClose, formType = 'pilot' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    monthlySpend: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct mailto link as fallback
    const subject = formType === 'pilot'
      ? '30-Day Pilot Request'
      : 'Demo Request';

    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Monthly LLM Spend: ${formData.monthlySpend}

Message:
${formData.message}`;

    const mailtoLink = `mailto:diegocastellanos@datoad.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open mailto link
    window.location.href = mailtoLink;

    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          monthlySpend: '',
          message: ''
        });
      }, 2000);
    }, 500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <h2 className="text-2xl font-bold text-[#1E3A4C]">
            {formType === 'pilot' ? 'Request Pilot Access' : 'Book a Demo'}
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Success State */}
        {isSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-[#1E3A4C] mb-2">
              Email client opened!
            </h3>
            <p className="text-slate-600 text-sm">
              Your email client should have opened with the pre-filled message.
              If not, please email us directly at{' '}
              <a href="mailto:diegocastellanos@datoad.dev" className="text-[#4A9B9B] font-semibold">
                diegocastellanos@datoad.dev
              </a>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-[#4A9B9B] focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-[#4A9B9B] focus:outline-none transition-colors"
                placeholder="john@company.com"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Company *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-[#4A9B9B] focus:outline-none transition-colors"
                placeholder="Acme Inc"
              />
            </div>

            {/* Monthly Spend */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Monthly LLM Spend *
              </label>
              <select
                name="monthlySpend"
                value={formData.monthlySpend}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-[#4A9B9B] focus:outline-none transition-colors"
              >
                <option value="">Select range...</option>
                <option value="$5k-$10k/mo">$5k-$10k/mo</option>
                <option value="$10k-$50k/mo">$10k-$50k/mo</option>
                <option value="$50k-$100k/mo">$50k-$100k/mo</option>
                <option value="$100k+/mo">$100k+/mo</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                What are your main LLM use cases?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-[#4A9B9B] focus:outline-none transition-colors resize-none"
                placeholder="e.g., SQL generation, document summarization, chatbot..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#4A9B9B] to-[#7BC4BD] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Opening email...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  {formType === 'pilot' ? 'Request Pilot Access' : 'Book Demo'}
                </>
              )}
            </button>

            <p className="text-xs text-slate-500 text-center">
              This will open your email client with a pre-filled message
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
