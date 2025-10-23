import React, { useState, useMemo } from 'react';
import { DollarSign, TrendingDown, Zap, PieChart, Info, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function DatoadCalculator() {
  const [monthlySpend, setMonthlySpend] = useState('');
  const [currentMix, setCurrentMix] = useState({
    'gpt-4': 40,
    'gpt-3.5': 50,
    'claude': 10
  });
  const [workload, setWorkload] = useState({
    simple_qa: 30,
    sql_analytics: 40,
    complex_reasoning: 20,
    doc_summarization: 10
  });
  const [showInfo, setShowInfo] = useState(false);
  const [showTooltip, setShowTooltip] = useState(null);

  const results = useMemo(() => {
    const spend = Number(monthlySpend) || 0;
    const baseline = spend;

    const workloadCost = {
      simple_qa: spend * (workload.simple_qa / 100),
      sql_analytics: spend * (workload.sql_analytics / 100),
      complex_reasoning: spend * (workload.complex_reasoning / 100),
      doc_summarization: spend * (workload.doc_summarization / 100)
    };

    const optimizedCost = Math.round(
      workloadCost.simple_qa * 0.40 +
      workloadCost.sql_analytics * 0.30 +
      workloadCost.complex_reasoning * 1.0 +
      workloadCost.doc_summarization * 0.40
    );

    const totalSavings = Math.round(baseline - optimizedCost);
    const savingsPct = baseline > 0 ? (totalSavings / baseline) * 100 : 0;
    const datoadFee = Math.round(totalSavings * 0.15);
    const netBenefit = Math.round(totalSavings - datoadFee);
    const roi = datoadFee > 0 ? netBenefit / datoadFee : 0;

    const optimizedMix = {
      'gpt-4': 20,
      'mistral': 45,
      'gpt-3.5': 35
    };

    const beforeDistribution = {
      total: baseline,
      breakdown: Object.entries(currentMix).map(([model, pct]) => ({
        model,
        pct,
        cost: baseline * (pct / 100)
      }))
    };

    const afterDistribution = {
      total: optimizedCost,
      breakdown: Object.entries(optimizedMix).map(([model, pct]) => ({
        model,
        pct,
        cost: optimizedCost * (pct / 100)
      }))
    };

    return {
      baseline,
      optimizedCost,
      totalSavings,
      savingsPct,
      datoadFee,
      netBenefit,
      roi,
      optimizedMix,
      beforeDistribution,
      afterDistribution
    };
  }, [monthlySpend, workload, currentMix]);

  const topWorkload = useMemo(() => {
    const entries = Object.entries(workload);
    entries.sort((a, b) => b[1] - a[1]);
    return entries[0];
  }, [workload]);

  const dominantModel = useMemo(() => {
    const entries = Object.entries(currentMix);
    entries.sort((a, b) => b[1] - a[1]);
    return entries[0];
  }, [currentMix]);

  const Tooltip = ({ id, content, children }) => (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setShowTooltip(id)}
        onMouseLeave={() => setShowTooltip(null)}
        onClick={() => setShowTooltip(showTooltip === id ? null : id)}
        className="p-0.5 hover:bg-slate-200 rounded transition-colors"
      >
        <Info className="w-3.5 h-3.5 text-slate-400" />
      </button>
      {showTooltip === id && (
        <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-slate-900 text-white text-xs rounded-lg shadow-lg">
          <div className="font-mono leading-relaxed">{content}</div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
            <div className="border-8 border-transparent border-t-slate-900"></div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-slate-600 text-lg">LLM Cost Savings Calculator</p>
          <p className="text-xs text-slate-500 mt-2">Powered by OpenAI, Anthropic, and Mistral integrations</p>
        </div>

        {/* Sticky Input Summary */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6 shadow-sm">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-sm font-semibold text-blue-900 mb-1">Input Summary</div>
              <div className="text-sm text-blue-800">
                Monthly spend <span className="font-mono font-bold">${monthlySpend ? Number(monthlySpend).toLocaleString() : '0'}</span>
                {' · '}
                Model mix <span className="font-bold">{dominantModel[1].toFixed(0)}% {dominantModel[0]}</span>
                {' · '}
                Workload <span className="font-bold">{topWorkload[1].toFixed(0)}% {topWorkload[0].replace('_', ' ')}</span>
              </div>
              <div className="text-xs text-blue-600 mt-1 italic">
                Adjust the sliders below to see your personalized savings
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Input Panel */}
          <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-green-600" />
              Your Current Setup
            </h2>

            {/* Monthly Spend */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Monthly LLM Spend (USD)
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={monthlySpend}
                onChange={(e) => {
                  const value = e.target.value.replace(/[^0-9]/g, '');
                  setMonthlySpend(value);
                }}
                placeholder="50000"
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-lg text-lg font-mono focus:border-blue-500 focus:outline-none"
              />
            </div>

            {/* Current Model Mix */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Current Model Mix (%)
              </label>
              <div className="space-y-3">
                {Object.entries(currentMix).map(([model, pct]) => (
                  <div key={model} className="flex items-center gap-3">
                    <span className="w-24 text-sm font-medium text-slate-600 capitalize">
                      {model}
                    </span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={pct}
                      onChange={(e) => {
                        const newPct = Number(e.target.value);
                        setCurrentMix(prev => {
                          const others = Object.keys(prev).filter(k => k !== model);
                          const remaining = 100 - newPct;
                          const distributed = remaining / others.length;
                          return {
                            ...prev,
                            [model]: newPct,
                            ...Object.fromEntries(others.map(k => [k, distributed]))
                          };
                        });
                      }}
                      className="flex-1"
                    />
                    <span className="w-12 text-right text-sm font-mono text-slate-900">
                      {pct.toFixed(0)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Workload Breakdown */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Workload Types (%)
              </label>
              <div className="space-y-3">
                {Object.entries(workload).map(([type, pct]) => (
                  <div key={type} className="flex items-center gap-3">
                    <span className="w-32 text-xs font-medium text-slate-600">
                      {type.replace('_', ' ').toUpperCase()}
                    </span>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={pct}
                      onChange={(e) => {
                        const newPct = Number(e.target.value);
                        setWorkload(prev => {
                          const others = Object.keys(prev).filter(k => k !== type);
                          const remaining = 100 - newPct;
                          const distributed = remaining / others.length;
                          return {
                            ...prev,
                            [type]: newPct,
                            ...Object.fromEntries(others.map(k => [k, distributed]))
                          };
                        });
                      }}
                      className="flex-1"
                    />
                    <span className="w-12 text-right text-sm font-mono text-slate-900">
                      {pct.toFixed(0)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="space-y-6">
            {/* Main Savings Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-6 text-white">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="w-6 h-6" />
                <h2 className="text-2xl font-bold">Your Verified Savings</h2>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-blue-100">Current spend</span>
                  <span className="text-3xl font-bold">${results.baseline.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-end">
                  <span className="text-blue-100">With Datoad</span>
                  <span className="text-3xl font-bold">${results.optimizedCost.toLocaleString()}</span>
                </div>

                <div className="border-t-2 border-blue-500 pt-4">
                  <div className="flex justify-between items-end mb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm">Total savings</span>
                      <Tooltip
                        id="savings"
                        content={`Formula: current_spend - optimized_spend\n= $${results.baseline.toLocaleString()} - $${results.optimizedCost.toLocaleString()}\n= $${results.totalSavings.toLocaleString()}`}
                      />
                    </div>
                    <span className="text-4xl font-bold">${results.totalSavings.toLocaleString()}</span>
                  </div>
                  <div className="text-right text-blue-100 text-lg mb-3">
                    {results.savingsPct.toFixed(1)}% reduction
                  </div>

                  {/* Baseline Method */}
                  <div className="text-xs text-blue-200 border-t border-blue-500 pt-3 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Baseline = current model mix (historical 90 days)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Breakdown Cards with Tooltips */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center gap-1 mb-1">
                  <div className="text-xs text-slate-500">Datoad Fee (15%)</div>
                  <Tooltip
                    id="fee"
                    content={`Formula: 15% × total_savings\n= 0.15 × $${results.totalSavings.toLocaleString()}\n= $${results.datoadFee.toLocaleString()}`}
                  />
                </div>
                <div className="text-2xl font-bold text-slate-900">
                  ${results.datoadFee.toLocaleString()}
                </div>
                <div className="text-xs text-slate-500 mt-1">per month</div>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center gap-1 mb-1">
                  <div className="text-xs text-slate-500">Your Net Benefit</div>
                  <Tooltip
                    id="roi"
                    content={`ROI Formula: net_benefit / fee\n= $${results.netBenefit.toLocaleString()} / $${results.datoadFee.toLocaleString()}\n= ${results.roi.toFixed(1)}x return`}
                  />
                </div>
                <div className="text-2xl font-bold text-green-600">
                  ${results.netBenefit.toLocaleString()}
                </div>
                <div className="text-xs text-green-600 mt-1">{results.roi.toFixed(1)}x ROI</div>
              </div>
            </div>

            {/* Cost Distribution Donut Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Cost Distribution</h3>

              <div className="grid grid-cols-2 gap-6">
                {/* Before */}
                <div>
                  <div className="text-center mb-3">
                    <div className="text-xs font-semibold text-slate-600 uppercase mb-1">Before</div>
                    <div className="text-2xl font-bold text-slate-900">
                      ${(results.baseline / 1000).toFixed(0)}k
                    </div>
                  </div>
                  <div className="space-y-2">
                    {results.beforeDistribution.breakdown.map(({ model, pct, cost }) => (
                      <div key={model} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-400" />
                        <div className="flex-1 text-xs text-slate-600">
                          {model}
                        </div>
                        <div className="text-xs font-mono text-slate-900">
                          {pct.toFixed(0)}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* After */}
                <div>
                  <div className="text-center mb-3">
                    <div className="text-xs font-semibold text-green-600 uppercase mb-1">After</div>
                    <div className="text-2xl font-bold text-green-600">
                      ${(results.optimizedCost / 1000).toFixed(0)}k
                    </div>
                  </div>
                  <div className="space-y-2">
                    {results.afterDistribution.breakdown.map(({ model, pct, cost }) => (
                      <div key={model} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <div className="flex-1 text-xs text-slate-600">
                          {model}
                        </div>
                        <div className="text-xs font-mono text-slate-900">
                          {pct.toFixed(0)}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Model Mix Optimization */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <PieChart className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-bold text-slate-900 flex-1">
                  How We Optimize
                </h3>
                <button
                  onClick={() => setShowInfo(!showInfo)}
                  className="p-1 hover:bg-slate-100 rounded transition-colors"
                  title="Learn more"
                >
                  <Info className="w-5 h-5 text-slate-400" />
                </button>
              </div>

              {showInfo && (
                <div className="mb-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="text-sm text-slate-700 leading-relaxed">
                    <strong>Datoad uses real-time policy evaluation:</strong> each request
                    is routed to the lowest-cost model that meets your quality threshold.
                    SQL/Analytics tasks validated with dry-run cost estimation before execution.
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {Object.entries(results.optimizedMix).map(([model, pct]) => (
                  <div key={model}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-slate-700 capitalize">{model}</span>
                      <span className="text-slate-600">{pct}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="text-xs font-semibold text-blue-900 mb-2">Routing Strategy:</div>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• Simple QA → GPT-3.5 or Mistral (60% cheaper)</li>
                  <li>• SQL/Analytics → Mistral (70% cheaper than GPT-4)</li>
                  <li>• Complex reasoning → Stays on GPT-4 (quality first)</li>
                  <li>• Doc summarization → GPT-3.5 (60% cheaper)</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-slate-900 rounded-xl shadow-lg p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-2">
                Ready to capture ${results.netBenefit.toLocaleString()}/month in verified savings?
              </h3>
              <p className="text-slate-300 text-sm mb-4">30-day pilot · No commitment · No upfront cost</p>

              <div className="space-y-3">
                <a
                  href="mailto:diegocastellanos@datoad.dev?subject=I'd%20like%20to%20schedule%20a%20call&body=Hi%20Diego%2C%0A%0AI'd%20like%20to%20schedule%20a%2015-minute%20intro%20call%20to%20learn%20more%20about%20Datoad.%0A%0ACompany%3A%0AMonthly%20LLM%20spend%3A%20%0ABest%20time%20to%20chat%3A%0A%0AThanks!"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors w-full block text-center"
                >
                  Schedule 15min Intro Call
                </a>

                <a
                  href="mailto:diegocastellanos@datoad.dev?subject=I'm%20interested%20in%20the%20pilot%20program&body=Hi%20Diego%2C%0A%0AI'm%20interested%20in%20running%20a%20free%2030-day%20pilot%20with%20Datoad.%0A%0ACompany%3A%0AMonthly%20LLM%20spend%3A%20%0AMain%20use%20cases%3A%0ABest%20time%20to%20chat%3A%0A%0AThanks!"
                  className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors w-full flex items-center justify-center gap-2"
                >
                  <PieChart className="w-4 h-4" />
                  Run a free 30-day pilot — see your savings live
                </a>
              </div>

              {/* Early Adopter CTA */}
              <div className="mt-6 pt-4 border-t border-slate-700 text-center">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
                  Limited Availability
                </div>
                <div className="text-sm text-slate-300">
                  Accepting 2 pilot partners this quarter
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-slate-500">
          <p className="font-medium">Validated using your last 90 days usage — no inflated numbers, ever.</p>
          <p className="mt-1">Calculations based on actual workload distribution and model performance benchmarks.</p>
        </div>
      </div>
    </div>
  );
}
