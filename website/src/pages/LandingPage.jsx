import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, TrendingDown, Shield, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
              <img src="/assets/logo.png" alt="Datoad" className="w-14 h-14 rounded-xl" onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }} />
              <Zap className="w-8 h-8 text-white" style={{display: 'none'}} />
            </div>
            <h1 className="text-5xl font-bold text-slate-900">Datoad</h1>
          </div>

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
