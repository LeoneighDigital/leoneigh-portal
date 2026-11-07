/* ══════════════════════════════════════════════════════════════
   DATA — three demo tenancies
   ══════════════════════════════════════════════════════════════ */

const CLIENTS = [
  {
    id: 'studio-a',
    name: 'Studio A',
    city: 'San Francisco',
    ref: 'SA-041',
    engagement: 'Product Engineering · Retainer',
    started: 'Mar 2024',
    tzId: 'America/Los_Angeles',
    contact: 'M. Okafor',
    sla: '4h response',

    sprint: {
      code: 'SPRINT 04',
      title: 'RBAC & Webhook Migration',
      start: 'Mar 04',
      end: 'Mar 17',
      day: 7,
      total: 14,
      progress: 52,
      milestones: [
        { name: 'Role schema + policy layer', pct: 100, state: 'done' },
        { name: 'Webhook retry queue', pct: 64, state: 'active' },
        { name: 'Staging cutover', pct: 0, state: 'queued' },
        { name: 'Load test + client signoff', pct: 0, state: 'queued' }
      ]
    },

    retainer: {
      cycle: 'Mar 01 — Mar 31',
      total: 120,
      used: 74.5,
      committed: 12,
      rollover: 18,
      rolloverExpiry: 'Mar 31',
      rows: [
        { k: 'Engineering', alloc: 80, used: 54 },
        { k: 'Design', alloc: 20, used: 8.5 },
        { k: 'PM / Strategy', alloc: 12, used: 8 },
        { k: 'QA', alloc: 8, used: 4 }
      ]
    },

    deliverables: [
      { id: '#412', title: 'Role permission matrix schema', type: 'PR', owner: 'L. Marchetti', date: 'MAR 12', status: 'IN PRODUCTION' },
      { id: '#418', title: 'Webhook retry backoff + jitter', type: 'PR', owner: 'R. Adeyemi', date: 'MAR 11', status: 'REVIEW' },
      { id: '#421', title: 'Staging seed fixtures', type: 'PR', owner: 'J. Park', date: 'MAR 09', status: 'DEPLOYED' },
      { id: '#425', title: 'RBAC audit + threat notes', type: 'DOC', owner: 'L. Marchetti', date: 'MAR 07', status: 'DEPLOYED' },
      { id: '#429', title: 'Webhook dead-letter queue', type: 'PR', owner: 'R. Adeyemi', date: 'MAR 12', status: 'REVIEW' },
      { id: '#431', title: 'Migration rollback plan', type: 'RFC', owner: 'J. Park', date: 'MAR 06', status: 'QUEUED' }
    ],

    feed: [
      {
        type: 'DISPATCH', date: 'MAR 12', time: '09:41', by: 'L. Marchetti',
        title: 'Webhook retry semantics locked',
        body: 'Backoff now caps at six attempts with jitter between 2s and 240s. The dead-letter queue drains to the ops webhook. No client-side change required.'
      },
      {
        type: 'RECAP', date: 'MAR 11', time: '17:20', by: 'L. Marchetti',
        title: 'Week 10 async recap',
        body: 'Sprint 04 midpoint review: RBAC schema walkthrough, retry queue demo, and the revised staging cutover window.',
        video: { dur: '06:12', chapters: 14 }
      },
      {
        type: 'DECISION', date: 'MAR 10', time: '11:05', by: 'DEC-014',
        title: 'Retry ceiling set to 6 attempts',
        body: 'Locked after the Mar 09 review. Rejected alternative of 3 attempts (insufficient for partner webhooks). Supersedes DEC-011.'
      },
      {
        type: 'DISPATCH', date: 'MAR 08', time: '14:32', by: 'R. Adeyemi',
        title: 'Staging cutover moved to Mar 16',
        body: 'Client UAT window shifted by two days to accommodate the webhook migration freeze. No impact on the Mar 17 sprint close.'
      },
      {
        type: 'DISPATCH', date: 'MAR 04', time: '10:15', by: 'J. Park',
        title: 'Sprint 04 scope confirmed',
        body: 'RBAC and webhook migration only. The token pipeline work defers to Sprint 05 per the Feb 28 planning note.'
      }
    ],

    decisions: [
      { id: 'DEC-014', title: 'Retry ceiling set to 6 attempts', meta: 'MAR 10 · L. Marchetti', state: 'LOCKED' },
      { id: 'DEC-012', title: 'RBAC roles scoped per workspace', meta: 'MAR 06 · M. Okafor', state: 'LOCKED' },
      { id: 'DEC-011', title: 'Retry ceiling set to 3 attempts', meta: 'FEB 27 · superseded', state: 'SUPERSEDED' }
    ],

    facts: [
      { k: 'NEXT REVIEW', v: 'MAR 17' },
      { k: 'INVOICE CYCLE', v: 'MONTHLY' },
      { k: 'ENV', v: 'STAGING · LIVE' },
      { k: 'SEATS', v: '8 ACTIVE' }
    ]
  },

  {
    id: 'agency-b',
    name: 'Agency B',
    city: 'London',
    ref: 'AB-017',
    engagement: 'Brand Systems · Retainer',
    started: 'Sep 2025',
    tzId: 'Europe/London',
    contact: 'H. Vasquez',
    sla: '6h response',

    sprint: {
      code: 'SPRINT 09',
      title: 'Design Token Pipeline',
      start: 'Mar 10',
      end: 'Mar 23',
      day: 3,
      total: 14,
      progress: 21,
      milestones: [
        { name: 'Token schema audit', pct: 100, state: 'done' },
        { name: 'Figma variable sync', pct: 38, state: 'active' },
        { name: 'Docs site rebuild', pct: 0, state: 'queued' },
        { name: 'Handoff + team training', pct: 0, state: 'queued' }
      ]
    },

    retainer: {
      cycle: 'Mar 01 — Mar 31',
      total: 90,
      used: 21.5,
      committed: 9,
      rollover: 6,
      rolloverExpiry: 'Mar 31',
      rows: [
        { k: 'Design Systems', alloc: 46, used: 12 },
        { k: 'Front-end', alloc: 26, used: 6.5 },
        { k: 'Motion', alloc: 10, used: 2 },
        { k: 'PM / Strategy', alloc: 8, used: 1 }
      ]
    },

    deliverables: [
      { id: '#208', title: 'Token naming spec v2', type: 'DOC', owner: 'H. Vasquez', date: 'MAR 12', status: 'IN PRODUCTION' },
      { id: '#211', title: 'Figma variables export bridge', type: 'PR', owner: 'S. Lindqvist', date: 'MAR 12', status: 'REVIEW' },
      { id: '#214', title: 'Docs site scaffold', type: 'PR', owner: 'T. Nakamura', date: 'MAR 10', status: 'DEPLOYED' },
      { id: '#216', title: 'Motion token audit', type: 'DOC', owner: 'S. Lindqvist', date: 'MAR 09', status: 'DEPLOYED' },
      { id: '#219', title: 'Theme switch harness', type: 'PR', owner: 'T. Nakamura', date: 'MAR 11', status: 'REVIEW' }
    ],

    feed: [
      {
        type: 'DISPATCH', date: 'MAR 12', time: '10:08', by: 'H. Vasquez',
        title: 'Variable sync unblocked',
        body: 'Figma released the variable API quota increase overnight. The export bridge is now running against the live library instead of the fixture file.'
      },
      {
        type: 'RECAP', date: 'MAR 11', time: '16:44', by: 'H. Vasquez',
        title: 'Week 10 async recap',
        body: 'Token audit findings, namespace decision walkthrough, and the docs site information architecture.',
        video: { dur: '04:48', chapters: 9 }
      },
      {
        type: 'DECISION', date: 'MAR 09', time: '13:22', by: 'DEC-033',
        title: 'Token namespaces follow the sys/ prefix',
        body: 'All semantic tokens sit under sys/, component tokens under comp/. Primitive layer stays unprefixed. Locked with the design systems team.'
      },
      {
        type: 'DISPATCH', date: 'MAR 07', time: '09:15', by: 'S. Lindqvist',
        title: 'Figma library freeze ends Mar 14',
        body: 'No library edits between now and the 14th while the export bridge stabilises. Ping the dispatch channel for exceptions.'
      }
    ],

    decisions: [
      { id: 'DEC-033', title: 'Token namespaces follow the sys/ prefix', meta: 'MAR 09 · H. Vasquez', state: 'LOCKED' },
      { id: 'DEC-031', title: 'Docs site ships on the existing stack', meta: 'MAR 05 · T. Nakamura', state: 'LOCKED' },
      { id: 'DEC-029', title: 'Motion tokens deferred to phase two', meta: 'FEB 26 · superseded', state: 'SUPERSEDED' }
    ],

    facts: [
      { k: 'NEXT REVIEW', v: 'MAR 23' },
      { k: 'INVOICE CYCLE', v: 'MONTHLY' },
      { k: 'ENV', v: 'STAGING' },
      { k: 'SEATS', v: '5 ACTIVE' }
    ]
  },

  {
    id: 'foundry-c',
    name: 'Foundry C',
    city: 'Berlin',
    ref: 'FC-002',
    engagement: 'Platform Migration · Project',
    started: 'Jan 2026',
    tzId: 'Europe/Berlin',
    contact: 'A. Brandt',
    sla: '2h response',

    sprint: {
      code: 'SPRINT 02',
      title: 'Data Layer Cutover',
      start: 'Mar 02',
      end: 'Mar 15',
      day: 11,
      total: 14,
      progress: 79,
      milestones: [
        { name: 'Schema parity validation', pct: 100, state: 'done' },
        { name: 'Dual-write shadow traffic', pct: 100, state: 'done' },
        { name: 'Read path cutover', pct: 71, state: 'active' },
        { name: 'Legacy decommission', pct: 0, state: 'queued' }
      ]
    },

    retainer: {
      cycle: 'Mar 01 — Mar 31',
      total: 160,
      used: 131,
      committed: 14,
      rollover: 0,
      rolloverExpiry: '—',
      rows: [
        { k: 'Platform', alloc: 90, used: 78 },
        { k: 'Data Eng', alloc: 40, used: 33 },
        { k: 'QA', alloc: 20, used: 14 },
        { k: 'PM / Strategy', alloc: 10, used: 6 }
      ]
    },

    deliverables: [
      { id: '#092', title: 'Read path cutover runbook', type: 'DOC', owner: 'A. Brandt', date: 'MAR 13', status: 'IN PRODUCTION' },
      { id: '#096', title: 'Dual-write reconciliation job', type: 'PR', owner: 'K. Nowak', date: 'MAR 13', status: 'REVIEW' },
      { id: '#099', title: 'Replica lag alerting', type: 'PR', owner: 'M. Fischer', date: 'MAR 12', status: 'DEPLOYED' },
      { id: '#101', title: 'Legacy table freeze manifest', type: 'RFC', owner: 'K. Nowak', date: 'MAR 11', status: 'QUEUED' },
      { id: '#104', title: 'Cutover rehearsal transcript', type: 'DOC', owner: 'A. Brandt', date: 'MAR 12', status: 'DEPLOYED' }
    ],

    feed: [
      {
        type: 'DISPATCH', date: 'MAR 13', time: '08:52', by: 'A. Brandt',
        title: 'Cutover rehearsal passed',
        body: 'Full rehearsal completed in 41 minutes against a production snapshot. Two reconciliation gaps found and patched before the runbook freeze.'
      },
      {
        type: 'RECAP', date: 'MAR 12', time: '18:10', by: 'A. Brandt',
        title: 'Week 10 async recap',
        body: 'Rehearsal results, dual-write metrics, and the legacy decommission sequence.',
        video: { dur: '08:31', chapters: 17 }
      },
      {
        type: 'DECISION', date: 'MAR 11', time: '12:30', by: 'DEC-007',
        title: 'Dual-write window extended to 72h',
        body: 'Extended from 24h after the lag analysis. Rejected the shorter window due to replica warm-up variance across regions.'
      },
      {
        type: 'DISPATCH', date: 'MAR 09', time: '15:47', by: 'M. Fischer',
        title: 'Read replica lag resolved',
        body: 'Root cause was a missing composite index on the events table. Lag is back under 200ms across all three regions.'
      }
    ],

    decisions: [
      { id: 'DEC-007', title: 'Dual-write window extended to 72h', meta: 'MAR 11 · A. Brandt', state: 'LOCKED' },
      { id: 'DEC-005', title: 'Cutover runs region-by-region', meta: 'MAR 04 · A. Brandt', state: 'LOCKED' },
      { id: 'DEC-003', title: 'Legacy decommission waits 14 days', meta: 'FEB 28 · A. Brandt', state: 'LOCKED' }
    ],

    facts: [
      { k: 'NEXT REVIEW', v: 'MAR 15' },
      { k: 'INVOICE CYCLE', v: 'MILESTONE' },
      { k: 'ENV', v: 'PROD · EU-CENTRAL' },
      { k: 'SEATS', v: '11 ACTIVE' }
    ]
  }
];

