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

A finding from a client penetration test, published as a writing sample. The
client, the application, every hostname, cookie name, token and account value
are removed or replaced with placeholders. The timing values and the reasoning
are unchanged.

The application's password reset flow returns the same status code, the same
redirect, and the same visible content whether or not the submitted address has
an account behind it. By the usual checks it is not vulnerable, and testing by
eye would record it that way.

What separates the two cases is how long the server takes. A valid address took
1190 ms, an address with no account took 19 ms, and the application reported
both in an `X-Runtime` response header, so the differential could be read
directly rather than timed. The cause is almost certainly the reset email being
sent before the response returns, which only happens when there is somewhere to
send it.

The write-up holds the severity at Low and says why. Enumerating through this
endpoint mails a real password reset to every valid address it hits, so running
it at any scale produces a wave of confused users and a help desk that notices.
A finding can be real and still be expensive to exploit quietly, and a report
that does not say so is overselling.

[Read the finding](../assets/samples/redacted-finding-account-enumeration.pdf){ .cb-btn }

## What the work changed

Detection and comprehension are separate capability levels. Identifying that an
input is injectable is a scanner-level result. Explaining the mechanism, the
preconditions, and the impact to the engineer responsible for remediation
requires understanding why the payload works.

I am building toward assessment work where that second level is the deliverable.
The [project pages](../projects/index.md) are structured as evidence of it.

[All competencies](index.md){ .cb-btn .cb-btn--ghost }
