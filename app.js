/* ---------- Logique (fonctions pures) ---------- */
// LOGIC-START
var STEPS = [
  { id: "nat", label: "Nationalité française",
    q: "Avez-vous la nationalité française ?",
    help: "",
    options: [["Oui", "yes"], ["Non", "no"]],
    unmet: "no",
    reason: "la mesure ne vise que les personnes de nationalité française." },
  { id: "rev", label: "Revenu supérieur à 240 300 €",
    q: "Votre revenu annuel dépasse-t-il 240 300 € ?",
    help: "Ce seuil, valable en 2026, correspond à cinq fois le plafond annuel de la Sécurité sociale (48 060 €).",
    options: [["Oui, il dépasse 240 300 €", "yes"], ["Non, il est inférieur", "no"]],
    unmet: "no",
    reason: "la mesure exige un revenu supérieur à cinq fois le plafond annuel de la Sécurité sociale, soit 240 300 € en 2026." },
  { id: "depart", label: "Départ de France il y a moins de dix ans",
    q: "Avez-vous quitté la France il y a moins de dix ans ?",
    help: "La mesure porte sur les dix années qui suivent le départ.",
    options: [["Oui, moins de dix ans", "yes"], ["Non, plus de dix ans, ou je n'ai pas quitté la France", "no"]],
    unmet: "no",
    reason: "la mesure ne s'applique que pendant dix ans après le départ de France." },
  { id: "res", label: "Trois ans de résidence en France sur les dix ans avant le départ",
    q: "Avez-vous vécu en France au moins trois ans au cours des dix années précédant votre départ ?",
    help: "Il s'agit de la résidence fiscale en France. Si vous êtes parti·e de France depuis toujours, répondez non.",
    options: [["Oui, au moins trois ans", "yes"], ["Non, moins de trois ans", "no"]],
    unmet: "no",
    reason: "la mesure exige d'avoir résidé en France au moins trois ans au cours des dix années précédant le changement de résidence fiscale." },
  { id: "fisc", label: "Fiscalité du pays de résidence inférieure de plus de 40 % à celle de la France",
    type: "country",
    q: "Dans quel pays résidez-vous fiscalement ?",
    help: "Nous vérifions si la fiscalité de ce pays est inférieure de plus de 40 % à celle de la France (revenus du travail, du capital ou du patrimoine). Estimation : voir la méthodologie.",
    options: [["Je ne sais pas, ou mon pays n'est pas dans la liste", "unknown"]],
    unmet: "no",
    reason: "la mesure ne vise que les États dont la fiscalité est inférieure de plus de 40 % à celle de la France." }
];

// answers : tableau de valeurs "yes" | "no" | "unknown", dans l'ordre de STEPS.
// Un « non » met fin au questionnaire : la mesure exige de remplir toutes les conditions.
function evaluate(answers) {
  var rows = STEPS.map(function (s, i) {
    var a = answers[i];
    var state = a === undefined ? "skipped" : a === "yes" ? "met" : a === "no" ? "unmet" : "unknown";
    return { label: s.label, state: state };
  });
  for (var i = 0; i < STEPS.length; i++) {
    if (answers[i] === STEPS[i].unmet) {
      return { verdict: "no", reason: STEPS[i].reason, rows: rows };
    }
  }
  if (answers.length < STEPS.length) return { verdict: "incomplete", rows: rows };
  var unknown = answers.some(function (a) { return a === "unknown"; });
  return { verdict: unknown ? "maybe" : "yes", rows: rows };
}
// LOGIC-END

