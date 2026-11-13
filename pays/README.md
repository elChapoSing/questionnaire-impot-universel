# Calculs par pays

Un dossier par continent, puis par pays. Chaque pays a un `README.md` (calcul, hypothèses, sources) et un `data.json` (source de vérité).

Le site lit directement les `data.json` (via `pays/index.json`) : modifier un `data.json` suffit pour mettre le site à jour. Les README et `pays/index.json` sont régénérés automatiquement par une GitHub Action à chaque push (ou à la main : `python3 scripts/build.py`). Pour ajouter un pays, créer son dossier avec un `data.json`, le reste est automatique.

## Format de `data.json`

```json
{ "code": "SE", "nom": "Suède", "rate": 47.5, "note": "…",
  "sources": [{ "titre": "…", "url": "https://…", "type": "officielle|non officielle" }],
  "calc": { "devise": "SEK", "fx": 11, "fx_source": "Yahoo Finance EURSEK=X",
    "deductions": [["libellé", 0]],
    "tranches": [[0, 643000, 32.38], [643000, null, 52.38]],
    "credits": [["libellé", 0]], "majorations": [["libellé", 9]], "hypotheses": ["…"] } }
```

**Taux de change :** cours Yahoo Finance (EURxxx=X) vérifiés le 13 novembre 2026, voir `taux_de_change_EUR_verifie_2026-11-13.csv` à la racine du dépôt.

Le bloc `calc` est facultatif : s'il est présent, le README affiche le calcul tranche par tranche et signale tout écart de plus de 0,5 point avec `rate`.

