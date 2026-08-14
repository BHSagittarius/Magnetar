# Grain de Ciel

Site portfolio (HTML/CSS/JS pur, sans framework) pour présenter des photos astro et de jour.

## Mettre en ligne avec GitHub Pages

1. Crée un dépôt GitHub (ex: `grain-de-ciel`).
2. Mets tous ces fichiers à la racine du dépôt (ou dans `/docs`).
3. Onglet **Settings → Pages** → Source : `main` branch, dossier `/root`.
4. Le site sera visible sur `https://<ton-pseudo>.github.io/grain-de-ciel/`.

## Ajouter tes photos

- Dépose tes fichiers dans `images/astro/` ou `images/jour/`.
- Dans `astro.html` / `jour.html`, remplace chaque `.card-img` par :
  ```html
  <img src="images/astro/nom-du-fichier.jpg" alt="Description de la photo">
  ```
- Mets à jour les infos EXIF (ISO, focale, pose) dans la balise `.exif`.

## Structure

```
grain-de-ciel/
├── index.html      accueil
├── astro.html       galerie astro
├── jour.html         galerie jour
├── materiel.html    setup
├── apropos.html      à propos
├── css/style.css
├── js/main.js         menu + fond étoilé animé
└── images/
```
