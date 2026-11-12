#!/usr/bin/env python3
"""Source de vérité : pays/<continent>/<CODE>-<nom>/data.json.
Usage :
  python3 scripts/build.py migrate   # une fois : crée pays/ à partir de COUNTRY_DATA (index.html)
  python3 scripts/build.py import lot.txt  # importe un lot d'entrées JS puis régénère
  python3 scripts/build.py           # régénère les README pays, pays/README.md et pays/index.json (le site lit les data.json directement)
"""
import json, os, re, subprocess, sys, unicodedata, glob
sys.path.insert(0, os.path.dirname(__file__))
from continents import CONT

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IDX = os.path.join(ROOT, "index.html")
PAYS = os.path.join(ROOT, "pays")
SALAIRE_EUR, FR_RATE, THRESHOLD, LOW, HIGH = 240300, 35.23, 21.14, 18, 26
CONT_LABEL = {"europe": "Europe", "afrique": "Afrique", "asie": "Asie et Moyen-Orient",
              "amerique-du-nord": "Amérique du Nord, centrale et Caraïbes",
              "amerique-du-sud": "Amérique du Sud", "oceanie": "Océanie"}

def slug(n):
    n = unicodedata.normalize("NFD", n).encode("ascii", "ignore").decode().lower()
    return re.sub(r"[^a-z0-9]+", "-", n).strip("-")

def fr(x, nd=1):
    return f"{x:,.{nd}f}".replace(",", " ").replace(".", ",")

def level(r):
    return "below" if r <= LOW else "debatable" if r <= HIGH else "above"
LV = {"below": "Nettement en dessous du seuil (condition remplie)",
      "debatable": "Discutable", "above": "Nettement au-dessus du seuil (condition non remplie)"}

def compute(c):
    """Calcul explicite à partir de calc : retourne (lignes, impôt, taux %)."""
    sal = c.get("salaire_local") or SALAIRE_EUR * c["fx"]
    rows = []
    base = sal - sum(a for _, a in c.get("deductions", []))
    tax = 0.0
    for lo, hi, r in c["tranches"]:
        top = base if hi is None else min(base, hi)
        part = max(0, top - lo)
        t = part * r / 100
        tax += t
        rows.append((lo, hi, r, part, t))
    for _, a in c.get("credits", []):
        tax -= a
    for _, r in c.get("majorations", []):
        tax *= 1 + r / 100
    return sal, base, rows, tax, tax / sal * 100