/* ---------- Données pays ---------- */
// DATA-START
// Estimation du taux effectif d'impôt sur le revenu (en %) pour un célibataire à 240 300 € de revenu imposable.
// Hypothèses complètes : page « Méthodologie ». Clé = code pays ISO à deux lettres.
// Niveaux : taux <= 18 % : « below » ; 18 à 26 % : « debatable » ; > 26 % : « above ».
// Tout pays absent de cette table est « debatable » (non analysé).
var FR_RATE = 35.23;      // référence France, en %
var THRESHOLD = 21.14;    // 60 % de la référence France, en %
var LEVEL_LOW = 18, LEVEL_HIGH = 26;
var O = "officielle", N = "non officielle";
var COUNTRY_DATA = {};   // rempli à la demande depuis pays/<continent>/<pays>/data.json (voir loadCountry)
var DATA_ERROR = false; // vrai si les fichiers de données n'ont pas pu être chargés
var DATA_BASE = "/pays/";
var indexPromise = null;
function loadIndex() {
  if (!indexPromise) indexPromise = fetch(DATA_BASE + "index.json").then(function (r) { if (!r.ok) throw new Error("index"); return r.json(); });
  return indexPromise;
}
function normalizeCountry(j, dir) {
  var d = { rate: j.rate, note: j.note, dir: dir, calc: j.calc || null,
    src: (j.sources || []).map(function (s) { return [s.titre, s.url, s.type === "officielle" ? O : N]; }) };
  if (j.range) d.range = j.range;
  return d;
}
function loadCountry(code) {
  if (COUNTRY_DATA[code]) return Promise.resolve(COUNTRY_DATA[code]);
  return loadIndex().then(function (ix) {
    var dir = ix[code];
    if (!dir) return null;
    return fetch(DATA_BASE + dir + "/data.json").then(function (r) { if (!r.ok) throw new Error(code); return r.json(); })
      .then(function (j) { COUNTRY_DATA[code] = normalizeCountry(j, dir); return COUNTRY_DATA[code]; });
  }).catch(function () { DATA_ERROR = true; return null; });
}
function loadAllCountries() {
  return loadIndex().then(function (ix) { return Promise.all(Object.keys(ix).map(loadCountry)); }).catch(function () { DATA_ERROR = true; });
}
function countryLevel(code) {
  var d = COUNTRY_DATA[code];
  if (!d) return "debatable";
  return d.rate <= LEVEL_LOW ? "below" : d.rate <= LEVEL_HIGH ? "debatable" : "above";
}
var LEVEL_LABEL = { below: "Nettement en dessous du seuil", debatable: "Discutable", above: "Nettement au-dessus du seuil" };
var LEVEL_COMMENT = {
  below: "Fiscalité nettement inférieure. D'après nos calculs, l'impôt sur le revenu effectif dans ce pays est largement sous le seuil de 21,1 %, c'est-à-dire plus de 40 % en dessous de celui de la France. Ce pays remplirait très probablement la condition, sous réserve des conventions fiscales.",
  debatable: "Cas discutable. L'écart avec la France est proche du seuil de 40 %, et le résultat dépend de la méthode de comparaison : cotisations sociales, revenus du capital, régimes spéciaux. Ne tirez pas de conclusion définitive.",
  above: "Fiscalité proche de celle de la France, ou supérieure. D'après nos calculs, l'impôt sur le revenu effectif dans ce pays dépasse nettement le seuil de 21,1 %, donc l'écart avec la France est inférieur à 40 %. Ce pays ne remplirait pas la condition."
};
var UNRATED_COMMENT = "Ce pays n'a pas encore été analysé. Nous n'avons aucun calcul pour lui, donc le résultat reste indéterminé.";
function pageUrl(d) { return "/fiscalite/" + d.dir.split("/")[1].replace(/^[A-Z0-9]+-/, "") + "/"; }
function countryAnswer(code) {
  var l = countryLevel(code);
  return l === "below" ? "yes" : l === "above" ? "no" : "unknown";
}
// DATA-END

// Liste des pays proposés (codes ISO 3166-1, hors France et territoires inhabités). Les noms viennent du navigateur, en français.
var COUNTRY_CODES = ("AD AE AF AG AI AL AM AO AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BW BY BZ " +
  "CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO " +
  "GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GT GU GW GY HK HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP " +
  "KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ " +
  "NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW " +
  "SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TG TH TJ TK TL TM TN TO TR TT TV TW TZ " +
  "UA UG US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW").split(" ");
var NAME_OVERRIDES = { HK: "Hong Kong (Chine)", MO: "Macao (Chine)" };
var COUNTRIES = (function () {
  var dn = null;
  try { dn = new Intl.DisplayNames(["fr"], { type: "region" }); } catch (e) { dn = null; }
  return COUNTRY_CODES.map(function (c) {
    var name = NAME_OVERRIDES[c] || (dn ? dn.of(c) : c);
    return { code: c, name: name || c };
  }).sort(function (a, b) { return a.name.localeCompare(b.name, "fr"); });
})();
function countryName(code) {
  for (var i = 0; i < COUNTRIES.length; i++) if (COUNTRIES[i].code === code) return COUNTRIES[i].name;
  return code;
}
function fmtRate(r) { return String(r).replace(".", ",") + " %"; }
function fmtRateD(d) { return d.range ? "entre " + d.range[0] + " et " + fmtRate(d.range[1]) + " selon le cas (canton, secteur, hypothèse : voir la note)" : fmtRate(d.rate); }
function normalize(t) { return String(t).normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim(); }

