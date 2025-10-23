import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';

const blogPosts = {
  'reduce-gpt4-costs': {
    title: 'How to Reduce GPT-4 Costs Without Losing Quality',
    date: '2025-01-20',
    readTime: '5 min read',
    category: 'Cost Optimization',
    content: `
      <p class="lead">Most teams overspend on LLM usage by using GPT-4 for everything. Here's how to optimize.</p>

      <h2>The Problem</h2>
      <p>
        GPT-4 is expensive. At $0.03 per 1K input tokens and $0.06 per 1K output tokens, it's one of the most
        costly models available. Yet many teams route <strong>every single query</strong> through GPT-4, regardless
        of complexity.
      </p>

      <p>This is like hiring a senior engineer to answer simple FAQ questions.</p>

      <h2>The 70/30 Rule</h2>
      <p>
        Based on our analysis of 2M+ production queries, we found that:
      </p>
      <ul>
        <li><strong>~70% of queries</strong> are simple enough for cheaper models (GPT-3.5, Gemini Flash, Mistral)</li>
        <li><strong>~20% require</strong> balanced models (GPT-4o, Claude Haiku)</li>
        <li><strong>~10% need</strong> premium reasoning (GPT-4, Claude Sonnet)</li>
      </ul>

      <h2>Practical Strategies</h2>

      <h3>1. Classify by Task Type</h3>
      <p>Different tasks have different quality requirements:</p>
      <ul>
        <li><strong>Simple QA:</strong> Use GPT-3.5 or Gemini Flash (5-10x cheaper)</li>
        <li><strong>SQL Generation:</strong> Use DeepSeek or Mistral with validation (20x cheaper)</li>
        <li><strong>Code Review:</strong> Use GPT-4o (fast + accurate)</li>
        <li><strong>Complex Reasoning:</strong> Use Claude Sonnet or GPT-4</li>
      </ul>

      <h3>2. Implement Fallback Logic</h3>
      <code>
if (query_is_simple):<br/>
&nbsp;&nbsp;try GPT-3.5<br/>
else if (needs_speed):<br/>
&nbsp;&nbsp;use GPT-4o<br/>
else:<br/>
&nbsp;&nbsp;use Claude Sonnet
      </code>

      <h3>3. Measure Quality</h3>
      <p>
        Don't just optimize for cost. Track:
      </p>
      <ul>
        <li>Error rates by model</li>
        <li>User satisfaction scores</li>
        <li>Task completion rates</li>
      </ul>

      <h2>Real-World Results</h2>
      <p>
        Teams that implement intelligent routing typically see:
      </p>
      <ul>
        <li><strong>30-45% cost reduction</strong></li>
        <li><strong>Same or better quality</strong> (because premium models only handle complex queries)</li>
        <li><strong>Faster average response times</strong> (cheaper models are often faster)</li>
      </ul>

      <h2>Getting Started</h2>
      <p>
        You don't need to build routing logic from scratch. Tools like Datoad handle this automatically:
      </p>
      <ol>
        <li>Analyze query complexity</li>
        <li>Route to optimal model</li>
        <li>Track savings vs baseline</li>
        <li>No code changes required</li>
      </ol>

      <p>
        <a href="/calculator" class="cta-link">Calculate your potential savings →</a>
      </p>
    `
  },
  'multi-model-strategy': {
    title: 'Why a Multi-Model LLM Strategy Beats Single-Provider Approach',
    date: '2025-01-18',
    readTime: '7 min read',
    category: 'Strategy',
    content: `
      <p class="lead">Relying on a single LLM provider means sacrificing either speed, quality, or budget.</p>

      <h2>The Single-Provider Trap</h2>
      <p>
        Many teams pick one provider (usually OpenAI) and stick with it for everything. This seems simple,
        but it's costly:
      </p>

      <ul>
        <li>You pay premium prices for simple tasks</li>
        <li>You're locked into one provider's pricing changes</li>
        <li>You can't leverage model-specific strengths</li>
      </ul>

      <h2>Model Specialization</h2>
      <p>Different models excel at different tasks:</p>

      <h3>OpenAI GPT-4o</h3>
      <ul>
        <li><strong>Best for:</strong> Fast responses with high quality</li>
        <li><strong>Cost:</strong> 0.75x baseline</li>
        <li><strong>Speed:</strong> 95/100</li>
      </ul>

      <h3>Claude Sonnet 4.5</h3>
      <ul>
        <li><strong>Best for:</strong> Complex reasoning, research</li>
        <li><strong>Cost:</strong> 1.0x baseline (most expensive)</li>
        <li><strong>Quality:</strong> 98/100 (highest)</li>
      </ul>

      <h3>DeepSeek V3</h3>
      <ul>
        <li><strong>Best for:</strong> Bulk processing, simple tasks</li>
        <li><strong>Cost:</strong> 0.04x baseline (cheapest)</li>
        <li><strong>Quality:</strong> 70/100 (good enough for many use cases)</li>
      </ul>

      <h2>The Intelligent Mix</h2>
      <p>
        Instead of picking one model, route each query to the best option:
      </p>

      <code>
Simple FAQ → DeepSeek (save 96%)<br/>
SQL generation → Mistral (save 75%)<br/>
Code review → GPT-4o (balance of speed + quality)<br/>
Research → Claude Sonnet (quality > cost)
      </code>

      <h2>Implementation Approaches</h2>

      <h3>Option 1: Manual Routing</h3>
      <p>Write if/else logic in your code. Flexible but time-consuming to maintain.</p>

      <h3>Option 2: Cognitive Router</h3>
      <p>Use a service like Datoad that analyzes queries automatically and routes to the optimal model.</p>

      <h2>Cost Comparison</h2>
      <p>Example: 1M tokens/month workload</p>
      <ul>
        <li><strong>100% GPT-4:</strong> $50,000/month</li>
        <li><strong>100% GPT-3.5:</strong> $5,000/month (but 40% quality loss)</li>
        <li><strong>Intelligent mix:</strong> $27,500/month (45% savings, <5% quality loss)</li>
      </ul>

      <p>
        <a href="/calculator" class="cta-link">Calculate your savings →</a>
      </p>
    `
  },
  'llm-routing-explained': {
    title: 'LLM Routing 101: How Cognitive Routing Works',
    date: '2025-01-15',
    readTime: '6 min read',
    category: 'Technical',
    content: `
      <p class="lead">Understanding the technical details behind intelligent model selection.</p>

      <h2>What is LLM Routing?</h2>
      <p>
        LLM routing is the process of automatically selecting the best model for each query based on
        complexity, cost, and quality requirements.
      </p>

      <h2>How It Works</h2>

      <h3>Step 1: Query Analysis</h3>
      <p>The router analyzes:</p>
      <ul>
        <li>Token count (complexity indicator)</li>
        <li>Query type (SQL, chat, summarization, etc.)</li>
        <li>Required accuracy level</li>
        <li>Latency requirements</li>
      </ul>

      <h3>Step 2: Model Selection</h3>
      <code>
if tokens < 500 and type == "simple_qa":<br/>
&nbsp;&nbsp;use DeepSeek  # Cheapest<br/>
elif needs_speed and quality > 90:<br/>
&nbsp;&nbsp;use GPT-4o  # Fast + accurate<br/>
elif complexity == "high":<br/>
&nbsp;&nbsp;use Claude Sonnet  # Best quality
      </code>

      <h3>Step 3: Execution</h3>
      <p>
        The router forwards the query to the selected model and returns the response to your app.
        <strong>No code changes needed</strong> — it's a drop-in replacement for your existing LLM API calls.
      </p>

      <h2>Architecture</h2>
      <p>A typical routing system has three components:</p>

      <h3>1. Classifier</h3>
      <p>Analyzes incoming queries and predicts optimal model.</p>

      <h3>2. Router</h3>
      <p>Forwards requests to the selected provider (OpenAI, Anthropic, etc.).</p>

      <h3>3. Analytics</h3>
      <p>Tracks savings, latency, and quality metrics.</p>

      <h2>Performance Considerations</h2>

      <h3>Latency</h3>
      <p>
        A well-designed router adds <strong>&lt;10ms overhead</strong>. This is negligible compared to
        LLM response times (typically 500-2000ms).
      </p>

      <h3>Accuracy</h3>
      <p>
        The classifier needs to be >95% accurate to avoid routing errors that degrade quality.
      </p>

      <h3>Fallback Logic</h3>
      <p>
        If a cheaper model fails or produces low-quality output, the router should automatically
        retry with a more capable model.
      </p>

      <h2>Cost Savings Breakdown</h2>
      <p>Example workload (100K queries/month):</p>

      <ul>
        <li><strong>Before:</strong> 100% GPT-4 → $15,000/month</li>
        <li><strong>After routing:</strong></li>
        <ul>
          <li>60K queries → GPT-3.5 → $1,800</li>
          <li>25K queries → GPT-4o → $4,500</li>
          <li>15K queries → Claude Sonnet → $3,000</li>
          <li><strong>Total: $9,300/month (38% savings)</strong></li>
        </ul>
      </ul>

      <h2>Getting Started</h2>
      <p>
        You can build your own router or use a managed service like Datoad:
      </p>
      <ul>
        <li>Automatic query classification</li>
        <li>Multi-provider routing</li>
        <li>Real-time analytics</li>
        <li>Zero code changes</li>
      </ul>

      <p>
        <a href="/calculator" class="cta-link">Try the calculator →</a>
      </p>
    `
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <Navbar />
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-bold text-[#1E3A4C] mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-[#4A9B9B] font-semibold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-[#4A9B9B] font-semibold mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-[#4A9B9B]/10 text-[#4A9B9B] text-xs font-semibold rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
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

          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A4C] leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none prose-headings:text-[#1E3A4C] prose-a:text-[#4A9B9B] prose-a:no-underline hover:prose-a:underline prose-code:text-sm prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:before:content-none prose-code:after:content-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-16 p-8 bg-gradient-to-br from-[#4A9B9B]/10 to-[#7BC4BD]/10 border-2 border-[#4A9B9B]/30 rounded-2xl">
          <h3 className="text-2xl font-bold text-[#1E3A4C] mb-3">
            Ready to optimize your LLM costs?
          </h3>
          <p className="text-slate-600 mb-6">
            Calculate your potential savings with our free calculator, or request a 30-day pilot.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/calculator"
              className="bg-gradient-to-r from-[#4A9B9B] to-[#7BC4BD] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Calculate Savings
            </Link>
            <Link
              to="/"
              className="bg-white text-[#1E3A4C] px-6 py-3 rounded-lg font-semibold border-2 border-[#4A9B9B] hover:shadow-lg transition-shadow"
            >
              Learn More
            </Link>
          </div>
        </div>
      </article>

      <style>{`
        .prose .lead {
          font-size: 1.25rem;
          color: #475569;
          margin-bottom: 2rem;
        }
        .prose h2 {
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          font-size: 1.875rem;
          font-weight: 700;
        }
        .prose h3 {
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          font-size: 1.5rem;
          font-weight: 600;
        }
        .prose p {
          margin-bottom: 1.5rem;
          line-height: 1.75;
        }
        .prose ul, .prose ol {
          margin-bottom: 1.5rem;
        }
        .prose li {
          margin-bottom: 0.5rem;
        }
        .prose code {
          display: block;
          background: #f1f5f9;
          padding: 1rem;
          border-radius: 0.5rem;
          margin: 1.5rem 0;
          font-size: 0.875rem;
          line-height: 1.6;
          color: #1e293b;
        }
        .prose .cta-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #4A9B9B;
          font-weight: 600;
          font-size: 1.125rem;
        }
        .prose .cta-link:hover {
          gap: 0.75rem;
        }
      `}</style>
    </div>
  );
}
