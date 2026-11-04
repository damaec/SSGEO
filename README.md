# Sitio de la Dra. Geovana Batista

Sitio estático creado con Astro.

## Requisitos

- NVM
- npm

## Ejecutar en local

```bash
nvm install
nvm use
npm ci
npm run dev
```

`nvm install` y `nvm use` seleccionan la versión de Node definida en `.nvmrc` solo para esta terminal. Abre en el navegador la dirección local que Astro muestra en la terminal.

## Compilar

```bash
npm run build
```

Los archivos listos para publicar quedan en `dist/`.

## Contenido

Edita los datos del sitio en `src/data/site.ts`.

## Publicación

El workflow de GitHub Actions publica el sitio en GitHub Pages al subir cambios a `main`. En GitHub Free, el repositorio debe ser público.
