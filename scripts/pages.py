"""Génère les pages HTML statiques par pays (fiscalite/<slug>/index.html), l'index fiscalite/index.html et sitemap.xml.
Appelé par build.py : tout vient des data.json, rien à écrire à la main."""
import html, os, json
from datetime import date

BASE = "https://www.impotuniversel.fr"
DATA_DATE = "2026-11-13"   # date des données (cours de change) : sert de lastmod
OUT = "fiscalite"
FIXED = ["", "methodologie/", "donnees/"]

COMMENT = {
    "below": "Fiscalité nettement inférieure. D'après nos calculs, l'impôt sur le revenu effectif dans ce pays est largement sous le seuil de 21,1 %, c'est-à-dire plus de 40 % en dessous de celui de la France. Ce pays remplirait très probablement la condition, sous réserve des conventions fiscales.",
    "debatable": "Cas discutable. L'écart avec la France est proche du seuil de 40 %, et le résultat dépend de la méthode de comparaison : cotisations sociales, revenus du capital, régimes spéciaux. Ne tirez pas de conclusion définitive.",
    "above": "Fiscalité proche de celle de la France, ou supérieure. D'après nos calculs, l'impôt sur le revenu effectif dans ce pays dépasse nettement le seuil de 21,1 %, donc l'écart avec la France est inférieur à 40 %. Ce pays ne remplirait pas la condition.",
}
CAT = {"below": "Potentiellement concerné·e", "debatable": "Cas discutable : à examiner", "above": "Pas concerné·e"}
SHORT = {"below": "Nettement en dessous du seuil", "debatable": "Discutable", "above": "Nettement au-dessus du seuil"}

def e(s): return html.escape(str(s), quote=True)

NAV = [("/", "Questionnaire", "accueil"), ("/donnees/", "Données", "donnees"), ("/fiscalite/", "Fiscalité par pays", "fiscalite"), ("/methodologie/", "Méthodologie", "methodologie")]

def nav(active):
    a = "".join(f'<a href="{h}"' + (' aria-current="page"' if k == active else "") + f">{l}</a>" for h, l, k in NAV)
    return f'<nav class="topnav" aria-label="Navigation principale">{a}</nav>'

def head(title, desc, url, extra="", active="fiscalite"):
    return f'''<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(title)}</title>
<meta name="description" content="{e(desc)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="{url}">
<meta property="og:type" content="website">
<meta property="og:locale" content="fr_FR">
<meta property="og:site_name" content="Impôt universel : suis-je concerné·e ?">
<meta property="og:title" content="{e(title)}">
<meta property="og:description" content="{e(desc)}">
<meta property="og:url" content="{url}">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="{e(title)}">
<meta name="twitter:description" content="{e(desc)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/style.css">
{extra}</head>
<body>
<div class="brandbar" aria-hidden="true"></div>
{nav(active)}
<main class="app static-page"><section class="screen">
'''

FOOT = '''</section></main>
<footer class="site-foot"><strong>Ce site n'est pas un site officiel de La France insoumise.</strong> Il s'agit d'une initiative de soutien indépendante, sans valeur de communication officielle du mouvement ni de sa campagne. Questionnaire informatif, sans valeur d'avis fiscal ou juridique.</footer>
</body>
</html>
'''

