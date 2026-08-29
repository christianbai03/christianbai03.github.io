# Offensive Security Labs

<div class="cb-meta" markdown>
<div><span class="cb-k">Environment</span><span class="cb-v">Isolated lab</span></div>
<div><span class="cb-k">Tools</span><span class="cb-v">Metasploit, John, Hashcat</span></div>
<div><span class="cb-k">Targets</span><span class="cb-v">Windows and Linux</span></div>
<div><span class="cb-k">Authorization</span><span class="cb-v">Lab systems only</span></div>
</div>

## Context

Hands-on exploitation work carried out in an isolated lab. Everything here was
run against systems built for the purpose, which is the only place this kind
of work belongs.

## Windows post-exploitation

Exploitation of a Windows target followed by post-exploitation using
Meterpreter. The interesting part is not landing the shell. It is what you can
establish afterward without tripping anything.

Work covered:

- Session establishment and migration
- Privilege escalation on the target
- Credential access from the compromised host
- Enumerating the host's position in the wider environment

**[FILL IN: the specific exploit or path you used, and one thing that
surprised you. A detail here proves you did the lab rather than read about
it.]**

## Credential attacks

Offline password cracking against captured hashes using John the Ripper and
Hashcat.

The practical work is less about running the tool and more about the decisions
around it. Identifying the hash type correctly, choosing between wordlist,
rule-based, and mask attacks based on what you know about the password policy,
and estimating whether a given attack is worth the time it will take.

**[FILL IN: what you cracked, how long it took, and what the result implied
about the password policy in place. Numbers make this page.]**

## Linux account and permission management

Less glamorous and more relevant than it sounds. User and group management,
permission models, and where privilege boundaries are drawn on a Linux system.

Most privilege escalation findings in real assessments come from someone
setting a permission wrong rather than from a novel exploit, so understanding
the correct configuration is what lets you spot the incorrect one.

## What I took from it

Exploitation is the smallest part of the work. Getting in is a moment.
Understanding what that access actually means, documenting it so someone can
reproduce it, and knowing when to stop is the rest of the job.

## Artifacts

**[FILL IN: lab reports, screenshots, or command logs. Screenshots of a shell
with the target's hostname visible are strong evidence, provided the target
was yours or your school's.]**