/* ══════════════════════════════════════════════════════════════
   STATE + HELPERS
   ══════════════════════════════════════════════════════════════ */

const state = { client: 'studio-a', filter: 'ALL' };

const $   = id => document.getElementById(id);
const pad = n => String(n).padStart(2, '0');
const fmt = n => Number.isInteger(n) ? n.toFixed(1) : String(n);

function statusKey(s) {
  return {
    'IN PRODUCTION': 'production',
    'DEPLOYED': 'deployed',
    'REVIEW': 'review',
    'QUEUED': 'queued'
  }[s] || 'queued';
}

/* ══════════════════════════════════════════════════════════════
   RENDERERS
   ══════════════════════════════════════════════════════════════ */

function renderSwitcher() {
  $('switcher').innerHTML = CLIENTS.map((c, i) => `
    <button class="tenant${c.id === state.client ? ' is-active' : ''}" data-id="${c.id}">
      <span class="t-idx">${pad(i + 1)}</span>
      <span class="t-body">
        <span class="t-name">${c.name}</span>
        <span class="t-city">${c.city}</span>
      </span>
    </button>
  `).join('');
}

function renderMasthead(c) {
  $('masthead').innerHTML = `
    <div class="mh-kicker">
      <span class="mk-dot"></span>ACTIVE ENGAGEMENT
      <span class="mk-sep">/</span>REF ${c.ref}
    </div>
    <h1 class="mh-name">${c.name}</h1>
    <div class="mh-sub">${c.engagement}<span class="dot-sep">·</span>${c.city}</div>
    <div class="mh-meta">
      <div class="mm"><span>STARTED</span><b>${c.started}</b></div>
      <div class="mm"><span>LOCAL TIME</span><b data-tz="${c.tzId}">—</b></div>
      <div class="mm"><span>CONTACT</span><b>${c.contact}</b></div>
      <div class="mm"><span>SLA</span><b>${c.sla}</b></div>
    </div>
  `;
}

