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

const apiaries = [
  {
    id: 'halden-nord',
    name: 'Halden nord',
    description: '3 kuber, godt trekk fra bringebær og kløver',
    lastHiveId: 'kube-003',
    hives: [
      { id: 'kube-001', name: 'KUBE-001', note: '17 dager siden sist inspeksjon' },
      { id: 'kube-002', name: 'KUBE-002', note: 'Sterk trafikk ved flyåpning' },
      { id: 'kube-003', name: 'KUBE-003', note: 'Sist inspisert og mest aktiv nå' },
    ],
  },
  {
    id: 'rokke-gard',
    name: 'Rokke gård',
    description: '4 kuber, vindutsatt men gode forhold utover dagen',
    lastHiveId: 'kube-011',
    hives: [
      { id: 'kube-010', name: 'KUBE-010', note: 'Rolig aktivitet i går kveld' },
      { id: 'kube-011', name: 'KUBE-011', note: 'Sist brukt i inspeksjon' },
      { id: 'kube-012', name: 'KUBE-012', note: 'Mye pollen inn' },
      { id: 'kube-013', name: 'KUBE-013', note: 'Bør sjekkes neste uke' },
    ],
  },
  {
    id: 'areskansen',
    name: 'Åreskansen',
    description: '2 kuber, kjøligere mikroklima og roligere trekk',
    lastHiveId: 'kube-021',
    hives: [
      { id: 'kube-020', name: 'KUBE-020', note: 'Ny dronning observert sist' },
      { id: 'kube-021', name: 'KUBE-021', note: 'Sist inspisert i mai' },
    ],
  },
];

