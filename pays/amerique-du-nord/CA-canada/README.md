# Canada (CA)

**Taux effectif retenu : 36,2 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : CAD. Cours utilisé : 1 EUR = 1,5777 CAD (Yahoo Finance EURCAD=X, cours vérifié fourni le 13/11/2026).
- Salaire converti : 240 300 € × 1,5777 = 379 113 CAD.
- Base imposable : 379 113 CAD.

| De (CAD) | À (CAD) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 53 891 | 19,05 % | 53 891 | 10 266 |
| 53 891 | 58 523 | 23,15 % | 4 632 | 1 072 |
| 58 523 | 107 785 | 29,65 % | 49 262 | 14 606 |
| 107 785 | 117 045 | 31,66 % | 9 260 | 2 932 |
| 117 045 | 150 000 | 37,16 % | 32 955 | 12 246 |
| 150 000 | 181 440 | 38,16 % | 31 440 | 11 998 |
| 181 440 | 220 000 | 41,16 % | 38 560 | 15 871 |
| 220 000 | 258 482 | 42,16 % | 38 482 | 16 224 |
| 258 482 | et plus | 46,16 % | 120 631 | 55 683 |

- Crédit : Crédit fédéral pour montant personnel de base : 14 829 CAD (minimum, revenu supérieur à 258 482) × 14 % : − 2 076 CAD.
- Crédit : Crédit ontarien pour montant personnel de base : 12 989 CAD × 5,05 % : − 656 CAD.
- **Impôt total : 138 167 CAD, soit 36,4 % du salaire brut.**
- Hypothèse : Taux cumulés fédéral + Ontario. Fédéral 2026 : 14 / 20,5 / 26 / 29 / 33 % (seuils 58 523, 117 045, 181 440, 258 482). Ontario 2026 : 5,05 / 9,15 / 11,16 / 12,16 / 13,16 % (seuils 53 891, 107 785, 150 000, 220 000).
- Hypothèse : Surtaxe ontarienne (20 % puis 36 % de l'impôt provincial au-delà de 5 818 et 7 446 CAD) non incluse, comme dans la note ; l'inclure ajouterait environ 5 points.
- Hypothèse : Cotisations RPC et AE exclues. Autres provinces : de 8 % (Alberta) à 25,75 % (Québec), voir la note.

## Note

Impôt fédéral : 14 % à 33 % (barème 2026), soit 25,4 % à ce revenu. Avec l'Ontario (5,05 % à 13,16 %, sans la surtaxe) : environ 36 %. Les autres provinces vont de 8 % (Alberta, première tranche) à 25,75 % (Québec, tranche haute). Taux marginal maximal combiné : de 44,5 % à 58,75 % selon la province.

## Sources

- [Agence du revenu du Canada, taux d'imposition de l'année 2026](https://www.canada.ca/en/revenue-agency/services/tax/individuals/tax-rates-brackets/current-year.html) (officielle)
- [KPMG Canada, taux et tranches fédéraux et provinciaux 2026 (au 30 juin 2026)](https://assets.kpmg.com/content/dam/kpmgsites/ca/pdf/services/tax/personal-tables/ca-federal-and-provincial-territorial-income-tax-rates-and-brackets-for-2026.pdf.coredownload.inline.pdf) (non officielle)
- [iFinanceCanada, barèmes de l'Ontario 2026](https://ifinancecanada.com/2026-canada-tax-brackets-what-are-the-federal-and-provincial-income-tax-rates-this-year/) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
