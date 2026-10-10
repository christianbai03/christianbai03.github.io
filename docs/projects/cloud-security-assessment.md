# Cloud Security Assessment

<div class="cb-meta" markdown>
<div><span class="cb-k">Platform</span><span class="cb-v">Amazon Web Services</span></div>
<div><span class="cb-k">Primary tool</span><span class="cb-v">ScoutSuite</span></div>
<div><span class="cb-k">Scope</span><span class="cb-v">IAM, S3, EBS, ALB</span></div>
<div><span class="cb-k">Related skill</span><span class="cb-v"><a href="../../competencies/assessment-triage/">Assessment triage</a></span></div>
</div>

## What this was

A configuration review of an AWS environment, covering identity, storage,
compute, and the network-facing edge. Cloud misconfiguration is a different
problem from a software vulnerability. There's usually no exploit to write,
because the service is doing exactly what it was configured to do and the
configuration is the flaw.

I picked this to feature because it's the work that taught me the difference
between running a tool and performing an assessment. Those felt like the same
activity until this project.

## What I did

I used ScoutSuite to enumerate the account and produce an initial picture, then
worked through the results by hand. Four areas were in scope.

IAM policy and role configuration, looking at permission scope and where trust
relationships were broader than the workload needed. S3 bucket exposure and
access policy, including public access settings and encryption at rest. EBS
volume encryption coverage across both attached and detached volumes. Load
balancer listener and TLS configuration at the edge.

## The part that isn't the tool

<figure>
<svg viewBox="0 0 700 250" role="img"
     aria-label="ScoutSuite enumerates the AWS account and returns many raw conditions. Manual triage against how the account is actually deployed reduces those to a small number of reportable findings."
     style="max-width:100%;height:auto;color:currentColor">
  <defs>
    <marker id="cb-arrow" viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>

  <rect x="10" y="60" width="130" height="120" rx="3" fill="none"
        stroke="currentColor" stroke-width="1.5"/>
  <text x="75" y="88" text-anchor="middle" font-size="13" font-weight="700"
        fill="currentColor">AWS account</text>
  <text x="75" y="112" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">IAM</text>
  <text x="75" y="130" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">S3</text>
  <text x="75" y="148" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">EBS</text>
  <text x="75" y="166" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">ALB</text>

  <line x1="146" y1="120" x2="240" y2="120" stroke="currentColor"
        stroke-width="1.5" marker-end="url(#cb-arrow)"/>
  <text x="193" y="110" text-anchor="middle" font-size="11" fill="currentColor">enumerate</text>
  <text x="193" y="138" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.7">ScoutSuite</text>

  <rect x="248" y="40" width="150" height="160" rx="3" fill="none"
        stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="323" y="30" text-anchor="middle" font-size="12" font-weight="700"
        fill="currentColor">raw conditions</text>
  <g fill="currentColor" opacity="0.55">
    <rect x="266" y="58" width="114" height="6" rx="2"/>
    <rect x="266" y="72" width="114" height="6" rx="2"/>
    <rect x="266" y="86" width="114" height="6" rx="2"/>
    <rect x="266" y="100" width="114" height="6" rx="2"/>
    <rect x="266" y="114" width="114" height="6" rx="2"/>
    <rect x="266" y="128" width="114" height="6" rx="2"/>
    <rect x="266" y="142" width="114" height="6" rx="2"/>
    <rect x="266" y="156" width="114" height="6" rx="2"/>
    <rect x="266" y="170" width="114" height="6" rx="2"/>
    <rect x="266" y="184" width="114" height="6" rx="2"/>
  </g>

  <line x1="404" y1="120" x2="498" y2="120" stroke="#E8590C"
        stroke-width="2.5" marker-end="url(#cb-arrow)"/>
  <text x="451" y="104" text-anchor="middle" font-size="11" font-weight="700"
        fill="#E8590C">manual triage</text>
  <text x="451" y="140" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.8">is this live</text>
  <text x="451" y="154" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.8">as deployed?</text>

  <rect x="506" y="86" width="150" height="68" rx="3" fill="none"
        stroke="currentColor" stroke-width="1.5"/>
  <text x="581" y="76" text-anchor="middle" font-size="12" font-weight="700"
        fill="currentColor">findings</text>
  <g fill="#E8590C">
    <rect x="524" y="104" width="114" height="6" rx="2"/>
    <rect x="524" y="118" width="114" height="6" rx="2"/>
    <rect x="524" y="132" width="114" height="6" rx="2"/>
  </g>

  <text x="350" y="230" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">
    The orange step is the work. Everything else is tooling.
  </text>
</svg>
<figcaption>The scanner produces the middle column. Deciding which of those
conditions are exploitable in the account as it is actually deployed produces
the right-hand column, and that judgment is the part a client is paying
for.</figcaption>
</figure>

A scanner reports conditions that are technically accurate and contextually
indistinguishable from one another. Every line looks equally valid on the page.
A public bucket holding static marketing assets and a public bucket holding
database exports generate the same output.

So the analytical work is deciding which conditions are live given how the
environment actually gets used, then being able to defend that call when
somebody pushes back on it. An unfiltered scanner export delivered as a report
hands that work back to the client, which is the opposite of what they asked
for.

## A finding worth the structure

One result was worth writing up carefully, because the severity wasn't obvious
from the scanner line alone. Application code generated API tokens using MD5.

MD5 is not a suitable function for token generation. It's fast by design, which
is the opposite of what you want here, and it has practical collision attacks
against it. A token produced this way is more predictable than the application
assumes.

The write-up for that one separated what the condition is from what it lets an
attacker do, because those are different sentences and a developer needs both.

## What changed in how I work

Judgment, not tooling, is what this project developed. I came in thinking the
skill was knowing which scanner to run. The skill is reading the output
critically and treating severity as a claim I have to support.

That habit carried into web application testing, where the same question comes
up about which low-severity results earn space in a report and which belong in
an appendix. I go into [assessment triage](../../competencies/assessment-triage/)
on the competency page, because this project is where the reasoning came from.

## Media and evidence

The diagram above is mine. I made it to show the shape of the work rather than
describe it, since the triage step is the whole argument of this page and it's
hard to picture from a paragraph.

[All projects](index.md){ .cb-btn .cb-btn--ghost }
