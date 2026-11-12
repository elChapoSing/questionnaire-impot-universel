# Questionnaire « Suis-je concerné·e par l'impôt universel ? »

Page web (`index.html`, qui lit les données pays dans `pays/`) : questionnaire d'une question par écran, qui indique si une personne remplirait les cinq conditions du dispositif de l'amendement n° I-2564 au projet de loi de finances pour 2027 (texte effectif, sans l'exposé sommaire).

## Modifier

- **Textes et questions** : le tableau `STEPS` dans `index.html` (libellé, aide, options, raison affichée en cas de « non »).
- **Logique** : la fonction `evaluate(answers)`, entre les marqueurs `LOGIC-START` et `LOGIC-END`. Un « non » met fin au questionnaire ; un « Je ne sais pas » à la dernière question donne « À vérifier ».
- **Données pays** : un dossier par pays, `pays/<continent>/<CODE>-<nom>/`, avec un `data.json` (taux, note, sources, bloc `calc` du calcul) et un `README.md` généré. Le site charge ces `data.json` à la demande (`fetch`, via `pays/index.json`) : modifier un `data.json` suffit. Une GitHub Action régénère les README et l'index à chaque push (`python3 scripts/build.py` pour le faire en local). Détails et format : `pays/README.md`. Niveaux : bornes `LEVEL_LOW` et `LEVEL_HIGH` dans `index.html`.
- **Seuil de revenu** : 5 × plafond annuel de la Sécurité sociale (48 060 € en 2026, soit 240 300 €). À mettre à jour chaque année (question 2 et récapitulatif).
- **Couleurs et polices** : les variables CSS en haut de la feuille de style (thèmes clair et sombre).

## Utiliser

La page doit être servie en HTTP (GitHub Pages, ou en local `python3 -m http.server` puis http://localhost:8000) : ouverte en double-clic (`file://`), le navigateur bloque la lecture des données pays et le résultat reste indéterminé. Seules les polices Google Fonts sont chargées en ligne.

Mise en ligne : GitHub Pages (Settings > Pages > branche `main`, dossier racine).

## Sources

- Texte de l'amendement n° I-2564 : https://www.assemblee-nationale.fr/dyn/17/amendements/3210A/AN/2564
- Plafond annuel de la Sécurité sociale 2026 (Urssaf) : https://www.urssaf.fr/accueil/outils-documentation/taux-baremes/plafonds-securite-sociale.html
- Programme *L'Avenir en commun* : https://melenchon2027.fr/programme/livre/


## Données pays et méthodologie

`rate` est le taux effectif d'impôt sur le revenu (en %) d'un célibataire à 240 300 €. Niveaux : <= 18 % « sûrement en dessous » (condition remplie), 18 à 26 % ou pays absent « discutable », > 26 % « sûrement au-dessus » (condition non remplie). La page `#methodologie` est générée à partir des `data.json`.
