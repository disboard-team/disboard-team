# Disboard Team

[![Netlify Status](https://api.netlify.com/api/v1/badges/7f149fce-dcd9-45d3-83f5-d8e794768a1e/deploy-status)](https://app.netlify.com/projects/disboard/deploys)

Sitio web oficial y API pública para el clan y equipo competitivo de **Disboard Team**.

Construido limpiamente con **Astro**, **Sass (.scss)**, **JavaScript vanilla** y datos versionados en **ficheros JSON** (generación estática pura / SSG sin React ni bases de datos externas).

---

## 🚀 Características

* **Astro puro sin frameworks de JS pesados**: Zero-JS por defecto salvo scripts ligeros vanilla para interactividad (menú responsive, filtros de wars, botón volver arriba).
* **Estilos SCSS**: Sistema de diseño original migrado con Sass moderno, paleta de colores oscura con detalles neón, diseño responsive y banderas de países.
* **Cálculo automático de Estadísticas**: Cálculo en tiempo de compilación de:
  * Wars jugadas por jugador.
  * Media de puntos por encuentro.
  * Ratio Victorias / Derrotas (V/D).
  * Conteo de MVPs (máximo anotador).
* **Analítica con Umami**: Integrado desde local (`/script.js`), enviando métricas a `https://umami.qu4k3.com`, y configurado para inyectarse **únicamente en el entorno de producción de Netlify** (`CONTEXT === 'production'`).
* **Endpoints API públicos (JSON)** para consumir directamente desde la web o un **Bot de Discord** (rutas REST limpias):
  * `GET /api/players`: Lista de todos los jugadores con perfil completo y estadísticas calculadas.
  * `GET /api/wars`: Listado completo de encuentros (wars), resultados por equipo y capturas.
  * `GET /api/teams`: Lista de rivales y equipos enfrentados con tags y logos.
  * `GET /api/player/[id]`: Datos individuales de un jugador por su `player_id`.
  * `GET /api/discord/[discordId]`: Datos individuales de un jugador por su ID de usuario de Discord.

---

## 📁 Estructura del Proyecto

```text
├── public/                # Archivos estáticos públicos (imágenes, logos, banderas, favicon)
├── src/
│   ├── components/        # Componentes Astro (Header, Footer, WarTable, PlayerCard, etc.)
│   ├── data/              # Ficheros JSON de datos
│   │   ├── players.json   # Jugadores, países, roles, Discord ID, Switch FC, MKC
│   │   ├── teams.json     # Equipos rivales
│   │   └── wars.json      # Registro de wars con resultados y jugadores
│   ├── layouts/           # Plantillas base (Layout.astro con metadatos OG)
│   ├── pages/             # Páginas estáticas y rutas de API
│   │   ├── index.astro    # Portada principal
│   │   ├── wars.astro     # Listado y filtros de wars
│   │   ├── players.astro  # Staff y Miembros
│   │   ├── player/[id].astro # Perfil y estadísticas del jugador
│   │   ├── about.astro    # Mandamientos y filosofía del clan
│   │   └── api/           # Endpoints públicos en formato JSON
│   ├── styles/            # Hojas de estilo Sass (.scss)
│   └── utils/
│       └── stats.js       # Motor de cálculo de métricas y estadísticas
├── astro.config.mjs       # Configuración de Astro
└── package.json
```

---

## 🛠️ Comandos

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local |
| `npm run build` | Compila el sitio estático y genera los endpoints JSON en `dist/` |
| `npm run preview` | Previsualiza en local el build generado |
