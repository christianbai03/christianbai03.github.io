---
hide:
  - toc
---

# Skills

Four competencies I want this portfolio to prove, each mapped to the
[NACE Career Readiness Competencies](https://www.naceweb.org/career-readiness/competencies/career-readiness-defined)
and backed by work I actually did. Where a skill is still developing I have said
so instead of padding the list.

---

## 01. Web application penetration testing

<div class="cb-meta" markdown>
<div><span class="cb-k">NACE</span><span class="cb-v">Technology, Critical Thinking</span></div>
<div><span class="cb-k">Artifact</span><span class="cb-v"><a href="../projects/offensive-security-labs/">Offensive Security Labs</a></span></div>
</div>

I worked through HackTheBox web exploitation modules alongside my coursework,
covering UNION-based SQL injection, cross-site scripting, REST API abuse through
HTTP methods, and request crafting with cURL.

The labs punish sloppy assumptions fast. A UNION injection fails silently unless
your column count matches the original query. An XSS payload reflects in the
response body, not the address bar, which sounds obvious until you have spent
twenty minutes refreshing a URL waiting for something to happen.

What I took from it is that finding a vulnerability and understanding one are
different skill levels. Only the second one lets you explain it to whoever has to
fix it. That gap is what the rest of this portfolio is built on.

---

## 02. Technical security writing

<div class="cb-meta" markdown>
<div><span class="cb-k">NACE</span><span class="cb-v">Communication, Professionalism</span></div>
<div><span class="cb-k">Artifact</span><span class="cb-v">Sample vulnerability finding (redacted)</span></div>
</div>

Every assessment I run ends in a written finding, and the writing is the harder
half.

My early write-ups explained what I found in detail and left the reader to work
out what to do about it. What changed my approach was watching a developer and a
compliance lead read the same finding. One wanted the exact request that
triggered it. The other wanted to know whether it blocked an audit. Same
document, two completely different questions.

I now separate severity from urgency and write remediation that fits the system
being tested. This is the skill I expect to be working on longest. Clear writing
under a deadline is harder than it looks.

!!! note "Artifact to add"

    Link one redacted finding write-up here. Strip client names, hostnames, IP
    addresses, and account identifiers first, or rewrite it against a lab target.

---

## 03. Methodical problem solving under uncertainty

<div class="cb-meta" markdown>
<div><span class="cb-k">NACE</span><span class="cb-v">Critical Thinking</span></div>
<div><span class="cb-k">Artifact</span><span class="cb-v"><a href="../projects/cloud-security-assessment/">Cloud Security Assessment</a></span></div>
</div>

Reviewing an AWS environment with ScoutSuite was a lesson in judgment more than
tooling. The scanner hands you a long list of technically accurate items and
almost none of them matter equally in a given account.

The real work is deciding which ones are live given how the environment actually
gets used, then defending that call when somebody pushes back on it. Scanner
output is a starting point. Treating it as a finished report is how you produce
fifty pages nobody reads.

The same question comes up on web assessments, where I have to decide which
low-severity items earn space in a report and which ones are noise.

---

## 04. Ethical and legal practice

<div class="cb-meta" markdown>
<div><span class="cb-k">NACE</span><span class="cb-v">Professionalism, Technology</span></div>
<div><span class="cb-k">Artifact</span><span class="cb-v">Coursework in cyber law and ethics</span></div>
</div>

Offensive security is the one technical field where the same action is either
professional work or a felony, depending entirely on paperwork.

My cyber law and ethics coursework sits underneath everything else here. Scope
and written authorization decide what a test is permitted to touch before any
technique question comes up. I follow structured methodologies for the same
reason, since frameworks like NIST SP 800-115 and the OWASP testing guide give an
engagement a defensible shape.

In practice this is unglamorous. I stay inside scope, I write down what I
touched, and I do not publish findings about systems I do not own.

!!! note "Artifact to add"

    Link a paper or memo from your cyber law and ethics coursework, or a
    sanitized rules-of-engagement template.

---

## How these show up elsewhere

These four run through the whole site. The [project pages](projects/index.md) are
the evidence for the first three. My [resume](resume.md) states them as things I
can do, not things I have been exposed to. The second one is meant to be visible
in how every page here is written, without my having to point at it.
