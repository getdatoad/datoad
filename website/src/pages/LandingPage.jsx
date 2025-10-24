import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TrendingDown, Shield, BarChart3, ArrowRight, CheckCircle, Calculator } from 'lucide-react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';

export default function LandingPage() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [contactFormType, setContactFormType] = useState('pilot');

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 400px
      setShowStickyCTA(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openContactForm = (type = 'pilot') => {
    setContactFormType(type);
    setIsContactFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <Navbar />

      {/* Sticky CTA Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          showStickyCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
        }`}
      >
        <Link
          to="/calculator"
          className="bg-gradient-to-r from-[#4A9B9B] to-[#7BC4BD] text-white px-6 py-3 rounded-full font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all flex items-center gap-2 group"
        >
          <Calculator className="w-5 h-5" />
          <span className="hidden sm:inline">Calculate Savings</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          {/* Pre-hero line */}
          <p className="text-sm md:text-base text-[#1E3A4C] mb-4 font-medium">
            You're paying GPT-4 prices for GPT-3 tasks.
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-[#1E3A4C] mb-6 leading-tight">
            Datoad routes every query to the<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A9B9B] to-[#7BC4BD]">
              right model — faster, cheaper, same quality
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto">
            Intelligent routing that cuts costs 30-45% without compromising performance.
          </p>

          <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
            <strong className="text-[#1E3A4C]">No code changes required.</strong> Datoad plugs between your app and LLM APIs — start saving in minutes.
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <Link
              to="/calculator"
              className="bg-gradient-to-r from-[#4A9B9B] to-[#7BC4BD] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2"
            >
              Calculate Your Savings
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button
              onClick={() => openContactForm('demo')}
              className="bg-white text-[#1E3A4C] px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border-2 border-[#4A9B9B]"
            >
              Book a Demo
            </button>
          </div>

          {/* Pilot Program Call */}
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-[#4A9B9B]/10 to-[#7BC4BD]/10 border-2 border-[#4A9B9B]/30 rounded-2xl p-6 shadow-lg">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#4A9B9B] to-[#7BC4BD] rounded-full text-white font-bold text-xl mb-3">
                🚀
              </div>
              <h3 className="text-lg font-bold text-[#1E3A4C] mb-2">
                Looking for Pilot Partners
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                We're onboarding 2 companies this quarter for a <strong>free 30-day pilot</strong>.
                Help us validate real-world savings and get early access to the platform.
              </p>
              <p className="text-xs text-slate-500">
                Ideal for: Teams spending $10k+/month on LLM APIs
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-[#4A9B9B]/20">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4A9B9B] to-[#7BC4BD] mb-2">
              30-45%
            </div>
            <div className="text-slate-600 font-medium">Average Cost Reduction</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-[#4A9B9B]/20">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4A9B9B] to-[#7BC4BD] mb-2">
              5.7x
            </div>
            <div className="text-slate-600 font-medium">Average ROI</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center border border-[#4A9B9B]/20">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4A9B9B] to-[#7BC4BD] mb-2">
              $265k+
            </div>
            <div className="text-slate-600 font-medium">Annual Savings (avg)</div>
          </div>
        </div>

        {/* Integrations & Trust Layer */}
        <div className="mb-24">
          <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wide mb-8">
            Works with all major LLM providers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center border border-slate-200">
                <span className="text-2xl font-bold text-slate-700">🤖</span>
              </div>
              <span className="text-xs font-medium text-slate-600">OpenAI</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center border border-slate-200">
                <span className="text-2xl font-bold text-slate-700">⚡</span>
              </div>
              <span className="text-xs font-medium text-slate-600">Anthropic</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center border border-slate-200">
                <span className="text-2xl font-bold text-slate-700">🔷</span>
              </div>
              <span className="text-xs font-medium text-slate-600">Google</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center border border-slate-200">
                <span className="text-2xl font-bold text-slate-700">☁️</span>
              </div>
              <span className="text-xs font-medium text-slate-600">AWS</span>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center border border-slate-200">
                <span className="text-2xl font-bold text-slate-700">🔵</span>
              </div>
              <span className="text-xs font-medium text-slate-600">Azure</span>
            </div>
          </div>

          {/* Security Badges */}
          <div className="flex justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 text-slate-600 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
              <span className="text-lg">🔒</span>
              <span className="text-xs font-semibold">SOC2 Type II<br />in progress</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
              <span className="text-lg">🛡️</span>
              <span className="text-xs font-semibold">GDPR/CCPA<br />compliant</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 bg-white px-4 py-2 rounded-lg shadow-sm border border-slate-200">
              <span className="text-lg">🔐</span>
              <span className="text-xs font-semibold">Zero data<br />retention</span>
            </div>
          </div>
        </div>

        {/* Model Trade-offs Section */}
        <div className="bg-gradient-to-br from-[#1E3A4C] to-[#2C4A5E] rounded-2xl shadow-2xl p-12 mb-20 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" id="problem">
            The Problem: No Single Model is Perfect
          </h2>
          <p className="text-center text-slate-300 mb-3 max-w-3xl mx-auto">
            Every LLM has critical trade-offs. Choosing just one means sacrificing speed, quality, or budget.
          </p>
          <p className="text-center text-[#7BC4BD] mb-12 max-w-2xl mx-auto font-medium italic">
            Most apps use a single LLM for all queries. That's like using a Ferrari for grocery runs.
          </p>

          {/* Comparison Table */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-8 mb-8 border border-white/10">
            <div className="grid gap-6">
              {/* DeepSeek */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-white">DeepSeek V3</h3>
                    <p className="text-xs text-slate-400">Cheapest, but risky for production</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 w-16">Cost</span>
                    <div className="flex-1 h-6 bg-slate-700 rounded-lg overflow-hidden">
                      <div className="h-full bg-green-500 flex items-center px-2" style={{ width: '4%' }}>
                        <span className="text-xs font-bold text-white">0.04x</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 w-16">Speed</span>
                    <div className="flex-1 h-6 bg-slate-700 rounded-lg overflow-hidden">
                      <div className="h-full bg-red-500 flex items-center px-2" style={{ width: '45%' }}>
                        <span className="text-xs font-bold text-white">45</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 w-16">Quality</span>
                    <div className="flex-1 h-6 bg-slate-700 rounded-lg overflow-hidden">
                      <div className="h-full bg-yellow-500 flex items-center px-2" style={{ width: '70%' }}>
                        <span className="text-xs font-bold text-white">70</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* GPT-4o */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-white">GPT-4o</h3>
                    <p className="text-xs text-slate-400">Fast & high quality, but expensive</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 w-16">Cost</span>
                    <div className="flex-1 h-6 bg-slate-700 rounded-lg overflow-hidden">
                      <div className="h-full bg-yellow-500 flex items-center px-2" style={{ width: '75%' }}>
                        <span className="text-xs font-bold text-white">0.75x</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 w-16">Speed</span>
                    <div className="flex-1 h-6 bg-slate-700 rounded-lg overflow-hidden">
                      <div className="h-full bg-green-500 flex items-center px-2" style={{ width: '95%' }}>
                        <span className="text-xs font-bold text-white">95</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 w-16">Quality</span>
                    <div className="flex-1 h-6 bg-slate-700 rounded-lg overflow-hidden">
                      <div className="h-full bg-green-500 flex items-center px-2" style={{ width: '95%' }}>
                        <span className="text-xs font-bold text-white">95</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Claude Sonnet */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-lg text-white">Claude Sonnet 4.5</h3>
                    <p className="text-xs text-slate-400">Best quality, highest cost</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 w-16">Cost</span>
                    <div className="flex-1 h-6 bg-slate-700 rounded-lg overflow-hidden">
                      <div className="h-full bg-red-500 flex items-center px-2" style={{ width: '100%' }}>
                        <span className="text-xs font-bold text-white">1.0x</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 w-16">Speed</span>
                    <div className="flex-1 h-6 bg-slate-700 rounded-lg overflow-hidden">
                      <div className="h-full bg-yellow-500 flex items-center px-2" style={{ width: '85%' }}>
                        <span className="text-xs font-bold text-white">85</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-400 w-16">Quality</span>
                    <div className="flex-1 h-6 bg-slate-700 rounded-lg overflow-hidden">
                      <div className="h-full bg-green-500 flex items-center px-2" style={{ width: '98%' }}>
                        <span className="text-xs font-bold text-white">98</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#4A9B9B] to-[#7BC4BD] border-2 border-[#4FA9A0] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-3 text-white">✨ The Solution: Intelligent Model Mix</h3>
            <p className="text-lg text-white/90 mb-4">
              Datoad routes each query to the <strong>optimal model</strong> — not just one
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm mb-4">
              <div className="bg-white/10 rounded-xl p-3 backdrop-blur">
                <div className="font-bold mb-1 text-white">Simple Queries</div>
                <div className="text-white/90">→ DeepSeek, Mistral</div>
                <div className="text-xs text-white/75 mt-1">Save 90%+</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 backdrop-blur">
                <div className="font-bold mb-1 text-white">Balanced Tasks</div>
                <div className="text-white/90">→ GPT-4o, Gemini</div>
                <div className="text-xs text-white/75 mt-1">Fast & high quality</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3 backdrop-blur">
                <div className="font-bold mb-1 text-white">Complex Reasoning</div>
                <div className="text-white/90">→ Claude, GPT-4o</div>
                <div className="text-xs text-white/75 mt-1">Quality > cost</div>
              </div>
            </div>
            <p className="text-sm text-white font-semibold">
              Result: 30-45% savings • 90+ quality • 85+ speed
            </p>
          </div>
        </div>

        {/* Flow Animation */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A4C] mb-4" id="how-it-works">
            How Datoad Works
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Plug in between your app and LLM providers — no code changes needed
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-[#4A9B9B]/10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              {/* Your App */}
              <div className="flex-1 max-w-[200px]">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-6 text-center border-2 border-slate-300 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-2">💻</div>
                  <div className="font-bold text-slate-900 mb-1">Your App</div>
                  <div className="text-xs text-slate-600">Makes LLM request</div>
                </div>
              </div>

              {/* Arrow 1 */}
              <div className="flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-[#4A9B9B] animate-pulse hidden md:block" />
                <div className="md:hidden rotate-90">
                  <ArrowRight className="w-8 h-8 text-[#4A9B9B] animate-pulse" />
                </div>
              </div>

              {/* Datoad */}
              <div className="flex-1 max-w-[200px]">
                <div className="bg-gradient-to-br from-[#4A9B9B] to-[#7BC4BD] rounded-xl p-6 text-center border-2 border-[#4A9B9B] shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-4xl mb-2">🧠</div>
                  <div className="font-bold text-white mb-1">Datoad Router</div>
                  <div className="text-xs text-white/90">Analyzes & routes</div>
                  <div className="text-[10px] text-white/75 mt-1">Zero latency added</div>
                </div>
              </div>

              {/* Arrow 2 */}
              <div className="flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-[#4A9B9B] animate-pulse hidden md:block" />
                <div className="md:hidden rotate-90">
                  <ArrowRight className="w-8 h-8 text-[#4A9B9B] animate-pulse" />
                </div>
              </div>

              {/* Model Providers */}
              <div className="flex-1 max-w-[200px]">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-6 text-center border-2 border-slate-300 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-2">⚡</div>
                  <div className="font-bold text-slate-900 mb-1">Best Model</div>
                  <div className="text-xs text-slate-600">Optimal choice</div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 bg-[#E5F5F4] px-4 py-2 rounded-full border border-[#4A9B9B]/30">
                <CheckCircle className="w-4 h-4 text-[#4A9B9B]" />
                <span className="text-sm font-semibold text-[#1E3A4C]">
                  Drop-in replacement — swap API endpoint and you're done
                </span>
              </div>
            </div>
          </div>

          {/* Technical Deep Dive */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-[#4A9B9B]/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[#1E3A4C] mb-6 flex items-center gap-3" id="routing-algorithm">
                <span className="text-3xl">🧠</span>
                <span>Under the Hood: The Routing Algorithm</span>
              </h3>

              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  Datoad's cognitive router uses a <strong>multi-factor classification model</strong> to analyze every incoming request in real-time:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-white rounded-xl p-4 border border-[#4A9B9B]/10">
                    <h4 className="font-bold text-[#1E3A4C] mb-2 flex items-center gap-2">
                      <span className="text-lg">📊</span>
                      Query Complexity Analysis
                    </h4>
                    <ul className="text-sm space-y-1 text-slate-600">
                      <li>• Prompt length & structure</li>
                      <li>• Required reasoning depth</li>
                      <li>• Context window needs</li>
                      <li>• Output format complexity</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-[#4A9B9B]/10">
                    <h4 className="font-bold text-[#1E3A4C] mb-2 flex items-center gap-2">
                      <span className="text-lg">⚖️</span>
                      Cost-Quality Optimization
                    </h4>
                    <ul className="text-sm space-y-1 text-slate-600">
                      <li>• Real-time provider pricing</li>
                      <li>• Quality threshold requirements</li>
                      <li>• Latency constraints</li>
                      <li>• Historical performance data</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-[#4A9B9B]/5 rounded-xl p-5 mt-4 border-l-4 border-[#4A9B9B]">
                  <p className="text-sm font-semibold text-[#1E3A4C] mb-2">Decision Engine:</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    For each query, the router calculates a <strong>quality-cost score</strong> across all available models.
                    Simple tasks (e.g., JSON parsing, translation) route to efficient models like DeepSeek or Mistral.
                    Complex reasoning (e.g., code generation, analysis) uses premium models like Claude or GPT-4o.
                    The algorithm continuously learns from your usage patterns to optimize future routing decisions.
                  </p>
                </div>

                <p className="text-sm text-slate-600 italic mt-4">
                  <strong>Technical note:</strong> All routing decisions happen in &lt;10ms, adding negligible latency to your requests.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy & Security Note */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <h3 className="text-sm font-bold text-[#1E3A4C] mb-3 flex items-center gap-2">
                <span className="text-lg">🔐</span>
                Your data stays private
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Datoad operates as a pass-through proxy with <strong>zero data retention</strong>.
                We only store metadata (query type, model used, token count) for analytics —
                never the actual prompts or responses. All traffic is encrypted in transit (TLS 1.3).
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A4C] mb-12" id="features">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#E5F5F4] rounded-xl flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-[#4A9B9B]" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1E3A4C] mb-2" id="cognitive-routing">Cognitive Routing</h3>
              <p className="text-sm font-semibold text-[#4A9B9B] mb-3">
                LLM routing meets cost & performance analytics.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our AI analyzes each query and routes it to the optimal model based on complexity,
                cost, and quality requirements. Simple queries use cheaper models, complex ones get premium treatment.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#E5F5F4] rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#4A9B9B]" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1E3A4C] mb-3" id="zero-code-changes">Zero Code Changes</h3>
              <p className="text-slate-600 leading-relaxed">
                Just swap your API endpoint. Datoad sits between your application and LLM providers,
                working seamlessly with OpenAI, Anthropic, Google, AWS, and Azure.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#E5F5F4] rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-[#4A9B9B]" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1E3A4C] mb-3" id="analytics">Real-Time Analytics</h3>
              <p className="text-slate-600 leading-relaxed">
                Track your savings vs. baseline in real-time. See exactly which queries were optimized
                and how much you're saving per request type.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#E5F5F4] rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-[#4A9B9B]" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1E3A4C] mb-3" id="quality-first">Quality First</h3>
              <p className="text-slate-600 leading-relaxed">
                We never compromise quality for cost. SQL queries are validated with dry-run
                cost estimation. Complex reasoning stays on premium models.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-20 border border-[#4A9B9B]/10">
          <h2 className="text-4xl font-bold text-center text-[#1E3A4C] mb-12" id="implementation">How It Works</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A9B9B] to-[#7BC4BD] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1E3A4C]">Your App Sends Request</h3>
              <p className="text-slate-600 text-sm">No code changes needed</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A9B9B] to-[#7BC4BD] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1E3A4C]">Datoad Analyzes</h3>
              <p className="text-slate-600 text-sm">Query complexity & requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A9B9B] to-[#7BC4BD] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1E3A4C]">Smart Routing</h3>
              <p className="text-slate-600 text-sm">Optimal model selected</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4A9B9B] to-[#7BC4BD] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#1E3A4C]">You Save Money</h3>
              <p className="text-slate-600 text-sm">30-45% cost reduction</p>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-br from-[#4A9B9B]/5 to-[#7BC4BD]/5 rounded-2xl p-10 mb-20 border border-[#4A9B9B]/20">
          <h2 className="text-3xl font-bold text-center text-[#1E3A4C] mb-3" id="trusted-by">
            Trusted by Teams Optimizing at Scale
          </h2>
          <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
            Ideal for engineering teams spending <strong>$10k+/month</strong> on LLM APIs who want to cut costs without compromising quality
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md border border-[#4A9B9B]/10 text-center">
              <div className="text-4xl mb-3">🏦</div>
              <h3 className="font-bold text-[#1E3A4C] mb-2">Fintech & Banking</h3>
              <p className="text-sm text-slate-600">Document processing, fraud detection, customer support automation</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-[#4A9B9B]/10 text-center">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="font-bold text-[#1E3A4C] mb-2">Healthcare & Research</h3>
              <p className="text-sm text-slate-600">Clinical documentation, research analysis, medical coding</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-[#4A9B9B]/10 text-center">
              <div className="text-4xl mb-3">🛒</div>
              <h3 className="font-bold text-[#1E3A4C] mb-2">E-commerce & SaaS</h3>
              <p className="text-sm text-slate-600">Product recommendations, chatbots, content generation</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-600 font-medium">
              <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-[#4A9B9B]/20">
                <span className="text-lg">✓</span>
                <span>Enterprise-grade security • SOC2 Type II in progress • GDPR/CCPA compliant</span>
              </span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-[#1E3A4C] to-[#2C4A5E] rounded-3xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Start Optimizing Today</h2>
          <p className="text-xl mb-2 opacity-90">
            Free for 30 days, no contract, no code.
          </p>
          <p className="text-lg mb-8 opacity-75">
            See real savings, verify quality, scale with confidence.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/calculator"
              className="bg-gradient-to-r from-[#4A9B9B] to-[#7BC4BD] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Calculate Your Savings
            </Link>
            <button
              onClick={() => openContactForm('pilot')}
              className="bg-transparent text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border-2 border-[#4A9B9B]"
            >
              Request Pilot Access
            </button>
          </div>

          <p className="mt-8 text-sm opacity-75">
            🚀 Accepting 2 pilot partners this quarter
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-slate-600">
          <div className="flex justify-center gap-8 mb-4 flex-wrap">
            <span className="text-sm font-medium text-slate-500">OpenAI</span>
            <span className="text-sm font-medium text-slate-500">Anthropic</span>
            <span className="text-sm font-medium text-slate-500">Google</span>
            <span className="text-sm font-medium text-slate-500">AWS</span>
            <span className="text-sm font-medium text-slate-500">Azure</span>
          </div>
          <p className="text-sm mb-6 text-slate-500">Provider-agnostic — no vendor lock-in</p>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://x.com/getdatoad"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 hover:text-[#4A9B9B] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span className="text-sm font-medium">Twitter</span>
            </a>
            <a
              href="https://www.linkedin.com/company/datoad/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 hover:text-[#4A9B9B] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>

          <p className="text-xs mb-2">
            <a href="mailto:diegocastellanos@datoad.dev" className="text-[#4A9B9B] hover:underline font-medium">
              diegocastellanos@datoad.dev
            </a>
            {' · '}
            <a href="https://datoad.dev" className="text-[#4A9B9B] hover:underline font-medium">
              datoad.dev
            </a>
          </p>
          <p className="text-xs mt-4 text-slate-400">© 2025 Datoad, Inc. All rights reserved.</p>
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
