# Indonésie (ID)

**Taux effectif retenu : 28,9 %** (seuil de l'amendement : 21,14 %, soit 60 % du taux français de 35,23 %).
**Verdict du questionnaire : Nettement au-dessus du seuil (condition non remplie).**

## Cas de référence

Personne seule, sans enfant, résidente fiscale du pays, salaire annuel brut de 240 300 € (5 × le plafond de la Sécurité sociale 2026). On ne compte que l'impôt national sur le revenu (et l'impôt local sur le revenu quand il existe). Sont exclus : cotisations sociales, TVA, impôts sur le patrimoine et sur le capital. Pas d'abattements personnels sauf mention contraire. Méthodologie complète : page « Méthodologie » du site.

## Calcul

- Devise : IDR. Cours supposé : 1 EUR = 19 500 IDR (la note cite le cours BCE du 27 juillet 2026 sans le chiffrer ; valeur reconstituée, à remplacer par EURIDR=X).
- Salaire converti : 240 300 € × 19 500 = 4 685 850 000 IDR.
- Base imposable : 4 685 850 000 IDR.

| De (IDR) | À (IDR) | Taux | Part imposée | Impôt |
|---:|---:|---:|---:|---:|
| 0 | 60 000 000 | 5,00 % | 60 000 000 | 3 000 000 |
| 60 000 000 | 250 000 000 | 15,00 % | 190 000 000 | 28 500 000 |
| 250 000 000 | 500 000 000 | 25,00 % | 250 000 000 | 62 500 000 |
| 500 000 000 | 5 000 000 000 | 30,00 % | 4 185 850 000 | 1 255 755 000 |
| 5 000 000 000 | et plus | 35,00 % | 0 | 0 |

- **Impôt total : 1 349 755 000 IDR, soit 28,8 % du salaire brut.**
- Hypothèse : Barème de l'article 17 de la loi sur l'impôt sur le revenu (5 à 35 %).
- Hypothèse : Revenu non imposable (PTKP) et frais professionnels exclus ; la note indique 28,7 à 29,6 % si le change varie de 15 %.

## Note

Barème de 5 à 35 % (35 % au-delà de 5 milliards de roupies). Taux de change BCE du 27 juillet 2026 ; résultat entre 28,7 et 29,6 % si le change varie de 15 %.

## Sources

- [ASEAN Briefing, barème de l'impôt sur le revenu](https://www.aseanbriefing.com/doing-business-guide/indonesia/taxation-and-accounting/individual-income-tax) (non officielle)
- [JETRO (agence du gouvernement japonais), barème indonésien](https://www.Jetro.go.jp/ext_images/jfile/country/idn/invest_04/pdfs/idn9C010_toushishotokuzei.pdf) (non officielle)

## Corriger ou vérifier

Modifier `data.json` dans ce dossier (taux, note, sources, bloc `calc`), puis lancer `python3 scripts/build.py` : cela régénère ce README et le site. Toute correction doit citer une source.
