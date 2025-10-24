import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';

const blogPosts = [
  {
    id: 'deepseek-r1-analysis',
    title: 'DeepSeek R1 vs GPT-4o: Real-World Performance & Cost Analysis',
    excerpt: 'DeepSeek R1 promises 95% cost reduction compared to GPT-4. We tested it on 10,000 production queries across reasoning, code generation, and SQL. Here\'s what we found.',
    date: '2025-01-24',
    readTime: '12 min read',
    category: 'Model Comparison',
    slug: 'deepseek-r1-analysis'
  },
  {
    id: 'gemini-2-flash-thinking',
    title: 'Gemini 2.0 Flash Thinking Mode: When to Use It (and When Not To)',
    excerpt: 'Google\'s new thinking mode delivers Claude-level reasoning at GPT-4o Mini prices. We benchmarked it against 8 competitors on complex analytical tasks.',
    date: '2025-01-22',
    readTime: '10 min read',
    category: 'Performance Analysis',
    slug: 'gemini-2-flash-thinking'
  },
  {
    id: 'openai-o1-cost-trap',
    title: 'The OpenAI o1 Cost Trap: Why Your Bills Exploded',
    excerpt: 'o1-preview\'s internal chain-of-thought consumes 3-5x more tokens than advertised. Learn how to detect over-provisioning and route intelligently.',
    date: '2025-01-20',
    readTime: '8 min read',
    category: 'Cost Optimization',
    slug: 'openai-o1-cost-trap'
  },
  {
    id: 'claude-sonnet-4',
    title: 'Claude 3.7 Sonnet: The Hidden Cost of "Best Quality"',
    excerpt: 'Anthropic\'s latest model scores 98/100 on reasoning benchmarks—but costs 2x GPT-4o. When is premium quality actually worth it? Data from 50,000 production queries.',
    date: '2025-01-18',
    readTime: '11 min read',
    category: 'ROI Analysis',
    slug: 'claude-sonnet-4'
  },
  {
    id: 'multi-model-strategy',
    title: 'The Multi-Model LLM Strategy That Saved Us $180k/Year',
    excerpt: 'How we cut our LLM costs by 42% without degrading quality—by routing queries to the optimal model based on complexity, latency requirements, and cost constraints.',
    date: '2025-01-15',
    readTime: '14 min read',
    category: 'Case Study',
    slug: 'multi-model-strategy'
  },
  {
    id: 'llm-routing-architecture',
    title: 'Building a Production LLM Router: Architecture & Lessons Learned',
    excerpt: 'From query classification to fallback handling: a deep dive into designing an intelligent LLM routing system that handles 10M+ requests/month.',
    date: '2025-01-12',
    readTime: '16 min read',
    category: 'Engineering',
    slug: 'llm-routing-architecture'
  }
];

export default function Blog() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactFormType, setContactFormType] = useState('demo');

  const openContactForm = (type = 'demo') => {
    setContactFormType(type);
    setIsContactFormOpen(true);
  };

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
          <a
            href="mailto:diegocastellanos@datoad.dev?subject=Blog%20Topic%20Suggestion&body=Hi%2C%0A%0AI'd%20like%20to%20suggest%20a%20blog%20topic%3A%0A%0ATopic%3A%20%0AWhy%20it's%20interesting%3A%20%0A%0AThanks!"
            className="inline-flex items-center gap-2 text-[#4A9B9B] font-semibold hover:underline"
          >
            Suggest a topic →
          </a>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        formType={contactFormType}
      />
    </div>
  );
}
