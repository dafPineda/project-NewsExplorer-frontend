# News Explorer
https://dafpineda.github.io/project-NewsExplorer-frontend/

Aplicación web que permite buscar noticias de cualquier tema usando News API y guardar los artículos favoritos en una cuenta personal.

Proyecto desarrollado como parte del bootcamp de desarrollo web de TripleTen.

## Funcionalidades


* Búsqueda de noticias por palabra clave usando News API
* Visualización de resultados en tarjetas con imagen, fecha, título, descripción y fuente
* Sistema de registro e inicio de sesión (almacenado en localStorage)
* Guardado y eliminación de artículos favoritos
* Página de artículos guardados con resumen de palabras clave buscadas
* Botón "Mostrar más" para cargar resultados de tres en tres
* Estados de carga (preloader), error de búsqueda y "no se encontró nada"
* Menú lateral responsive para dispositivos móviles
* Diseño adaptable (desktop, tablet y móvil)


## Tecnologías


* React
* React Router DOM
* Vite
* CSS puro (sin frameworks)
* News API (peticiones GET)
* localStorage para persistencia de sesión, artículos guardados y resultados de búsqueda


## Estructura del proyecto

src/
├── components/
│   ├── App.jsx
│   ├── Header/
│   ├── Footer/
│   ├── Main/
│   │   └── components/
│   │       ├── About/
│   │       └── NewsCardList/
│   │           ├── NothingFound/
│   │           └── Preloader/
│   ├── NewsCard/
│   ├── SavedNews/
│   ├── Search/
│   ├── SignIn/
│   ├── SignUp/
│   ├── Popup/
│   ├── Menu/
│   └── ProtectedRoute/
├── utils/
│   └── newsExplorer.js
├── fonts/
└── images/

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
