# Christian Bai, cybersecurity portfolio

Built with [MkDocs](https://www.mkdocs.org/) and
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/). Content is
Markdown in `docs/`. Navigation and theming are in `mkdocs.yml`.

Deployment uses `mkdocs gh-deploy`, which builds the site locally and pushes the
result to a `gh-pages` branch.

| What | Where |
| --- | --- |
| GitHub username, three places | `mkdocs.yml`, `docs/contact.md` |
| LinkedIn URL | `mkdocs.yml`, `docs/contact.md` |
| Your headshot | replace `docs/assets/headshot.jpg` |
| Your resume PDF | replace `docs/assets/christian-bai-resume.pdf`, keep the filename |
| Resume content | `docs/resume.md` |
| Internship details and paper links | `docs/projects/internship.md` |
| Capstone reflection | `docs/capstone.md` |
| Project specifics | each file in `docs/projects/` |

The placeholder headshot and resume PDF are generated stand-ins so the layout and
the download button work. Both need replacing.

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