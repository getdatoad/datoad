import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingDown, Shield, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <Navbar />
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Cut Your LLM API Costs<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              30-45% Instantly
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Intelligent routing that automatically selects the optimal model for each query.
            <br />
            <strong className="text-slate-900">No code changes required.</strong>
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/calculator"
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2"
            >
              Calculate Your Savings
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/onepager"
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border-2 border-slate-200"
            >
              View One Pager
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 mb-2">
              30-45%
            </div>
            <div className="text-slate-600 font-medium">Average Cost Reduction</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 mb-2">
              5.7x
            </div>
            <div className="text-slate-600 font-medium">Average ROI</div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 mb-2">
              $265k+
            </div>
            <div className="text-slate-600 font-medium">Annual Savings (avg)</div>
          </div>
        </div>

        {/* Model Trade-offs Section */}
        <div className="bg-gradient-to-br from-[#1E3A4C] to-[#2C4A5E] rounded-2xl shadow-2xl p-12 mb-20 text-white">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            The Problem: No Single Model is Perfect
          </h2>
          <p className="text-center text-slate-300 mb-12 max-w-3xl mx-auto">
            Every LLM has critical trade-offs. Choosing just one means sacrificing speed, quality, or budget.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* DeepSeek */}
            <div className="bg-slate-800/50 backdrop-blur border border-red-700/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">DeepSeek V3</h3>
                <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded-full">⚠️ Risky Solo</span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-400">💰 Cost</span>
                    <span className="font-bold text-green-400">0.04x ✓</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '4%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-400">⚡ Speed</span>
                    <span className="font-bold text-red-400">45/100 ✗</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-400">🎯 Quality</span>
                    <span className="font-bold text-red-400">70/100 ✗</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-2 bg-red-900/20 border border-red-700/30 rounded text-xs text-red-200">
                100% = Slow, lower quality
              </div>
            </div>

            {/* GPT-4o */}
            <div className="bg-slate-800/50 backdrop-blur border border-yellow-700/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">GPT-4o</h3>
                <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded-full">⚠️ Expensive</span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-400">💰 Cost</span>
                    <span className="font-bold text-yellow-400">0.75x ⚠️</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-400">⚡ Speed</span>
                    <span className="font-bold text-green-400">95/100 ✓</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-400">🎯 Quality</span>
                    <span className="font-bold text-green-400">95/100 ✓</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-2 bg-yellow-900/20 border border-yellow-700/30 rounded text-xs text-yellow-200">
                100% = Burning budget
              </div>
            </div>

            {/* Claude Sonnet */}
            <div className="bg-slate-800/50 backdrop-blur border border-red-700/50 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Sonnet 4.5</h3>
                <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded-full">⚠️ Too Costly</span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-400">💰 Cost</span>
                    <span className="font-bold text-red-400">1.0x ✗</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-400">⚡ Speed</span>
                    <span className="font-bold text-yellow-400">85/100 ⚠️</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-400">🎯 Quality</span>
                    <span className="font-bold text-green-400">98/100 ✓</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-2 bg-red-900/20 border border-red-700/30 rounded text-xs text-red-200">
                100% = Most expensive
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

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Cognitive Routing</h3>
              <p className="text-slate-600 leading-relaxed">
                Our AI analyzes each query and routes it to the optimal model based on complexity,
                cost, and quality requirements. Simple queries use cheaper models, complex ones get premium treatment.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-teal-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Zero Code Changes</h3>
              <p className="text-slate-600 leading-relaxed">
                Just swap your API endpoint. Datoad sits between your application and LLM providers,
                working seamlessly with OpenAI, Anthropic, Google, AWS, and Azure.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Real-Time Analytics</h3>
              <p className="text-slate-600 leading-relaxed">
                Track your savings vs. baseline in real-time. See exactly which queries were optimized
                and how much you're saving per request type.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Quality First</h3>
              <p className="text-slate-600 leading-relaxed">
                We never compromise quality for cost. SQL queries are validated with dry-run
                cost estimation. Complex reasoning stays on premium models.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-3xl shadow-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">How It Works</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold text-lg mb-2">Your App Sends Request</h3>
              <p className="text-slate-600 text-sm">No code changes needed</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold text-lg mb-2">Datoad Analyzes</h3>
              <p className="text-slate-600 text-sm">Query complexity & requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold text-lg mb-2">Smart Routing</h3>
              <p className="text-slate-600 text-sm">Optimal model selected</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold text-lg mb-2">You Save Money</h3>
              <p className="text-slate-600 text-sm">30-45% cost reduction</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Optimize Your LLM Costs?</h2>
          <p className="text-xl mb-8 opacity-90">
            Start with a free 30-day pilot. See real savings, no commitment required.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/calculator"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              Calculate Savings Now
            </Link>
            <a
              href="mailto:diegocastellanos@datoad.dev?subject=Pilot%20Program%20Interest"
              className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all border-2 border-white/30"
            >
              Request Pilot Access
            </a>
          </div>

          <p className="mt-8 text-sm opacity-75">
            🚀 Looking for pilot partners — Limited availability this quarter
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-slate-600">
          <div className="flex justify-center gap-8 mb-4 flex-wrap">
            <span className="text-sm font-medium">OpenAI</span>
            <span className="text-sm font-medium">Anthropic</span>
            <span className="text-sm font-medium">Google</span>
            <span className="text-sm font-medium">AWS</span>
            <span className="text-sm font-medium">Azure</span>
          </div>
          <p className="text-sm mb-4">Provider-agnostic — no vendor lock-in</p>
          <p className="text-xs">
            <a href="mailto:diegocastellanos@datoad.dev" className="text-blue-600 hover:underline font-medium">
              diegocastellanos@datoad.dev
            </a>
            {' · '}
            <a href="https://datoad.dev" className="text-blue-600 hover:underline font-medium">
              datoad.dev
            </a>
          </p>
          <p className="text-xs mt-4 text-slate-400">© 2025 Datoad, Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
