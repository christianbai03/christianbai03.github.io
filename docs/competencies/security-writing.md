# Technical security writing

<div class="cb-meta" markdown>
<div><span class="cb-k">NACE</span><span class="cb-v">Communication, Professionalism</span></div>
<div><span class="cb-k">Evidence</span><span class="cb-v">Redacted vulnerability finding</span></div>
<div><span class="cb-k">Output</span><span class="cb-v">Written findings</span></div>
<div><span class="cb-k">Status</span><span class="cb-v">In development</span></div>
</div>

## Scope

Production of written findings suitable for delivery to a client engineering
team. Each finding states the affected component, the reproduction steps, the
demonstrated impact, and remediation guidance scoped to the system under test.

Severity and urgency are recorded as separate fields. A high-severity finding on
a system scheduled for decommission does not carry the same remediation priority
as a moderate finding in production, and collapsing the two into one number
loses that distinction.

## Applied technique

Findings are written for two readers with incompatible needs.

An engineer requires the exact request that triggered the condition and the
minimum steps to reproduce it. Anything else is noise while they are trying to
confirm the bug exists.

A compliance or risk owner requires the classification, the affected control, and
whether the condition blocks an audit objective. The request itself is irrelevant
to them.

Writing a single document that serves both without padding either is the
constraint. My working approach is a short factual body for the engineer and a
classification header for the risk owner.

## Evidence

!!! note "Artifact to link"

    One redacted finding write-up. Strip client names, hostnames, IP addresses,
    ARNs, and account identifiers first, or reproduce the finding against a lab
    target and publish that version instead.

## What the work changed

My early write-ups recorded technical detail accurately and left remediation
implied. Revising that approach improved the rate at which findings were acted
on.

This remains the competency I expect to develop longest. Writing precisely under
engagement deadlines is a distinct discipline from testing, and being good at one
does not carry over to the other.

[All competencies](index.md){ .cb-btn .cb-btn--ghost }
