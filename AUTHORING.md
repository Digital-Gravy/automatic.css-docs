# Writing the docs

Conventions for pages in `docs/`.

## Version badges

In the 4.x docs, the badge above each page title says from which ACSS version the page applies. Set it in the page's front matter:

| Front matter | Badge | Use it when |
| --- | --- | --- |
| *(nothing)* | Version: 4.0.0+ | The page applies to every 4.x release. |
| `since: 4.0.2` | Version: 4.0.2+ | The whole page describes something added in 4.0.2. |
| `updated: 4.0.1` | adds "Updated in 4.0.1" | Only part of the page is newer. Mark that part as well (see below). |

Mark the newer part with the `<Since>` component, usually in its heading. Give the heading an explicit ID, otherwise the anchor ends in a dash:

```md
## Floating Label Background <Since version="4.0.1" /> {#floating-label-background}
```

`<Since>` works in any Markdown page without an import. When a page gets several updates, set `updated` to the newest version and mark each part with its own version. Don't use `:::info Version` boxes for this anymore.