def country_page(d, slug, cont_label, lv, fr, compute, LV_THRESHOLD, FR_RATE, SALAIRE):
    r = d["rate"]
    rr = f"entre {fr(d['range'][0])} et {fr(d['range'][1])} %" if d.get("range") else f"{fr(r)} %"
    url = f"{BASE}/{OUT}/{slug}/"
    title = f"Impôt sur le revenu : {d['nom']}, taux effectif et impôt universel"
    desc = (f"{d['nom']} : taux effectif d'impôt sur le revenu estimé à {rr} pour {fr(SALAIRE, 0)} € de salaire, "
            f"face au seuil de {fr(LV_THRESHOLD, 2)} % de l'impôt universel des Français de l'étranger. Calcul détaillé et sources.")
    o = [head(title, desc, url)]
    o.append(f'<p class="eyebrow">{e(cont_label)}</p>')
    o.append(f'<h1>Impôt sur le revenu : {e(d["nom"])}</h1>')
    o.append(f'<p><span class="lvlchip cat {lv}">{CAT[lv]}</span></p>')
    o.append(f'<p class="big">{e(rr)}</p>')
    o.append(f'<p>Taux effectif estimé pour une personne seule, sans enfant, qui gagne {fr(SALAIRE, 0)} € par an (5 × le plafond de la Sécurité sociale 2026). '
             f'Seuil de l\'amendement : {fr(LV_THRESHOLD, 2)} %, soit 60 % du taux français ({fr(FR_RATE, 2)} %).</p>')
    o.append(f'<p><strong>Verdict : {SHORT[lv].lower()}.</strong> {e(COMMENT[lv].split(". ", 1)[1] if ". " in COMMENT[lv] else COMMENT[lv])}</p>')
    o.append('<p><a class="btn" href="/">Faire le questionnaire complet</a></p>')
    c = d.get("calc")
    o.append("<h2>Le calcul</h2>")
    if c:
        sal, base, rows, tax, pct = compute(c)
        dev = c["devise"]
        o.append(f'<p>Salaire converti : {fr(SALAIRE, 0)} € × {fr(c["fx"], 3)} = {fr(sal, 0)} {e(dev)} ({e(c.get("fx_source", ""))}).</p>')
        for lab, a in c.get("deductions", []):
            o.append(f'<p>Déduction : {e(lab)} : − {fr(a, 0)} {e(dev)}.</p>')
        o.append(f'<p>Base imposable : {fr(base, 0)} {e(dev)}.</p>')
        o.append(f'<div class="tbl"><table><thead><tr><th>De ({e(dev)})</th><th>À ({e(dev)})</th><th>Taux</th><th>Part imposée</th><th>Impôt</th></tr></thead><tbody>')
        for lo, hi, rt, part, t in rows:
            o.append(f'<tr><td>{fr(lo, 0)}</td><td>{"et plus" if hi is None else fr(hi, 0)}</td><td>{fr(rt, 2)} %</td><td>{fr(part, 0)}</td><td>{fr(t, 0)}</td></tr>')
        o.append("</tbody></table></div>")
        o.append("<ul>")
        for lab, a in c.get("credits", []): o.append(f"<li>Crédit : {e(lab)} : − {fr(a, 0)} {e(dev)}.</li>")
        for lab, rt in c.get("majorations", []): o.append(f"<li>Majoration : {e(lab)} : + {fr(rt, 1)} % de l'impôt.</li>")
        o.append(f"<li><strong>Impôt total : {fr(tax, 0)} {e(dev)}, soit {fr(pct)} % du salaire brut.</strong></li>")
        for h in c.get("hypotheses", []): o.append(f"<li>Hypothèse : {e(h)}</li>")
        o.append("</ul>")
    else:
        o.append("<p>Calcul tranche par tranche pas encore détaillé pour ce pays : voir la remarque ci-dessous.</p>")
    o.append(f'<h2>Remarque</h2><p>{e(d["note"])}</p>')
    o.append("<h2>Sources</h2><ul>")
    for s in d["sources"]:
        o.append(f'<li><a href="{e(s["url"])}" rel="noopener">{e(s["titre"])}</a> ({e(s["type"])})</li>')
    o.append("</ul>")
    o.append('<p class="hint">Hypothèses générales (salarié célibataire, impôt national sur le revenu seul, cours de change du 13 novembre 2026) : voir la <a href="/methodologie/">méthodologie</a>. Tous les pays : <a href="/donnees/">tableau des données</a>.</p>')
    o.append(FOOT)
    return "\n".join(o)

def index_page(items, CONT_LABEL, fr):
    url = f"{BASE}/{OUT}/"
    title = "Impôt sur le revenu par pays : taux estimé et impôt universel"
    desc = f"Liste des {len(items)} pays analysés : taux effectif d'impôt sur le revenu estimé, niveau par rapport au seuil de l'impôt universel des Français de l'étranger."
    o = [head(title, desc, url)]
    o.append("<h1>Impôt sur le revenu par pays</h1>")
    o.append(f"<p>{len(items)} pays analysés. Cliquez sur un pays pour voir le taux estimé, le calcul détaillé et les sources. Vous préférez un tableau triable et filtrable ? <a href=\"/donnees/\">Ouvrir le tableau des données</a>.</p>")
    for k, lab in CONT_LABEL.items():
        sel = sorted([i for i in items if i["cont"] == k], key=lambda i: i["nom"])
        if not sel: continue
        o.append(f"<h2>{e(lab)} ({len(sel)})</h2><ul class=\"plist\">")
        for i in sel:
            o.append(f'<li><a href="/{OUT}/{i["slug"]}/">{e(i["nom"])}</a> <span class="muted">{e(i["rr"])}</span> <span class="lvlchip {i["lv"]}">{CAT[i["lv"]]}</span></li>')
        o.append("</ul>")
    o.append(FOOT)
    return "\n".join(o)

def sitemap(slugs):
    u = [f"{BASE}/{p}" for p in FIXED] + [f"{BASE}/{OUT}/"] + [f"{BASE}/{OUT}/{s}/" for s in slugs]
    return ('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
            + "".join(f"  <url><loc>{x}</loc><lastmod>{DATA_DATE}</lastmod></url>\n" for x in u) + "</urlset>\n")
