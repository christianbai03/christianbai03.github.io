# Network and Wireless Security

<div class="cb-meta" markdown>
<div><span class="cb-k">Coursework</span><span class="cb-v">IT 315 and related</span></div>
<div><span class="cb-k">Areas</span><span class="cb-v">802.11, DNS, VPN</span></div>
<div><span class="cb-k">Type</span><span class="cb-v">Analysis and lab</span></div>
</div>

## Wireless security

Study of IEEE 802.11 security mechanisms and where they fail. Wireless is
worth understanding properly because the attack surface is physical. You
cannot firewall a radio signal, and the boundary of your network is wherever
the signal still resolves.

Covered:

- 802.11 authentication and encryption mechanisms across generations
- RF propagation, and how it determines real interception range rather than
  the coverage figure on a datasheet
- Practical implications for how far outside a building an attacker has to be

**[FILL IN: a specific conclusion you reached. For example, what the gap
turned out to be between the advertised coverage of an access point and the
range at which its traffic was still recoverable.]**

## Network infrastructure

Switch hierarchy and segmentation, and how network design decides how far an
attacker moves after the first compromise. A flat network turns one
compromised host into full internal access. A segmented one turns it into a
contained problem.

## DNSSEC

Analysis of DNSSEC, what it authenticates, and what it deliberately does not.
DNSSEC signs records so a resolver can verify they were not tampered with. It
does not encrypt the query, so it solves integrity and leaves confidentiality
entirely alone. That distinction gets misstated constantly.

## VPN weaknesses

Review of where VPN implementations break down in practice. The protocol is
rarely the problem. The failures tend to come from configuration, weak or
absent certificate validation, leaked DNS queries outside the tunnel, and
users who assume the VPN is doing more than it is.

**[FILL IN: the specific vulnerabilities or CVEs you researched.]**

## What I took from it

Networking knowledge is what separates a finding from a report. Knowing that a
service is exposed is the easy half. Knowing what an attacker reaches from
there, and what the network design prevents, is what makes the severity rating
defensible.

## Artifacts

**[FILL IN: link the papers or lab reports from this coursework.]**
