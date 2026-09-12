---
hide:
  - toc
---

# Skills

Four competencies I want this portfolio to prove, each mapped to the
[NACE Career Readiness Competencies](https://www.naceweb.org/career-readiness/competencies/career-readiness-defined)
and backed by work I actually did. Where a skill is still developing I have said
so rather than padding the list.

---

## 01. Web application penetration testing

<div class="cb-meta" markdown>
<div><span class="cb-k">NACE</span><span class="cb-v">Technology, Critical Thinking</span></div>
<div><span class="cb-k">Artifact</span><span class="cb-v"><a href="../projects/offensive-security-labs/">Offensive Security Labs</a></span></div>
</div>

I worked through HackTheBox web exploitation modules alongside my coursework,
covering UNION-based SQL injection, cross-site scripting, REST API abuse through
HTTP methods, and request crafting with cURL and browser DevTools. What I valued
was how fast the labs punished sloppy assumptions. A UNION injection fails
silently unless your column count matches the original query, and an XSS payload
reflects in the response body rather than the URL, which sounds obvious until you
are staring at an unchanged address bar wondering why nothing fired. The lesson
was that finding a vulnerability and understanding a vulnerability are different
skill levels, and only the second one lets you explain it to someone who has to
fix it. This is the core of the assessment work I want to do professionally, so
everything else on this site builds outward from it.

---

## 02. Technical security writing

<div class="cb-meta" markdown>
<div><span class="cb-k">NACE</span><span class="cb-v">Communication, Professionalism</span></div>
<div><span class="cb-k">Artifact</span><span class="cb-v">Sample vulnerability finding (redacted)</span></div>
</div>

Every assessment I run ends in a written finding, and I have come to think the
writing is the harder half. My early write-ups described what I found in
technical detail and left the reader to work out what to do about it. What
changed my approach was watching how differently a developer and a compliance
lead read the same finding, since one wants the exact request that triggered it
and the other wants to know whether it blocks an audit. I now separate severity
from urgency and give remediation guidance that fits the system being tested
rather than generic advice. If I am honest this is the skill I expect to keep
working on longest, because clear writing under a deadline is harder than it
looks.

!!! note "Artifact to add"

    Link one redacted finding write-up here. Strip client names, hostnames, IP
    addresses, and account identifiers first, or rewrite it against a lab target.

---

## 03. Methodical problem solving under uncertainty

<div class="cb-meta" markdown>
<div><span class="cb-k">NACE</span><span class="cb-v">Critical Thinking</span></div>
<div><span class="cb-k">Artifact</span><span class="cb-v"><a href="../projects/cloud-security-assessment/">Cloud Security Assessment</a></span></div>
</div>

Reviewing an AWS environment with ScoutSuite taught me more about judgment than
about tooling. The scanner returns a long list of technically accurate items, and
almost none of that list matters equally in a given account, so the actual work is
deciding which findings are real given how the environment is used. I learned to
treat scanner output as a starting point and to be able to defend a severity call
when somebody pushes back on it. That habit transfers directly to the rest of my
work, since the same reasoning applies whether I am triaging cloud
misconfigurations or deciding which of twenty low-severity web findings deserve a
place in a report.

---

## 04. Ethical and legal practice

<div class="cb-meta" markdown>
<div><span class="cb-k">NACE</span><span class="cb-v">Professionalism, Technology</span></div>
<div><span class="cb-k">Artifact</span><span class="cb-v">Coursework in cyber law and ethics</span></div>
</div>

Offensive security is the one technical field where the same action is either
professional work or a felony depending entirely on paperwork. My coursework in
cyber law and ethics sits underneath everything else I do, because scope and
written authorization decide what a test is permitted to touch before any
technique question comes up. I follow structured methodologies for the same
reason, since frameworks like NIST SP 800-115 and the OWASP testing guide give
an engagement a defensible shape rather than leaving it to improvisation. The
practical version of this is unglamorous. I stay inside scope, I document what I
touched, and I do not publish a finding about a system I do not own.

!!! note "Artifact to add"

    Link a paper or memo from your cyber law and ethics coursework, or a
    sanitized rules-of-engagement template.

---

## How these show up elsewhere

These four run through the rest of the site rather than living only here. The
[project pages](projects/index.md) are the evidence for the first three, my
[resume](resume.md) states them as capability rather than exposure, and the
tone of every write-up on this site is meant to demonstrate the second one
without announcing it.