## Europe (52)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Albanie](europe/AL-albanie/README.md) | 22,0 % | Cas limite | oui |
| [Allemagne](europe/DE-allemagne/README.md) | 37,3 % | Pas concerné·e | oui |
| [Andorre](europe/AD-andorre/README.md) | 8,7 % | Concerné·e | oui |
| [Arménie](europe/AM-armenie/README.md) | 20,0 % | Cas limite | oui |
| [Autriche](europe/AT-autriche/README.md) | 43,2 % | Pas concerné·e | oui |
| [Azerbaïdjan](europe/AZ-azerbaidjan/README.md) | 12,6 % | Concerné·e | oui |
| [Belgique](europe/BE-belgique/README.md) | 46,1 % | Pas concerné·e | oui |
| [Biélorussie](europe/BY-bielorussie/README.md) | 21,0 % | Cas limite | oui |
| [Bosnie-Herzégovine](europe/BA-bosnie-herzegovine/README.md) | 10,0 % | Concerné·e | oui |
| [Bulgarie](europe/BG-bulgarie/README.md) | 10,0 % | Concerné·e | oui |
| [Chypre](europe/CY-chypre/README.md) | 30,1 % | Pas concerné·e | oui |
| [Croatie](europe/HR-croatie/README.md) | 26,7 % | Pas concerné·e | oui |
| [Danemark](europe/DK-danemark/README.md) | 46,1 % | Pas concerné·e | oui |
| [Espagne](europe/ES-espagne/README.md) | 41,2 % | Pas concerné·e | oui |
| [Estonie](europe/EE-estonie/README.md) | 22,0 % | Cas limite | oui |
| [Finlande](europe/FI-finlande/README.md) | 41,5 % | Pas concerné·e | oui |
| [Gibraltar](europe/GI-gibraltar/README.md) | 25,0 % | Cas limite | oui |
| [Grèce](europe/GR-grece/README.md) | 40,0 % | Pas concerné·e | oui |
| [Guernesey](europe/GG-guernesey/README.md) | 20,0 % | Cas limite | oui |
| [Géorgie](europe/GE-georgie/README.md) | 20,0 % | Cas limite | oui |
| [Hongrie](europe/HU-hongrie/README.md) | 15,0 % | Concerné·e | oui |
| [Irlande](europe/IE-irlande/README.md) | 34,7 % | Pas concerné·e | oui |
| [Islande](europe/IS-islande/README.md) | 38,2 % | Pas concerné·e | oui |
| [Italie](europe/IT-italie/README.md) | 39,8 % | Pas concerné·e | oui |
| [Jersey](europe/JE-jersey/README.md) | 20,0 % | Cas limite | oui |
| [Lettonie](europe/LV-lettonie/README.md) | 29,5 % | Pas concerné·e | oui |
| [Lituanie](europe/LT-lituanie/README.md) | 26,2 % | Pas concerné·e | oui |
| [Luxembourg](europe/LU-luxembourg/README.md) | 37,8 % | Pas concerné·e | oui |
| [Macédoine du Nord](europe/MK-macedoine-du-nord/README.md) | 10,0 % | Concerné·e | oui |
| [Malte](europe/MT-malte/README.md) | 31,1 % | Pas concerné·e | oui |
| [Moldavie](europe/MD-moldavie/README.md) | 12,0 % | Concerné·e | oui |
| [Monténégro](europe/ME-montenegro/README.md) | 14,4 % | Concerné·e | oui |
| [Norvège](europe/NO-norvege/README.md) | 35,0 % | Pas concerné·e | oui |
| [Pays-Bas](europe/NL-pays-bas/README.md) | 40,8 % | Pas concerné·e | oui |
| [Pologne](europe/PL-pologne/README.md) | 29,7 % | Pas concerné·e | oui |
| [Portugal](europe/PT-portugal/README.md) | 43,3 % | Pas concerné·e | oui |
| [Roumanie](europe/RO-roumanie/README.md) | 10,0 % | Concerné·e | oui |
| [Royaume-Uni](europe/GB-royaume-uni/README.md) | 38,1 % | Pas concerné·e | oui |
| [Russie](europe/RU-russie/README.md) | 17,3 % | Concerné·e | oui |
| [Saint-Marin](europe/SM-saint-marin/README.md) | 29,6 % | Pas concerné·e | oui |
| [Serbie](europe/RS-serbie/README.md) | 18,2 % | Cas limite | oui |
| [Slovaquie](europe/SK-slovaquie/README.md) | 31,1 % | Pas concerné·e | oui |
| [Slovénie](europe/SI-slovenie/README.md) | 43,6 % | Pas concerné·e | oui |
| [Suisse](europe/CH-suisse/README.md) | 25,0 % | Cas limite | oui |
| [Suède](europe/SE-suede/README.md) | 47,5 % | Pas concerné·e | oui |
| [Svalbard et Jan Mayen](europe/SJ-svalbard-et-jan-mayen/README.md) | 13,4 % | Concerné·e | oui |
| [Tchéquie](europe/CZ-tchequie/README.md) | 20,6 % | Cas limite | oui |
| [Ukraine](europe/UA-ukraine/README.md) | 23,0 % | Cas limite | oui |
| [État de la Cité du Vatican](europe/VA-etat-de-la-cite-du-vatican/README.md) | 0,0 % | Concerné·e | oui |
| [Île de Man](europe/IM-ile-de-man/README.md) | 20,7 % | Cas limite | oui |
| [Îles Féroé](europe/FO-iles-feroe/README.md) | 44,5 % | Pas concerné·e | oui |
| [Îles Åland](europe/AX-iles-aland/README.md) | 39,0 % | Pas concerné·e | oui |

