# Christian Bai, cybersecurity portfolio

Built with [MkDocs](https://www.mkdocs.org/) and
[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/). Content is
Markdown in `docs/`. Navigation and theming are in `mkdocs.yml`.

Deployment uses `mkdocs gh-deploy`, which builds the site locally and pushes the
result to a `gh-pages` branch.

---

## One-time setup

### 1. Install the tooling

```bash
cd portfolio
pip install -r requirements.txt
```

### 2. Create the repository

Name it exactly `YOURUSERNAME.github.io`, substituting your GitHub username, and
make it public. That name gives you `https://YOURUSERNAME.github.io` with no
extra configuration.

Do not initialize it with a README. You want it empty.

### 3. Connect this project to it

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/YOURUSERNAME.github.io.git
git push -u origin main
```

### 4. Deploy

```bash
mkdocs gh-deploy --strict
```

This builds the site, creates a `gh-pages` branch, and force-pushes the compiled
HTML to it. The `--strict` flag aborts on any broken internal link, so a bad
link fails here instead of going live.

### 5. Point Pages at the branch

In the repository, go to Settings, then Pages. Set **Source** to
**Deploy from a branch**, then set the branch to `gh-pages` and the folder to
`/ (root)`. Save.

First publish takes a minute or two.

If `gh-pages` does not appear in the branch dropdown, refresh the page. The
branch does not exist until step 4 has run at least once.

---

## A note on the MkDocs documentation

The official MkDocs [Deploying your Docs](https://www.mkdocs.org/user-guide/deploying-your-docs/)
page tells you that User and Organization Pages sites, meaning
`username.github.io`, need two separate repositories and a `--remote-branch master`
flag. That guidance is out of date.

GitHub used to require user sites to be served from the default branch. It no
longer does. Their current documentation states the publishing source branch
"can be any branch in your repository," which is what makes the single-repository
setup above work. See
[Configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

If you ever hit a case where GitHub will not let you select `gh-pages`, the
fallback is to deploy to the default branch instead, which reproduces the older
behavior in one repository rather than two:

```bash
mkdocs gh-deploy --strict --remote-branch main
```

Only do that if the normal path fails. It puts generated HTML on the same branch
as your source, which is messier to work with.

---

## Every time you change something

Two commands, and you need both.

```bash
git add . && git commit -m "what changed" && git push
mkdocs gh-deploy --strict
```

The first pushes your Markdown source to `main`. The second builds and publishes
the site.

### The one thing people get wrong

`gh-deploy` publishes the built site. It does not push your source. If you only
run `gh-deploy`, the live site updates but your Markdown never reaches GitHub,
and you have no backup of the thing you actually wrote. If you only run `git
push`, your source is safe but the live site stays stale.

Run both. If you want to make that harder to forget, add this to your shell
config:

```bash
alias portfolio-publish='git add -A && git commit -m "update" && git push && mkdocs gh-deploy --strict'
```

---

## Preview before you publish

```bash
mkdocs serve
```

Open `http://127.0.0.1:8000`. Live-reloads as you save. Always look at a change
here before deploying, because `gh-deploy` publishes immediately with no
review step.

---

## Things to know about gh-pages

The `gh-pages` branch is generated output. Never edit it by hand and never
commit to it directly. Every `gh-deploy` force-pushes over it, so anything you
put there is destroyed on the next deploy.

If you need to wipe its history, which accumulates a commit per deploy:

```bash
mkdocs gh-deploy --strict --no-history
```

---

## Before you publish

Search the project for `FILL IN` and `GITHUB-USERNAME`. Every match is something
only you can supply. I left them blank rather than inventing dates, employers, or
credentials.

```bash
grep -rn "FILL IN\|GITHUB-USERNAME\|LINKEDIN-SLUG" docs/ mkdocs.yml
```

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

---

## Before publishing anything from a real engagement

If any project page describes work against an environment you did not own,
whether an employer's or a client's, do not publish specifics without written
permission. Strip account identifiers, hostnames, IP addresses, ARNs, and bucket
names first. Describing the class of finding without the target is always the
safe version.
