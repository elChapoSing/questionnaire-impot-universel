# Allemagne (DE)

**Taux effectif retenu : 37,3 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : EUR. Cours supposé : 1 EUR = 1 EUR (pays en euro, change 1).
- Salaire converti : 240 300 € × 1 = 240 300 EUR.
- Base imposable : 240 300 EUR.

| De (EUR) | À (EUR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 12 348 | 0,00 % | 12 348 | 0 |
| 12 348 | 17 799 | 18,98 % | 5 451 | 1 035 |
| 17 799 | 69 879 | 32,98 % | 52 080 | 17 179 |
| 69 879 | 277 825 | 42,00 % | 170 421 | 71 577 |
| 277 825 | et plus | 45,00 % | 0 | 0 |

- **Impôt total : 89 790 EUR, soit 37,4 % du salaire brut.**
- Hypothèse : Tarif 2026 (§ 32a EStG), base imposable de 240 300 € sans déduction : de 69 879 € à 277 825 €, impôt = 0,42 x − 11 135,63, reproduit ici par les tranches cumulées jusqu'à 69 879 € (impôt d'environ 18 214 €) puis 42 %.
- Hypothèse : Les deux zones progressives (14 à 42 %) sont linéarisées par leur taux moyen, exact à leur borne haute.
- Hypothèse : Solidaritätszuschlag de 5,5 % exclu (avec lui : environ 39,4 %), impôt d'Église et cotisations sociales exclus.

## Note

Tarif 2026 (§ 32a EStG) : 42 % de 69 879 € à 277 825 € de revenu imposable, 45 % au-delà. À 240 300 € sans déductions, l'impôt sur le revenu représente environ 37,3 % ; avec le Solidaritätszuschlag de 5,5 %, environ 39,4 %. Impôt d'Église et cotisations sociales exclus. Le calcul part du revenu imposable de 240 300 € (calcul établi à partir de l'exemple chiffré de Taxmaro pour 300 000 €).

## Sources

- [Lexware, tarif et Soli 2026](https://www.lexware.de/wissen/unternehmerlexikon/spitzensteuersatz/) (non officielle)
- [VLH, Spitzensteuersatz 2026](https://www.vlh.de/wissen-service/steuer-nachrichten/spitzensteuersatz-das-steckt-dahinter.html) (non officielle)
- [Taxmaro, tarif 2026 et exemple chiffré](https://www.taxmaro.com/post/spitzensteuersatz-2026-grenze-tarif) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