## Afrique (47)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Afrique du Sud](afrique/ZA-afrique-du-sud/README.md) | 40,6 % | Pas concerné·e | oui |
| [Angola](afrique/AO-angola/README.md) | 24,3 % | Cas limite | oui |
| [Botswana](afrique/BW-botswana/README.md) | 24,3 % | Cas limite | oui |
| [Burkina Faso](afrique/BF-burkina-faso/README.md) | 19,8 % | Cas limite | oui |
| [Burundi](afrique/BI-burundi/README.md) | 29,9 % | Pas concerné·e | oui |
| [Bénin](afrique/BJ-benin/README.md) | 29,4 % | Pas concerné·e | oui |
| [Cameroun](afrique/CM-cameroun/README.md) | 26,3 % | Pas concerné·e | oui |
| [Cap-Vert](afrique/CV-cap-vert/README.md) | 27,0 % | Pas concerné·e | oui |
| [Comores](afrique/KM-comores/README.md) | 20,5 % | Cas limite | oui |
| [Congo-Kinshasa](afrique/CD-congo-kinshasa/README.md) | 30,0 % | Pas concerné·e | oui |
| [Côte d’Ivoire](afrique/CI-cote-divoire/README.md) | 28,5 % | Pas concerné·e | oui |
| [Djibouti](afrique/DJ-djibouti/README.md) | 37,3 % | Pas concerné·e | oui |
| [Eswatini](afrique/SZ-eswatini/README.md) | 32,6 % | Pas concerné·e | oui |
| [Gabon](afrique/GA-gabon/README.md) | 26,9 % | Pas concerné·e | oui |
| [Gambie](afrique/GM-gambie/README.md) | 24,9 % | Cas limite | oui |
| [Ghana](afrique/GH-ghana/README.md) | 33,5 % | Pas concerné·e | oui |
| [Guinée](afrique/GN-guinee/README.md) | 34,4 % | Pas concerné·e | oui |
| [Guinée équatoriale](afrique/GQ-guinee-equatoriale/README.md) | 24,0 % | Cas limite | oui |
| [Kenya](afrique/KE-kenya/README.md) | 33,6 % | Pas concerné·e | oui |
| [Lesotho](afrique/LS-lesotho/README.md) | 29,8 % | Pas concerné·e | oui |
| [Liberia](afrique/LR-liberia/README.md) | 24,8 % | Cas limite | oui |
| [Libye](afrique/LY-libye/README.md) | 10,0 % | Concerné·e | oui |
| [Madagascar](afrique/MG-madagascar/README.md) | 19,9 % | Cas limite | oui |
| [Malawi](afrique/MW-malawi/README.md) | 38,3 % | Pas concerné·e | oui |
| [Mali](afrique/ML-mali/README.md) | 39,6 % | Pas concerné·e | oui |
| [Maroc](afrique/MA-maroc/README.md) | 35,9 % | Pas concerné·e | oui |
| [Maurice](afrique/MU-maurice/README.md) | 19,6 % | Cas limite | oui |
| [Mauritanie](afrique/MR-mauritanie/README.md) | 39,6 % | Pas concerné·e | oui |
| [Mozambique](afrique/MZ-mozambique/README.md) | 31,2 % | Pas concerné·e | oui |
| [Namibie](afrique/NA-namibie/README.md) | 33,8 % | Pas concerné·e | oui |
| [Niger](afrique/NE-niger/README.md) | 34,6 % | Pas concerné·e | oui |
| [Nigeria](afrique/NG-nigeria/README.md) | 24,4 % | Cas limite | oui |
| [Ouganda](afrique/UG-ouganda/README.md) | 38,8 % | Pas concerné·e | oui |
| [Rwanda](afrique/RW-rwanda/README.md) | 29,9 % | Pas concerné·e | oui |
| [République centrafricaine](afrique/CF-republique-centrafricaine/README.md) | 37,4 % | Pas concerné·e | oui |
| [Sao Tomé-et-Principe](afrique/ST-sao-tome-et-principe/README.md) | 24,6 % | Cas limite | oui |
| [Seychelles](afrique/SC-seychelles/README.md) | 27,0 % | Pas concerné·e | oui |
| [Sierra Leone](afrique/SL-sierra-leone/README.md) | 29,9 % | Pas concerné·e | oui |
| [Sénégal](afrique/SN-senegal/README.md) | 41,4 % | Pas concerné·e | oui |
| [Tanzanie](afrique/TZ-tanzanie/README.md) | 29,7 % | Pas concerné·e | oui |
| [Togo](afrique/TG-togo/README.md) | 32,9 % | Pas concerné·e | oui |
| [Tunisie](afrique/TN-tunisie/README.md) | 39,1 % | Pas concerné·e | oui |
| [Zambie](afrique/ZM-zambie/README.md) | 37,0 % | Pas concerné·e | oui |
| [Zimbabwe](afrique/ZW-zimbabwe/README.md) | 39,0 % | Pas concerné·e | oui |
| [Égypte](afrique/EG-egypte/README.md) | 27,3 % | Pas concerné·e | oui |
| [Érythrée](afrique/ER-erythree/README.md) | 27,7 % | Pas concerné·e | oui |
| [Éthiopie](afrique/ET-ethiopie/README.md) | 34,9 % | Pas concerné·e | oui |