function renderSprint(c) {
  const s = c.sprint;

  const segs = Array.from({ length: s.total }, (_, i) => {
    const cls = i < s.day - 1 ? 'past' : i === s.day - 1 ? 'now' : 'future';
    return `<i class="seg ${cls}"></i>`;
  }).join('');

  const rows = s.milestones.map((m, i) => `
    <div class="ms-row ${m.state}">
      <span class="ms-idx">${pad(i + 1)}</span>
      <span class="ms-name">${m.name}</span>
      <span class="ms-bar"><i style="width:${m.pct}%"></i></span>
      <span class="ms-state">${
        m.state === 'done' ? 'COMPLETE'
        : m.state === 'active' ? m.pct + '% IN FLIGHT'
        : 'QUEUED'
      }</span>
    </div>
  `).join('');

  $('sprintBlock').innerHTML = `
    <div class="rubric">
      <span class="rub-num">01</span>
      <span class="rub-title">SPRINT TELEMETRY</span>
      <span class="rub-meta">DAY ${pad(s.day)} / ${pad(s.total)}</span>
    </div>

    <div class="sprint-grid">
      <div>
        <div class="sg-code">${s.code}</div>
        <h2 class="sg-title">${s.title}</h2>
        <div class="sg-dates">${s.start} — ${s.end} · BI-WEEKLY CYCLE</div>
      </div>
      <div class="sg-figure">
        <div class="fig-num">${s.progress}<span>%</span></div>
        <div class="fig-label">CYCLE COMPLETE</div>
      </div>
    </div>

    <div class="day-track" style="grid-template-columns:repeat(${s.total},1fr)">${segs}</div>
    <div class="day-legend">
      <span><b>${pad(s.day)}</b> DAYS ELAPSED</span>
      <span><b>${pad(s.total - s.day)}</b> REMAINING</span>
    </div>

    <div class="milestones">${rows}</div>
  `;
}

