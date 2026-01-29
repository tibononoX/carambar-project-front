# Carambar Project - Frontend

Ce projet est le test technique réalisé dans le cadre de la formation en alternance de Concepteur Développeur d'Application (CDA) à la Wild Code School.

## Description

Une application web interactive pour consulter des blagues Carambar. L'application permet de consulter des blagues aléatoires, de naviguer vers une liste complète de blagues, et de visualiser des blagues individuelles.

## Fonctionnalités

- Affichage d'une blague aléatoire sur la page d'accueil
- Navigation vers une page listant toutes les blagues dans un carousel horizontal
- Consultation de blagues individuelles
- Interface responsive avec un design thématique Carambar

## Technologies utilisées

- **Frontend :** React 19, Vite, SCSS, Axios
- **Backend :** Node.js, Express, SQLite3, Sequelize, architecture MVC
- **Routing :** React Router DOM (avec HashRouter pour GitHub Pages)
- **Déploiement :** GitHub Pages (frontend), Render.com (Backend API)

## Installation

1. Clonez le repository :

   ```bash
   git clone https://github.com/tibononox/carambar-project-front.git
   cd carambar-project-front
   ```

2. Installez les dépendances :

   ```bash
   pnpm install
   ```

3. Lancez le serveur de développement :

   ```bash
   pnpm run dev
   ```

4. Pour construire pour la production :
   ```bash
   pnpm run build
   ```

## Utilisation

- Page d'accueil : Affiche une blague aléatoire avec un bouton pour en charger une nouvelle
- Page "Toutes les blagues" : Carousel horizontal des blagues avec navigation
- Blagues individuelles : Accessible en cliquant sur une blague dans la liste

## Liens

- **Site déployé :** [https://tibononox.github.io/carambar-project-front/](https://tibononox.github.io/carambar-project-front/)
- **Repository Backend :** [https://github.com/tibononox/carambar-project-api](https://github.com/tibononox/carambar-project-api)
- **API :** [[https://carambar-project-api-1.onrender.com/api/v1](https://carambar-project-api-1.onrender.com/api/v1)]
- **API Doc (Swagger) :** [[https://carambar-project-api-1.onrender.com/api-docs](https://carambar-project-api-1.onrender.com/api-docs)]

## Scripts disponibles

- `pnpm run dev` : Lance le serveur de développement
- `pnpm run build` : Construit l'application pour la production
- `pnpm run preview` : Prévisualise la version de production
- `pnpm run deploy` : Déploie sur GitHub Pages
- `pnpm run lint` : Vérifie et corrige le code avec ESLint et Prettier

## Auteur

- **tibononox** - [GitHub](https://github.com/tibononox)

## Licence

Ce projet est réalisé dans le cadre d'un test technique et n'est pas destiné à une utilisation commerciale.