def readme(d):
    r = d["rate"]; lv = level(r)
    o = [f"# {d['nom']} ({d['code']})", ""]
    rr = f"entre {fr(d['range'][0])} et {fr(d['range'][1])} %" if d.get("range") else f"{fr(r)} %"
    o += [f"**Taux effectif retenu : {rr}** (seuil de l'amendement : {fr(THRESHOLD, 2)} %, soit 60 % du taux français de {fr(FR_RATE, 2)} %).",
          f"**Verdict du questionnaire : {LV[lv]}.**", "",
          "## Cas de référence", "",
          f"Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de {fr(SALAIRE_EUR, 0)} € (5 × le plafond de la Sécurité sociale 2026). "
          "On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. "
          "Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.", "",
          "## Calcul", ""]
    c = d.get("calc")
    if c:
        sal, base, rows, tax, pct = compute(c)
        dev = c["devise"]
        o.append(f"- Devise : {dev}. Cours utilisé : 1 EUR = {fr(c['fx'], 4).rstrip('0').rstrip(',')} {dev} ({c.get('fx_source', 'hypothèse, à confirmer')}).")
        o.append(f"- Salaire converti : {fr(SALAIRE_EUR, 0)} € × {fr(c['fx'], 4).rstrip('0').rstrip(',')} = {fr(sal, 0)} {dev}.")
        for lab, a in c.get("deductions", []):
            o.append(f"- Déduction : {lab} : − {fr(a, 0)} {dev}.")
        o.append(f"- Base imposable : {fr(base, 0)} {dev}.")
        o += ["", f"| De ({dev}) | À ({dev}) | Taux | Part imposée | Impôt |", "|---:|---:|---:|---:|---:|"]
        for lo, hi, rt, part, t in rows:
            o.append(f"| {fr(lo, 0)} | {'et plus' if hi is None else fr(hi, 0)} | {fr(rt, 2)} % | {fr(part, 0)} | {fr(t, 0)} |")
        o.append("")
        for lab, a in c.get("credits", []):
            o.append(f"- Crédit : {lab} : − {fr(a, 0)} {dev}.")
        for lab, rt in c.get("majorations", []):
            o.append(f"- Majoration : {lab} : + {fr(rt, 1)} % de l'impôt.")
        o.append(f"- **Impôt total : {fr(tax, 0)} {dev}, soit {fr(pct)} % du salaire brut.**")
        if abs(pct - r) > 0.5:
            o.append(f"- ⚠ Écart avec le taux retenu ({fr(r)} %) : à vérifier.")
        for h in c.get("hypotheses", []):
            o.append(f"- Hypothèse : {h}")
        o.append("")
    else:
        o += ["_Calcul tranche par tranche pas encore détaillé pour ce pays._ Le résultat ci-dessous est résumé dans la note ; "
              "pour le détailler, ajoutez un bloc `calc` dans `data.json` (voir `pays/README.md`).", ""]
    o += ["## Note", "", d["note"], "", "## Sources", ""]
    for s in d["sources"]:
        o.append(f"- [{s['titre']}]({s['url']}) ({s['type']})")
    o += ["", "## Corriger ou vérifier", "",
          "Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. "
          "Toute correction doit citer une source.", ""]
    return "\n".join(o)

def js_entry(d):
    parts = [f"rate: {d['rate']}"]
    if d.get("range"): parts.append(f"range: {json.dumps(d['range'])}")
    parts.append("note: " + json.dumps(d["note"], ensure_ascii=False))
    src = ", ".join("[" + json.dumps(s["titre"], ensure_ascii=False) + ", " + json.dumps(s["url"]) + ", " + ("O" if s["type"] == "officielle" else "N") + "]" for s in d["sources"])
    parts.append("src: [" + src + "]")
    parts.append("dir: " + json.dumps(CONT[d["code"]] + "/" + f"{d['code']}-{slug(d['nom'])}"))
    return f"  {d['code']}: {{ " + ", ".join(parts) + " }"

def load():
    return sorted((json.load(open(p, encoding="utf-8")) for p in glob.glob(os.path.join(PAYS, "*", "*", "data.json"))), key=lambda d: d["code"])

def path_of(d):
    return os.path.join(PAYS, CONT[d["code"]], f"{d['code']}-{slug(d['nom'])}")