function renderRetainer(c) {
  const r = c.retainer;
  const pct = Math.round((r.used / r.total) * 100);
  const avail = r.total - r.used - r.committed;

  const uw = (r.used / r.total) * 100;
  const cw = (r.committed / r.total) * 100;
  const aw = Math.max(0, 100 - uw - cw);

  const rows = r.rows.map(row => `
    <div class="led-row">
      <span class="led-k">${row.k}</span>
      <span class="led-dots"></span>
      <span class="led-v"><b>${fmt(row.used)}</b> / ${fmt(row.alloc)}</span>
    </div>
  `).join('');

  $('retainerBlock').innerHTML = `
    <div class="rubric">
      <span class="rub-num">02</span>
      <span class="rub-title">RETAINER BURN</span>
      <span class="rub-meta">${r.cycle}</span>
    </div>

    <div class="ret-top">
      <div class="ret-figure">
        <span class="rf-big">${fmt(r.used)}</span>
        <span class="rf-den">/ ${fmt(r.total)} HRS</span>
      </div>
      <div class="ret-pct-block">
        <div class="rp-num">${pct}%</div>
        <div class="rp-label">CONSUMED</div>
      </div>
    </div>

    <div class="alloc-bar">
      <i class="a-used" style="width:${uw}%"></i>
      <i class="a-commit" style="width:${cw}%"></i>
      <i class="a-avail" style="width:${aw}%"></i>
    </div>
    <div class="alloc-key">
      <span><b style="background:var(--red)"></b>CONSUMED</span>
      <span><b style="background:#6e6a62"></b>COMMITTED</span>
      <span><b style="background:var(--line)"></b>AVAILABLE</span>
    </div>

    <div class="ledger">${rows}</div>

    <div class="ret-foot">
      <div><span>ROLLOVER RESERVE</span><b class="accent">+${fmt(r.rollover)} HRS</b></div>
      <div><span>EXPIRES</span><b>${r.rolloverExpiry}</b></div>
      <div><span>AVAILABLE</span><b>${fmt(avail)} HRS</b></div>
    </div>
  `;
}

