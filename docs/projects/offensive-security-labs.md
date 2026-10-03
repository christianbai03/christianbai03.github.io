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

<figure>
<svg viewBox="0 0 700 300" role="img"
     aria-label="A reflected cross-site scripting payload is sent in the request URL. The address bar still shows the raw payload text, unchanged. The rendered script appears only in the response body, which is where the result has to be checked."
     style="max-width:100%;height:auto;color:currentColor">
  <defs>
    <marker id="cb-arrow2" viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/>
    </marker>
  </defs>

  <rect x="12" y="34" width="190" height="96" rx="3" fill="none"
        stroke="currentColor" stroke-width="1.5"/>
  <text x="107" y="24" text-anchor="middle" font-size="12" font-weight="700"
        fill="currentColor">browser</text>
  <rect x="26" y="52" width="162" height="22" rx="2" fill="none"
        stroke="currentColor" stroke-width="1" opacity="0.6"/>
  <text x="34" y="67" font-size="10" font-family="monospace" fill="currentColor" opacity="0.85">?q=&lt;script&gt;…</text>
  <text x="107" y="96" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.7">address bar</text>
  <text x="107" y="114" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">unchanged</text>

  <line x1="208" y1="70" x2="292" y2="70" stroke="currentColor"
        stroke-width="1.5" marker-end="url(#cb-arrow2)"/>
  <text x="250" y="60" text-anchor="middle" font-size="11" fill="currentColor">request</text>

  <rect x="300" y="46" width="110" height="72" rx="3" fill="none"
        stroke="currentColor" stroke-width="1.5"/>
  <text x="355" y="78" text-anchor="middle" font-size="12" font-weight="700" fill="currentColor">application</text>
  <text x="355" y="98" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.7">echoes input</text>
  <path d="M 355 124 L 355 168 L 494 168" fill="none" stroke="currentColor"
        stroke-width="1.5" marker-end="url(#cb-arrow2)"/>
  <text x="430" y="160" text-anchor="middle" font-size="11" fill="currentColor">response</text>

  <rect x="502" y="132" width="186" height="96" rx="3" fill="none"
        stroke="#E8590C" stroke-width="2.5"/>
  <text x="595" y="122" text-anchor="middle" font-size="12" font-weight="700"
        fill="#E8590C">response body</text>
  <text x="514" y="160" font-size="10" font-family="monospace" fill="currentColor" opacity="0.85">&lt;div&gt;results for</text>
  <text x="514" y="178" font-size="10" font-family="monospace" fill="#E8590C">  &lt;script&gt;…&lt;/script&gt;</text>
  <text x="514" y="196" font-size="10" font-family="monospace" fill="currentColor" opacity="0.85">&lt;/div&gt;</text>
  <text x="595" y="218" text-anchor="middle" font-size="11" font-weight="700" fill="#E8590C">payload renders here</text>

  <text x="350" y="270" text-anchor="middle" font-size="11" fill="currentColor" opacity="0.75">
    Refreshing the URL tells you nothing. The proof is downstream.
  </text>
</svg>
<figcaption>Where a reflected XSS payload actually shows up. I spent an hour
watching the address bar for a change that was never going to happen there.</figcaption>
</figure>

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
