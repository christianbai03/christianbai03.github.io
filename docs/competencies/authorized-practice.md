# Authorized and compliant testing practice

<div class="cb-meta" markdown>
<div><span class="cb-k">NACE</span><span class="cb-v">Professionalism, Technology</span></div>
<div><span class="cb-k">Evidence</span><span class="cb-v">Cyber law and ethics coursework</span></div>
<div><span class="cb-k">Standards</span><span class="cb-v">NIST SP 800-115, OWASP</span></div>
<div><span class="cb-k">Status</span><span class="cb-v">Foundational</span></div>
</div>

## Scope

Offensive security work is bounded by written authorization before it is bounded
by technique. Scope, rules of engagement, and testing windows determine what
systems may be touched and what methods are permitted against them. Coursework in
cyber law and ethics provides the regulatory context for those constraints.

## Applied technique

Engagements follow published methodology so results are reproducible and
defensible.

[NIST SP 800-115](https://csrc.nist.gov/pubs/sp/800/115/final) provides the
assessment structure, covering planning, discovery, attack, and reporting. The
[OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
provides web application coverage.

Working to a documented method also produces the evidence trail needed if a
client disputes a result or questions an action taken during testing. Without it,
the only record of what happened is memory.

## Evidence

The document that decides whether testing is authorized work or a crime. Every
client identifier, contact, hostname, IP address and date is removed. The
scoping structure, the methodology basis in NIST SP 800-115 and OSSTMM, and the
exclusions are intact.

Two things in it are worth reading closely. The scope table lists each
application with the specific accounts and roles provided, because authorization
attaches to named targets rather than to an organization in general. The
exclusions section rules out denial of service and destructive database queries
outright, which answers the question of what a tester does when the fastest path
to proving impact is the one the client did not agree to.

[Rules of Engagement](../assets/samples/rules-of-engagement-redacted.pdf){ .cb-btn }

## What the work changed

In practice this means staying inside the agreed scope, logging actions taken
against each target, and withholding publication of findings concerning systems I
do not own.

That last constraint is visible here. The pages on this site describe classes of
vulnerability and methodology. No client, target, or host identifier appears
anywhere in this portfolio.

[All competencies](index.md){ .cb-btn .cb-btn--ghost }
