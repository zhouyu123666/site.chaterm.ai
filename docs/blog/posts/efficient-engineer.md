---
date: 2025-11-19
title: "How to become a 10x engineer in the AI ​​era"
author: Dsd2077
category: Technical
tags:
  - MCP
  - AI Tools
  - Spec Driven
  - Efficient
---

This article explores the concept of the "10x engineer," referring to individuals whose work efficiency far surpasses that of the average engineer.

It begins by highlighting the potential of AI tools to improve engineer productivity, and then uses the author's personal experience to illustrate how AI helped him increase his efficiency by two to three times when developing milestone projects.

---

## Introduction

The term "10x engineer" refers to individuals whose productivity far surpasses that of the average engineer. This concept can be traced back to research in the 1960s, particularly the views expressed by Frederick P. Brooks in his book *The Mythical Man-Month*. Brooks pointed out that in the field of software development, some programmers are significantly more productive than others, sometimes by as much as ten times. This observation was widely cited and gradually evolved into the "10x engineer" concept we know today.

Today, an increasing number of AI tools claim to improve engineer productivity by 10 times, including but not limited to well-known AI companies such as Anthropic, Trae, and Devin.

![Chaterm](https://chaterm-static.intsig.net/download/eff1.png)

![Chaterm](https://chaterm-static.intsig.net/download/eff2.png)

My favorite professor, Andrew Ng, also published a long article discussing how AI makes "10x" possible. Ng believes that as more and more jobs are supported by artificial intelligence, there will not only be "10 times the number of engineers," but also "10 times the number of marketers," "10 times the number of recruiters," "10 times the number of financial analysts," and other "10 times the number of professionals."

![Chaterm](https://chaterm-static.intsig.net/download/eff3.png)

[https://x.com/AndrewYNg/status/1887919658201960807?s=20](https://x.com/AndrewYNg/status/1887919658201960807?s=20)

If we start counting from the release of chatGPT (November 30, 2022), the Gen-AI trend has been going on for 3 years, and Cursor has been released for 2 years. Has AI really brought us 10 times the efficiency? If not yet, how can we get closer to becoming a "ten-times engineer"?

## A Real-World Case

I want to start by talking about my own experience and how much efficiency AI has actually brought me.

Before discussing efficiency improvements, I want to talk about how to measure efficiency. We can start by giving efficiency an abstract definition: the shorter the time spent doing the same thing, the higher the efficiency. However, this definition is insufficient, as it only specifies "time" and not "quality." For software engineering, I believe efficiency can be defined as: the shorter the time spent implementing the same task with minimal code and achieving bug-free performance, the higher the efficiency. This definition adds two extra requirements: avoiding "garbage code" and "problematic code." Without these two requirements, how can we talk about "improving efficiency"?

The development we are discussing here specifically refers to large-scale software engineering projects carried out by teams, not personal projects or toy projects. For example, an open-source project I participated in [GitHub - chaterm/Chaterm: Open source AI terminal and SSH Client for EC2, Database and Kubernetes.](https://github.com/chaterm/Chaterm) (an AI terminal tool), has a total code size of around 80,000 lines. The complexity of the original project is crucial for evaluating efficiency. Adding 1,000 lines of code in a project with 100,000 lines of code is significantly more difficult than adding 1,000 lines of code in a project with 1 million lines of code.

![Chaterm](https://chaterm-static.intsig.net/download/eff4.png)

Recently, I needed to develop a new feature—support for MCP. To complete this feature, I made approximately 10 commits. The two most critical commits are shown below, involving a total of 5,000 lines of effective code updates.

- [feat:Add MCP support part1:UI & McpHub · chaterm/Chaterm@cc2be7a · GitHub](https://github.com/chaterm/Chaterm/commit/cc2be7a57cc43fbab201bc40a48ca7c7fdd19094)

- [feat:Add MCP support part2:integrate MCP tools into agent · chaterm/Chaterm@44e4b8e · GitHub](https://github.com/chaterm/Chaterm/commit/44e4b8e0bb901b5d15a8d8c29b667ab54e0891d4)

![Chaterm](https://chaterm-static.intsig.net/download/eff5.png)

Since the project has been live for three weeks and no bugs have been found, I unilaterally determine that these 5000... The code is acceptable (interested readers can click the link to review it). Without AI, how long would it have taken me to complete this feature? I estimated about a month. The algorithm is simple: assuming 200-300 lines of effective code per day by hand, 5000 lines would take approximately a month.

With AI assistance, how long did it take? The answer is a little over a week, less than two weeks. Therefore, AI improved my efficiency by about two to three times. I'm still far from being a ten-times-efficient engineer. To achieve ten times the efficiency, completing this feature should only take 2-3 days. Is this possible? After review, the answer is yes.

Below, I will explain how to become a "ten-times-efficient engineer":
It can be divided into several parts: first, choose a convenient tool; second, adjust your programming paradigm; third, learn some AI coding techniques; and finally, through long-term deliberate practice, solidify these improvements into long-term capabilities.

## Choosing Your Favorite AI Tools

As the saying goes, "A skilled craftsman must first sharpen his tools," the first step to becoming a tenfold engineer is choosing the right AI tools for you. The current AI coding products are truly dazzling and ubiquitous.

Currently, the AI ​​coding products on the market can be mainly divided into four categories:

- **IDEs**: Cursor, Windsurf, Kiro, Trae, CodeBuddy, Lingma

- **CLIs**: Claude Code, OpenAI Codex

- **IDE Plugins**: GitHub Copilot, Cline, Agument

- **Web Platforms**: Lovable, Replit

When choosing tools, the best one is the one that suits your needs. Basically, each platform has its own unique features. The best way to choose is to try them all and see which one feels most comfortable using. Don't be swayed by the hype from online influencers/media outlets—praising Claude Code when it came out, and Codex when it came out. This is like someone telling you that programming in Vim is highly efficient; you have to experience it yourself to know.

If you're not comfortable coding in a terminal, then CLI-based products are out of the question. If you're not a professional developer, then web-based products are probably your best option. From my experience, there isn't a significant difference in AI capabilities between the various products, so just choose the one you're most comfortable using.

Personally, I prefer Cursor, mainly because its IDE makes code review easier. Other products don't do this as well. Recently, I discovered that ByteDance's Trae is also quite good, and it's cheaper than Cursor, so I plan to switch and try it next month.
## Thorough Code Review

When discussing AI efficiency improvements, if I had to choose one principle, it would definitely be "**thorough code review**." This is like "don't take your hands off the steering wheel/don't take your eyes off the road" when using assisted driving; **when coding with AI, try not to completely relinquish your final say on the code**.

I know that more and more people are no longer reviewing code when using AI for coding. Their approach is usually like this: give the AI ​​instructions -> AI executes coding -> run the project -> check if the functionality is implemented -> then start battling with the AI: "I want this, not that," "I want this implementation, not that implementation,"... "Are you an idiot?" If you're an AI coding practitioner, you've probably experienced these frustrating moments. This is an inevitable painful process for programmers/engineers taming AI.

I've observed that many of those recommending this method are developers without a professional background, primarily individual developers, especially those doing "build in public" on Twitter. And this is usually accompanied by their "achievements": coding with AI from scratch, launching a product in a very short time, and achieving a certain MRR (Monthly Recurring Revenue).

However, most people aren't doing independent development; they're engineers in companies. Aren't both just coding? What's the fundamental difference? The difference is huge. If you're an independent developer, I think you need to spend at least 50% of your time "selling the product" and the remaining 50% "making the product." The quality of the product only determines half of your success, or even less than half in my opinion. But if you're an engineer in a company, you'll spend the vast majority of your time "making the product" and don't need to worry as much about "selling the product." Furthermore, engineering development in companies is usually done in teams, which makes "code review" even more important.

Besides code quality issues, code review should pay special attention to one point: **code reusability**. Currently, AI isn't very good at this. When encountering a problem, it often writes a new function on the fly without prioritizing reusable functions or similar logic already existing in the code. If not handled carefully enough, projects can become increasingly bloated and eventually turn into a mountain of problems.

## Spec Coding

When we first started learning AI coding, the usual approach was to "give instructions to the AI ​​-> the AI ​​executes the coding -> run the project -> check if the functionality is implemented," continuously repeating this process until the desired effect was achieved. There's a specific term in the industry to describe this programming method—**Vibe Coding**.

After several months of practice, I found that Vibe Coding isn't the optimal approach to AI coding. So what's the correct approach? Here, I'll introduce another AI coding concept/paradigm that's recently become very popular in the community—**Spec Coding**.

Spec Coding stands for "Spec-Driven Development," where Spec is an abbreviation for specification. Its core idea is to use the "specification" as the core driving force for development.

If you've taken a software engineering course in college, you'll immediately understand what this means. The major assignment for a software engineering course requires a group to complete a project (usually an xxx management system). The final submission includes not only code but also four documents: a requirements analysis, a high-level design, a detailed design, and test documentation.

![Chaterm](https://chaterm-static.intsig.net/download/eff6.png)

There's an open-source project [GitHub - github/spec-kit: 💫 Toolkit to help you get started with Spec-Driven Development](https://github.com/github/spec-kit) specifically designed to help people develop with SSDs. Amazon's Kiro directly designs Spec as a mode. In Spec mode, it generates three documents for you before executing the code:

- requirements.md

- design.md

- task_list.md

![Chaterm](https://chaterm-static.intsig.net/download/eff7.png)

So, you thought I was going to sell you Kiro? Well, you're wrong! Spec programming is just a concept that can be applied to any development tool. Just like object-oriented programming, you can also do object-oriented programming in C.

Let's revisit Spec programming and consider why we need three documents first.

I think the most fitting explanation is: **Plan first, then build.** Documentation is a guide; through it, we can know in advance whether the subsequent actions will meet expectations. If not, we can correct them in advance; if they do, we can start execution. Whether there is documentation or not is actually not important. Documentation updates are best done retrospectively and consistently, rather than preemptively and piecemeal.

Below, I will demonstrate how to perform Spec programming in Cursor.

Recently, I expanded Chaterm's AI functionality from single-task mode to multi-task mode (i.e., multiple tasks can be executed simultaneously). After the refactoring, a bug appeared: when returning results, it failed to send the results back to the tab that initiated the request.

![Chaterm](https://chaterm-static.intsig.net/download/eff8.png)

Select plan mode and submit the problem description to the AI. It will provide an analysis of the problem and a solution.

![Chaterm](https://chaterm-static.intsig.net/download/eff9.png)

The AI's analysis seems correct, but if you click "build" at this point, you're doomed. This will still lead to the previous cycle of "reviewing code -> rejecting solutions -> constantly calibrating with the AI." At this point, we can understand it as the AI ​​providing a "requirements document," but not a "implementation plan." Remember, AI is best at: **seriously talking nonsense**, and even after years of model iteration, this still happens frequently. Therefore, we need to see not only what it says, but also what it does. At this point, we need the AI ​​to provide an implementation plan:

Provide key details for each implementation.

After the AI ​​provides the implementation details, don't rush to click "build." Now is the time to review the implementation details; reviewing them now is much easier than reviewing them after modifying the code. The key is to examine two aspects: First, **data structure and algorithm**. If these two are sound, the program should be fine. Second, **code reusability**—check if the AI ​​has rewritten a bunch of new functions that already exist.

![Chaterm](https://chaterm-static.intsig.net/download/eff10.png)

![Chaterm](https://chaterm-static.intsig.net/download/eff11.png)

The AI's implementation details are largely correct, but some details have been overlooked, namely resource cleanup. Every time the AI ​​sends a message, it stores the message mapping relationship, only destroying it when the program terminates. Assuming the user initiates 500 interactions, 500 mapping relationships will be retained. This is clearly unreasonable.

![Chaterm](https://chaterm-static.intsig.net/download/eff12.png)

Give the following instructions (following the syllogism: What to do? How to do it? Why do it this way?):

Mapping cleanup needs to be done in advance. Clean up each message immediately after it's sent back. Otherwise, the mapping relationships will accumulate.

![Chaterm](https://chaterm-static.intsig.net/download/eff13.png)

Once everything is ready, click build, and it succeeds on the first try. Fixing such a bug only takes 10 minutes. If you don't do this, every two more rounds of battling with the AI ​​will multiply the time spent. And the code written this way is of guaranteed quality.

Looking at this, do you feel strange? What happened to the AI ​​doing the work? Why does it feel like you're doing so much yourself? You need to confirm the solutions provided by the AI, correct the mistakes made by the AI, and finally review the code provided by the AI. That's right. The bottleneck for a "ten-time engineer" is largely not in the AI, but in the person using the AI. In my opinion, AI is an engineer with average qualifications but extremely high comprehension. As long as you tell it the correct way, it can implement it immediately. In reality, it's the kind of person who understands things instantly.

## Utilize User Rules & Project Rules

Most mainstream programming software now supports custom rules (User Rules and Project Rules), a severely underrated feature. By setting explicit coding standards, architectural constraints, naming conventions, etc., in your project, you can make AI automatically follow these conventions when generating code. For example, you can specify specific design patterns, coding styles, or even your team's best practices. This significantly improves the quality of AI-generated code, reducing the workload of later review and modification. Utilizing these rules effectively is like equipping AI with a "coding guide," making it better understand your project requirements.

Generally, User Rules are given the highest priority, for example, placed at the beginning or end of System Prompts, to ensure that AI follows user instructions as closely as possible. Therefore, when we find that the AI's response does not meet our expectations, restricting it with User Rules is the best solution.

I added the following restrictions to my rules:

![Chaterm](https://chaterm-static.intsig.net/download/eff14.png)

## MCP

MCP (Model Context Protocol) is a powerful feature introduced by Anthropic that allows AI to interact directly with external tools, databases, and APIs. Through MCP, you can enable AI to access project documents, query databases, and call third-party services.

There are many aspects of MCP worth exploring, and many people think it's useless. In fact, using MCP effectively can greatly automate workflows. I will write a separate article later to discuss how to use MCP effectively.

Here, I'll just give a very practical example. When using AI for coding, I often encounter a situation where the AI ​​expands my cognitive boundaries—that is, the AI ​​solves a problem I don't understand. Many people, upon encountering this situation, consider their work finished after accepting the AI's code. But in fact, this is precisely a great opportunity to deepen understanding and learn new knowledge. "Learning by doing" is a good interpretation of Wang Yangming's concept of "unity of knowledge and action." With AI as a teacher, you can let it break down and explain each line of code. Understanding it isn't the end; true masters are always good at summarizing. We are not masters, and summarizing is too troublesome, but now we have AI as a great helper.

Use MCP to let AI summarize problems and write them into its own knowledge base. You can use Notion/Yuque/Obsidian; here I'm using our self-developed Confluence MCP server to connect to the enterprise's knowledge base.

Review these notes periodically to refresh your knowledge.

![Chaterm](https://chaterm-static.intsig.net/download/eff15.png)

## Counterintuitive Advice

Many people believe that in the AI ​​era, engineers should focus on "how to better use AI tools," such as Prompt Engineering. PE is important, but not fundamental. What truly sets you apart is still your fundamental skills as a software engineer.

The following seemingly counterintuitive advice is key to becoming a "ten-fold engineer":

1. **Understand the language you use more deeply than ever before**

Not just superficially "knowing how to use it," but delving into the underlying details of the language's type system, runtime mechanisms, memory models, concurrency models, etc.

The reason is simple: when AI provides code, you need to be able to judge whether it's correct, efficient, and whether it's fallen into the pitfalls of the underlying mechanisms. AI is just too easy to write seemingly correct code. You can easily be led astray if you're not careful. Every time you correct it, it will only say: "You're absolutely right!"

2. **Understand the frameworks you use more deeply than ever before**

Understanding the framework's operating mechanism, lifecycle, data flow, and performance bottlenecks is essential to guiding AI to write code that "conforms to the framework's best practices." If your understanding of the framework isn't deep enough, you can only accept seemingly working code written by AI. I've also encountered many pitfalls in this area.

3. **Master data structures and algorithms**

Even if AI can write code, data structures and algorithms remain the "ultimate underlying logic" of software engineering.

You need to know which structures are suitable for which scenarios and what their complexity is. This allows you to judge whether the AI ​​has provided a good solution, rather than a mountain of garbage code piled up with if-else statements.

4. **Master Design Patterns**

Design patterns are essentially a set of experiential summaries on "how to write maintainable code." When requirements change or features are added, a clear and well-defined pattern allows you to make minimal code changes instead of dismantling the entire system and rebuilding. As I mentioned earlier, AI is very prone to writing garbage if-else code. AI can write code, but it won't make architectural decisions for you or consider the future scalability of the project. Design patterns are the core capability of this structural thinking. The future engineer's role will be: **you are responsible for thinking about the structure, and let AI implement the details.**

All of this is for: better reviewing AI's code and better guiding code writing. The ultimate goal is singular: to become an architect. The future development workflow will be one person guiding a group of agents.

## Cost

Finally, I want to talk about cost. In the past month, I've spent approximately $60-70 on Cursor, which is still below the maximum $200 set by Cursor and Claude. This might be one of the reasons I haven't become a "ten-fold engineer"—without ten times the usage, efficiency naturally can't be ten times higher.

The "usage" I'm referring to here isn't about aimlessly asking questions to boost your usage limit, but rather involving AI in real engineering tasks as much as possible: writing code, troubleshooting, revising designs, and then carefully reviewing and correcting them yourself. The essence of high usage is that you and the AI ​​form a high-frequency feedback loop—the more you use it, the more it helps you increase efficiency.

I know some very skilled engineers reached the $200 usage limit a long time ago. At the time, I didn't realize the extent to which they had utilized AI. Try it yourself; even without reviewing the code, just judging the reliability of AI-generated code by actual execution, reaching the $200 usage limit is extremely difficult.

Once my usage reaches $200 per month, I'll write another article explaining my experience.

## Outlook

Becoming a "ten-fold engineer," regardless of whether you have AI or not, is not an easy task. The emergence of AI does offer a possibility: leveraging it to amplify your abilities. The key is that you must first become an excellent engineer before you can leverage AI to become a "ten-fold engineer." Then, through deliberate practice, you can infinitely approach this goal.

If you are working on large-scale software engineering projects, it's unlikely you'll be able to completely delegate tasks to AI for the next three to five years. During this period, what we can do is maximize AI's strengths and use that to improve our own abilities to meet the future demands of engineers.

**Those who embrace the times will never be left behind.**

## Reference
- Website：https://chaterm.ai/
- Github：https://github.com/chaterm/Chaterm