def migrate():
    out = subprocess.check_output(["node", os.path.join(ROOT, "scripts", "extract.js"), IDX])
    j = json.loads(out)
    for code, v in j["D"].items():
        d = {"code": code, "nom": j["names"][code], "rate": v["rate"]}
        if v.get("range"): d["range"] = v["range"]
        d["note"] = v["note"]
        d["sources"] = [{"titre": a, "url": b, "type": t} for a, b, t in v["src"]]
        p = path_of(d); os.makedirs(p, exist_ok=True)
        json.dump(d, open(os.path.join(p, "data.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(len(j["D"]), "pays migrés")

def import_lot(path):
    out = subprocess.check_output(["node", os.path.join(ROOT, "scripts", "import_lot.js"), path])
    j = json.loads(out)
    for code, v in j["D"].items():
        if code not in CONT:
            print("continent inconnu :", code); continue
        d = {"code": code, "nom": j["names"][code], "rate": v["rate"]}
        if v.get("range"): d["range"] = v["range"]
        d["note"] = v["note"]
        d["sources"] = [{"titre": a, "url": b, "type": t} for a, b, t in v["src"]]
        p = path_of(d); os.makedirs(p, exist_ok=True)
        json.dump(d, open(os.path.join(p, "data.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(len(j["D"]), "pays importés depuis", path)

def build():
    ds = load()
    for d in ds:
        p = path_of(d)
        open(os.path.join(p, "README.md"), "w", encoding="utf-8").write(readme(d))
    idx = ["# Calculs par pays", "",
           "Un dossier par continent, puis par pays. Chaque pays a un `README.md` (calcul, hypothèses, sources) et un `data.json` (source de vérité).", "",
           "Le site lit directement les `data.json` (via `pays/index.json`) : modifier un `data.json` suffit pour mettre le site à jour. Les README et `pays/index.json` sont régénérés automatiquement par une GitHub Action à chaque push (ou à la main : `python3 scripts/build.py`). Pour ajouter un pays, créer son dossier avec un `data.json`, le reste est automatique.", "",
           "## Format de `data.json`", "",
           "```json", '{ "code": "SE", "nom": "Suède", "rate": 47.5, "note": "…",', '  "sources": [{ "titre": "…", "url": "https://…", "type": "officielle|non officielle" }],',
           '  "calc": { "devise": "SEK", "fx": 11, "fx_source": "Yahoo Finance EURSEK=X",', '    "deductions": [["libellé", 0]],', '    "tranches": [[0, 643000, 32.38], [643000, null, 52.38]],',
           '    "credits": [["libellé", 0]], "majorations": [["libellé", 9]], "hypotheses": ["…"] } }', "```", "",
           "**Taux de change :** cours Yahoo Finance (EURxxx=X) vérifiés le 13 novembre 2026, voir `taux_de_change_EUR_verifie_2026-11-13.csv` à la racine du dépôt.", "",
           "Le bloc `calc` est facultatif : s'il est présent, le README affiche le calcul tranche par tranche et signale tout écart de plus de 0,5 point avec `rate`.", ""]
    for k in CONT_LABEL:
        sel = [d for d in ds if CONT[d["code"]] == k]
        if not sel: continue
        idx += [f"## {CONT_LABEL[k]} ({len(sel)})", "", "| Pays | Taux | Verdict | Calcul détaillé |", "|---|---:|---|---|"]
        for d in sorted(sel, key=lambda d: d["nom"]):
            rel = os.path.relpath(path_of(d), PAYS)
            idx.append(f"| [{d['nom']}]({rel}/README.md) | {fr(d['rate'])} % | {LV[level(d['rate'])].split(' (')[0]} | {'oui' if d.get('calc') else 'non'} |")
        idx.append("")
    open(os.path.join(PAYS, "README.md"), "w", encoding="utf-8").write("\n".join(idx))
    ix = {d["code"]: os.path.relpath(path_of(d), PAYS).replace(os.sep, "/") for d in ds}
    json.dump(ix, open(os.path.join(PAYS, "index.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1, sort_keys=True)
    import shutil, pages
    OUTD = os.path.join(ROOT, pages.OUT); shutil.rmtree(OUTD, ignore_errors=True)
    items = []
    for d in ds:
        sl = slug(d["nom"]); lv = level(d["rate"]); k = CONT[d["code"]]
        os.makedirs(os.path.join(OUTD, sl), exist_ok=True)
        open(os.path.join(OUTD, sl, "index.html"), "w", encoding="utf-8").write(
            pages.country_page(d, sl, CONT_LABEL[k], lv, fr, compute, THRESHOLD, FR_RATE, SALAIRE_EUR))
        rr = f"entre {fr(d['range'][0])} et {fr(d['range'][1])} %" if d.get("range") else f"{fr(d['rate'])} %"
        items.append({"nom": d["nom"], "slug": sl, "cont": k, "rr": rr, "lv": lv})
    open(os.path.join(OUTD, "index.html"), "w", encoding="utf-8").write(pages.index_page(items, CONT_LABEL, fr))
    open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8").write(pages.sitemap(sorted(i["slug"] for i in items)))
    print(len(ds), "pays générés")

if __name__ == "__main__":
    a = sys.argv[1:2]
    if a == ["migrate"]: migrate()
    elif a == ["import"]: import_lot(sys.argv[2]); build()
    else: build()