## Asie et Moyen-Orient (44)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Arabie saoudite](asie/SA-arabie-saoudite/README.md) | 0,0 % | Concerné·e | oui |
| [Bahreïn](asie/BH-bahrein/README.md) | 0,0 % | Concerné·e | oui |
| [Bangladesh](asie/BD-bangladesh/README.md) | 28,9 % | Pas concerné·e | oui |
| [Bhoutan](asie/BT-bhoutan/README.md) | 28,4 % | Pas concerné·e | oui |
| [Brunei](asie/BN-brunei/README.md) | 0,0 % | Concerné·e | oui |
| [Cambodge](asie/KH-cambodge/README.md) | 18,7 % | Cas limite | oui |
| [Chine](asie/CN-chine/README.md) | 34,4 % | Pas concerné·e | oui |
| [Corée du Sud](asie/KR-coree-du-sud/README.md) | 36,2 % | Pas concerné·e | oui |
| [Hong Kong (Chine)](asie/HK-hong-kong-chine/README.md) | 15,0 % | Concerné·e | oui |
| [Inde](asie/IN-inde/README.md) | 36,9 % | Pas concerné·e | oui |
| [Indonésie](asie/ID-indonesie/README.md) | 28,9 % | Pas concerné·e | oui |
| [Irak](asie/IQ-irak/README.md) | 15,0 % | Concerné·e | oui |
| [Iran](asie/IR-iran/README.md) | 34,9 % | Pas concerné·e | oui |
| [Israël](asie/IL-israel/README.md) | 33,9 % | Pas concerné·e | oui |
| [Japon](asie/JP-japon/README.md) | 34,5 % | Pas concerné·e | oui |
| [Jordanie](asie/JO-jordanie/README.md) | 23,6 % | Cas limite | oui |
| [Kazakhstan](asie/KZ-kazakhstan/README.md) | 13,4 % | Concerné·e | oui |
| [Kirghizstan](asie/KG-kirghizstan/README.md) | 10,0 % | Concerné·e | oui |
| [Koweït](asie/KW-koweit/README.md) | 0,0 % | Concerné·e | oui |
| [Laos](asie/LA-laos/README.md) | 23,9 % | Cas limite | oui |
| [Liban](asie/LB-liban/README.md) | 24,8 % | Cas limite | oui |
| [Macao (Chine)](asie/MO-macao-chine/README.md) | 11,0 % | Concerné·e | oui |
| [Malaisie](asie/MY-malaisie/README.md) | 25,0 % | Cas limite | oui |
| [Maldives](asie/MV-maldives/README.md) | 9,9 % | Concerné·e | oui |
| [Mongolie](asie/MN-mongolie/README.md) | 18,5 % | Cas limite | oui |
| [Myanmar (Birmanie)](asie/MM-myanmar-birmanie/README.md) | 24,0 % | Cas limite | oui |
| [Népal](asie/NP-nepal/README.md) | 27,8 % | Pas concerné·e | oui |
| [Oman](asie/OM-oman/README.md) | 0,0 % | Concerné·e | oui |
| [Ouzbékistan](asie/UZ-ouzbekistan/README.md) | 12,0 % | Concerné·e | oui |
| [Pakistan](asie/PK-pakistan/README.md) | 33,6 % | Pas concerné·e | oui |
| [Philippines](asie/PH-philippines/README.md) | 31,5 % | Pas concerné·e | oui |
| [Qatar](asie/QA-qatar/README.md) | 0,0 % | Concerné·e | oui |
| [Singapour](asie/SG-singapour/README.md) | 14,4 % | Concerné·e | oui |
| [Sri Lanka](asie/LK-sri-lanka/README.md) | 34,7 % | Pas concerné·e | oui |
| [Tadjikistan](asie/TJ-tadjikistan/README.md) | 13,0 % | Concerné·e | oui |
| [Taïwan](asie/TW-taiwan/README.md) | 29,7 % | Pas concerné·e | oui |
| [Territoires palestiniens](asie/PS-territoires-palestiniens/README.md) | 13,7 % | Concerné·e | oui |
| [Thaïlande](asie/TH-thailande/README.md) | 29,6 % | Pas concerné·e | oui |
| [Timor oriental](asie/TL-timor-oriental/README.md) | 9,8 % | Concerné·e | oui |
| [Turkménistan](asie/TM-turkmenistan/README.md) | 10,0 % | Concerné·e | oui |
| [Turquie](asie/TR-turquie/README.md) | 36,9 % | Pas concerné·e | oui |
| [Viêt Nam](asie/VN-viet-nam/README.md) | 32,5 % | Pas concerné·e | oui |
| [Yémen](asie/YE-yemen/README.md) | 15,0 % | Concerné·e | oui |
| [Émirats arabes unis](asie/AE-emirats-arabes-unis/README.md) | 0,0 % | Concerné·e | oui |

