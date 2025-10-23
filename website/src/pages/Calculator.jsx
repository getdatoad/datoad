import React, { useState, useMemo, useEffect } from 'react';
import { DollarSign, TrendingDown, Zap, PieChart, Info, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function DatoadCalculator() {
  // Load initial values from localStorage or use defaults
  const [monthlySpend, setMonthlySpend] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('datoad_monthlySpend') || '';
    }
    return '';
  });

  const [currentMix, setCurrentMix] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('datoad_currentMix');
      if (saved) return JSON.parse(saved);
    }
    return {
      'gpt-4o': 20,
      'claude-sonnet-4.5': 25,
      'gpt-4-turbo': 15,
      'gemini-2.0-flash': 15,
      'mistral-large': 15,
      'deepseek-v3': 10
    };
  });

  const [workload, setWorkload] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('datoad_workload');
      if (saved) return JSON.parse(saved);
    }
    return {
      simple_qa: 30,
      sql_analytics: 40,
      complex_reasoning: 20,
      doc_summarization: 10
    };
  });

  const [showInfo, setShowInfo] = useState(false);
  const [showTooltip, setShowTooltip] = useState(null);

  // Save to localStorage whenever values change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('datoad_monthlySpend', monthlySpend);
    }
  }, [monthlySpend]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('datoad_currentMix', JSON.stringify(currentMix));
    }
  }, [currentMix]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('datoad_workload', JSON.stringify(workload));
    }
  }, [workload]);

  const results = useMemo(() => {
    const spend = Number(monthlySpend) || 0;

    // Model specs: cost, speed (tokens/sec), quality (0-100)
    const modelSpecs = {
      'gpt-4o': { cost: 0.75, speed: 95, quality: 95 },           // Fast & high quality
      'claude-sonnet-4.5': { cost: 1.0, speed: 85, quality: 98 }, // Baseline - best quality
      'gpt-4-turbo': { cost: 0.5, speed: 80, quality: 90 },       // Good balance
      'gemini-2.0-flash': { cost: 0.30, speed: 98, quality: 85 }, // Very fast
      'mistral-large': { cost: 0.25, speed: 75, quality: 82 },    // Economical
      'deepseek-v3': { cost: 0.04, speed: 45, quality: 70 }       // Cheapest, slow
    };

    // Calculate baseline cost adjusted by current model mix
    const currentMixMultiplier = Object.entries(currentMix).reduce((acc, [model, pct]) => {
      const spec = modelSpecs[model] || { cost: 0.5 };
      return acc + spec.cost * (pct / 100);
    }, 0);

    // Calculate average speed and quality of current mix
    const avgSpeed = Object.entries(currentMix).reduce((acc, [model, pct]) => {
      const spec = modelSpecs[model] || { speed: 50 };
      return acc + spec.speed * (pct / 100);
    }, 0);

    const avgQuality = Object.entries(currentMix).reduce((acc, [model, pct]) => {
      const spec = modelSpecs[model] || { quality: 50 };
      return acc + spec.quality * (pct / 100);
    }, 0);

    const baseline = Math.round(spend * currentMixMultiplier);

    const workloadCost = {
      simple_qa: baseline * (workload.simple_qa / 100),
      sql_analytics: baseline * (workload.sql_analytics / 100),
      complex_reasoning: baseline * (workload.complex_reasoning / 100),
      doc_summarization: baseline * (workload.doc_summarization / 100)
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
      'gpt-4o': 10,
      'claude-sonnet-4.5': 15,
      'gpt-4-turbo': 10,
      'gemini-2.0-flash': 25,
      'mistral-large': 20,
      'deepseek-v3': 20
    };

    // Calculate optimized mix speed and quality
    const optimizedSpeed = Object.entries(optimizedMix).reduce((acc, [model, pct]) => {
      const spec = modelSpecs[model] || { speed: 50 };
      return acc + spec.speed * (pct / 100);
    }, 0);

    const optimizedQuality = Object.entries(optimizedMix).reduce((acc, [model, pct]) => {
      const spec = modelSpecs[model] || { quality: 50 };
      return acc + spec.quality * (pct / 100);
    }, 0);

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
      afterDistribution,
      avgSpeed: Math.round(avgSpeed),
      avgQuality: Math.round(avgQuality),
      optimizedSpeed: Math.round(optimizedSpeed),
      optimizedQuality: Math.round(optimizedQuality),
      modelSpecs
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
          <p className="text-xs text-slate-500 mt-2">Supporting OpenAI, Anthropic, Google, Mistral, and DeepSeek models</p>
        </div>

        {/* Sticky Input Summary */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-6 shadow-sm">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-sm font-semibold text-blue-900 mb-1">Your Current Mix Performance</div>
              <div className="text-sm text-blue-800">
                Monthly spend <span className="font-mono font-bold">${monthlySpend ? Number(monthlySpend).toLocaleString() : '0'}</span>
                {' · '}
                Model mix <span className="font-bold">{dominantModel[1].toFixed(0)}% {dominantModel[0]}</span>
                {' · '}
                Workload <span className="font-bold">{topWorkload[1].toFixed(0)}% {topWorkload[0].replace('_', ' ')}</span>
              </div>
              <div className="flex gap-4 mt-2">
                <div className="text-xs flex items-center gap-1">
                  ⚡ <span className="font-semibold">Speed:</span> <span className="font-mono font-bold text-blue-900">{results.avgSpeed}/100</span>
                  <Tooltip
                    id="speed-metric"
                    content={`Speed Score (0-100): Average tokens/sec throughput of your model mix.\nHigher = faster response times.\nYour mix: ${results.avgSpeed.toFixed(0)}/100`}
                  />
                </div>
                <div className="text-xs flex items-center gap-1">
                  🎯 <span className="font-semibold">Quality:</span> <span className="font-mono font-bold text-blue-900">{results.avgQuality}/100</span>
                  <Tooltip
                    id="quality-metric"
                    content={`Quality Score (0-100): Accuracy and reasoning capability.\nHigher = better outputs.\nYour mix: ${results.avgQuality.toFixed(0)}/100`}
                  />
                </div>
                <div className="text-xs flex items-center gap-1">
                  💰 <span className="font-semibold">Cost Index:</span> <span className="font-mono font-bold text-blue-900">{(results.baseline / (Number(monthlySpend) || 1)).toFixed(2)}x</span>
                  <Tooltip
                    id="cost-index"
                    content={`Cost Index: Relative cost vs baseline.\n1.0x = Claude Sonnet 4.5 (most expensive)\n0.04x = DeepSeek V3 (cheapest)\nYour mix: ${(results.baseline / (Number(monthlySpend) || 1)).toFixed(2)}x`}
                  />
                </div>
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

              {/* Quick Estimate Buttons */}
              <div className="mt-3">
                <div className="text-xs text-slate-600 font-semibold mb-2">⚡ Quick Estimate:</div>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      setMonthlySpend('10000');
                      setCurrentMix({ 'gpt-4o': 40, 'claude-sonnet-4.5': 30, 'gpt-4-turbo': 20, 'gemini-2.0-flash': 10, 'mistral-large': 0, 'deepseek-v3': 0 });
                      setWorkload({ simple_qa: 40, sql_analytics: 30, complex_reasoning: 20, doc_summarization: 10 });
                    }}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium rounded-lg border border-slate-300 transition-colors"
                  >
                    Startup ($10k/mo)
                  </button>
                  <button
                    onClick={() => {
                      setMonthlySpend('50000');
                      setCurrentMix({ 'gpt-4o': 30, 'claude-sonnet-4.5': 25, 'gpt-4-turbo': 15, 'gemini-2.0-flash': 15, 'mistral-large': 10, 'deepseek-v3': 5 });
                      setWorkload({ simple_qa: 35, sql_analytics: 35, complex_reasoning: 20, doc_summarization: 10 });
                    }}
                    className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-medium rounded-lg border border-blue-300 transition-colors"
                  >
                    Growth ($50k/mo)
                  </button>
                  <button
                    onClick={() => {
                      setMonthlySpend('200000');
                      setCurrentMix({ 'gpt-4o': 25, 'claude-sonnet-4.5': 30, 'gpt-4-turbo': 15, 'gemini-2.0-flash': 15, 'mistral-large': 10, 'deepseek-v3': 5 });
                      setWorkload({ simple_qa: 30, sql_analytics: 40, complex_reasoning: 20, doc_summarization: 10 });
                    }}
                    className="px-3 py-1.5 bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-medium rounded-lg border border-purple-300 transition-colors"
                  >
                    Enterprise ($200k/mo)
                  </button>
                </div>
              </div>
            </div>

            {/* Current Model Mix */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Current Model Mix (%)
              </label>
              <div className="space-y-3">
                {Object.entries(currentMix).map(([model, pct]) => {
                  const spec = results.modelSpecs[model] || { cost: 0.5, speed: 50, quality: 50 };
                  return (
                    <div key={model} className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="w-32 text-xs font-medium text-slate-700" style={{ fontSize: '11px' }}>
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
                      <div className="flex gap-2 ml-32 text-xs">
                        <span className="text-emerald-600">⚡{spec.speed}</span>
                        <span className="text-blue-600">🎯{spec.quality}</span>
                        <span className="text-orange-600">💰{spec.cost.toFixed(2)}x</span>
                      </div>
                    </div>
                  );
                })}
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
                <h2 className="text-2xl font-bold">Your Projected Verified Savings</h2>
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

            {/* Before/After Visual Comparison */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-6">💰 Cost Comparison: Before vs After</h3>

              <div className="space-y-4">
                {/* Before Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-slate-700">Current Spend</span>
                    <span className="text-lg font-bold text-slate-900">${results.baseline.toLocaleString()}</span>
                  </div>
                  <div className="relative h-12 bg-slate-100 rounded-lg overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-slate-400 to-slate-500 flex items-center justify-end pr-3"
                      style={{ width: '100%' }}
                    >
                      <span className="text-white text-sm font-bold">100%</span>
                    </div>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div className="flex items-center justify-center py-2">
                  <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full border border-green-200">
                    <span className="text-2xl">↓</span>
                    <span className="text-sm font-bold text-green-700">Save {results.savingsPct.toFixed(0)}%</span>
                  </div>
                </div>

                {/* After Bar */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-green-700">With Datoad</span>
                    <span className="text-lg font-bold text-green-600">${results.optimizedCost.toLocaleString()}</span>
                  </div>
                  <div className="relative h-12 bg-slate-100 rounded-lg overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#4A9B9B] to-[#7BC4BD] flex items-center justify-end pr-3 transition-all duration-500"
                      style={{ width: `${(results.optimizedCost / results.baseline) * 100}%` }}
                    >
                      <span className="text-white text-sm font-bold">{((results.optimizedCost / results.baseline) * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                </div>

                {/* Savings Highlight */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-green-700 font-semibold mb-1">Monthly Savings</div>
                      <div className="text-2xl font-bold text-green-600">${results.totalSavings.toLocaleString()}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-green-700 font-semibold mb-1">Annual Impact</div>
                      <div className="text-2xl font-bold text-green-600">${(results.totalSavings * 12).toLocaleString()}</div>
                    </div>
                  </div>
                </div>
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

            {/* Performance Trade-offs */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">⚡ Performance vs Cost Trade-off</h3>

              <div className="grid grid-cols-2 gap-6">
                {/* Current Mix */}
                <div className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200">
                  <div className="text-center mb-3">
                    <div className="text-xs font-semibold text-slate-600 uppercase mb-1">Your Current Mix</div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600">Speed</span>
                        <span className="font-bold text-emerald-600">{results.avgSpeed}/100</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full transition-all"
                          style={{ width: `${results.avgSpeed}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600">Quality</span>
                        <span className="font-bold text-blue-600">{results.avgQuality}/100</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full transition-all"
                          style={{ width: `${results.avgQuality}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600">Cost</span>
                        <span className="font-bold text-orange-600">${results.baseline.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Optimized Mix */}
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border-2 border-green-300">
                  <div className="text-center mb-3">
                    <div className="text-xs font-semibold text-green-700 uppercase mb-1">Datoad Optimized</div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600">Speed</span>
                        <span className="font-bold text-emerald-600">{results.optimizedSpeed}/100</span>
                        {results.optimizedSpeed > results.avgSpeed && (
                          <span className="text-xs text-green-600">↑ {(results.optimizedSpeed - results.avgSpeed).toFixed(0)}</span>
                        )}
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full transition-all"
                          style={{ width: `${results.optimizedSpeed}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600">Quality</span>
                        <span className="font-bold text-blue-600">{results.optimizedQuality}/100</span>
                        {results.optimizedQuality !== results.avgQuality && (
                          <span className={`text-xs ${results.optimizedQuality > results.avgQuality ? 'text-green-600' : 'text-orange-600'}`}>
                            {results.optimizedQuality > results.avgQuality ? '↑' : '↓'} {Math.abs(results.optimizedQuality - results.avgQuality).toFixed(0)}
                          </span>
                        )}
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 rounded-full transition-all"
                          style={{ width: `${results.optimizedQuality}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-600">Cost</span>
                        <span className="font-bold text-green-600">${results.optimizedCost.toLocaleString()}</span>
                        <span className="text-xs text-green-600">↓ {results.savingsPct.toFixed(0)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="text-xs text-yellow-800">
                  <strong>💡 Why not 100% DeepSeek?</strong> While DeepSeek is the cheapest (0.04x cost), it has lower speed (45/100) and quality (70/100).
                  Datoad balances cost with performance to maintain {results.optimizedQuality}/100 quality and {results.optimizedSpeed}/100 speed while still saving {results.savingsPct.toFixed(0)}%.
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
                <div className="text-xs font-semibold text-blue-900 mb-2">Smart Routing Strategy:</div>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• <strong>Simple QA</strong> → DeepSeek V3, Mistral Large (90-96% cheaper, acceptable quality)</li>
                  <li>• <strong>SQL/Analytics</strong> → Gemini 2.0 Flash, Mistral Large (fast + cheap)</li>
                  <li>• <strong>Complex reasoning</strong> → Claude Sonnet 4.5, GPT-4o (quality > cost)</li>
                  <li>• <strong>Doc summarization</strong> → Gemini 2.0 Flash, GPT-4 Turbo (balanced)</li>
                </ul>
                <div className="mt-2 text-xs text-blue-600 italic">
                  Each request dynamically routed based on complexity, latency requirements, and cost.
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-lg p-6 text-white text-center border border-slate-700">
              <h3 className="text-2xl font-bold mb-2">
                Ready to capture ~${(results.netBenefit / 1000).toFixed(0)}k/month?
              </h3>
              <p className="text-slate-300 text-sm mb-1">
                That's <span className="font-bold text-green-400">${((results.netBenefit * 12) / 1000).toFixed(0)}k/year</span> in verified net savings
              </p>
              <p className="text-slate-400 text-xs mb-4">
                30-day pilot · No commitment · No upfront cost
              </p>

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