const beekeeperQuestions = [
  { id: 'q1', question: 'Bør jeg kontrollere for svermceller i dag?', answer: 'Ja, i denne mockup-situasjonen ville jeg prioritert det. Det er 17 dager siden siste inspeksjon i KUBE-001, været er stabilt, og svermesesongen er i gang. Se spesielt under yngelrammene og langs underkantene.' },
  { id: 'q2', question: 'Hvorfor anbefaler du KUBE-001 først?', answer: 'KUBE-001 prioriteres fordi den har lengst tid siden forrige inspeksjon, samtidig som trekkforholdene er gode akkurat nå. Det øker verdien av en rask kontroll for plassbehov, dronningceller og yngelstatus.' },
  { id: 'q3', question: 'Bør jeg sette på en ekstra skattekasse nå?', answer: 'I denne mockupen ville jeg vurdert det dersom du ser fersk voks, tett trafikk og lite ledig plass i øverste kasse. Assistenten ville foreslå å ta avgjørelsen under inspeksjonen, ikke før.' },
  { id: 'q4', question: 'Er det et godt tidspunkt å gjøre varroatelling?', answer: 'Ja, innen de neste fem dagene. Det gir et godt sammenligningspunkt før neste varmeperiode og før eventuelt økt trekkaktivitet gjør tolkningen mer urolig.' },
  { id: 'q5', question: 'Hva ser jeg etter når jeg åpner kuben?', answer: 'Start med helhetsinntrykket: ro ved flyåpningen, lukt, temperaturfølelse, aktivitet på tavlene, egg/yngel, dronningceller, fôrstatus og tegn til sykdom eller uvanlig mye middenedfall.' },
  { id: 'q6', question: 'Hvordan vet jeg om kuben er trang?', answer: 'Se etter bier som henger tett mellom tavlene, fylt skattekasse, mye forseglet yngel og lite ledig plass til egglegging. Kombinasjonen av trangt kubevolum og godt trekk øker svermerisikoen.' },
  { id: 'q7', question: 'Bør jeg lete etter dronningen i dag?', answer: 'Kun hvis inspeksjonen gir grunn til det. I en effektiv hverdagsinspeksjon holder det ofte å bekrefte ferske egg og rolig yngelbilde i stedet for å bruke tid på å finne selve dronningen.' },
  { id: 'q8', question: 'Hvordan vurderer jeg yngelbildet?', answer: 'Et jevnt og tett yngelområde gir trygghet. Mange tomme celler midt i et ellers sterkt yngelleie kan være grunn til å følge ekstra med, men må sees sammen med sesong, trekk og dronningens alder.' },
  { id: 'q9', question: 'Er det normalt med mye bier utenfor kuben nå?', answer: 'Ja, det kan være helt normalt i godt vær og ved sterkt trekk. Det er først bekymringsfullt hvis adferden virker kaotisk, det er pipelyder, kamp eller tydelig røving.' },
  { id: 'q10', question: 'Hvor rask bør dagens inspeksjon være?', answer: 'Kort og målrettet. I denne mockupen anbefaler assistenten 5–8 minutter på første kube: bekreft plass, sjekk yngelstatus, se etter dronningceller og noter ett klart neste steg.' },
  { id: 'q11', question: 'Hva betyr det hvis jeg ser mange droneceller?', answer: 'Mange droneceller kan være sesongmessig normalt, men det kan også være nyttig å se på sammen med dronningens prestasjon og eventuell svermetendens. Kontekst er viktig.' },
  { id: 'q12', question: 'Bør jeg bruke røyk i dag?', answer: 'Ja, men sparsomt. Rolig håndtering og lite røyk er ofte nok når været er godt og kuben ellers er rolig. For mye røyk kan gjøre observasjonene mindre tydelige.' },
  { id: 'q13', question: 'Hvordan vet jeg om det er nok fôr igjen?', answer: 'Vurder vekten i tavlene, synlig nektar, sesong og værprognose. Midt i godt trekk er bekymringen ofte mindre, men ved kalde perioder eller svak trafikk må fôr vurderes tettere.' },
  { id: 'q14', question: 'Kan jeg vente noen dager med inspeksjonen?', answer: 'Ja, men denne mockupen prioriterer i løpet av uken. 17 dager uten inspeksjon er ikke kritisk alene, men sammen med svermesesong er det smart å se innom snart.' },
  { id: 'q15', question: 'Hva betyr lav flyaktivitet midt på dagen?', answer: 'Det kan skyldes temperatur, vind, skygge eller at trekkgrunnlaget er svakt akkurat da. Assistenten ville sammenligne med værdata og tidligere notater før den tolker det som avvik.' },
  { id: 'q16', question: 'Bør jeg kontrollere dronningceller i alle kuber?', answer: 'Nei, begynn med den kuben som er høyest prioritert. Hvis du finner tydelige tegn i første kube, kan det være grunnlag for å se raskt gjennom flere samme dag.' },
  { id: 'q17', question: 'Hva er tegn på begynnende røving?', answer: 'Urolig flytrafikk, bier som kaster seg mot sprekker og skjøter, kamp ved flyåpningen og plutselige raske bevegelser uten rolig landingsmønster er klassiske indikatorer.' },
  { id: 'q18', question: 'Når bør jeg bruke VarroaScan™?', answer: 'Når du har ferske bilder, usikre funn på bunnbrett eller vil dokumentere sammenligning over tid. I mockupen foreslås det særlig etter flere registrerte varroatester.' },
  { id: 'q19', question: 'Hva gjør jeg hvis jeg finner få egg?', answer: 'Se på helheten først. Få egg en enkelt dag trenger ikke være alvorlig. Sjekk yngel i flere stadier, plass til egglegging, dronningceller og om vær eller trekk nylig har påvirket aktiviteten.' },
  { id: 'q20', question: 'Bør jeg notere alt under inspeksjonen?', answer: 'Nei, bare det viktigste. En god mockup-flyt fokuserer på korte, handlingsrettede notater: styrke, yngel, plassbehov, mulig risiko og anbefalt neste dato.' },
  { id: 'q21', question: 'Hva betyr det om biene er uvanlig hissige?', answer: 'Det kan komme av værskifte, mangel på trekk, lang åpningstid, røff håndtering eller forhold i kuben. Assistenten ville anbefale rolig avslutning og ny vurdering ved bedre forhold.' },
  { id: 'q22', question: 'Hvordan vurderer jeg polleninntrekk?', answer: 'Jevnt polleninntrekk er ofte et godt tegn på aktiv yngel. Farge og mengde varierer med flora, så det er mest nyttig som del av et samlet bilde, ikke som eneste indikator.' },
  { id: 'q23', question: 'Hva bør jeg prioritere hvis jeg har dårlig tid?', answer: 'Se først på KUBE-001, bekreft egg eller annen yngel, vurder plass, se etter svermceller og noter om du må tilbake raskt. Det gir mest verdi på kort tid.' },
  { id: 'q24', question: 'Bør jeg splitte kuben hvis den virker sterk?', answer: 'Ikke nødvendigvis i dag. Assistenten ville først hente inn sikker informasjon om dronningceller, plass og trekk før den foreslår deling som tiltak.' },
  { id: 'q25', question: 'Hvordan vet jeg om dronningen fortsatt legger bra?', answer: 'Se etter ferske egg, larver i flere aldre og et samlet yngelbilde. Jevnhet over tid betyr mer enn et enkelt øyeblikksbilde.' },
  { id: 'q26', question: 'Er det trygt å åpne når det blåser litt?', answer: 'Ja, hvis vinden er moderat og du jobber effektivt. Men sterk vind gjør vurderingene mindre presise og kan stresse biene, så da holder en kort kontroll ofte bedre enn full inspeksjon.' },
  { id: 'q27', question: 'Hva er første tegn på svermetrang?', answer: 'Trang kube, hengende bier, mange byggeprosjekter, redusert ro og særlig dronningceller med larver er mer informative enn ett enkelt tegn alene.' },
  { id: 'q28', question: 'Hvorfor er værmeldingen viktig for anbefalingen?', answer: 'Fordi vær påvirker flyaktivitet, trekk, ro i kuben og hvor lett det er å gjøre en meningsfull inspeksjon. Assistenten prioriterer oppgaver når forholdene gir høy nytte.' },
  { id: 'q29', question: 'Hvordan bør jeg planlegge neste inspeksjon?', answer: 'La dagens funn styre. Finner du ingen dronningceller og god plass, kan neste kontroll ligge litt frem i tid. Finner du tegn til sverming, bør den komme raskere.' },
  { id: 'q30', question: 'Hva betyr et ujevnt lokk med voksing?', answer: 'Det kan være helt normalt, men i kombinasjon med trangt rom og sterkt trekk kan det være tegn på høy aktivitet og behov for mer plass.' },
  { id: 'q31', question: 'Bør jeg sjekke bunnbrettet i dag?', answer: 'Ja, særlig hvis du vil følge varroa og generell ro i kuben. Bunnbrettet gir ofte raske signaler før du åpner mye.' },
  { id: 'q32', question: 'Hva sier tidligere registreringer om dagens risiko?', answer: 'De viser at denne kuben har vært stabil, men at inspeksjonsintervallet nå er langt nok til at svermesignaler bør avkreftes eller bekreftes med en ny titt.' },
  { id: 'q33', question: 'Hvordan vet jeg om en kube er klar for mer plass?', answer: 'Se etter dekning av tavler, fylt yngelrom, fersk nektar og hvor mye arbeid som foregår oppover i kuben. Assistenten ville løfte dette som beslutning under inspeksjon.' },
  { id: 'q34', question: 'Kan kald natt påvirke dagens vurdering?', answer: 'Ja, biene kan virke roligere og mer samlet. Derfor kobler assistenten værdata med historiske observasjoner før den tolker lav aktivitet negativt.' },
  { id: 'q35', question: 'Hva gjør jeg hvis kuben virker dronningløs?', answer: 'Se først etter egg og larver nøye. Hvis mistanken står, ville mockup-assistenten foreslå oppfølgingskontroll og sammenligning med tidligere status før større tiltak.' },
  { id: 'q36', question: 'Når bør jeg bruke Helse & AI?', answer: 'Når du ser avvik i yngel, lukt, adferd eller tavler og vil ha et strukturert forslag til hva du bør se etter videre. Det er et støtteverktøy, ikke en fasit.' },
  { id: 'q37', question: 'Hvordan vet jeg om kuben er for svak?', answer: 'Se på antall tavlegater med bier, yngelmengde, flyaktivitet og utvikling over tid. En svak kube vurderes best sammenlignet med tidligere notater og andre kuber i samme bigård.' },
  { id: 'q38', question: 'Bør jeg inspisere alle kubene i samme bigård i dag?', answer: 'Ikke nødvendigvis. Start med den som har høyest prioritet og la funnene bestemme om resten trenger rask kontroll i dag eller kan vente.' },
  { id: 'q39', question: 'Hva er et realistisk neste trekk etter inspeksjon?', answer: 'Enten planlegge ny kontroll innen få dager, sette på mer plass, registrere varroaoppfølging eller la kuben stå i ro hvis alt ser balansert ut.' },
  { id: 'q40', question: 'Hvordan bruker jeg vær og sesong sammen?', answer: 'Se på dem som rammebetingelser. Sesongen sier hva som er sannsynlig, været sier hva som er praktisk og observerbart akkurat nå.' },
  { id: 'q41', question: 'Bør jeg ta bilder under inspeksjonen?', answer: 'Ja, korte dokumentasjonsbilder av dronningceller, yngelbilde eller bunnbrett er nyttige i mockupen fordi de kan brukes i VarroaScan og senere sammenligning.' },
  { id: 'q42', question: 'Hva betyr mye fersk voks på topplistene?', answer: 'Det tyder ofte på aktivitet og byggevilje. Sammen med godt trekk kan det indikere at kuben håndterer mye ressurser og trenger oppmerksomhet på plass.' },
  { id: 'q43', question: 'Er det normalt at én kube skiller seg ut fra resten?', answer: 'Ja, absolutt. Dronning, mikroklima, genetikk og utviklingshastighet gjør at kuber i samme bigård kan trenge ulike tiltak samme uke.' },
  { id: 'q44', question: 'Hva bør jeg gjøre hvis jeg finner dronningceller?', answer: 'Noter antall, plassering og stadium. Assistenten ville deretter foreslå oppfølging basert på om kuben er trang, hvor sterk den er og hva målet ditt er for sesongen.' },
  { id: 'q45', question: 'Hvordan påvirker godt trekk inspeksjonsstrategien?', answer: 'Godt trekk gir ofte høy aktivitet og rask utvikling. Det gjør det ekstra viktig å følge med på plass og svermetegn, men også å holde inspeksjonen kort og presis.' },
  { id: 'q46', question: 'Når er det riktig å avslutte inspeksjonen raskt?', answer: 'Når du har bekreftet det viktigste og biene begynner å bli urolige, været skifter eller du allerede har nok informasjon til å bestemme neste steg.' },
  { id: 'q47', question: 'Bør jeg være bekymret for 17 dager uten inspeksjon?', answer: 'Ikke automatisk, men i aktiv sesong er det lenge nok til at en kort kontroll gir stor verdi. Mockup-anbefalingen er derfor tydelig, men ikke dramatisk.' },
  { id: 'q48', question: 'Hva ville vært et godt notat etter dagens inspeksjon?', answer: 'For eksempel: “KUBE-001 rolig ved åpning, godt yngelbilde, ingen åpne dronningceller sett, moderat trang. Vurder ekstra plass og ny kontroll innen 5 dager.”' },
  { id: 'q49', question: 'Hvordan bør jeg prioritere mellom varroa og sverming?', answer: 'Svermetegn prioriteres ofte i selve inspeksjonsøyeblikket, mens varroa følges systematisk over tid. Mockupen lar derfor assistenten peke på begge, men i ulik rekkefølge.' },
  { id: 'q50', question: 'Hva er det viktigste jeg bør gjøre i dag?', answer: 'Gå til riktig bigård, start i den kuben som gir mest beslutningsverdi, og kom ut igjen med ett tydelig neste steg. Det er hele filosofien i denne mockupen.' },
];

