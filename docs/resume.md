---
hide:
  - toc
---

# Resume

[Download PDF](assets/christian-bai-resume.pdf){ .cb-btn }

---

## Summary

Penetration tester running authorized web application, red team, and social
engineering assessments for commercial and federal clients, including FedRAMP
engagements. Owns engagements end to end, from scope through the client report.
Completing a B.S. in Cybersecurity at Old Dominion University and pursuing the
OSCP.

---

## Experience

### RISCPoint, Remote

**Penetration Tester**, May 2025 to Present

- Run web application, red team, and social engineering engagements end to end
  using Burp Suite Pro, Kali Linux, Metasploit, Nmap, and GoPhish, from scoping
  through client report delivery.
- Led a FedRAMP assessment for a federal cloud service provider covering more
  than twenty externally facing web applications on IIS and ASP.NET, producing
  twelve findings with three rated high severity.
- Found a DOM-based cross-site scripting flaw in a help component shared across
  five to six applications, where the sanitizer stripped literal and hex-encoded
  colons but not the HTML entity form.
- Identified an authorization bypass in an application with ten user roles, plus
  a deprecated OAuth 2.0 implicit flow and GraphQL introspection left enabled in
  production.
- Built and ran a phishing campaign against roughly thirty employees using a
  lookalike domain, and mapped red team techniques to MITRE ATT&CK.
- Extracted a client chatbot's full system prompt through direct prompt
  injection, documented as high severity. Wrote findings to FedRAMP Penetration
  Test Guidance for Third Party Assessment Organization review.

**Cyber Security Consultant**, Nov 2024 to May 2026

**Cyber Security Intern**, Apr 2024 to May 2026

- Wrote technical documentation and ran QA for a SaaS product performing
  automated penetration testing, reviewing tool output for accuracy and logging
  discrepancies.

Full write-ups are on the [internship page](projects/internship.md).

---

## Education

**Old Dominion University**, Norfolk, Virginia

Bachelor of Science, Cybersecurity. Expected 2026.

Relevant coursework in offensive security, network and wireless security,
cryptography, cloud security, digital forensics, and cyber law and ethics.

---

## Certifications

Offensive Security Certified Professional (OSCP), in progress

---

## Technical skills

**Offensive security.** Burp Suite Pro, Metasploit, Meterpreter, Nmap, GoPhish,
Kali Linux, John the Ripper, Hashcat

**Cloud and infrastructure.** AWS security assessment, ScoutSuite, IAM and S3
configuration review, MITRE ATT&CK, FedRAMP reporting, Windows Server, Active
Directory

---

## Projects

**Cloud Security Assessment, AWS**

Configuration review covering identity, storage, compute, and the network-facing
edge. Reduced a full ScoutSuite export to a short list of defensible findings by
checking each condition against the account as deployed.

**Offensive Security Labs**

Web exploitation through HackTheBox modules and coursework labs, covering
UNION-based SQL injection, reflected cross-site scripting, and REST API
manipulation through HTTP method substitution.

Full write-ups are on the [projects page](projects/index.md).
