# Internship Experience

<div class="cb-meta" markdown>
<div><span class="cb-k">Organization</span><span class="cb-v">RISCPoint Advisory Group</span></div>
<div><span class="cb-k">Course</span><span class="cb-v">CYSE 368</span></div>
<div><span class="cb-k">Term</span><span class="cb-v">Spring 2026</span></div>
<div><span class="cb-k">Related skill</span><span class="cb-v"><a href="../../competencies/web-application-testing/">Web application testing</a></span></div>
</div>

## What this was

RISCPoint is a cybersecurity consulting firm founded in 2018, working with
private sector clients on SOC assessments and ISO consulting and with federal
clients on FedRAMP authorization support and CMMC. The penetration testing
department had three people in it. My supervisor, an outside contractor, and me.

A small team is the reason this placement produced anything worth putting on a
portfolio. Junior staff got assigned to real client work instead of being parked
on internal projects.

## The part of this that was not a straight line

I was not hired onto the penetration testing team. I was onboarded to a DevOps
group, writing documentation and running QA for a SaaS product that performed
automated penetration testing. The work was not hard, which is what made it
difficult to sit through. I was reviewing tool output and reformatting it.

When leadership on that engagement changed, I made the case to move to the
offensive side of the firm. That request is the single most consequential thing
I did during the internship. I include it here because the engagements below
only exist because I asked for different work instead of finishing the placement
I was assigned.

I came in having never opened Burp Suite. My supervisor taught me the tooling and
the methodology, I shadowed for several weeks, and I eventually ran engagements
end to end on my own.

## Engagements

### First solo web application test

A client application with multiple user roles and sensitive functionality. I
tested authentication, session management, authorization logic, file upload
handling, and API behavior.

The findings were information disclosure through application configuration,
stored cross-site scripting, parameter tampering, missing authentication on
several endpoints, an out-of-date OpenSSL version, and an insecure file upload.
There was also a logout function that did not invalidate the session token
server side, which is the textbook case I had read about and never seen in
production.

### Authorization bypass across ten user roles

This application had ten distinct roles, so the access control model had to be
mapped before testing could mean anything. The finding was an authorization
bypass that let low-privileged users reach administrator functions. The
application confirmed that a user was authenticated and never checked whether
that user was permitted to perform the action.

The same engagement surfaced an OAuth 2.0 implicit flow, which current OAuth
security guidance deprecates because of how it exposes access tokens in the
browser. Writing that finding meant explaining to a client that an
implementation which was acceptable several years ago no longer meets the bar.

### Red team assessment

Different objective from a penetration test. Rather than enumerating as many
vulnerabilities as possible, I was simulating a specific adversary with a
defined goal, which was breaching the production environment boundary from an
unauthenticated external position.

The engagement followed federal compliance guidelines and mapped every technique
to MITRE ATT&CK. I ran passive and active reconnaissance, built and executed
spear phishing campaigns, scanned for vulnerabilities, and found an
authentication flaw that permitted unauthenticated client registration.

The social engineering phase connected to my criminology coursework in a way I
did not anticipate. Rational choice theory turned out to be a usable framework
for deciding which pretexts were worth the effort relative to detection risk.

### FedRAMP assessment

The most demanding engagement. A federal cloud service provider with more than
twenty externally facing web applications, a multi-tenant SaaS environment, and
a social engineering campaign written into the test plan. The phishing component
targeted roughly thirty employees using a lookalike domain and a credential
capture page built in GoPhish.

The applications ran on Microsoft IIS with ASP.NET backends, which changed my
methodology. IIS handles error responses and session state differently from
Apache or Nginx, and ViewState and the ASP.NET page lifecycle were things I had
to research in real time.

## The finding I would point a reviewer to

A DOM-based cross-site scripting vulnerability in a help page viewer.

The component read a URL query string in JavaScript and passed it into
`document.write()` to build an iframe. The developer had tried to sanitize it by
stripping literal colons and their hex-encoded equivalent, but had not accounted
for the HTML entity form. The browser decoded that entity back into a colon
after the filter ran, which allowed a JavaScript URI that executed on page load.

What made it matter was reach. The same component was shared across five or six
applications in the client's suite, so one finding affected a large share of the
attack surface.

A scanner does not find this. It requires reading the client-side source and
tracing data from source to sink by hand.

## Testing an AI system

One client had integrated a large language model chatbot into their application
and I was assigned to assess it. Using direct prompt injection, I got the model
to output its initialization instructions and extracted the full system prompt,
including its behavioral guidelines and capability boundaries. That content is
usable for designing targeted attacks against the application, so I documented
it as high severity.

Nobody taught me how to do this. There was no checklist to follow, so I
researched prompt injection, experimented, and built a methodology for the
engagement. That is the part of the experience I expect to repeat most often,
because new attack surface arrives faster than coursework covers it.

## What the work changed

Two things.

I stopped trusting scanner output. Early on I took Burp Scanner results at face
value and kept finding that a flagged issue was a false positive or a security
control doing its job. Running into WAF responses that imitate SQL injection
behavior enough times fixed that. Manual validation is now a step I do not skip.

The second is report writing, and it is the bigger change. I knew documentation
mattered. I did not understand that most of the value a client receives from a
penetration test lives in the written deliverable. A finding nobody can act on
is worth close to nothing. Writing so that a developer, a manager, and a
compliance auditor can each take something away from the same document is a
skill I was noticeably worse at in month one.

The FedRAMP report is where that became concrete. The FedRAMP Penetration Test
Guidance requires each mandatory attack vector to be addressed individually with
evidence detailed enough to survive review by a Third Party Assessment
Organization. That is a higher documentation standard than commercial work asks
for.

## Documentation

Four documents came out of CYSE 368. All four are reformatted to the same
template.

| Document | Covers |
| --- | --- |
| [Internship Final Paper](../assets/papers/internship-final-paper.pdf) | The full placement. Management environment, every engagement, ODU curriculum connections, and the four MOA objectives reviewed against what actually happened. |
| [Reflection, Penetration Testing Engagements](../assets/papers/internship-reflection-penetration-testing.pdf) | AI system prompt injection and the file upload validation bypass. Also where I worked out the difference between a scanner result and a finding. |
| [Reflection, Client Assessments and Red Team](../assets/papers/internship-reflection-red-team.pdf) | Three engagements in sequence, including the ten-role authorization bypass, the OAuth implicit flow, GraphQL introspection, and the full red team attack chain. |
| [Reflection, FedRAMP Assessment](../assets/papers/internship-reflection-fedramp.pdf) | The FedRAMP engagement in detail. Twelve findings, three rated high, and the DOM-based XSS write-up. |

No client is named in any of these, and no account identifiers, hostnames, or
credentials appear in them.

[All projects](index.md){ .cb-btn .cb-btn--ghost }