const aiMockupState = {
  selectedApiaryId: null,
  autoStartTimer: null,
};

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

function clearAiTimer() {
  if (aiMockupState.autoStartTimer) {
    window.clearTimeout(aiMockupState.autoStartTimer);
    aiMockupState.autoStartTimer = null;
  }
}

function getApiaryById(apiaryId) {
  return apiaries.find((apiary) => apiary.id === apiaryId);
}

function getHiveById(apiary, hiveId) {
  return apiary?.hives.find((hive) => hive.id === hiveId);
}

function getQuestionById(questionId) {
  return beekeeperQuestions.find((item) => item.id === questionId);
}

function openAiSheet(html) {
  const overlay = document.querySelector('[data-ai-overlay]');
  const body = document.querySelector('[data-ai-sheet-body]');
  if (!overlay || !body) return;
  body.innerHTML = html;
  overlay.classList.remove('hidden');
}

function closeAiSheet() {
  clearAiTimer();
  const overlay = document.querySelector('[data-ai-overlay]');
  if (overlay) overlay.classList.add('hidden');
}

function showInspectionResult(apiary, hive, entryMode) {
  const wrapper = document.querySelector('[data-ai-result]');
  const content = document.querySelector('[data-ai-result-content]');
  if (!wrapper || !content) return;

  content.innerHTML = `
    <div class="result-summary">
      <strong>${apiary.name} → ${hive.name}</strong>
      <span>${entryMode}</span>
    </div>
    <div class="result-summary">
      <strong>Neste steg i mockupen</strong>
      <span>Åpne kube, bekreft yngelstatus, se etter dronningceller og vurder behov for ekstra skattekasse.</span>
    </div>
    <div class="result-summary">
      <strong>Hvorfor akkurat denne kuben?</strong>
      <span>${hive.note}. Kombinert med godt trekk i dag gir dette mest verdi først.</span>
    </div>
  `;

  wrapper.classList.remove('hidden');
}