/* ---------- Interface ---------- */
var app = document.getElementById("app");
var bar = document.getElementById("bar");
var answers = [];
var meta = [];
var KEYS = ["A", "B", "C"];

function el(tag, attrs, children) {
  var n = document.createElement(tag);
  Object.keys(attrs || {}).forEach(function (k) {
    if (k === "class") n.className = attrs[k];
    else if (k === "text") n.textContent = attrs[k];
    else n.setAttribute(k, attrs[k]);
  });
  (children || []).forEach(function (c) { n.appendChild(c); });
  return n;
}

function setProgress(done) { bar.style.width = Math.round(100 * done / STEPS.length) + "%"; }

function showScreen(node) {
  app.classList.remove("wide");
  app.innerHTML = "";
  app.appendChild(node);
  var h = node.querySelector("h1, h2");
  if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
  window.scrollTo(0, 0);
}

function renderStart() {
  setProgress(0);
  var s = el("section", { class: "screen" }, [
    el("p", { class: "eyebrow", text: "Questionnaire" }),
    el("h1", { text: "Seriez-vous concerné·e par l'impôt universel ciblé ?" }),
    el("p", { class: "lead", text: "Cinq questions, une minute. Vous saurez si vous remplissez les conditions prévues par le texte proposé. Il faut les remplir toutes à la fois." }),
    el("button", { class: "btn", id: "start", type: "button" }, [
      el("span", { text: "Commencer" }),
      el("span", { class: "kbd", "aria-hidden": "true", text: "Entrée ↵" })
    ]),
    el("p", { class: "hint", text: "Vos réponses restent dans votre navigateur. Rien n'est envoyé ni enregistré." }),
    el("p", { class: "footlink" }, [el("a", { href: "/methodologie/", text: "Méthodologie et sources" }), document.createTextNode(" · "), el("a", { href: "/fiscalite/", text: "Tous les pays" })])
  ]);
  showScreen(s);
  document.getElementById("start").addEventListener("click", function () { answers = []; renderStep(0); });
  document.getElementById("start").focus();
}

function renderStep(i) {
  var step = STEPS[i];
  setProgress(i);
  var opts = step.options.map(function (o, idx) {
    var b = el("button", { class: "opt", type: "button", "data-value": o[1], id: "opt-" + idx }, [
      el("span", { class: "key", text: KEYS[idx] }),
      el("span", { text: o[0] })
    ]);
    b.addEventListener("click", function () { choose(i, o[1]); });
    return b;
  });
  var kids = [
    el("p", { class: "qnum", text: "Question " + (i + 1) + " sur " + STEPS.length }),
    el("h2", { text: step.q })
  ];
  if (step.help) kids.push(el("p", { class: "help", text: step.help }));
  if (step.type === "country") kids.push(buildCountryPicker(i));
  kids.push(el("div", { class: "options", role: "group", "aria-label": "Réponses" }, opts));
  if (i > 0) {
    var back = el("button", { class: "back", type: "button", text: "← Question précédente" });
    back.addEventListener("click", function () { answers.length = i - 1; renderStep(i - 1); });
    kids.push(back);
  }
  kids.push(el("p", { class: "hint", text: step.type === "country" ? "Tapez le nom du pays, puis choisissez-le dans la liste (flèches et Entrée)." : "Astuce : appuyez sur A, B ou C pour répondre." }));
  showScreen(el("section", { class: "screen", "data-step": String(i) }, kids));
  if (step.type === "country") {
    var ci = document.getElementById("country-input");
    if (ci) ci.focus({ preventScroll: true });
  }
}

