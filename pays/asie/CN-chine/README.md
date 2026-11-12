# Chine (CN)

**Taux effectif retenu : 35,2 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : CNY. Cours supposé : 1 EUR = 8 CNY (aucun cours dans la note ; valeur raisonnable retenue, à remplacer par le cours Yahoo EURCNY=X).
- Salaire converti : 240 300 € × 8 = 1 922 400 CNY.
- Base imposable : 1 922 400 CNY.

| De (CNY) | À (CNY) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 36 000 | 3,00 % | 36 000 | 1 080 |
| 36 000 | 144 000 | 10,00 % | 108 000 | 10 800 |
| 144 000 | 300 000 | 20,00 % | 156 000 | 31 200 |
| 300 000 | 420 000 | 25,00 % | 120 000 | 30 000 |
| 420 000 | 660 000 | 30,00 % | 240 000 | 72 000 |
| 660 000 | 960 000 | 35,00 % | 300 000 | 105 000 |
| 960 000 | et plus | 45,00 % | 962 400 | 433 080 |

- **Impôt total : 683 160 CNY, soit 35,5 % du salaire brut.**
- Hypothèse : Barème des revenus globaux (salaires, revenus du travail).
- Hypothèse : Déduction forfaitaire annuelle de 60 000 CNY et déductions spéciales exclues ; avec la déduction forfaitaire, le taux serait d'environ 34,1 %.

## Note

Barème des revenus globaux, tranche supérieure à 45 %.

## Sources

- [Loi sur l'impôt sur le revenu (administration fiscale)](https://www.chinatax.gov.cn/n810219/n810744/n3752930/n3752974/c3970366/content.html) (officielle)
- [Barème (administration fiscale de Shanghai)](https://shanghai.chinatax.gov.cn/zcfw/zcfgk/grsds/202402/P020240202362406243753.pdf) (officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
