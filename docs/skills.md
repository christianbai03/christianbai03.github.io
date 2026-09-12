---
hide:
  - toc
---

# Skills

Four competencies this portfolio documents, each mapped to the
[NACE Career Readiness Competencies](https://www.naceweb.org/career-readiness/competencies/career-readiness-defined)
and supported by linked evidence. Skills still in development are marked as such.

---

## 01. Web application penetration testing

<div class="cb-meta" markdown>
<div><span class="cb-k">NACE</span><span class="cb-v">Technology, Critical Thinking</span></div>
<div><span class="cb-k">Artifact</span><span class="cb-v"><a href="../projects/offensive-security-labs/">Offensive Security Labs</a></span></div>
</div>

Authorized testing of web applications and network services, performed from Kali
Linux using Burp Suite for request interception and manipulation. Coverage
includes injection, broken access control, authentication and session handling,
and insecure direct object reference. Supporting work was completed through
HackTheBox web exploitation modules and structured coursework labs.

Three technical constraints from that work are worth stating precisely. UNION
based SQL injection requires the injected query to return the same column count
as the original, and setting the original selector to a non-existent record
isolates the injected output for reading. Reflected cross-site scripting appears
in the response body and is not observable from the request URL. REST API
manipulation through HTTP method substitution requires targeting records that
exist in the backing database.

The operational lesson was that detection and comprehension are separate
capability levels. Identifying that an input is injectable is a scanner-level
result. Explaining the mechanism, the preconditions, and the impact to the
engineer responsible for remediation requires understanding why the payload
works. I am building toward assessment work where that second level is the
deliverable, and the remaining pages on this site are structured as evidence of
it.

---

## 02. Technical security writing

<div class="cb-meta" markdown>
<div><span class="cb-k">NACE</span><span class="cb-v">Communication, Professionalism</span></div>
<div><span class="cb-k">Artifact</span><span class="cb-v">Sample vulnerability finding (redacted)</span></div>
</div>

Production of written findings suitable for delivery to a client engineering
team. Each finding states the affected component, the reproduction steps, the
demonstrated impact, and remediation guidance scoped to the system under test.
Severity and urgency are recorded as separate fields, since a high-severity
finding on a system scheduled for decommission does not carry the same
remediation priority as a moderate finding in production.

Findings are written for two distinct readers. An engineer requires the exact
request that triggered the condition and the minimum steps to reproduce it. A
compliance or risk owner requires the classification, the affected control, and
whether the condition blocks an audit objective. Writing a single document that
serves both without padding either is the constraint.

My early write-ups recorded technical detail accurately and left remediation
implied. Revising that approach improved the rate at which findings were acted
on. This remains the competency I expect to develop longest, because writing
precisely under engagement deadlines is a distinct discipline from testing.

---

## 03. Assessment triage and severity judgment

<div class="cb-meta" markdown>
<div><span class="cb-k">NACE</span><span class="cb-v">Critical Thinking</span></div>
<div><span class="cb-k">Artifact</span><span class="cb-v"><a href="../projects/cloud-security-assessment/">Cloud Security Assessment</a></span></div>
</div>

Configuration review of an AWS environment using ScoutSuite, covering IAM policy
and role scope, S3 bucket exposure and access policy, EBS volume encryption
coverage, and load balancer listener and TLS configuration.

Automated output requires manual triage before it becomes a finding. A scanner
reports conditions that are technically accurate and contextually
indistinguishable from one another. Determining which conditions are exploitable
in the account as deployed, and defending that determination under review, is the
analytical work. An unfiltered scanner export delivered as a report transfers
that work to the client.

The same judgment applies to application testing, where low-severity results have
to be sorted into findings that justify remediation effort and observations that
belong in an appendix. I treat severity as a claim I have to be able to support,
not a field copied from tool output.

---

## 04. Authorized and compliant testing practice

<div class="cb-meta" markdown>
<div><span class="cb-k">NACE</span><span class="cb-v">Professionalism, Technology</span></div>
<div><span class="cb-k">Artifact</span><span class="cb-v">Coursework in cyber law and ethics</span></div>
</div>

Offensive security work is bounded by written authorization before it is bounded
by technique. Scope, rules of engagement, and testing windows determine what
systems may be touched and what methods are permitted against them. Coursework in
cyber law and ethics provides the regulatory context for those constraints.

Engagements follow published methodology so that results are reproducible and
defensible. NIST SP 800-115 provides the assessment structure, and the OWASP
testing guide provides web application coverage. Working to a documented method
also produces the evidence trail needed if a client disputes a result or an
action taken during testing.

In practice this means staying inside the agreed scope, logging actions taken
against each target, and withholding publication of findings concerning systems I
do not own. The pages on this site describe classes of vulnerability and
methodology. No client, target, or host identifier appears anywhere in this
portfolio.