function buildCountryPicker(i) {
  var wrap = el("div", { class: "picker" });
  var input = el("input", { type: "text", id: "country-input", class: "picker-input", placeholder: "Tapez le nom d'un pays", autocomplete: "off",
    role: "combobox", "aria-expanded": "true", "aria-controls": "country-list", "aria-label": "Pays de résidence fiscale" });
  var list = el("ul", { class: "picker-list", id: "country-list", role: "listbox", "aria-label": "Pays" });
  var shown = [];
  var active = -1;
  function pick(c) { loadCountry(c.code).then(function () { choose(i, countryAnswer(c.code), c.code); }); }
  function paint() {
    list.innerHTML = "";
    if (!shown.length) {
      list.appendChild(el("li", { class: "picker-empty", text: "Aucun pays trouvé. Utilisez « Je ne sais pas » ci-dessous." }));
      return;
    }
    shown.forEach(function (c, idx) {
      var li = el("li", { role: "option", "aria-selected": idx === active ? "true" : "false", class: "picker-item" + (idx === active ? " active" : ""), text: c.name });
      li.addEventListener("mousedown", function (e) { e.preventDefault(); pick(c); });
      list.appendChild(li);
    });
    var a = list.querySelector(".active");
    if (a) a.scrollIntoView({ block: "nearest" });
  }
  function filter() {
    var q = normalize(input.value);
    shown = q ? COUNTRIES.filter(function (c) { return normalize(c.name).indexOf(q) !== -1; }) : COUNTRIES.slice();
    active = -1;
    paint();
  }
  input.addEventListener("input", filter);
  input.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") { e.preventDefault(); if (shown.length) { active = Math.min(active + 1, shown.length - 1); paint(); } }
    else if (e.key === "ArrowUp") { e.preventDefault(); if (shown.length) { active = Math.max(active - 1, 0); paint(); } }
    else if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      if (active >= 0) pick(shown[active]);
      else if (shown.length === 1) pick(shown[0]);
    }
  });
  wrap.appendChild(input);
  wrap.appendChild(list);
  filter();
  return wrap;
}

function choose(i, value, code) {
  answers = answers.slice(0, i);
  answers[i] = value;
  meta[i] = code || null;
  var r = evaluate(answers);
  if (r.verdict === "incomplete") renderStep(i + 1);
  else renderResult(r);
}

