# AI System Security Testing

<div class="cb-meta" markdown>
<div><span class="cb-k">Context</span><span class="cb-v">Client engagement, RISCPoint</span></div>
<div><span class="cb-k">Target</span><span class="cb-v">LLM chatbot in a web application</span></div>
<div><span class="cb-k">Technique</span><span class="cb-v">Direct prompt injection</span></div>
<div><span class="cb-k">Related skill</span><span class="cb-v"><a href="../../competencies/assessment-triage/">Assessment triage</a></span></div>
</div>

## What this was

A client had put a large language model chatbot into their application and I was
assigned to assess it. I came at it the way I came at everything else that
quarter, which was with a web application testing methodology, and that was the
wrong starting point.

The application around the model behaves like any other web app. The model does
not. It takes instructions in the same channel it takes data, and there is no
parser between the two deciding which is which.

## Why the usual categories did not fit

SQL injection and cross-site scripting both exploit how an application processes
data. The payload is data that gets treated as code because a boundary was
missing.

Prompt injection targets the model's willingness to follow instructions. The
input is not escaping into a different context. It is arriving in exactly the
place the model reads instructions from, which is the only place it reads
anything from. There is no equivalent of parameterized queries to point a
developer at.

That took me a while to accept, because I kept looking for the boundary that was
being crossed.

## What I did

No checklist existed for this. I read what had been published on prompt
injection, worked through approaches against the target, and built a method as I
went.

The result was the model's complete system prompt. The instructions the client
had configured it with, including its role, the restrictions it was told to
enforce, the content it was told to filter, and the boundaries on what it would
do.

## Why that is a finding and not a curiosity

A system prompt is the security control. When the client wants the chatbot to
refuse something, the refusal lives in those instructions. Handing an attacker
the exact text of the control turns guesswork into reading comprehension, since
every restriction is now a known quantity to design around.

I documented it as High severity on that basis.

## What the work changed

Two things.

The field moves faster than training does. Nobody taught me this. The engagement
arrived, the technique was not in any course I had taken, and the useful skill
turned out to be building a testing approach for an unfamiliar attack surface
without waiting for someone to write the checklist.

The second is narrower. I stopped assuming that a new component in a familiar
application can be tested with the methodology that covers the rest of it. The
chatbot sat inside a normal web app behind normal authentication, and none of
that told me anything about how the model itself would behave.

## Evidence

The write-up of this engagement is in my internship documentation.

[Reflection, Penetration Testing Engagements](../assets/papers/internship-reflection-penetration-testing.pdf)
covers this finding and the methodology behind it.

Screenshots of the injection itself are not published here. The prompts and
responses are the client's configuration, and reproducing them would publish the
control I was reporting on.

[All projects](index.md){ .cb-btn .cb-btn--ghost }