function renderApiaryStep() {
  const options = apiaries
    .map(
      (apiary) => `
        <button class="sheet-option is-primary" type="button" data-ai-select-apiary="${apiary.id}">
          <strong>${apiary.name}</strong>
          <span>${apiary.description}</span>
        </button>
      `
    )
    .join('');

  openAiSheet(`
    <p class="section-label">Start inspeksjon</p>
    <h2 class="sheet-title">Hvilken bigård?</h2>
    <p class="sheet-subtitle">Velg hvor du vil starte. Dette er en realistisk mockup-flyt, så valget styrer neste forslag.</p>
    <div class="sheet-list">${options}</div>
    <div class="sheet-actions" style="margin-top: 1rem;">
      <button class="sheet-close" type="button" data-ai-close>Lukk</button>
    </div>
  `);

  document.querySelectorAll('[data-ai-select-apiary]').forEach((button) => {
    button.addEventListener('click', () => renderResumeLastHiveStep(button.dataset.aiSelectApiary));
  });
  document.querySelector('[data-ai-close]')?.addEventListener('click', closeAiSheet);
}

function renderResumeLastHiveStep(apiaryId) {
  clearAiTimer();
  aiMockupState.selectedApiaryId = apiaryId;
  const apiary = getApiaryById(apiaryId);
  const lastHive = getHiveById(apiary, apiary.lastHiveId);
  if (!apiary || !lastHive) return;

  openAiSheet(`
    <p class="section-label">Foreslått start</p>
    <h2 class="sheet-title">Skal vi starte i ${lastHive.name} som sist?</h2>
    <p class="sheet-subtitle">${apiary.name} er valgt. Hvis du ikke trykker nei, går mockupen automatisk videre til ${lastHive.name} om et øyeblikk.</p>
    <div class="sheet-inline-note">Sist notert på ${lastHive.name}: ${lastHive.note}. Dette er derfor raskeste vei inn i dagens inspeksjon.</div>
    <div class="sheet-actions" style="margin-top: 1rem;">
      <button class="sheet-option is-muted" type="button" data-ai-choose-other>
        <strong>Nei</strong>
        <span>Vis kubene i ${apiary.name} i stedet.</span>
      </button>
    </div>
  `);

  aiMockupState.autoStartTimer = window.setTimeout(() => {
    closeAiSheet();
    showInspectionResult(apiary, lastHive, 'Automatisk startet i sist brukte kube');
  }, 2400);

  document.querySelector('[data-ai-choose-other]')?.addEventListener('click', () => renderHiveStep(apiaryId));
}

