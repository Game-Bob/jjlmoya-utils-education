---
name: create-tool
description: Create a new tool in the education utilities library (src/tool/). Use for any task involving scaffolding, creating, or adding a new education tool or utility to the repository.
---

Follow `prompts/create_tool.md` in the repository root for detailed instructions.

## Steps

1. **Read one existing tool** completely to discover patterns (logic.ts, entry.ts, index.ts, component.astro, seo.astro, bibliography.astro, bibliography.ts, CSS, i18n/en.ts)

2. **Only English** - create only `i18n/en.ts`, register only `en` in entry.ts

3. **Create all tool files** following the discovered patterns:
   - logic.ts, entry.ts, index.ts, component.astro, seo.astro,
     bibliography.astro, bibliography.ts, i18n/en.ts
   - CSS: named after the English slug (e.g. `depth-of-field-calculator.css`)

4. **SEO content** - El contenido SEO debe aportar muchisimo valor al usuario, no ser vago ni corto, y responder a la intencion de busqueda real para que la pagina pueda posicionar en Google. No escribas solo texto corrido: usa los componentes ricos que soporta `SEORenderer` cuando aporten claridad, como `stats`, `diagnostic`, `comparative`, `tip`, `card`, `glossary`, `proscons`, `summary`, `table`, `list`, `code` o `message`. Cada bloque debe resolver una pregunta del usuario, explicar limites, dar criterios practicos, comparar opciones o guiar el siguiente paso. Evita relleno editorial.

5. **Design** - El diseno debe ser unico, muy visual y grafico, con prioridad en una UX bonita y cuidada. Las interfaces deben diseniarse desde cero, sin copiar ni reutilizar el diseno de otras tools. Cada herramienta tiene que ser totalmente unica en su planteamiento visual y de interaccion. No uses disenios genericos. Textos grandes, mobile FIRST, SIEMPRE.

   **Tool UI compacta** - No incluyas dentro de `component.astro` un titulo principal ni una descripcion introductoria de la herramienta: la pagina ya renderiza ese titulo y esa descripcion desde el contenido de la tool. El componente debe empezar directamente con la experiencia interactiva. Toda la interfaz debe sentirse como una card compacta, funcional y bien compuesta, sin una cabecera interna grande que encorsete o duplique la pagina.

   **Ancho completo** - La tool debe ocupar el maximo ancho que le permita la pagina contenedora y seguir viendose bien en desktop ancho, tablet y movil. No pongas un `max-width` arbitrario en la card principal salvo que el layout global lo exija claramente.

   **Modo oscuro** - La tool debe soportar el modo oscuro real del proyecto usando `.theme-dark`, igual que el resto de tools. Si hay canvas, SVG dinamico o graficos pintados por JavaScript, tambien deben responder al cambio de tema.

   **Unidades convertibles** - Siempre que la herramienta muestre, pida o calcule una unidad convertible (distancia, masa, volumen, temperatura, velocidad, area, etc.), incluye un control compacto para alternar entre sistema metrico e imperial/US customary. El cambio debe afectar a los valores visibles, etiquetas, resumenes y resultados derivados; no basta con traducir el texto de la unidad.

6. **Register the tool** by reading and updating:
   `src/index.ts`, `src/entries.ts`, `src/tools.ts`, `src/category/index.ts`

7. **QA gate** - do not run `npm run type-check`, `npm run lint`, `npm run test`, or any equivalent verification command after creating or editing a tool unless the user explicitly says `OKQA`. Stop after implementation and report that QA is pending behind the `OKQA` gate.

8. **Verify only after OKQA** - when the user explicitly says `OKQA`, run in order:
   - `npm run type-check`
   - `npm run lint`
   - `npm run test -- --testPathIgnorePatterns=i18n_coverage`
