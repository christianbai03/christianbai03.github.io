# Assessment triage and severity judgment

<div class="cb-meta" markdown>
<div><span class="cb-k">NACE</span><span class="cb-v">Critical Thinking</span></div>
<div><span class="cb-k">Evidence</span><span class="cb-v"><a href="../../projects/cloud-security-assessment/">Cloud Security Assessment</a></span></div>
<div><span class="cb-k">Tools</span><span class="cb-v">ScoutSuite, AWS console</span></div>
<div><span class="cb-k">Status</span><span class="cb-v">Applied</span></div>
</div>

## Scope

Configuration review of an AWS environment using ScoutSuite, covering IAM policy
and role scope, S3 bucket exposure and access policy, EBS volume encryption
coverage, and load balancer listener and TLS configuration.

## Applied technique

Automated output requires manual triage before any of it becomes a finding. A
scanner reports conditions that are technically accurate and contextually
indistinguishable from one another. Every item looks equally valid on the page.

The analytical work is determining which conditions are exploitable in the
account as deployed, then defending that determination under review. A public
bucket holding static marketing assets and a public bucket holding database
exports produce the same scanner line.

An unfiltered scanner export delivered as a report transfers that work to the
client, which is the opposite of what they paid for.

## Evidence

The [cloud security assessment page](../projects/cloud-security-assessment.md)
carries the methodology and an example finding structure.

!!! danger "Before publishing specifics"

    If the reviewed environment was a client's, do not publish findings without
    written permission. Strip account IDs, ARNs, bucket names, and hostnames
    first. Describing the class of finding without the target is always the safe
    version.

## What the work changed

The same judgment applies to application testing. Low-severity results have to be
sorted into findings that justify remediation effort and observations that belong
in an appendix.

I treat severity as a claim I have to be able to support, not a field copied from
tool output. That is the habit the cloud work built.

[All skills](../skills.md){ .cb-btn .cb-btn--ghost }