function renderHiveStep(apiaryId) {
  clearAiTimer();
  const apiary = getApiaryById(apiaryId);
  if (!apiary) return;

  const hivesHtml = apiary.hives
    .map(
      (hive) => `
        <button class="sheet-option" type="button" data-ai-select-hive="${hive.id}">
          <strong>${hive.name}</strong>
          <span>${hive.note}</span>
        </button>
      `
    )
    .join('');

  openAiSheet(`
    <p class="section-label">Velg kube</p>
    <h2 class="sheet-title">${apiary.name}</h2>
    <p class="sheet-subtitle">Du valgte å ikke starte i sist brukte kube. Her er kubene i bigården.</p>
    <div class="sheet-list">${hivesHtml}</div>
    <div class="sheet-actions" style="margin-top: 1rem;">
      <button class="sheet-close" type="button" data-ai-back>Tilbake</button>
    </div>
  `);

  document.querySelectorAll('[data-ai-select-hive]').forEach((button) => {
    button.addEventListener('click', () => {
      const hive = getHiveById(apiary, button.dataset.aiSelectHive);
      closeAiSheet();
      if (hive) showInspectionResult(apiary, hive, 'Valgt manuelt fra bigårdens kuber');
    });
  });
  document.querySelector('[data-ai-back]')?.addEventListener('click', () => renderResumeLastHiveStep(apiaryId));
}

