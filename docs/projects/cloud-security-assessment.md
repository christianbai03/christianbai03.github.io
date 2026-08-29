# Cloud Security Assessment

<div class="cb-meta" markdown>
<div><span class="cb-k">Platform</span><span class="cb-v">Amazon Web Services</span></div>
<div><span class="cb-k">Primary tool</span><span class="cb-v">ScoutSuite</span></div>
<div><span class="cb-k">Scope</span><span class="cb-v">IAM, S3, EBS, ALB</span></div>
<div><span class="cb-k">Output</span><span class="cb-v">Written findings</span></div>
</div>

## Context

Cloud misconfiguration is a different problem from a software vulnerability.
There is usually no exploit to write. The service is working exactly as
configured, and the configuration is the flaw. That changes how you assess it
and how you report it.

This assessment reviewed an AWS environment for configuration weaknesses across
identity, storage, compute, and network-facing services.

## Approach

I used ScoutSuite to enumerate the environment and produce an initial picture,
then worked through the results by hand. A scanner tells you what is
technically true. It does not tell you what matters in the context of the
account, and it produces findings that are accurate but not meaningful.

Areas reviewed:

- **IAM.** Policy and role configuration, permission scope, and where trust
  relationships were broader than the workload required.
- **S3.** Bucket exposure and access policy, including public access settings
  and encryption at rest.
- **EBS.** Volume encryption coverage across attached and detached volumes.
- **Application Load Balancer.** Listener configuration and TLS settings.

## Findings

**[FILL IN: two or three of the actual findings, written the way you would in
a report. Something like the structure below works well. Include a severity,
say why it matters in this environment specifically, and give the fix.]**

### Example structure to follow

**Finding.** API tokens generated using MD5

**Severity.** High

**Description.** Application code generated API tokens using MD5. MD5 is not
a suitable function for this purpose. It is fast by design, which is the
opposite of what token generation requires, and it has practical collision
attacks against it. A token generated this way is predictable in a way the
application does not account for.

**Impact.** **[FILL IN: what an attacker gets in this specific environment.
Session forgery, authentication bypass, whatever it actually enabled.]**

**Remediation.** Replace MD5 with a cryptographically secure random source
appropriate to the platform, and treat token generation as a secrets problem
rather than a hashing problem.

## What I took from it

The hardest part of cloud assessment is judgment, not enumeration. ScoutSuite
will hand you a long list, and most of it is noise in any given account. The
work is deciding which items are real given how the environment is actually
used, and being able to defend that call when somebody pushes back on it.

## Artifacts

**[FILL IN: link the report, the ScoutSuite output, or the written finding.
Redact account identifiers and any real resource names before you publish
anything from a live environment.]**

!!! danger "Before you publish anything from this project"

    If this assessment touched a real environment, whether an employer's or a
    client's, do not publish the findings without written permission, and
    strip account IDs, ARNs, bucket names, IP addresses, and hostnames first.
    Publishing a real finding without authorization is a fast way to end a
    career in this field before it starts. If in doubt, describe the class of
    finding and leave the specifics out.