## Amérique du Nord, centrale et Caraïbes (33)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Anguilla](amerique-du-nord/AI-anguilla/README.md) | 0,0 % | Concerné·e | oui |
| [Antigua-et-Barbuda](amerique-du-nord/AG-antigua-et-barbuda/README.md) | 0,0 % | Concerné·e | oui |
| [Aruba](amerique-du-nord/AW-aruba/README.md) | 44,9 % | Pas concerné·e | oui |
| [Bahamas](amerique-du-nord/BS-bahamas/README.md) | 0,0 % | Concerné·e | oui |
| [Barbade](amerique-du-nord/BB-barbade/README.md) | 24,7 % | Cas limite | oui |
| [Belize](amerique-du-nord/BZ-belize/README.md) | 25,0 % | Cas limite | oui |
| [Bermudes](amerique-du-nord/BM-bermudes/README.md) | 0,0 % | Concerné·e | oui |
| [Canada](amerique-du-nord/CA-canada/README.md) | 36,2 % | Pas concerné·e | oui |
| [Costa Rica](amerique-du-nord/CR-costa-rica/README.md) | 19,9 % | Cas limite | oui |
| [Curaçao](amerique-du-nord/CW-curacao/README.md) | 39,3 % | Pas concerné·e | oui |
| [Dominique](amerique-du-nord/DM-dominique/README.md) | 32,6 % | Pas concerné·e | oui |
| [Grenade](amerique-du-nord/GD-grenade/README.md) | 27,4 % | Pas concerné·e | oui |
| [Groenland](amerique-du-nord/GL-groenland/README.md) | 43,0 % | Pas concerné·e | oui |
| [Guatemala](amerique-du-nord/GT-guatemala/README.md) | 6,7 % | Concerné·e | oui |
| [Haïti](amerique-du-nord/HT-haiti/README.md) | 29,5 % | Pas concerné·e | oui |
| [Honduras](amerique-du-nord/HN-honduras/README.md) | 23,7 % | Cas limite | oui |
| [Jamaïque](amerique-du-nord/JM-jamaique/README.md) | 29,3 % | Pas concerné·e | oui |
| [Mexique](amerique-du-nord/MX-mexique/README.md) | 31,6 % | Pas concerné·e | oui |
| [Montserrat](amerique-du-nord/MS-montserrat/README.md) | 36,7 % | Pas concerné·e | oui |
| [Nicaragua](amerique-du-nord/NI-nicaragua/README.md) | 29,3 % | Pas concerné·e | oui |
| [Panama](amerique-du-nord/PA-panama/README.md) | 22,4 % | Cas limite | oui |
| [Pays-Bas caribéens](amerique-du-nord/BQ-pays-bas-caribeens/README.md) | 36,6 % | Pas concerné·e | oui |
| [Porto Rico](amerique-du-nord/PR-porto-rico/README.md) | 28,5 % | Pas concerné·e | oui |
| [République dominicaine](amerique-du-nord/DO-republique-dominicaine/README.md) | 24,1 % | Cas limite | oui |
| [Saint-Christophe-et-Niévès](amerique-du-nord/KN-saint-christophe-et-nieves/README.md) | 0,0 % | Concerné·e | oui |
| [Saint-Martin (partie néerlandaise)](amerique-du-nord/SX-saint-martin-partie-neerlandaise/README.md) | 41,0 % | Pas concerné·e | oui |
| [Sainte-Lucie](amerique-du-nord/LC-sainte-lucie/README.md) | 29,5 % | Pas concerné·e | oui |
| [Salvador](amerique-du-nord/SV-salvador/README.md) | 28,5 % | Pas concerné·e | oui |
| [Trinité-et-Tobago](amerique-du-nord/TT-trinite-et-tobago/README.md) | 27,2 % | Pas concerné·e | oui |
| [États-Unis](amerique-du-nord/US-etats-unis/README.md) | 23,2 % | Cas limite | oui |
| [Îles Caïmans](amerique-du-nord/KY-iles-caimans/README.md) | 0,0 % | Concerné·e | oui |
| [Îles Turques-et-Caïques](amerique-du-nord/TC-iles-turques-et-caiques/README.md) | 0,0 % | Concerné·e | oui |
| [Îles Vierges britanniques](amerique-du-nord/VG-iles-vierges-britanniques/README.md) | 0,0 % | Concerné·e | oui |

