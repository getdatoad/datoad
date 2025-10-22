import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './OnePager.css';

export default function OnePager() {
  return (
    <>
      <Navbar />
      <div className="onepager-container">
      {/* BLOCK 1: HEADER */}
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

      {/* BLOCK 2: THE PROBLEM */}
      <div className="problem-block">
        <span className="problem-icon">🚨</span>
        <h2>Most teams overspend on LLM usage.</h2>
        <p>Companies use GPT-4 for everything — even simple queries that cheaper models handle perfectly.</p>

        <ul className="problem-bullets">
          <li>~70% of API calls are over-provisioned</li>
          <li>SQL/analytics queries cost 5–10× more than necessary</li>
          <li>No visibility into cost-per-query optimization opportunities</li>
        </ul>

        <div className="situation-box">
          <h3>Your situation:</h3>
          <div className="situation-line">
            <span>Current monthly spend:</span>
            <strong>$50,000</strong>
          </div>
          <div className="situation-line">
            <span>Over-provisioned:</span>
            <strong>~$18,000 (36%)</strong>
          </div>
          <div className="situation-line">
            <span>Wasted annually:</span>
            <strong>$216,000</strong>
          </div>
        </div>

        <div className="testimonial">
          <p>"We discovered 60% of our queries could run on cheaper models with identical results."</p>
          <p><strong>— Head of Data Engineering, B2B SaaS Company</strong></p>
        </div>
      </div>

      {/* BLOCK 3: THE SOLUTION */}
      <div className="solution-block">
        <h2>✅ The Solution: Cognitive Routing</h2>
        <p>Datoad sits between your code and LLM providers. For each request:</p>

        <ol className="solution-steps">
          <li><strong>Analyzes</strong> query complexity and requirements</li>
          <li><strong>Routes</strong> to the optimal model automatically</li>
          <li><strong>Validates</strong> SQL with dry-run cost estimation</li>
          <li><strong>Tracks</strong> savings vs. baseline in real-time</li>
        </ol>

        <div className="key-principle">
          <strong>Key principle:</strong> <em>Maximize quality, minimize cost per request.</em>
        </div>

        <div className="flow-diagram">
          <div className="flow-box">💻<br />Your App</div>
          <span className="flow-arrow">→</span>
          <div className="flow-box">📡<br />Datoad API</div>
          <span className="flow-arrow">→</span>
          <div className="flow-box">⚙️<br />Policy Engine</div>
          <span className="flow-arrow">→</span>
          <div className="flow-box">✓<br />Optimal Model</div>
        </div>

        <div className="policy-flow">
          Speed ⚡ ←→ Accuracy 🎯 ←→ Cost 💰<br />
          <small>(Your custom weights)</small>
        </div>

        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          <strong>No code changes required</strong> — just swap your API endpoint.
        </p>
      </div>

      {/* BLOCK 4: HERO SAVINGS & ROI */}
      <div className="hero-block">
        <div className="hero-content">
          <div className="hero-left">
            <h2>SAVINGS PROJECTION DASHBOARD</h2>

            <div className="workload-pills">
              <span className="pill simple">🟦 Simple QA</span>
              <span className="pill sql">🟩 SQL Analytics</span>
              <span className="pill complex">🟧 Complex</span>
              <span className="pill doc">🟪 Doc Summary</span>
            </div>

            <div className="savings-table">
              <div className="savings-row">
                <div className="savings-label">
                  <span>🟦 Simple QA</span>
                  <span>$24,000 → $9,600 (60%)</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar" style={{ width: '60%', background: '#3B82F6' }}></div>
                </div>
              </div>
              <div className="savings-row">
                <div className="savings-label">
                  <span>🟩 SQL Analytics</span>
                  <span>$26,000 → $10,400 (60%)</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar" style={{ width: '60%', background: '#10B981' }}></div>
                </div>
              </div>
              <div className="savings-row">
                <div className="savings-label">
                  <span>🟧 Complex</span>
                  <span>No optimization</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar" style={{ width: '0%', background: '#F59E0B' }}></div>
                </div>
              </div>
              <div className="savings-row">
                <div className="savings-label">
                  <span>🟪 Doc Summary</span>
                  <span>No optimization</span>
                </div>
                <div className="progress-bar-bg">
                  <div className="progress-bar" style={{ width: '0%', background: '#A855F7' }}></div>
                </div>
              </div>
            </div>

            <div className="baseline-caption">
              Baseline = current model mix (last 90 days), contract-locked & auditable
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-value large">52%</span>
              <div className="stat-label">reduction 📉</div>
            </div>
            <div className="stat-item">
              <span className="stat-value medium">5.7× ROI</span>
              <div className="stat-label">💎</div>
            </div>
            <div className="stat-item">
              <span className="stat-value small">$265,000</span>
              <div className="stat-label">annual impact 🚀</div>
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK 5: TIMELINE */}
      <div className="timeline-block">
        <h2>30-Day Pilot Timeline</h2>
        <div className="timeline-grid">
          <div className="timeline-item">
            <div className="timeline-week">Week 1</div>
            <div className="timeline-title">Calibration</div>
            <div className="timeline-desc">100–200 queries, build policy</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-week">Week 2–3</div>
            <div className="timeline-title">Live Routing</div>
            <div className="timeline-desc">Full traffic, fallback safety</div>
          </div>
          <div className="timeline-item">
            <div className="timeline-week">Week 4</div>
            <div className="timeline-title">Review & Decide</div>
            <div className="timeline-desc">Verified savings vs baseline</div>
          </div>
        </div>
      </div>

      {/* BLOCK 6: PRICING & CTA */}
      <div className="pricing-block">
        <h2>Simple, Transparent Pricing</h2>

        <div className="trust-badge">
          🔒 SOC2 Type II in progress · GDPR/CCPA aligned · Zero data retention by default
        </div>

        <div className="pricing-grid">
          <div className="pricing-card">
            <div className="pricing-title">Starter</div>
            <div className="pricing-amount">$2,500</div>
            <div className="pricing-period">per month</div>
            <ul className="pricing-features">
              <li>Up to 100K queries/month</li>
              <li>Basic routing policies</li>
              <li>Dashboard access</li>
              <li>Email support</li>
            </ul>
            <div className="pricing-note">
              Includes full auditability & 24-h routing SLA.
            </div>
          </div>

          <div className="pricing-card featured">
            <div className="pricing-title">Professional</div>
            <div className="pricing-amount">$7,500</div>
            <div className="pricing-period">per month</div>
            <ul className="pricing-features">
              <li>Up to 500K queries/month</li>
              <li>Advanced routing policies</li>
              <li>Real-time analytics</li>
              <li>Priority support</li>
              <li>Custom integrations</li>
            </ul>
            <div className="pricing-note">
              Includes full auditability & 24-h routing SLA.
            </div>
          </div>

          <div className="pricing-card">
            <div className="pricing-title">Enterprise</div>
            <div className="pricing-amount">Custom</div>
            <div className="pricing-period">contact us</div>
            <ul className="pricing-features">
              <li>Unlimited queries</li>
              <li>Custom ML policies</li>
              <li>Dedicated support</li>
              <li>SLA guarantees</li>
              <li>On-premise option</li>
            </ul>
            <div className="pricing-note">
              Includes full auditability & 24-h routing SLA.
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to optimize your LLM costs?</h2>
          <p style={{ fontSize: '18px', margin: '16px 0', color: '#475569' }}>
            Start with a <strong>free 30-day pilot</strong>. See real savings, no commitment required.
          </p>

          <div className="cta-buttons">
            <Link to="/calculator" className="cta-button">
              Calculate your savings →
            </Link>
            <a
              href="mailto:diegocastellanos@datoad.dev?subject=Pilot%20Program%20Interest&body=Hi%20Diego%2C%0A%0AI'm%20interested%20in%20learning%20more%20about%20Datoad's%20pilot%20program.%0A%0ACompany%3A%0AMonthly%20LLM%20spend%3A%0ABest%20time%20to%20chat%3A%0A%0AThanks!"
              className="cta-button secondary"
            >
              Request pilot access →
            </a>
            <a
              href="mailto:diegocastellanos@datoad.dev?subject=Demo%20Request&body=Hi%20Diego%2C%0A%0AI'd%20like%20to%20schedule%20a%20demo%20of%20Datoad.%0A%0ACompany%3A%0ARole%3A%0APreferred%20date/time%3A%0A%0AThanks!"
              className="cta-button secondary"
            >
              Book a demo →
            </a>
          </div>

          <div className="qr-section">
            <div className="qr-code">📱 QR Code</div>
            <div className="qr-caption">Quick calculator access</div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <div className="provider-logos">
          <span className="provider-logo">OpenAI</span>
          <span className="provider-logo">Anthropic</span>
          <span className="provider-logo">Google</span>
          <span className="provider-logo">AWS</span>
          <span className="provider-logo">Azure</span>
        </div>

        <p style={{ fontSize: '9px', color: '#94A3B8', margin: '16px 0' }}>
          For illustration only — trademarks belong to their respective owners.
        </p>

        <p style={{ margin: '20px 0', fontWeight: 600, color: '#2B8A8A', fontSize: '16px' }}>
          🚀 We're looking for pilot partners — Apply today!
        </p>

        <p style={{ margin: '16px 0', fontSize: '14px' }}>
          <strong>Contact us:</strong>{' '}
          <a href="mailto:diegocastellanos@datoad.dev" style={{ color: '#2B8A8A', textDecoration: 'none', fontWeight: 600 }}>
            diegocastellanos@datoad.dev
          </a>
        </p>

        <p style={{ fontSize: '10px', marginTop: '20px' }}>
          © 2025 Datoad, Inc. All rights reserved. Confidential — do not distribute.
        </p>

        <p style={{ fontSize: '11px', marginTop: '16px', fontStyle: 'italic' }}>
          Datoad is provider-agnostic — optimize your spend without vendor lock-in.
        </p>
      </div>
    </div>
    </>
  );
}
