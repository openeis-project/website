# openeis-landing

A modern landing-page theme for the [AnyCMS](https://openeis.org) SSG, designed
for **openeis** — the infrastructure layer for enterprise information systems.

## Features

- **Dark gradient hero** with brand title + `cargo install openeis` hint + CTA buttons
- **Prose styling** for the markdown body (tables, code blocks, blockquotes, lists)
- **Blog listing** (`index.html`) + **single page** (`page.html`) templates
- **Dark mode** via `data-theme="dark"` (toggle with site `params { dark "on" }`)
- Sticky translucent header, **language switcher**, GitHub link, fully responsive

## Layout

```
theme.kdl                  manifest (name / version / engine-version)
templates/base.html        layout: head / nav / footer (anycms contract)
templates/home.html        landing page: hero + section.content
templates/index.html       section listing (blog)
templates/page.html        single page
static/main.css            openeis visual style (teal accent, dark hero)
```

## Install

Install from a **different** site root (never install a theme into the site that
already contains its source under `themes/`):

```sh
anycms theme install /path/to/openeis-landing --root <your-site> --force
```

A site's own `templates/` **override** the theme's. To see this theme render,
remove the site's `templates/` (or keep only the overrides you need). The home
page should set `template = "home.html"` in its `_index.md` frontmatter.

## Site params (`site.kdl`)

```kdl
params {
    dark "on"   // "on" = force dark, "off" = force light, omit = light default
}
```

## Customize

- **Brand color**: `--accent` / `--accent-2` in `static/main.css`.
- **Hero title**: comes from `config.title` (set in `site.kdl`).
- **Hero pitch / features**: authored per-language in `_index.md` (rendered into
  the `.prose` area below the hero).

## Engine compatibility

Built for AnyCMS engine `0.1.x` (see `theme { engine-version }` in `theme.kdl`).
