# Christian Bai, cybersecurity portfolio

Built with [MkDocs](https://www.mkdocs.org/) and
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/). Content is
Markdown in `docs/`. Navigation and theming are in `mkdocs.yml`.

Deployment uses `mkdocs gh-deploy`, which builds the site locally and pushes the
result to a `gh-pages` branch.

---

## Adding a page

Create the Markdown file in `docs/`, then add it to the `nav:` block in
`mkdocs.yml`. A file not listed in `nav` still builds but does not appear in the
menu.

## Adding documents

Put PDFs in `docs/assets/` and link them as `assets/filename.pdf`. Hosting them
in the repo is better than linking to Google Drive. They load on your own domain,
they cannot break when Drive permissions change, and they stay available if the
Drive account goes away.