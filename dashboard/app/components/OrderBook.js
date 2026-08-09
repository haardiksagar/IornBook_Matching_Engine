'use client';
// Copyright (c) 2026 Haardik Sagar. Licensed under MIT.

function maxVolume(levels) {
  return levels.reduce((max, level) => Math.max(max, level.volume), 0);
}

export default function OrderBook({ bids, asks }) {
  const maxBidVol = maxVolume(bids);
  const maxAskVol = maxVolume(asks);
  const maxTotalVol = Math.max(maxBidVol, maxAskVol) || 1; // avoid div by 0

  return (
    <div className="glass-panel" style={{ flex: 1, padding: '24px', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="live-dot" />
          Live Order Book
        </h2>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>REST Snapshot</span>
      </div>

      <div style={{ display: 'flex', gap: '24px', flex: 1 }}>
        
        {/* BIDS COLUMN */}
        <div style={{ flex: 1 }}>
          <div style={{ padding: '8px', textAlign: 'center', background: 'var(--buy-bg)', color: 'var(--buy-color)', borderRadius: '6px', marginBottom: '12px', fontWeight: '600', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
            BIDS (BUY)
          </div>
          <div style={{ height: '360px', overflowY: 'auto', paddingRight: '4px', background: 'var(--buy-bg)', borderRadius: '6px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ position: 'sticky', top: 0, background: 'var(--buy-bg)', zIndex: 10 }}>
                <tr>
                  <th style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', padding: '8px 0' }}>Price</th>
                  <th style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', padding: '8px 0' }}>Volume</th>
                </tr>
              </thead>
              <tbody>
              {bids.length === 0 ? (
                <tr><td colSpan="2" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)', fontStyle: 'italic' }}>Waiting...</td></tr>
              ) : bids.map((bid, i) => {
                return (
                  <tr key={`bid-${bid.price}-${i}`}>
                    <td className="mono" style={{ padding: '8px 0', color: 'var(--buy-color)', fontWeight: '500', textAlign: 'center' }}>{bid.price.toFixed(2)}</td>
                    <td className="mono" style={{ padding: '8px 0', textAlign: 'center' }}>{bid.volume.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
        </div>

        {/* ASKS COLUMN */}
        <div style={{ flex: 1 }}>
          <div style={{ padding: '8px', textAlign: 'center', background: 'var(--sell-bg)', color: 'var(--sell-color)', borderRadius: '6px', marginBottom: '12px', fontWeight: '600', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
            ASKS (SELL)
          </div>
          <div style={{ height: '360px', overflowY: 'auto', paddingRight: '4px', background: 'var(--sell-bg)', borderRadius: '6px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ position: 'sticky', top: 0, background: 'var(--sell-bg)', zIndex: 10 }}>
                <tr>
                  <th style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', padding: '8px 0' }}>Price</th>
                  <th style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', padding: '8px 0' }}>Volume</th>
                </tr>
              </thead>
              <tbody>
              {asks.length === 0 ? (
                <tr><td colSpan="2" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)', fontStyle: 'italic' }}>Waiting...</td></tr>
              ) : asks.map((ask, i) => {
                return (
                  <tr key={`ask-${ask.price}-${i}`}>
                    <td className="mono" style={{ padding: '8px 0', color: 'var(--sell-color)', fontWeight: '500', textAlign: 'center' }}>{ask.price.toFixed(2)}</td>
                    <td className="mono" style={{ padding: '8px 0', textAlign: 'center' }}>{ask.volume.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
        </div>

      </div>
    </div>
  );
}
