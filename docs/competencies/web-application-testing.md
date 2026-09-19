# Web application penetration testing

<div class="cb-meta" markdown>
<div><span class="cb-k">NACE</span><span class="cb-v">Technology, Critical Thinking</span></div>
<div><span class="cb-k">Evidence</span><span class="cb-v"><a href="../../projects/offensive-security-labs/">Offensive Security Labs</a></span></div>
<div><span class="cb-k">Tools</span><span class="cb-v">Burp Suite, Kali Linux, cURL</span></div>
<div><span class="cb-k">Status</span><span class="cb-v">Primary focus</span></div>
</div>

## Scope

Authorized testing of web applications and network services, performed from Kali
Linux using Burp Suite for request interception and manipulation. Coverage
includes injection, broken access control, authentication and session handling,
and insecure direct object reference. Supporting work was completed through
HackTheBox web exploitation modules and structured coursework labs.

## Applied technique

Three constraints from that work are worth stating precisely, because each one
cost time before it was understood.

UNION-based SQL injection requires the injected query to return the same column
count as the original. Setting the original selector to a non-existent record
isolates the injected output so it can be read cleanly.

Reflected cross-site scripting appears in the response body. It is not observable
from the request URL, which makes the address bar a misleading place to look for
confirmation.

REST API manipulation through HTTP method substitution requires targeting records
that exist in the backing database. Methods thrown at arbitrary endpoints return
nothing useful.

## Evidence

!!! note "Artifacts to link"

    - HackTheBox module completions or profile progress page
    - Lab reports or write-ups from coursework
    - Terminal captures from the exploitation exercises

    Confirm every target was a lab or school system before publishing.

## What the work changed

Detection and comprehension are separate capability levels. Identifying that an
input is injectable is a scanner-level result. Explaining the mechanism, the
preconditions, and the impact to the engineer responsible for remediation
requires understanding why the payload works.

I am building toward assessment work where that second level is the deliverable.
The [project pages](../projects/index.md) are structured as evidence of it.

[All competencies](index.md){ .cb-btn .cb-btn--ghost }