function renderReasonStep() {
  openAiSheet(`
    <p class="section-label">Begrunnelse</p>
    <h2 class="sheet-title">Hvorfor anbefales KUBE-001 denne uken?</h2>
    <p class="sheet-subtitle">Dette er en realistisk mockup-begrunnelse basert på dataene som allerede vises på forsiden.</p>
    <div class="sheet-answer">
      <strong>Samlet vurdering</strong>
      <p>KUBE-001 er prioritert fordi den ikke har vært inspisert på 17 dager, samtidig som været i Halden er rolig nok til en effektiv kontroll. I aktiv svermesesong øker risikoen for at en sterk kube utvikler dronningceller raskt.</p>
    </div>
    <div class="sheet-answer">
      <strong>Hva assistenten har vektet</strong>
      <p>1) Tid siden siste inspeksjon. 2) Årstid og kjent svermevindu. 3) Gode flyforhold og forventet trekk i dag. 4) Tidligere registreringer som tilsier at kuben normalt bygger seg raskt opp når været slipper til.</p>
    </div>
    <div class="sheet-answer">
      <strong>Praktisk anbefaling</strong>
      <p>Gjør en kort inspeksjon med fokus på yngelstatus, plassbehov og dronningceller. Hvis kuben er trang, bør du vurdere ekstra skattekasse eller rask oppfølging om få dager.</p>
    </div>
    <div class="sheet-actions" style="margin-top: 1rem;">
      <button class="sheet-close" type="button" data-ai-close>Lukk</button>
    </div>
  `);

  document.querySelector('[data-ai-close]')?.addEventListener('click', closeAiSheet);
}

function questionAnswerHtml(question) {
  if (!question) return '';
  return `
    <div class="sheet-answer">
      <strong>${question.question}</strong>
      <p>${question.answer}</p>
    </div>
  `;
}

function renderQuestionStep(selectedQuestionId = 'q1') {
  const suggestions = ['q3', 'q18', 'q44']
    .map((questionId) => getQuestionById(questionId))
    .filter(Boolean)
    .map(
      (question) => `
        <button class="sheet-option" type="button" data-ai-question-pick="${question.id}">
          <strong>${question.question}</strong>
          <span>Relevant akkurat nå i denne mockupen.</span>
        </button>
      `
    )
    .join('');

  const selectOptions = beekeeperQuestions
    .map(
      (item) => `<option value="${item.id}" ${item.id === selectedQuestionId ? 'selected' : ''}>${item.question}</option>`
    )
    .join('');

  openAiSheet(`
    <p class="section-label">Still et spørsmål</p>
    <h2 class="sheet-title">Hva vil du spørre om?</h2>
    <p class="sheet-subtitle">Velg ett av tre relevante forslag, eller bruk den store mockup-listen med 50 ferdige birøkterspørsmål.</p>
    <div class="question-grid">
      ${suggestions}
    </div>
    <div class="sheet-inline-note">Eget valg av spørsmål</div>
    <select class="sheet-select" data-ai-question-select>
      ${selectOptions}
    </select>
    ${questionAnswerHtml(getQuestionById(selectedQuestionId))}
    <div class="sheet-actions" style="margin-top: 1rem;">
      <button class="sheet-close" type="button" data-ai-close>Lukk</button>
    </div>
  `);

  document.querySelectorAll('[data-ai-question-pick]').forEach((button) => {
    button.addEventListener('click', () => renderQuestionStep(button.dataset.aiQuestionPick));
  });
  document.querySelector('[data-ai-question-select]')?.addEventListener('change', (event) => {
    renderQuestionStep(event.target.value);
  });
  document.querySelector('[data-ai-close]')?.addEventListener('click', closeAiSheet);
}

function initAIFocus() {
  const root = document.querySelector('[data-ai-root]');
  if (!root) return;

  document.querySelector('[data-ai-action="start-inspection"]')?.addEventListener('click', renderApiaryStep);
  document.querySelector('[data-ai-action="show-reason"]')?.addEventListener('click', renderReasonStep);
  document.querySelector('[data-ai-action="ask-question"]')?.addEventListener('click', () => renderQuestionStep('q50'));

  document.querySelector('[data-ai-overlay]')?.addEventListener('click', (event) => {
    if (event.target.matches('[data-ai-overlay]')) closeAiSheet();
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
  initAIFocus();
  initTasks();
});
