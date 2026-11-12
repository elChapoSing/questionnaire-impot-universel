# Viêt Nam (VN)

**Taux effectif retenu : 32,5 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : VND. Cours utilisé : 1 EUR = 28 485 VND (Yahoo Finance EURVND=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 28 485 = 6 844 945 500 VND.
- Base imposable : 6 844 945 500 VND.

| De (VND) | À (VND) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 120 000 000 | 5,00 % | 120 000 000 | 6 000 000 |
| 120 000 000 | 360 000 000 | 10,00 % | 240 000 000 | 24 000 000 |
| 360 000 000 | 720 000 000 | 20,00 % | 360 000 000 | 72 000 000 |
| 720 000 000 | 1 200 000 000 | 30,00 % | 480 000 000 | 144 000 000 |
| 1 200 000 000 | et plus | 35,00 % | 5 644 945 500 | 1 975 730 925 |

- **Impôt total : 2 221 730 925 VND, soit 32,5 % du salaire brut.**
- Hypothèse : Barème progressif annuel à 5 tranches (5, 10, 20, 30, 35 %) de la loi n° 109/2025/QH15, applicable aux revenus salariaux dès la période fiscale 2026 (120, 360, 720, 1 200 millions de VND par an).
- Hypothèse : Conformément à la méthodologie du site, aucun abattement personnel : la déduction personnelle de 186 millions de VND par an (15,5 millions par mois) n'est pas appliquée. Avec elle, le taux serait d'environ 31,7 %.
- Hypothèse : Cotisations sociales exclues.

## Note

Cours Yahoo EURVND=X du 13/11/2026 : 1 EUR = 28485.0 VND (hypothèse initiale : 28580). Taux recalculé : 32,5 % (avant : 32,5 %). Les chiffres de change et de taux cités plus bas datent de l'hypothèse initiale. Barème 2026 de la loi n° 109/2025/QH15 (5 tranches de 5 % à 35 %, 35 % au-delà de 1,2 milliard de VND par an), sans abattement personnel, avec 1 EUR = 28 580 VND : environ 32,5 % (31,7 % si l'on déduit l'abattement personnel de 186 millions de VND).

## Sources

- [Loi n° 109/2025/QH15 (texte relayé par un site juridique)](https://thuvienphapluat.vn/van-ban/EN/Thue-Phi-Le-Phi/Law-109-2025-QH15-personal-income-tax/687756/tieng-anh.aspx) (non officielle)
- [Forvis Mazars Vietnam - Key updates under the new PIT Law No. 109/2025/QH15](https://www.forvismazars.com/vn/en/insights/vietnam-updates/newsletters-alerts/vietnam-tax-legal-updates/law-on-pit-no.-109-2025-qh15) (non officielle)
- [fxfeed.io - EUR/VND](https://fxfeed.io/currencies/pairs/eur-vnd) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
