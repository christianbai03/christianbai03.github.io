# Skills

Six areas, each with what I actually do in it. Where a skill is still
developing I have said so rather than padding the list.

---

## 01. Web application penetration testing

My primary focus. Authorized testing against web applications using Burp Suite
for interception, request manipulation, and scanning, working out of Kali
Linux. Covers the standard application attack surface, including injection,
broken access control, authentication and session handling, and insecure
direct object references.

The output is a reproducible finding. Request, response, impact, and the
minimum steps another tester needs to confirm it.

---

## 02. Network service exploitation and post-exploitation

Exploitation of network services with Metasploit, and Windows
post-exploitation using Meterpreter, including privilege escalation,
credential access, and persistence in a lab environment.

Also covers Linux account and permission management, which is less exciting
than exploitation but is where a surprising number of real findings come from.

---

## 03. Credential attacks

Offline password cracking with John the Ripper and Hashcat, including hash
identification, wordlist and rule-based attacks, and reasoning about how long
a given hash type actually takes to break with the hardware available.

The practical takeaway from this work is that password policy advice is mostly
wrong, and that hash algorithm choice matters more than complexity rules.

---

## 04. Cloud security assessment

AWS environment review using ScoutSuite, covering IAM policy and role
configuration, S3 bucket exposure, EBS volume encryption, and load balancer
settings. Comfortable reading the output critically rather than exporting it
whole, since a scanner result is a starting point and not a finding.

Includes writing up cryptographic weaknesses found in application code, such
as API tokens generated with MD5.

---

## 05. Network and wireless security

IEEE 802.11 security mechanisms and their failure modes, RF propagation and
how it affects real coverage and interception range, switch hierarchy and
segmentation, DNSSEC, and where VPN implementations break down in practice.

---

## 06. Security writing and reporting

The part that makes the rest of it useful. Writing findings that a developer
or a system owner can act on without having to interpret them, separating
severity from urgency, and giving remediation guidance that fits the system
being tested rather than generic advice.

This extends to regulatory context. Knowing which framework applies, FedRAMP
or CMMC or otherwise, changes what a finding means to the organization
receiving it.

---

## Tools

| Category | Tools |
| --- | --- |
| Application testing | Burp Suite, Kali Linux |
| Exploitation | Metasploit, Meterpreter |
| Credential attacks | John the Ripper, Hashcat |
| Cloud | ScoutSuite, AWS console and CLI |
| Infrastructure | Windows Server, Active Directory, Hyper-V |

[See the work](projects/index.md){ .cb-btn }
