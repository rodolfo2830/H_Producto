<!-- .github/copilot-instructions.md -->
# Copilot instructions — H_Producto

Purpose: Help AI coding agents become productive quickly in this repository (a small, static multi-page site built with plain HTML/CSS/JS).

- Tech stack (quick): static HTML pages at repo root, styles in `css/`, scripts in `js/`, media in `images/`, `audio/`, `videos/`.
- No package.json, no build step, no server-side code. Editing is file-first and changes are verified by opening pages in a browser or running a simple static HTTP server.

Big picture (what to know fast)
- This is a multi-page, static website (each top-level `.html` is a page: `index.html`, `contactanos.html`, `nosotros.html`, `servicio.html`, `producto.html`, etc.).
- Shared layout is achieved by repeating the same header/footer/structure in each HTML file. There is no template engine.
- Responsive navigation: header + `nav` element toggled with a `visible` class. See `js/mobileMenu.js` and `css/navBar.css` for the exact interaction (menu button adds/removes `.nav.visible` and toggles `document.body.style.overflow`).

Key files to inspect (start here):
- `index.html` — main landing page and canonical layout example.
- `contactanos.html` — contains a simple contact form (table layout) and inline textarea validation limiting input to 20 characters; good for understanding form conventions in this project.
- `js/mobileMenu.js` — the only site-wide JS behavior for the mobile nav; uses `DOMContentLoaded` and simple class toggling.
- `css/navBar.css` — responsive nav CSS; mobile breakpoint at 768px; important classes: `.nav`, `.nav.visible`, `.mobile-abrir-btn`, `.mobile-cerrar-btn`, `.nav-list`.
- `css/styleContactanos.css` — demonstrates project CSS patterns: `.container` uses `grid-template-rows: auto 1fr auto` and `height: 100dvh`, media-query adjustments and use of `!important` to override inline width attributes.

Project-specific conventions and patterns
- File naming: mostly lower-case filenames, folders: `css/`, `js/`, `images/`.
- Images: stored in `images/`. Note: some HTML files use absolute-root paths (e.g. `/images/logoBlack.png`) while others use relative (`images/...`). Be consistent when adding new references — prefer relative links from the HTML file location.
- Scripts: add new page scripts into `js/` and include them with `<script src="js/your-file.js"></script>` near the end of the HTML (current pattern: header includes `mobileMenu.js` via a script tag immediately after the `<header>` markup).
- Minimal JS style: DOMContentLoaded wrapper, querySelector variants, no bundling, no transpilation. Keep to ES5/ES6 features that run in modern browsers.
- CSS patterns: simple responsive breakpoints at 992px and 768px across files. Common utility: `.container` is a top-level grid that reserves header and footer space — prefer using that structure for new pages.

Integration points and external dependencies
- Fonts & icons come from CDNs in the HTML head: Google Fonts (Montserrat) and FontAwesome / Bootstrap Icons CDNs. Expect external network usage at page load.
- No backend integrations are present. Contact forms have no `action` attribute and are static.

How to run and test locally (practical)
- Quick sanity: open `index.html` or any `.html` file directly in a browser (double-click) for a basic check.
- Prefer a local static server to avoid path/CORS quirks. From the project root run a simple server (examples):
  - Python 3: `python -m http.server 8000` and open `http://localhost:8000/index.html`.
  - Node (if available): `npx serve .` (not required by repo; only if node installed).

Common pitfalls seen in this repo
- Inconsistent image paths (leading `/` vs relative) — this can break when served from a subpath.
- Some HTML uses inline styles/attributes (e.g. `style="width: 50%"`) that CSS files sometimes override with `!important`. Avoid adding more `!important`; prefer cleaning the HTML attribute or adjusting selectors.
- Forms are static and may contain inline validation (see the 20-char cap on `contactanos.html` textarea). Don't assume a backend exists.

When editing code, specific instructions for changes
- Mobile nav: to change behavior, update `js/mobileMenu.js` and `css/navBar.css` together. The JS expects `.nav` element and toggles `.visible`; removing either side will break mobile behavior.
- Adding a new page: copy the header/footer markup from `index.html` (keep the same id values #nav, #abrir, #cerrar), link the same CSS files in the head, then add page-specific CSS to `css/` and scripts to `js/`.
- Styling: maintain existing breakpoints (992px, 768px) when adding responsive rules to preserve site behavior.

Editing and PR guidance (repo has no explicit rules)
- Keep changes minimal and page-local where possible (this is a static site — large sweeping refactors can create regressions across pages).
- When updating shared header/footer, update every top-level HTML page to keep them in sync (there is no central template).

If anything in this file is unclear or you'd like me to expand examples (for example, a checklist for adding a new page or a list of all HTML files that use absolute `/images` paths), tell me which section to expand.

-- End of instructions --
