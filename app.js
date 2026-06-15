const toolStorageKey = 'lek-tools-state-v1';

const tools = [
  {
    id: 'aurora-assistent',
    name: 'Aurora Birøkterassistent',
    description: 'Gir forslag og oppfølging basert på inspeksjoner.',
    category: 'active',
    enabled: true,
    showOnDashboard: true,
    icon: '🐝',
  },
  {
    id: 'varroascan',
    name: 'LEK-VarroaScan™',
    description: 'Analyserer innsendte bilder av varroamidd.',
    category: 'active',
    enabled: true,
    showOnDashboard: true,
    icon: '📷',
  },
  {
    id: 'helse-ai',
    name: 'Helse & AI',
    description: 'Hurtig hjelp ved symptomer og vurderinger i bigården.',
    category: 'active',
    enabled: true,
    showOnDashboard: true,
    icon: '🩺',
  },
  {
    id: 'sykdomsveileder',
    name: 'Sykdomsveileder',
    description: 'Veiledning for symptomer og tiltak, steg for steg.',
    category: 'active',
    enabled: true,
    showOnDashboard: true,
    icon: '📖',
  },
  {
    id: 'offline',
    name: 'Offline-modus',
    description: 'Jobb i bigården uten dekning. Synk senere.',
    category: 'active',
    enabled: true,
    showOnDashboard: true,
    icon: '📶',
  },
  {
    id: 'stemmeinspeksjon',
    name: 'Stemmeinspeksjon (Beta)',
    description: 'Snakk inn observasjoner mens du inspiserer.',
    category: 'extra',
    enabled: false,
    showOnDashboard: true,
    icon: '🎤',
  },
  {
    id: 'ordtrening',
    name: 'Ordtrening',
    description: 'Tren stemmegjenkjenning med ord og setninger.',
    category: 'extra',
    enabled: false,
    showOnDashboard: true,
    icon: '📚',
  },
  {
    id: 'etiketter',
    name: 'Etiketter & Utskrift',
    description: 'Lag etiketter til honning og utskrifter.',
    category: 'extra',
    enabled: false,
    showOnDashboard: true,
    icon: '🏷️',
  },
  {
    id: 'driftsmateriell',
    name: 'Driftsmateriell',
    description: 'Oversikt over materiell og påfyll til sesongen.',
    category: 'extra',
    enabled: false,
    showOnDashboard: true,
    icon: '📦',
  },
  {
    id: 'bikubekort-qr',
    name: 'Bikubekort & QR',
    description: 'Stamkort og merking (for alle kuber).',
    category: 'extra',
    enabled: false,
    showOnDashboard: true,
    icon: '🔲',
  },
  {
    id: 'aurora-pro',
    name: 'Aurora Pro',
    description: 'Premium: dypere analyser og prioriteringer.',
    category: 'premium',
    enabled: false,
    showOnDashboard: false,
    icon: '🔒',
  },
  {
    id: 'auto-bildeanalyse',
    name: 'Automatisk bildeanalyse',
    description: 'Premium: automatisk vurdering av innsendinger.',
    category: 'premium',
    enabled: false,
    showOnDashboard: false,
    icon: '🔒',
  },
  {
    id: 'dronninganalyse',
    name: 'Dronninganalyse',
    description: 'Premium: indikasjoner på dronningstatus og byttebehov.',
    category: 'premium',
    enabled: false,
    showOnDashboard: false,
    icon: '🔒',
  },
  {
    id: 'avlsassistent',
    name: 'Avlsassistent',
    description: 'Premium: planlegging og oppfølging av linjer.',
    category: 'premium',
    enabled: false,
    showOnDashboard: false,
    icon: '🔒',
  },
  {
    id: 'prediktiv-risiko',
    name: 'Prediktiv kuberisiko',
    description: 'Premium: tidlige varsler om mulig risiko.',
    category: 'premium',
    enabled: false,
    showOnDashboard: false,
    icon: '🔒',
  },
];

function loadToolState() {
  try {
    return JSON.parse(localStorage.getItem(toolStorageKey) || '{}');
  } catch {
    return {};
  }
}

function saveToolState(state) {
  localStorage.setItem(toolStorageKey, JSON.stringify(state));
}

function getToolsWithState() {
  const state = loadToolState();
  return tools.map((tool) => ({
    ...tool,
    enabled: state[tool.id] ?? tool.enabled,
  }));
}