function renderLedger(c) {
  const rows = c.deliverables.map(d => `
    <div class="dl-row">
      <span class="dl-id">${d.id}</span>
      <span class="dl-title">${d.title}</span>
      <span class="dl-type">${d.type}</span>
      <span class="dl-owner">${d.owner}</span>
      <span class="dl-date">${d.date}</span>
      <span class="dl-status st-${statusKey(d.status)}"><i></i>${d.status}</span>
    </div>
  `).join('');

  $('ledgerBlock').innerHTML = `
    <div class="rubric">
      <span class="rub-num">03</span>
      <span class="rub-title">DELIVERABLE LEDGER</span>
      <span class="rub-meta">${pad(c.deliverables.length)} ENTRIES</span>
    </div>

    <div class="dl-head">
      <span>ID</span>
      <span>DELIVERABLE</span>
      <span>TYPE</span>
      <span>OWNER</span>
      <span>UPDATED</span>
      <span>STATUS</span>
    </div>
    ${rows}
  `;
}

function renderFeed(c) {
  const filters = ['ALL', 'DISPATCH', 'RECAP', 'DECISION'];

  const chips = filters.map(f =>
    `<button data-filter="${f}" class="${state.filter === f ? 'on' : ''}">${f}</button>`
  ).join('');

  const items = c.feed
    .filter(e => state.filter === 'ALL' || e.type === state.filter)
    .map(e => {
      const recap = e.video ? `
        <div class="recap">
          <div class="recap-play"><span></span></div>
          <div class="recap-meta">
            <div class="recap-t">${e.title}</div>
            <div class="recap-s">${e.video.chapters} CHAPTERS · TRANSCRIPT ATTACHED</div>
          </div>
          <div class="recap-dur">${e.video.dur}</div>
        </div>
      ` : '';

      return `
        <article class="entry ${e.type === 'DECISION' ? 'decision' : ''}">
          <div class="e-time">
            <div class="e-date">${e.date}</div>
            <div class="e-hh">${e.time}</div>
          </div>
          <div class="e-body">
            <div class="e-head">
              <span class="e-type">${e.type}</span>
              <span class="e-by">${e.by}</span>
            </div>
            <h3 class="e-title">${e.title}</h3>
            <p class="e-text">${e.body}</p>
            ${recap}
          </div>
        </article>
      `;
    }).join('') || `
      <div class="entry">
        <div class="e-time"></div>
        <div class="e-body"><p class="e-text">No entries for this filter.</p></div>
      </div>
    `;

  $('feedBlock').innerHTML = `
    <div class="rubric">
      <span class="rub-num">04</span>
      <span class="rub-title">DISPATCH LOG</span>
      <div class="filters">${chips}</div>
    </div>
    <div class="timeline">${items}</div>
  `;
}

