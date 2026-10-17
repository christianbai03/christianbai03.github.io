---
hide:
  - toc
---

# Capstone Reflection

<p class="cb-lede">A transfer into ODU, two years of client penetration testing,
and a portfolio I rebuilt from scratch this term. What follows is what actually
changed, including what I got wrong.</p>

## Where I started

I transferred into ODU's cybersecurity program already knowing what I wanted the
degree to do, which was make me employable in offensive security specifically
rather than security in general.

What I didn't have was any sense of the distance between coursework and the job.
I could run tools in a lab and assumed that was most of it. When my
internship started I had never opened Burp Suite, which is now the software I
use most days.

## The journey

Four courses carried into the job directly. CYSE 301 overlapped most with daily
practice, and CYSE 270 made Kali Linux familiar before it became the environment
I work in every day. The one that paid off most unexpectedly was CS 462. It covered
cryptography well enough that when I found a client hashing passwords with MD5,
I could explain the risk instead of just flagging it.

The internship at RISCPoint is where the degree turned into a skill set, and it
didn't start that way. I was onboarded to a DevOps team, writing documentation
and running QA for a product that performed automated penetration testing. The
work wasn't hard, which is what made it difficult to sit through. When
leadership on that engagement changed, I made the case to move to the offensive
side of the firm.

That request is the most consequential thing I did in two years. Everything on
my [internship page](projects/internship.md) exists because I asked instead of
finishing the placement I was given.

Distrusting my own tools was the hardest habit to build. Early on I took Burp
Scanner results at face value, then kept finding through manual testing that a
flagged issue was a false positive or a control that was doing its job. Enough WAF
responses imitating SQL injection cured me of it. That is the reasoning behind
my [assessment triage](competencies/assessment-triage.md) competency.

## What the work actually changed

<figure>
<svg viewBox="0 0 760 180" role="img"
     aria-label="A timeline of the work. Coursework and labs, then an internship that began on a DevOps team, then a request to move to the penetration testing side marked as the turning point, then client engagements, then the portfolio built in IDS 493."
     style="max-width:100%;height:auto;color:currentColor">
  <defs>
    <marker id="cb-tl" viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>
  <line x1="20" y1="96" x2="724" y2="96" stroke="currentColor" stroke-width="1.5"
        marker-end="url(#cb-tl)"/>
  <g font-size="11" fill="currentColor" text-anchor="middle">
    <circle cx="70" cy="96" r="4" fill="currentColor"/>
    <text x="70" y="78" font-weight="700">Coursework</text>
    <text x="70" y="124" opacity="0.72">tools in a lab</text>

    <circle cx="240" cy="96" r="4" fill="currentColor"/>
    <text x="240" y="78" font-weight="700">Internship, DevOps</text>
    <text x="240" y="124" opacity="0.72">QA and documentation</text>

    <circle cx="410" cy="96" r="7" fill="#E8590C"/>
    <text x="410" y="74" font-weight="700" fill="#E8590C">I asked to move</text>
    <text x="410" y="128" fill="#E8590C">the turning point</text>

    <circle cx="570" cy="96" r="4" fill="currentColor"/>
    <text x="570" y="78" font-weight="700">Client engagements</text>
    <text x="570" y="124" opacity="0.72">web, red team, FedRAMP</text>

    <circle cx="700" cy="96" r="4" fill="currentColor"/>
    <text x="700" y="78" font-weight="700">This site</text>
    <text x="700" y="124" opacity="0.72">IDS 493</text>
  </g>
  <text x="380" y="166" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.7">
    Everything right of the orange point happened because of it.
  </text>
</svg>
<figcaption>The arc, with the moment that produced most of it marked. The first
two points are what a transcript shows. The rest is what the transcript does not
say.</figcaption>
</figure>

Two patterns run through everything here.

Finding a problem is the easy half. A redacted finding on my
[security writing](competencies/security-writing.md) page covers an application
that returned the same status code, redirect, and visible content whether or not
an email address had an account behind it. By every normal check it was fine. The
only thing separating the two cases was 1190 milliseconds against 19, and
writing it up so somebody would act on it took longer than finding it.

Technical severity and organizational risk are also different quantities, and
CYSE 201S taught me that before a client did. I expected to write about the
Equifax exploit and found that the Government Accountability Office identified
four contributing factors, three of them organizational. A company can pass
every technical check on a list and still lose 140 million records because
nobody owned the process of acting on what those checks returned. That argument
is what my [cybersecurity and society](projects/cybersecurity-society.md) page
is built on.

Criminology coursework connected in a way I hadn't anticipated. Designing spear
phishing for a red team engagement, I used rational choice theory to weigh which
pretexts were worth the effort against the risk of being caught. That is the
same calculation a real attacker runs before picking a tactic.

Report writing is the skill that grew most, and it isn't close. I knew
documentation mattered. What I didn't know is that most of the value a client
gets from a test lives in the written deliverable. A finding nobody can act on
is worth close to nothing.

## Looking forward

My gaps are specific. I don't hold the OSCP yet and both roles I'm targeting
want it. My scripting is working rather than strong, and both job descriptions I
read this term ask for Python or Bash fluency.

What I am less worried about is unfamiliar ground. A client put a language model
into their application and I was assigned to assess it. No checklist existed, so
I researched prompt injection, experimented, and built a method during the
engagement, which is the whole of my
[AI system testing](projects/ai-system-security-testing.md) page. This field
produces attack surface faster than coursework covers it.

## Building this portfolio

I started the term with a Wix site that technically existed. Template stock
photography on the project cards, and a skills section where five of six tiles
read "N/A." It looked finished from a distance and fell apart on the first
click. Rebuilding it on MkDocs gave me version control and a build that refuses to
publish when I've made a broken internal link. That has caught several mistakes
I would otherwise have shipped.

Three things surprised me here.

Accessibility is measurable, and I failed it. White text on my orange buttons
measured 3.58 to 1 against a 4.5 to 1 minimum. So did my orange link color. Both
looked fine. I only found out by running the numbers, and fixed them to 5.22 and
5.18.

Design consistency is an argument. My advisor asked why Projects used a card
grid while Skills was four stacked text blocks. I had no answer, so I rebuilt
Skills on the same pattern so a visitor learns the interaction once.

Third, and the one I expect to matter longest. Late in the term I wanted to publish real
client documents as evidence. Reading them again, one was eight days past its
testing window with the report undelivered, naming four client employees, a
staging hostname, and a colleague's cell number. Stripping the
names wouldn't have fixed it. What went up instead is a
[sanitized finding](competencies/web-application-testing.md) and a redacted
[rules of engagement](competencies/authorized-practice.md), identifiers removed
and reasoning intact. Deciding what not to publish is the same judgment a scope
agreement asks for.

My advice to anyone starting one of these is to write the thing you got wrong.
My project pages name constraints that cost me hours before I understood them,
and a practitioner will believe those before any claim I make about myself.

This site isn't finished and shouldn't be. Next up is the OSCP when I pass it,
then more evidence behind the claims I've already made.

[All projects](projects/index.md){ .cb-btn }
[Get in touch](contact.md){ .cb-btn .cb-btn--ghost }