## Amérique du Sud (13)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Argentine](amerique-du-sud/AR-argentine/README.md) | 33,9 % | Pas concerné·e | oui |
| [Bolivie](amerique-du-sud/BO-bolivie/README.md) | 13,0 % | Concerné·e | oui |
| [Brésil](amerique-du-sud/BR-bresil/README.md) | 26,7 % | Pas concerné·e | oui |
| [Chili](amerique-du-sud/CL-chili/README.md) | 27,7 % | Pas concerné·e | oui |
| [Colombie](amerique-du-sud/CO-colombie/README.md) | 30,5 % | Pas concerné·e | oui |
| [Guyana](amerique-du-sud/GY-guyana/README.md) | 34,4 % | Pas concerné·e | oui |
| [Paraguay](amerique-du-sud/PY-paraguay/README.md) | 9,9 % | Concerné·e | oui |
| [Pérou](amerique-du-sud/PE-perou/README.md) | 25,8 % | Cas limite | oui |
| [Suriname](amerique-du-sud/SR-suriname/README.md) | 37,4 % | Pas concerné·e | oui |
| [Uruguay](amerique-du-sud/UY-uruguay/README.md) | 26,1 % | Pas concerné·e | oui |
| [Venezuela](amerique-du-sud/VE-venezuela/README.md) | 34,1 % | Pas concerné·e | oui |
| [Équateur](amerique-du-sud/EC-equateur/README.md) | 30,7 % | Pas concerné·e | oui |
| [Îles Malouines](amerique-du-sud/FK-iles-malouines/README.md) | 25,7 % | Cas limite | oui |

## Océanie (9)

| Pays | Taux | Verdict | Calcul détaillé |
|---|---:|---|---|
| [Australie](oceanie/AU-australie/README.md) | 38,3 % | Pas concerné·e | oui |
| [Fidji](oceanie/FJ-fidji/README.md) | 27,8 % | Pas concerné·e | oui |
| [Nouvelle-Zélande](oceanie/NZ-nouvelle-zelande/README.md) | 34,7 % | Pas concerné·e | oui |
| [Papouasie-Nouvelle-Guinée](oceanie/PG-papouasie-nouvelle-guinee/README.md) | 40,6 % | Pas concerné·e | oui |
| [Samoa](oceanie/WS-samoa/README.md) | 26,3 % | Pas concerné·e | oui |
| [Vanuatu](oceanie/VU-vanuatu/README.md) | 0,0 % | Concerné·e | oui |
| [Îles Cook](oceanie/CK-iles-cook/README.md) | 28,3 % | Pas concerné·e | oui |
| [Îles Marshall](oceanie/MH-iles-marshall/README.md) | 11,9 % | Concerné·e | oui |
| [Îles Salomon](oceanie/SB-iles-salomon/README.md) | 39,3 % | Pas concerné·e | oui |
