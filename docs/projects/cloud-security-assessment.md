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

- **IAM.** Policy and role configuration, permission scope, and trust
  relationships that were broader than what was required.
- **S3.** Bucket exposure and access policy, including public access settings
  and encryption at rest.
- **EBS.** Volume encryption coverage across attached and detached volumes.
- **Application Load Balancer.** Listener configuration and TLS settings.

## Findings

TBD

