# Cybersecurity and Society

<div class="cb-meta" markdown>
<div><span class="cb-k">Course</span><span class="cb-v">CYSE 201S</span></div>
<div><span class="cb-k">Type</span><span class="cb-v">Research and analysis</span></div>
<div><span class="cb-k">Related skill</span><span class="cb-v"><a href="../../competencies/assessment-triage/">Assessment triage</a></span></div>
</div>

## Why this course is on a technical portfolio

I picked this one over another lab class on purpose. Everything else I have
featured is me attacking something. This is the course that changed how I think
about the people on the other side of the attack, and it is the reason I no
longer write findings the way I used to.

The short version is that the technical explanation of a breach is almost never
the interesting part. The vulnerability is a mechanism. The reason it sat
unpatched, or the reason nobody escalated the alert, is the actual cause.

## What I did

The course covered breach analysis, IoT risk, human factors in security, and
criminological theory applied to offending online. My work in it included
written article reviews, a career paper, and a presentation, alongside research
into specific incidents.

The two threads that stuck were the Equifax analysis and the deterrence
material.

## Equifax

I researched the 2017 Equifax breach expecting to write about the exploit. That
turned out to be the least useful angle available.

The GAO review of the incident does not lead with the vulnerability. It
identifies four contributing factors, which are identification deficiencies,
detection gaps, inadequate segmentation of database access, and poor data
governance, and concludes those factors together allowed the attacker to gain
access and extract information.[^gao]

Three of those four are organizational. Only one is anything a scanner would
report. Writing that up forced me to accept that a company can pass every
technical check on a list and still lose 140 million records because nobody
owned the process of acting on what the checks returned.

[^gao]: U.S. Government Accountability Office, *Data Protection: Actions Taken
    by Equifax and Federal Agencies in Response to the 2017 Breach*, GAO-18-559.
    <https://www.gao.gov/products/gao-18-559>

## Deterrence, and why it bothered me

The criminology material included strain theory, biological explanations of
offending, and deterrence research. Deterrence is the one I keep coming back to
because it contradicted what I assumed.

The National Institute of Justice summarizes the research plainly. The chance of
being caught is a vastly more effective deterrent than even draconian
punishment, and increasing the severity of punishment does little to deter
crime.[^nij]

I had assumed the opposite, in the vague way you assume things you have never
examined. The implication for security work is uncomfortable, because most
organizational security policy is built on severity. Harsh acceptable-use
policies, termination language, threatened legal consequences. If the research
holds, detection capability does more to change behavior than any of that, and a
visible, credible chance of being noticed beats a severe penalty nobody expects
to face.

[^nij]: National Institute of Justice, *Five Things About Deterrence*.
    <https://nij.ojp.gov/topics/articles/five-things-about-deterrence>

## Where it got difficult

The hard part was not the reading. It was that this course does not have clean
answers, and I had gotten comfortable in classes where the answer is a flag or a
shell.

I wrote at least one paper that was mostly description. I explained what
happened in an incident and stopped there, because summarizing felt like
analysis. Getting feedback on that was useful in a way that finding a
vulnerability never is, since a lab tells you immediately when you are wrong and
an argument does not.

The other difficulty was applying models like Maslow's hierarchy to technology
use without turning it into a stretch. It is easy to map anything onto a
framework if you are not honest about where the fit breaks down.

## What I learned

Two things, and the second one surprised me.

Technical severity and organizational risk are different quantities. A finding
that is trivially exploitable in a system nobody depends on matters less than a
moderate finding in a system with no ownership and no monitoring. I already knew
that as a slogan. This course gave me the evidence for why it is true.

Second, I write differently now. My findings used to end at the technical
description because that felt like the rigorous place to stop. I now include
what has to change organizationally for the fix to hold, because the Equifax
material made it obvious that a patch nobody is accountable for applying is not
a remediation.

## How it connects to the rest of my work

This is the analytical half of what I do. The
[offensive security labs](offensive-security-labs.md) page covers finding the
flaw. This one covers why finding it is not enough.

It maps directly to the reasoning I use on the
[assessment triage](../../competencies/assessment-triage/) competency page, where
the work is deciding which technically valid conditions actually matter in a
given environment. That judgment came from here, not from a scanner.

[All projects](index.md){ .cb-btn .cb-btn--ghost }
