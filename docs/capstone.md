---
hide:
  - toc
---

# Capstone Reflection

<p class="cb-lede">A transfer into ODU, two years of client penetration testing,
and a portfolio I rebuilt from scratch this term. What follows is what actually
changed.</p>

## Where I started

I transferred into ODU's cybersecurity program knowing I wanted it to make me
employable in offensive security specifically, not security in general. What I
didn't have was any sense of the distance between coursework and the job. I
could run tools in a lab and assumed that was most of it. When my internship
started I had never opened Burp Suite, which is now the software I use most
days.

## The journey

CYSE 301 overlapped most with daily practice and CYSE 270 made Kali Linux
familiar before it became the environment I work in. The one that paid off
unexpectedly was CS 462. It covered cryptography well enough that when I found a
client hashing passwords with MD5, I could explain the risk instead of just
flagging it.

The internship at RISCPoint is where the degree turned into a skill set, and it
didn't start that way. I was onboarded to a DevOps team, writing documentation
and running QA for a product that performed automated penetration testing. The
work wasn't hard, which is what made it difficult to sit through. I spent a few
months reformatting tool output and watching the offensive side of the firm do
the job I had come there to learn.

When leadership on that engagement changed I asked to move over. I was an intern
with no track record making a request I had no standing to make, and I spent the
week after expecting to be told no. It is the most consequential thing I did in
two years, and everything on my [internship page](projects/internship.md) exists
because of it.

My first solo test was a web application with multiple user roles. I came out of
it with stored cross-site scripting, parameter tampering, missing authentication
on several endpoints, and an insecure file upload. Going in I had no idea whether
I would find anything at all.

Distrusting my own tools was the hardest habit to build. Early on I took Burp
Scanner results at face value, then kept finding that a flagged issue was a
false positive or a control doing its job. Enough WAF responses imitating SQL
injection cured me of that, and it is the reasoning behind my
[assessment triage](competencies/assessment-triage.md) page.

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

Looking back across these pages, two things keep showing up.

The first is that finding a problem is the easy half. A finding on my
[security writing](competencies/security-writing.md) page covers an application
that returned the same status code, redirect, and content whether or not an
email address had an account behind it. By every normal check it was fine. The
only thing separating the two cases was 1190 milliseconds against 19, and
writing it up took longer than finding it.

The second is that technical severity and organizational risk are different
quantities, which CYSE 201S taught me before a client did. I expected to write
about the Equifax exploit and found the Government Accountability Office
identified four contributing factors, three of them organizational. A company
can pass every check on a list and still lose 140 million records because nobody
owned acting on the results. That is what my
[cybersecurity and society](projects/cybersecurity-society.md) page argues.

Criminology coursework connected in a way I hadn't anticipated. Designing spear
phishing for a red team engagement, I used rational choice theory to weigh which
pretexts were worth the effort against the risk of being caught, which is the
calculation a real attacker runs too.

Report writing is the skill that grew most, and it isn't close. I knew
documentation mattered. What I didn't know is that most of the value a client
gets from a test lives in the written deliverable, and a finding nobody can act
on is worth about what one I never found is worth. I am still not a fast writer,
just a more careful one.

## Looking forward

My gaps are specific. I don't hold the OSCP yet and both roles I'm targeting
want it. My scripting is working rather than strong, and both job descriptions I
read this term ask for fluency in Python or Bash.

Unfamiliar ground worries me less. A client put a language model into their
application and I was assigned to assess it. No checklist existed, so I
researched prompt injection and built a method during the engagement, which is
the whole of my [AI system testing](projects/ai-system-security-testing.md)
page.

## Building this portfolio

I started the term with a Wix site that technically existed. Stock photography
on the project cards and a skills section where five of six tiles read "N/A."
Rebuilding it on MkDocs gave me version control and a build that refuses to
publish when I've made a broken internal link, which has caught several mistakes
I would otherwise have shipped.

Three things about that process caught me out.

Accessibility is measurable, and I failed it. White text on my orange buttons
measured 3.58 to 1 against a 4.5 to 1 minimum, and so did my orange link color.
Both looked fine to me. I only found out by running the numbers.

The second came from my ePortfolio advisor, who asked why Projects used a card
grid while Skills was four stacked text blocks. I had no answer. I built them
weeks apart and never looked at the two side by side, which is how most
inconsistency happens.

The third I expect to matter longest. Most of the way through the term I had
pages I was proud of and nothing attached to them. Every competency page ended
with an evidence heading and white space. A portfolio of claims with nothing
behind it is what most portfolios already are, and mine was one without my
noticing.

Filling those sections was harder than finding material. I work on client
engagements and almost none of it can be published as it stands. What went up is
a [sanitized finding](competencies/web-application-testing.md) and a redacted
[rules of engagement](competencies/authorized-practice.md), identifiers stripped
and reasoning intact. Deciding what could not go up took longer than writing
what did.

My advice to anyone starting one of these is to write the thing you got wrong.
My project pages name constraints that cost me hours before I understood them. I
am betting a practitioner trusts a write-up that admits a limitation over one
claiming a clean result, though I won't know whether that bet is right until
somebody in a position to hire me actually reads one.

[All projects](projects/index.md){ .cb-btn }
[Get in touch](contact.md){ .cb-btn .cb-btn--ghost }