function countryBox() {
  if (answers.length < STEPS.length || answers[4] === undefined || !meta[4]) return document.createDocumentFragment();
  var code = meta[4], d = COUNTRY_DATA[code], level = countryLevel(code);
  if (!d && DATA_ERROR) return el("div", { class: "countrybox debatable" }, [el("p", { class: "cb-title", text: countryName(code) + " : données indisponibles" }), el("p", { text: "Les fichiers de données n'ont pas pu être chargés (connexion, ou page ouverte en local sans serveur). Le résultat pour ce pays reste indéterminé." })]);
  var kids = [
    el("p", { class: "cb-title", text: countryName(code) + " : " + LEVEL_LABEL[level] }),
    el("p", { text: d ? LEVEL_COMMENT[level] : UNRATED_COMMENT })
  ];
  if (d) {
    kids.push(el("p", { class: "cb-detail", text: "Taux effectif estimé : " + fmtRateD(d) + " (France : " + fmtRate(FR_RATE) + ", seuil : " + fmtRate(THRESHOLD) + "). " + d.note }));
    kids.push(el("p", { class: "cb-detail cb-srcs-title", text: "Sources utilisées (" + d.src.length + ")" }));
    kids.push(el("ul", { class: "cb-srcs" }, d.src.map(function (x) {
      return el("li", {}, [
        el("a", { href: x[1], target: "_blank", rel: "noopener", text: x[0] }),
        document.createTextNode(" "),
        el("span", { class: "tag " + (x[2] === O ? "off" : "non"), text: x[2] })
      ]);
    })));
    if (d.calc && d.calc.devise !== "EUR") kids.push(el("p", { class: "cb-detail", text: "Taux de change utilisé : 1 € = " + d.calc.fx + " " + d.calc.devise + " (" + d.calc.fx_source + ")." }));
    if (d.dir) kids.push(el("p", { class: "cb-detail" }, [el("a", { href: pageUrl(d), text: "Page de ce pays" }), document.createTextNode(" · "), el("a", { href: "https://github.com/elChapoSing/questionnaire-impot-universel/tree/main/pays/" + d.dir, target: "_blank", rel: "noopener", text: "Voir le calcul détaillé et les données de ce pays (GitHub)" })]));
  }
  return el("div", { class: "countrybox " + level }, kids);
}
function renderResult(r) {
  setProgress(STEPS.length);
  var title, badge, badgeClass, body;
  if (r.verdict === "no") {
    badge = "Non concerné·e"; badgeClass = "no";
    title = "Vous ne seriez pas concerné·e.";
    var reason = r.reason;
    if (answers[4] === "no" && meta[4]) {
      reason = "pays de résidence choisi : " + countryName(meta[4]) + ". Son taux effectif d'impôt sur le revenu, estimé à " + fmtRate(COUNTRY_DATA[meta[4]].rate) + ", dépasse le seuil de " + fmtRate(THRESHOLD) + ".";
    }
    body = "Raison : " + reason + " Il faut remplir toutes les conditions à la fois.";
  } else if (r.verdict === "maybe") {
    badge = "À vérifier"; badgeClass = "maybe";
    title = "Une seule condition reste à vérifier.";
    body = "Vous remplissez les quatre premières conditions. Reste à savoir si la fiscalité de votre pays de résidence est inférieure de plus de 40 % à celle de la France. Si c'est le cas, la mesure prévoit que vous acquittiez en France l'impôt français moins l'impôt déjà payé à l'étranger (crédit d'impôt), sous réserve des conventions fiscales signées par la France.";
  } else {
    badge = "Conditions remplies"; badgeClass = "yes";
    title = "Vous rempliriez toutes les conditions.";
    body = "D'après le texte proposé, vous auriez à acquitter en France l'impôt français moins l'impôt déjà payé dans votre pays de résidence (crédit d'impôt), sous réserve des conventions fiscales signées par la France.";
  }
  var labels = { met: "Remplie", unmet: "Non remplie", unknown: "À vérifier", skipped: "Non évaluée" };
  var items = r.rows.map(function (row, idx) {
    var label = row.label + (idx === 4 && meta[4] && row.state !== "skipped" ? " (" + countryName(meta[4]) + ")" : "");
    return el("li", {}, [
      el("span", { text: label }),
      el("span", { class: "state " + row.state, text: labels[row.state] })
    ]);
  });
  var restart = el("button", { class: "btn ghost", id: "restart", type: "button" }, [el("span", { text: "Recommencer" }), el("span", { class: "kbd", "aria-hidden": "true", text: "Entrée ↵" })]);
  restart.addEventListener("click", function () { answers = []; renderStart(); });

  var sources = el("div", { class: "sources" }, [
    el("p", {}, [el("a", { href: "/methodologie/", text: "Méthodologie, hypothèses et sources des données par pays" })]),
    el("p", {}, [el("a", { href: "/donnees/", text: "Toutes les données dans un tableau (filtrable)" })]),
    el("p", { text: "Ce questionnaire est informatif. Il ne constitue pas un avis fiscal ou juridique. Il s'appuie sur le dispositif de l'amendement n° I-2564 au projet de loi de finances pour 2027." }),
    el("ul", {}, [
      el("li", {}, [el("a", { href: "https://www.assemblee-nationale.fr/dyn/17/amendements/3210A/AN/2564", text: "Texte de l'amendement n° I-2564 (Assemblée nationale)" })]),
      el("li", {}, [el("a", { href: "https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/plafonds-securite-sociale.html", text: "Plafond annuel de la Sécurité sociale 2026 : 48 060 € (Urssaf)" })]),
      el("li", {}, [el("a", { href: "https://melenchon2027.fr/programme/livre/", text: "Programme L'Avenir en commun" })])
    ])
  ]);

  showScreen(el("section", { class: "screen" }, [
    el("span", { class: "verdict " + badgeClass, text: badge }),
    el("h2", { text: title }),
    el("p", { class: "lead", text: body }),
    el("ul", { class: "recap", "aria-label": "Récapitulatif des conditions" }, items),
    countryBox(),
    restart,
    sources
  ]));
}