function renderRegister(c) {
  const rows = c.decisions.map(d => `
    <div class="reg-row ${d.state === 'SUPERSEDED' ? 'superseded' : ''}">
      <div class="reg-top">
        <span class="reg-id">${d.id}</span>
        <span class="reg-state">${d.state}</span>
      </div>
      <div class="reg-title">${d.title}</div>
      <div class="reg-meta">${d.meta}</div>
    </div>
  `).join('');

  const facts = c.facts.map(f => `
    <div><span>${f.k}</span><b>${f.v}</b></div>
  `).join('');

  $('registerBlock').innerHTML = `
    <div class="rubric">
      <span class="rub-num">05</span>
      <span class="rub-title">DECISION REGISTER</span>
      <span class="rub-meta">${pad(c.decisions.length)} ENTRIES</span>
    </div>
    <div class="reg">${rows}</div>
    <div class="facts">${facts}</div>
  `;
}

/* ══════════════════════════════════════════════════════════════
   CLOCK
   ══════════════════════════════════════════════════════════════ */

function tick() {
  document.querySelectorAll('[data-tz]').forEach(el => {
    try {
      el.textContent = new Date().toLocaleTimeString('en-GB', {
        timeZone: el.dataset.tz,
        hour12: false
      });
    } catch (err) {
      el.textContent = '—';
    }
  });
}

/* ══════════════════════════════════════════════════════════════
   MASTER RENDER
   ══════════════════════════════════════════════════════════════ */

function render() {
  const c = CLIENTS.find(x => x.id === state.client);
  renderMasthead(c);
  renderSprint(c);
  renderRetainer(c);
  renderLedger(c);
  renderFeed(c);
  renderRegister(c);
  tick();
}

/* ══════════════════════════════════════════════════════════════
   EVENTS
   ══════════════════════════════════════════════════════════════ */

$('switcher').addEventListener('click', e => {
  const tab = e.target.closest('.tenant');
  if (!tab || tab.dataset.id === state.client) return;
  state.client = tab.dataset.id;
  state.filter = 'ALL';
  renderSwitcher();
  render();
});

$('feedBlock').addEventListener('click', e => {
  const btn = e.target.closest('[data-filter]');
  if (!btn) return;
  state.filter = btn.dataset.filter;
  renderFeed(CLIENTS.find(x => x.id === state.client));
});

/* ══════════════════════════════════════════════════════════════
   BOOT
   ══════════════════════════════════════════════════════════════ */

renderSwitcher();
render();
setInterval(tick, 1000);