import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './OnePager.css';

export default function OnePager() {
  return (
    <>
      <Navbar />
      <div className="onepager-container">
        {/* HEADER */}
        <div className="header">
          <div className="logo">
            <div className="logo-icon">
              <img src="/assets/logo.png" alt="Datoad Logo" />
            </div>
            <span className="logo-text">Datoad</span>
          </div>
          <p className="tagline">
            Intelligent API routing that cuts your LLM costs <strong>30–45%</strong> — no code changes
          </p>
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="two-column-grid">
          {/* LEFT COLUMN */}
          <div className="left-column">
            {/* PROBLEM */}
            <div className="problem-block compact">
              <h2>🚨 The Problem</h2>
              <p>Most teams overspend on LLM usage by using GPT-4 for everything.</p>
              <ul className="compact-bullets">
                <li>~70% of API calls are over-provisioned</li>
                <li>SQL queries cost 5–10× more than needed</li>
                <li>No cost-per-query visibility</li>
              </ul>
            </div>

            {/* SOLUTION */}
            <div className="solution-block compact">
              <h2>✅ The Solution</h2>
              <p><strong>Datoad</strong> sits between your code and LLM providers:</p>
              <ol className="compact-steps">
                <li>Analyzes query complexity</li>
                <li>Routes to optimal model</li>
                <li>Validates SQL with dry-run</li>
                <li>Tracks real-time savings</li>
              </ol>
              <div className="key-principle">
                <strong>No code changes</strong> — just swap your API endpoint
              </div>
            </div>

            {/* MODEL TRADE-OFFS */}
            <div className="tradeoffs-block compact">
              <h2>⚖️ No Single Model is Perfect</h2>
              <p style={{ fontSize: '9px', marginBottom: '6px' }}>Each model has critical trade-offs:</p>
              <div className="model-comparison">
                <div className="model-card">
                  <div className="model-name">DeepSeek</div>
                  <div className="model-badge risky">⚠️ Risky</div>
                  <div className="model-stats">
                    <div className="stat good">💰 0.04x ✓</div>
                    <div className="stat bad">⚡ 45 ✗</div>
                    <div className="stat bad">🎯 70 ✗</div>
                  </div>
                </div>
                <div className="model-card">
                  <div className="model-name">GPT-4o</div>
                  <div className="model-badge expensive">⚠️ Costly</div>
                  <div className="model-stats">
                    <div className="stat warn">💰 0.75x ⚠️</div>
                    <div className="stat good">⚡ 95 ✓</div>
                    <div className="stat good">🎯 95 ✓</div>
                  </div>
                </div>
                <div className="model-card">
                  <div className="model-name">Sonnet</div>
                  <div className="model-badge risky">⚠️ Pricey</div>
                  <div className="model-stats">
                    <div className="stat bad">💰 1.0x ✗</div>
                    <div className="stat warn">⚡ 85 ⚠️</div>
                    <div className="stat good">🎯 98 ✓</div>
                  </div>
                </div>
              </div>
              <div style={{ background: '#E5F5F4', padding: '4px 6px', borderRadius: '4px', marginTop: '6px', fontSize: '7px', textAlign: 'center', border: '1px solid #4A9B9B' }}>
                <strong>Datoad's Mix:</strong> 30-45% savings + 90+ quality + 85+ speed
              </div>
            </div>

            {/* TIMELINE */}
            <div className="timeline-block compact">
              <h2>30-Day Pilot</h2>
              <div className="timeline-compact">
                <div className="timeline-item">
                  <strong>Week 1:</strong> Calibration (100–200 queries)
                </div>
                <div className="timeline-item">
                  <strong>Week 2–3:</strong> Live routing with fallback
                </div>
                <div className="timeline-item">
                  <strong>Week 4:</strong> Review verified savings
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="right-column">
            {/* SAVINGS DASHBOARD */}
            <div className="hero-block compact">
              <h2>Your Savings Projection</h2>

              <div className="situation-box compact">
                <div className="situation-line">
                  <span>Monthly spend:</span>
                  <strong>$50,000</strong>
                </div>
                <div className="situation-line">
                  <span>Over-provisioned:</span>
                  <strong>~$18,000 (36%)</strong>
                </div>
                <div className="situation-line">
                  <span>Annual waste:</span>
                  <strong>$216,000</strong>
                </div>
              </div>

              <div className="savings-compact">
                <div className="savings-row">
                  <span>🟦 Simple QA</span>
                  <span className="savings-amount">60% savings</span>
                </div>
                <div className="savings-row">
                  <span>🟩 SQL Analytics</span>
                  <span className="savings-amount">60% savings</span>
                </div>
                <div className="savings-row">
                  <span>🟧 Complex</span>
                  <span className="savings-amount">0% (quality first)</span>
                </div>
              </div>

              <div className="hero-stats compact">
                <div className="stat-item">
                  <span className="stat-value">52%</span>
                  <div className="stat-label">cost reduction</div>
                </div>
                <div className="stat-item">
                  <span className="stat-value">5.7×</span>
                  <div className="stat-label">ROI</div>
                </div>
                <div className="stat-item">
                  <span className="stat-value">$265k</span>
                  <div className="stat-label">annual impact</div>
                </div>
              </div>
            </div>

            {/* PRICING */}
            <div className="pricing-block compact">
              <h2>Simple Pricing</h2>

              <div className="pricing-compact">
                <div className="pricing-tier">
                  <div className="tier-name">Starter</div>
                  <div className="tier-price">$2,500/mo</div>
                  <div className="tier-desc">Up to 100K queries</div>
                </div>
                <div className="pricing-tier featured">
                  <div className="tier-name">Professional</div>
                  <div className="tier-price">$7,500/mo</div>
                  <div className="tier-desc">Up to 500K queries</div>
                </div>
                <div className="pricing-tier">
                  <div className="tier-name">Enterprise</div>
                  <div className="tier-price">Custom</div>
                  <div className="tier-desc">Unlimited queries</div>
                </div>
              </div>

              <div className="trust-badge compact">
                🔒 SOC2 in progress · GDPR/CCPA aligned
              </div>
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="cta-section compact">
          <h2>Ready to optimize your LLM costs?</h2>
          <p>Start with a <strong>free 30-day pilot</strong>. No commitment required.</p>

          <div className="cta-buttons compact">
            <a
              href="mailto:diegocastellanos@datoad.dev?subject=I'm%20interested%20in%20the%20pilot%20program&body=Hi%20Diego%2C%0A%0AI'm%20interested%20in%20running%20a%20free%2030-day%20pilot%20with%20Datoad.%0A%0ACompany%3A%0AMonthly%20LLM%20spend%3A%0AMain%20use%20cases%3A%0A%0AThanks!"
              className="cta-button primary"
            >
              Request Pilot Access →
            </a>
            <Link to="/calculator" className="cta-button secondary">
              Calculate Savings →
            </Link>
          </div>
        </div>

        {/* Print/Share Section - Only visible on web */}
        <div className="no-print share-section">
          <h3>Share or Download</h3>
          <div className="share-buttons">
            <button onClick={() => window.print()} className="share-btn">
              📄 Save as PDF
            </button>
            <a
              href="mailto:?subject=Check%20out%20Datoad%20-%20LLM%20Cost%20Optimization&body=Hi%2C%0A%0ACheck%20out%20Datoad%20-%20they%20can%20cut%20LLM%20costs%20by%2030-45%25.%0A%0Ahttps%3A%2F%2Fdatoad.dev%2Fonepager"
              className="share-btn"
            >
              ✉️ Share via Email
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <div className="footer compact">
          <div className="footer-grid">
            <div className="footer-left">
              <div className="qr-section">
                <img
                  src="/assets/qr-code.png"
                  alt="QR Code - Datoad Calculator"
                  className="qr-code-img"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <div className="qr-caption">Scan to calculate your savings</div>
              </div>
            </div>
            <div className="footer-right">
              <p className="contact-info">
                <strong>Contact:</strong> <a href="mailto:diegocastellanos@datoad.dev">diegocastellanos@datoad.dev</a>
              </p>
              <div className="provider-logos compact">
                <span>OpenAI</span>
                <span>Anthropic</span>
                <span>Google</span>
                <span>AWS</span>
                <span>Azure</span>
              </div>
              <p className="footer-note">Provider-agnostic — optimize without vendor lock-in</p>
              <p className="footer-copy">© 2025 Datoad, Inc. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
