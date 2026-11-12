#!/usr/bin/env python3
"""Applique les cours vérifiés (CSV rempli) : met à jour calc.fx et décale rate de l'effet du change."""
import csv, glob, json, os, sys
sys.path.insert(0, os.path.dirname(__file__))
import build
src = sys.argv[1]
DATE = sys.argv[2] if len(sys.argv) > 2 else "13/11/2026"
fx = {}
for r in csv.DictReader(open(src, encoding="utf-8")):
    v = r["cours_verifie_a_remplir"].strip()
    try: fx[r["code"]] = float(v)
    except ValueError: fx[r["code"]] = None
changes = []; skipped = []
for p in glob.glob(os.path.join(build.PAYS, "*", "*", "data.json")):
    d = json.load(open(p, encoding="utf-8"))
    c = d.get("calc")
    if not c or c["devise"] == "EUR" or d["code"] not in fx: continue
    new = fx[d["code"]]
    if new is None:
        skipped.append((d["code"], d["nom"], d["rate"])); continue
    old_pct = build.compute(c)[4]; old_fx = c["fx"]; old_rate = d["rate"]; old_lvl = build.level(old_rate)
    c["fx"] = new
    c["fx_source"] = f"Yahoo Finance EUR{c['devise']}=X, cours vérifié fourni le {DATE}"
    new_pct = build.compute(c)[4]
    delta = new_pct - old_pct
    d["rate"] = round(old_rate + delta, 1)
    if d.get("range"):
        d["range"] = [round(x + delta, 1) for x in d["range"]]
    d["note"] = (f"Cours Yahoo EUR{c['devise']}=X du {DATE} : 1 EUR = {new} {c['devise']} (hypothèse initiale : {old_fx}). "
                 f"Taux recalculé : {str(d['rate']).replace('.', ',')} % (avant : {str(old_rate).replace('.', ',')} %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. ") + d["note"] if abs(delta) >= 0.05 or new != old_fx else d["note"]
    json.dump(d, open(p, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    changes.append((d["code"], d["nom"], old_rate, d["rate"], old_lvl, build.level(d["rate"])))
json.dump({"changes": changes, "skipped": skipped}, open("/tmp/fx_report.json", "w"), ensure_ascii=False)
print(len(changes), "mis à jour,", len(skipped), "sans cours")
