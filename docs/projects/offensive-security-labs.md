# Offensive Security Labs

<div class="cb-meta" markdown>
<div><span class="cb-k">Experience</span><span class="cb-v">Self-directed lab practice</span></div>
<div><span class="cb-k">Platform</span><span class="cb-v">HackTheBox and coursework labs</span></div>
<div><span class="cb-k">Tools</span><span class="cb-v">Burp Suite, cURL, DevTools, Metasploit</span></div>
<div><span class="cb-k">Authorization</span><span class="cb-v">Lab systems only</span></div>
</div>

## What this was

Alongside my cybersecurity coursework at Old Dominion University I have been
working through HackTheBox web exploitation modules and structured lab exercises.
Everything here ran against systems built to be attacked. That is the only place
this work belongs.

I chose to feature this over a single course because it is where the gap between
knowing a concept and being able to execute it actually closed. A lecture can
tell you SQL injection exists. A lab tells you your injection is failing because
your column count is wrong and gives you nothing else to go on.

## What I did

The web exploitation work covered UNION-based SQL injection, cross-site
scripting, REST API abuse through HTTP method manipulation, and request crafting
with cURL. On the network and system side I worked through exploitation with
Metasploit, Windows post-exploitation using Meterpreter, offline password
cracking with John the Ripper and Hashcat, and Linux account and permission
management.

I ran the labs the way I would run an engagement rather than racing for the flag.
That meant reading responses carefully, filtering irrelevant traffic out of
DevTools, and writing down what I tried when something failed.

## Where I got stuck

Three problems cost me the most time and taught me the most.

UNION injection failed repeatedly until I understood that the injected query has
to return the same number of columns as the original, and that setting the
original record to a nonexistent id is what surfaces the injected output cleanly.
Numeric input validation turned out to be bypassable with scientific notation in
some cases, which I would not have guessed from reading about it.

Cross-site scripting confused me because I kept checking the URL for evidence the
payload had fired. It reflects in the response body. That one sentence would have
saved me an hour, and it is the kind of thing you only really learn by losing the
hour.

REST API exercises only worked once I stopped throwing methods at arbitrary
endpoints and started targeting records that actually existed in the database.

## What I learned

The techniques mattered less to me than the habit they built. I slowed down. I
started reading what the application was actually telling me instead of assuming
my payload was right and the target was broken. Almost every time I got stuck,
the answer was already sitting in the response body.

I also underestimated how much of this job is note-taking. The labs where I wrote
down every attempt were the ones I could still explain a week later. Being able
to walk someone through the path is what separates a finding from a screenshot.

## Why it matters for where I am going

This is the foundation under the professional assessment work I want to do.
Authorized web application testing is exactly these techniques applied to systems
someone has asked me to test, under a scope agreement, with a written report at
the end. The labs are where I get to be wrong cheaply, which is worth a great
deal when the alternative is being wrong on a client engagement.

## Artifacts

!!! note "Add your evidence here"

    Link two or three of the following, whichever you have on hand.

    - Screenshots of completed HackTheBox modules or your profile progress page
    - A lab report or write-up from your coursework
    - Command logs or terminal captures from the Metasploit or password cracking
      exercises

    Screenshots of a shell on a lab target are strong evidence. Confirm the
    target was a lab or school system before publishing anything.