function renderMethodology() {
  setProgress(0);
  showScreen(el("section", { class: "screen meth" }, [el("h2", { text: "Méthodologie" }), el("p", { text: "Chargement des données pays…" })]));
  loadAllCountries().then(function () { if (PAGE === "methodologie") renderMethodologyNow(); });
}
function renderMethodologyNow() {
  var codes = Object.keys(COUNTRY_DATA).sort(function (a, b) { return countryName(a).localeCompare(countryName(b), "fr", { sensitivity: "base" }); });
  var CONTINENTS = [["europe", "Europe"], ["afrique", "Afrique"], ["asie", "Asie et Moyen-Orient"], ["amerique-du-nord", "Amérique du Nord, centrale et Caraïbes"], ["amerique-du-sud", "Amérique du Sud"], ["oceanie", "Océanie"]];
  function rowFor(c) {
    var d = COUNTRY_DATA[c];
    var lvl = countryLevel(c);
    var srcs = el("td", {}, d.src.map(function (x) {
      return el("div", {}, [
        el("a", { href: x[1], target: "_blank", rel: "noopener", text: x[0] }),
        document.createTextNode(" "),
        el("span", { class: "tag " + (x[2] === O ? "off" : "non"), text: x[2] })
      ]);
    }));
    return el("tr", {}, [
      el("td", {}, [el("a", { href: pageUrl(d), text: countryName(c) })]),
      el("td", { text: fmtRateD(d) }),
      el("td", { text: LEVEL_LABEL[lvl] }),
      el("td", { text: d.note }),
      srcs
    ]);
  }
  var groups = [], jump = [];
  CONTINENTS.forEach(function (ct) {
    var list = codes.filter(function (c) { return COUNTRY_DATA[c].dir && COUNTRY_DATA[c].dir.split("/")[0] === ct[0]; });
    if (!list.length) return;
    var det = el("details", { class: "cont", id: "cont-" + ct[0] }, [
      el("summary", { class: "cont-title", text: ct[1] + " (" + list.length + " pays)" }),
      el("div", { class: "tbl" }, [el("table", {}, [
        el("thead", {}, [el("tr", {}, ["Pays", "Taux estimé", "Niveau", "Remarque", "Sources"].map(function (h) { return el("th", { text: h }); }))]),
        el("tbody", {}, list.map(rowFor))
      ])])
    ]);
    var chip = el("button", { class: "chip", type: "button", text: ct[1] });
    chip.addEventListener("click", function () { det.open = true; det.scrollIntoView({ behavior: "smooth", block: "start" }); });
    jump.push(chip);
    groups.push(det);
  });
  var table = el("div", { class: "cont-groups" }, [el("div", { class: "chips", "aria-label": "Aller à un continent" }, jump)].concat(groups));
  var back = el("button", { class: "btn float-back", type: "button" }, [el("span", { text: "← Retour au questionnaire" })]);
  back.addEventListener("click", function () { location.href = "/"; });

  showScreen(el("section", { class: "screen meth" }, [
    el("p", { class: "eyebrow", text: "Méthodologie" }),
    el("h2", { text: "Comment est évaluée la condition de fiscalité du pays de résidence" }),
    el("p", { text: "L'amendement n° I-2564 vise les résidents d'un État dont la fiscalité des revenus du travail, du capital ou du patrimoine est inférieure de plus de 40 % à celle de la France. Le texte ne dit pas comment mesurer cet écart. Il s'agit ici d'une estimation indépendante, qui ne remplace ni un avis fiscal ni l'avis de l'administration." }),
    el("h3", { text: "Hypothèses" }),
    el("ul", {}, [
      el("li", { text: "Indicateur : taux effectif d'impôt sur le revenu d'une personne seule, sans enfant, percevant un salaire imposable de 240 300 € (5 fois le plafond de la Sécurité sociale 2026, fixé à 48 060 €)." }),
      el("li", { text: "Référence France : " + fmtRate(FR_RATE) + " (84 658,84 € d'impôt), d'après le barème progressif de l'impôt sur le revenu. Le seuil est donc de 60 % de ce taux, soit " + fmtRate(THRESHOLD) + "." }),
      el("li", { text: "Pour chaque pays : barème national progressif, auquel s'ajoute l'impôt local ou la surtaxe nationale quand nous avons pu les sourcer. Les cotisations sociales, la TVA, les taxes foncières, l'impôt sur la fortune et l'imposition du capital ne sont pas comptés." }),
      el("li", { text: "Taux de change : cours Yahoo Finance (paires directes contre l'euro, EURxxx=X) fournis et vérifiés le 13 novembre 2026, appliqués à tous les pays sauf mention contraire (Mongolie, Myanmar, Samoa, Sao Tomé-et-Principe, Érythrée : cours Yahoo indisponible, hypothèse conservée et signalée dans la fiche du pays). Les cours bougent : les taux effectifs en devise locale sont recalculés à chaque mise à jour des cours (fichier taux_de_change_EUR_verifie_2026-11-13.csv dans le dépôt). Le niveau de réponse n'est sensible au change que pour les pays proches des bornes de 18 % et 26 %." }),
      el("li", { text: "Les exceptions prévues par des conventions fiscales (par exemple pour les Français résidant à Monaco) ne sont pas modélisées." }),
    ]),
    el("h3", { text: "Les trois niveaux de réponse" }),
    el("ul", {}, [
      el("li", { text: LEVEL_LABEL.below + " : taux estimé inférieur ou égal à " + fmtRate(LEVEL_LOW) + ". La condition est considérée comme remplie." }),
      el("li", { text: LEVEL_LABEL.debatable + " : taux estimé entre " + fmtRate(LEVEL_LOW) + " et " + fmtRate(LEVEL_HIGH) + ", ou pays pas encore analysé. La condition reste à vérifier. Ces bornes sont un choix de prudence : elles laissent une marge autour du seuil de " + fmtRate(THRESHOLD) + " pour tenir compte des incertitudes de calcul." }),
      el("li", { text: LEVEL_LABEL.above + " : taux estimé supérieur à " + fmtRate(LEVEL_HIGH) + ". La condition est considérée comme non remplie." })
    ]),
    el("h3", { text: "Données par pays et sources" }),
    el("p", {}, [el("a", { href: "/donnees/", text: "Ouvrir toutes les données dans un tableau interactif (tri, filtres, recherche)" })]),
    el("p", { text: "Les sources « officielle » émanent d'une administration fiscale ou d'un ministère. Les sources « non officielle » sont des médias ou des sites juridiques privés : à confirmer auprès des autorités du pays." }),
    table,
    el("h3", { text: "Limites" }),
    el("ul", {}, [
      el("li", { text: "Seuls " + codes.length + " pays sont analysés à ce stade. Tous les autres sont classés « discutable » (non analysés)." }),
      el("li", { text: "Les barèmes changent chaque année. Les chiffres reflètent les textes consultés en 2026." }),
      el("li", { text: "Un taux effectif calculé à un seul niveau de revenu ne dit rien des régimes spéciaux (expatriés, non-domiciliés, zones franches)." }),
      el("li", { text: "Japon : l'impôt local (10 %) n'est pas inclus faute de source. Hongrie : la contribution sociale de 13 % n'est pas comptée. Vietnam : ordre de grandeur uniquement. Émirats : source officielle encore à ajouter." })
    ]),
    back
  ]));
}
/* ---------- Page « Toutes les données » (ag-grid) ---------- */
var AG_URL = "https://cdn.jsdelivr.net/npm/ag-grid-community@36.1.0/dist/ag-grid-community.min.js";
var agPromise = null;
function loadAgGrid() {
  if (window.agGrid) return Promise.resolve();
  if (!agPromise) agPromise = new Promise(function (resolve, reject) {
    var sc = document.createElement("script");
    sc.src = AG_URL; sc.onload = resolve; sc.onerror = function () { agPromise = null; reject(new Error("ag-grid")); };
    document.head.appendChild(sc);
  });
  return agPromise;
}
var DATA_CONTINENTS = { "europe": "Europe", "afrique": "Afrique", "asie": "Asie et Moyen-Orient", "amerique-du-nord": "Amérique du Nord, centrale et Caraïbes", "amerique-du-sud": "Amérique du Sud", "oceanie": "Océanie" };
function renderData() {
  setProgress(0);
  showScreen(el("section", { class: "screen" }, [el("h2", { text: "Toutes les données" }), el("p", { text: "Chargement des données pays…" })]));
  app.classList.add("wide");
  Promise.all([loadAllCountries(), loadAgGrid().then(function () { return true; }, function () { return false; })]).then(function (r) {
    if (PAGE === "donnees") renderDataNow(r[1]);
  });
}
function renderDataNow(gridOk) {
  var rows = Object.keys(COUNTRY_DATA).map(function (c) {
    var d = COUNTRY_DATA[c];
    var lvl = countryLevel(c);
    return { code: c, continent: DATA_CONTINENTS[(d.dir || "").split("/")[0]] || "", pays: countryName(c), rate: d.rate, rateText: fmtRateD(d), lvl: lvl, niveau: LEVEL_LABEL[lvl],
      note: d.note, src: d.src, srcText: d.src.map(function (x) { return x[0] + " " + x[2]; }).join(" | "), dir: d.dir };
  }).sort(function (a, b) { return a.continent.localeCompare(b.continent, "fr") || a.pays.localeCompare(b.pays, "fr"); });

  var back = el("button", { class: "btn float-back", type: "button" }, [el("span", { text: "← Retour au questionnaire" })]);
  back.addEventListener("click", function () { location.href = "/"; });
  var head = [
    el("p", { class: "eyebrow", text: "Données" }),
    el("h2", { text: "Toutes les données par pays" }),
    el("p", { class: "lead" }, [document.createTextNode(rows.length + " pays. Cliquez sur un en-tête pour trier, sur l'icône de filtre pour filtrer, ou tapez dans la recherche. Méthode et hypothèses : "), el("a", { href: "/methodologie/", text: "page Méthodologie" }), document.createTextNode(".")])
  ];
  if (!gridOk || !window.agGrid) {
    showScreen(el("section", { class: "screen" }, head.concat([el("p", { text: "Le composant de tableau n'a pas pu être chargé (connexion). Les mêmes données sont sur la page Méthodologie." }), back])));
    app.classList.add("wide");
    return;
  }
  var search = el("input", { type: "search", class: "picker-input data-search", placeholder: "Rechercher un pays, un continent, une source…", "aria-label": "Rechercher dans le tableau" });
  var holder = el("div", { class: "data-grid" });
  showScreen(el("section", { class: "screen" }, head.concat([search, holder, back])));
  app.classList.add("wide");

  var theme = agGrid.themeQuartz.withParams({
    backgroundColor: "var(--surface)", foregroundColor: "var(--ink)", accentColor: "var(--accent)",
    borderColor: "var(--line)", headerBackgroundColor: "var(--bg)", headerTextColor: "var(--muted)",
    fontFamily: "DM Sans, Helvetica Neue, Arial, sans-serif", fontSize: 14, headerFontWeight: 600, wrapperBorderRadius: 12
  });
  function srcCell(p) {
    var box = document.createElement("div");
    p.data.src.forEach(function (x) {
      var line = document.createElement("div");
      var a = document.createElement("a"); a.href = x[1]; a.target = "_blank"; a.rel = "noopener"; a.textContent = x[0];
      var t = document.createElement("span"); t.className = "tag " + (x[2] === O ? "off" : "non"); t.textContent = x[2];
      line.appendChild(a); line.appendChild(document.createTextNode(" ")); line.appendChild(t); box.appendChild(line);
    });
    return box;
  }
  var api = agGrid.createGrid(holder, {
    theme: theme,
    rowData: rows,
    defaultColDef: { sortable: true, filter: true, resizable: true },
    columnDefs: [
      { field: "continent", headerName: "Continent", width: 170 },
      { field: "pays", headerName: "Pays", width: 190, pinned: "left" },
      { field: "rate", headerName: "Taux estimé", width: 140, type: "numericColumn", filter: "agNumberColumnFilter", valueFormatter: function (p) { return p.data.rateText; }, sort: null },
      { field: "niveau", headerName: "Niveau", width: 230, cellRenderer: function (p) { var s = document.createElement("span"); s.className = "lvlchip " + p.data.lvl; s.textContent = p.value; return s; },
        comparator: function (a, b, na, nb) { return na.data.rate - nb.data.rate; } },
      { field: "note", headerName: "Remarques", flex: 2, minWidth: 360, wrapText: true, autoHeight: true },
      { field: "srcText", headerName: "Sources", flex: 2, minWidth: 340, autoHeight: true, cellRenderer: srcCell, sortable: false },
      { field: "dir", headerName: "Calcul", width: 110, sortable: false, filter: false,
        cellRenderer: function (p) { var a = document.createElement("a"); a.href = "https://github.com/elChapoSing/questionnaire-impot-universel/tree/main/pays/" + p.value; a.target = "_blank"; a.rel = "noopener"; a.textContent = "Détail ↗"; return a; } }
    ],
    tooltipShowDelay: 400
  });
  search.addEventListener("input", function () { api.setGridOption("quickFilterText", search.value); });
}

var PAGE = document.documentElement.getAttribute("data-page") || "accueil";
function route() {
  if (PAGE === "methodologie") renderMethodology();
  else if (PAGE === "donnees") renderData();
  else {
    // anciens liens #methodologie / #donnees
    if (location.hash === "#methodologie") { location.replace("/methodologie/"); return; }
    if (location.hash === "#donnees") { location.replace("/donnees/"); return; }
    answers = []; renderStart();
  }
}

route();
