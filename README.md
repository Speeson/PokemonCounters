![tittle](src/assets/logo/pokemon-counters.png)

<h1 align="center">
  <img src="src/assets/logo/pokeball.png" width="36" />
  Pokémon Counters
</h1>

Aplicación web interactiva para consultar de forma rápida y visual las **debilidades, resistencias e inmunidades de los tipos Pokémon**.

Permite seleccionar **uno o dos tipos** y muestra automáticamente los multiplicadores de daño (`x4`, `x2`, `x0`, `x1/2`, `x1/4`), solucionando uno de los problemas más habituales al jugar a Pokémon: **recordar los counters de cada tipo**.

---

## 🌐 Demo online

👉 **Aplicación desplegada en GitHub Pages**  
https://Speeson.github.io/PokemonCounters/

---

## ✨ Características

- 🎮 Selección de **hasta 2 tipos Pokémon**
- ⚡ Cálculo automático de:
  - Debilidades (`x4`, `x2`)
  - Inmunidades (`x0`)
  - Resistencias (`x1/2`, `x1/4`)
- 🧩 Soporte completo para los **18 tipos Pokémon**
- 🖼️ Interfaz visual basada en iconos
- 🌈 Efectos visuales **neón dinámicos por tipo**
- 📱 Diseño **responsive**
- 🚀 Despliegue automático con **GitHub Actions**

---

## 🧠 Funcionamiento

1. El usuario selecciona uno o dos tipos Pokémon.
2. Se calcula la efectividad defensiva combinando ambos tipos.
3. Los resultados se agrupan por multiplicador:
   - `x4` → Muy débil
   - `x2` → Débil
   - `x0` → Inmune
   - `x1/2` → Resiste
   - `x1/4` → Resiste mucho
4. Cada tipo se muestra como un botón visual con su icono.

Toda la lógica se ejecuta **en el frontend**, sin backend ni base de datos.

---

## 🛠️ Tecnologías utilizadas

- **React**
- **Vite**
- **JavaScript (ES6+)**
- **CSS moderno**
- **Git y GitHub**
- **GitHub Pages**
- **GitHub Actions (CI/CD)**

---

## 📂 Estructura del proyecto

```
src/
├─ assets/
│  ├─ types/
│  └─ logo/
├─ components/
│  ├─ TypeGrid.jsx
│  ├─ ResultsPanel.jsx
│  └─ TypeTileSmall.jsx
├─ data/
│  └─ typeChart.json
├─ lib/
│  └─ typeEffectiveness.js
├─ App.jsx
├─ App.css
└─ main.jsx
```

---

## 📐 Arquitectura

- Aplicación **SPA** completamente en frontend
- Datos de tipos almacenados en JSON
- Gestión de estado con **React Hooks**
- Diseño preparado para futura app móvil (Android / Kotlin)

---

## 🚀 Despliegue automático

El proyecto se despliega automáticamente mediante **GitHub Actions**:

- Cada `push` a la rama `main`:
  1. Se ejecuta el proceso de build (`npm run build`)
  2. Se generan los archivos estáticos
  3. Se publican automáticamente en **GitHub Pages**

Esto garantiza un despliegue continuo, gratuito y sin servidores en ejecución.

Archivo de configuración:
```
.github/workflows/deploy.yml
```

---

## 📦 Instalación local

```bash
git clone https://github.com/Speeson/PokemonCounters.git
cd PokemonCounters
npm install
npm run dev
```

La aplicación estará disponible en:
```
http://localhost:5173
```

---

## 📜 Licencias y atribuciones

- Los iconos de tipos Pokémon son recreaciones de la comunidad con licencias permisivas.
- Pokémon es una marca registrada de **The Pokémon Company**.
- Proyecto desarrollado con fines **educativos**.

---

## 🎓 Contexto académico

Ciclo formativo: **Desarrollo de Aplicaciones Multiplataforma (DAM)**

---

## 👤 Autor

**Esteban**  
Repositorio: https://github.com/Speeson/PokemonCounters

---

## ⭐ Mejoras futuras

- Búsqueda por Pokémon (PokéAPI)
- Aplicación móvil en Android (Kotlin)
- Guardado de combinaciones favoritas
- Más animaciones y efectos visuales