function setToolEnabled(toolId, enabled) {
  const state = loadToolState();
  state[toolId] = enabled;
  saveToolState(state);
}

function applyActivateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const activate = params.get('activate');
  if (activate) setToolEnabled(activate, true);
}

function renderToolkit() {
  const root = document.querySelector('[data-toolkit-root]');
  if (!root) return;

  const currentTools = getToolsWithState();
  const sections = {
    active: root.querySelector('[data-toolkit-section="active"]'),
    extra: root.querySelector('[data-toolkit-section="extra"]'),
    premium: root.querySelector('[data-toolkit-section="premium"]'),
  };

  const toolHtml = (tool) => {
    const isPremium = tool.category === 'premium';
    const isOn = Boolean(tool.enabled);
    const toggleLabel = isPremium ? 'Låst' : isOn ? 'Aktiv' : 'Av';
    const toggleClass = isPremium ? 'tool-toggle locked' : isOn ? 'tool-toggle on' : 'tool-toggle off';
    const toggleAttrs = isPremium ? 'type="button" aria-disabled="true" disabled' : `type="button" data-tool-toggle="${tool.id}"`;

    return `\n      <div class="tool-card" id="tool-${tool.id}">\n        <div class="tool-icon">${tool.icon}</div>\n        <div class="tool-copy">\n          <strong>${tool.name}</strong>\n          <span>${tool.description}</span>\n        </div>\n        <div class="tool-badge">\n          <button class="${toggleClass}" ${toggleAttrs}>${toggleLabel}</button>\n        </div>\n      </div>\n    `;
  };

  const renderCategory = (category) => currentTools.filter((t) => t.category === category).map(toolHtml).join('');
  if (sections.active) sections.active.innerHTML = renderCategory('active');
  if (sections.extra) sections.extra.innerHTML = renderCategory('extra');
  if (sections.premium) sections.premium.innerHTML = renderCategory('premium');

  const activeCount = currentTools.filter((t) => t.category !== 'premium' && t.enabled).length;
  document.querySelectorAll('[data-active-count]').forEach((node) => {
    node.textContent = String(activeCount);
  });

  root.querySelectorAll('[data-tool-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const toolId = button.dataset.toolToggle;
      const nextEnabled = !getToolsWithState().find((t) => t.id === toolId)?.enabled;
      setToolEnabled(toolId, Boolean(nextEnabled));
      renderToolkit();
      renderMinSide();
      renderAuroraSuggestions();
    });
  });

  const hash = window.location.hash || '';
  if (hash.startsWith('#tool-')) {
    const el = document.querySelector(hash);
    if (el) {
      el.classList.add('is-highlight');
      el.scrollIntoView({ block: 'center', behavior: 'smooth' });
      window.setTimeout(() => el.classList.remove('is-highlight'), 1600);
    }
  }
}

function renderMinSide() {
  const containers = document.querySelectorAll('[data-min-side-tools]');
  if (!containers.length) return;

  const currentTools = getToolsWithState();
  const dashboardTools = currentTools.filter((t) => t.enabled && t.showOnDashboard);

  const cardHtml = (tool) =>
    `\n      <a class="tool-card" href="./verktoykasse.html#tool-${tool.id}">\n        <div class="tool-icon">${tool.icon}</div>\n        <div class="tool-copy">\n          <strong>${tool.name}</strong>\n          <span>${tool.description}</span>\n        </div>\n        <div class="tool-badge"><span class="meta-chip">Aktiv</span></div>\n      </a>\n    `;

  containers.forEach((container) => {
    container.innerHTML = dashboardTools.length ? dashboardTools.map(cardHtml).join('') : '<div class="info-note">Ingen verktøy er aktive akkurat nå. Åpne Verktøykassen for å legge verktøy på arbeidsbenken.</div>';
  });
}

function renderAuroraSuggestions() {
  document.querySelectorAll('[data-aurora-suggest]').forEach((card) => {
    const toolId = card.dataset.auroraSuggest;
    const tool = getToolsWithState().find((t) => t.id === toolId);
    card.style.display = tool?.enabled ? 'none' : '';
  });
}

function initTasks() {
  document.querySelectorAll('[data-task-toggle]').forEach((row) => {
    row.addEventListener('click', () => {
      row.classList.toggle('is-done');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyActivateFromUrl();
  renderToolkit();
  renderMinSide();
  renderAuroraSuggestions();
  initTasks();
});
