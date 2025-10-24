import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';

const blogPosts = [
  {
    id: 'reduce-gpt4-costs',
    title: 'How to Reduce GPT-4 Costs Without Losing Quality',
    excerpt: 'Most teams over-provision their LLM usage. Learn how intelligent routing can cut costs 30-45% while maintaining output quality.',
    date: '2025-01-20',
    readTime: '5 min read',
    category: 'Cost Optimization',
    slug: 'reduce-gpt4-costs'
  },
  {
    id: 'multi-model-strategy',
    title: 'Why a Multi-Model LLM Strategy Beats Single-Provider Approach',
    excerpt: 'Relying on a single LLM provider means sacrificing either speed, quality, or budget. Here\'s how to optimize all three.',
    date: '2025-01-18',
    readTime: '7 min read',
    category: 'Strategy',
    slug: 'multi-model-strategy'
  },
  {
    id: 'llm-routing-explained',
    title: 'LLM Routing 101: How Cognitive Routing Works',
    excerpt: 'Understand the technical details behind intelligent model selection and how it can save your team thousands per month.',
    date: '2025-01-15',
    readTime: '6 min read',
    category: 'Technical',
    slug: 'llm-routing-explained'
  }
];

export default function Blog() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A4C] mb-4">
            Datoad Insights
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Technical guides, cost optimization strategies, and LLM best practices
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 mb-16">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="p-8">
                {/* Category & Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-[#4A9B9B]/10 text-[#4A9B9B] text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-[#1E3A4C] mb-3 group-hover:text-[#4A9B9B] transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-[#4A9B9B] font-semibold hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="text-center p-12 bg-white rounded-2xl border-2 border-dashed border-slate-300">
          <div className="text-4xl mb-4">📝</div>
          <h3 className="text-xl font-bold text-[#1E3A4C] mb-2">
            More content coming soon
          </h3>
          <p className="text-slate-600 mb-6">
            We're publishing new technical guides and case studies weekly.
          </p>
          <button
            onClick={() => setIsContactFormOpen(true)}
            className="inline-flex items-center gap-2 text-[#4A9B9B] font-semibold hover:underline"
          >
            Suggest a topic →
          </button>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        formType="demo"
      />
    </div>
  );
}
