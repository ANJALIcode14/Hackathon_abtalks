# AI-assisted development log — ABTalks hackathon

This is a truthful record of the relevant AI-assisted development work used for this project.

Two AI tools were used during development:

- **OpenAI Codex** — used to generate and modify the website implementation, add functionality, handle required edge cases, and fix the Vercel routing issue.
- **ChatGPT** — used to understand the hackathon requirements, review the generated project, identify missing functionality, plan improvements, troubleshoot Git/GitHub and deployment issues, and prepare the final submission workflow.

Quoted sections below reproduce prompts/instructions that were actually provided during development. Sections headed **Summary** describe the resulting AI work and are not presented as exact transcripts.

---

## 1. Original ABTalks brief and initial website creation — Codex

The following was the original hackathon problem statement provided to Codex:

> The Situation
> ABTalks runs a 60-day coding challenge for Indian college students.
>
> Students pick a track, build something every day, and maintain a public learning streak by submitting:
>
> A GitHub commit
> A LinkedIn post
>
> This daily proof of work helps them build consistency and become visible to recruiters.
>
> Most students use the platform on their phones, late at night after college.
>
> The product works.
>
> It has never been designed.
>
> Ship at Minimum
> Design and build the following three screens.
>
> 1. Landing Page (/)
>
> The first experience for a student who has never heard of ABTalks.
>
> Show enough trust, clarity, and motivation that they're willing to commit to a 60-day challenge.
>
> 2. Student Dashboard (/dashboard)
>
> The home screen after logging in.
>
> Include essentials such as:
>
> Current streak
> Today's task
> Progress through the challenge
> Overall completion
> Student standing or achievements
>
> 3. Challenge Day (/day/12)
>
> The complete experience of a single challenge day.
>
> A student should be able to:
>
> Read the day's task
> Understand what needs to be built
> Submit proof of work
> GitHub repository/commit
> LinkedIn post
> Submission
>
> Along with your repository and live deployment URL, include a Route Map.
>
> Provide the three routes below, one per line, in this exact order:
>
> /
> /dashboard
> /day/12
>
> We'll open every submission at 390px width (mobile viewport) and automatically capture screenshots of these routes.
>
> What We're Looking For
>
> Your redesign should:
>
> Be designed mobile-first (390px), with desktop as a secondary consideration.
> Be understandable to a student who has never heard of ABTalks.
> Handle real-world edge cases such as:
> First day with no streak
> A missed day
> An empty profile
> Introduce at least one thoughtful idea that improves the student experience.
>
> Out of Scope
>
> You do not need to build:
>
> Authentication
> Real user accounts
> A production database
>
> Use mocked data instead.
>
> A simple JSON file (written by you or generated using AI) is sufficient as long as the interface feels realistic.
>
> Also out of scope:
>
> Recruiter dashboard
> Admin panel
> Matching ABTalks' current tech stack
> Build using any framework or technology your AI workflow is most productive with.

### Summary

Codex created the initial ABTalks website as a lightweight static single-page application using `index.html`, `main.js`, and `style.css`.

It implemented the three requested paths:

- `/`
- `/dashboard`
- `/day/12`

It also created `ROUTE_MAP.txt` containing the required routes and used mocked student data.

There was no separate initial-build prompt after the problem statement; the problem statement itself was the instruction that drove the initial implementation.

---

## 2. Understanding and reviewing the generated project — ChatGPT

After Codex generated the website, ChatGPT was used to help understand what had been created and how the project worked.

ChatGPT helped with questions including:

- understanding the generated project and its files
- understanding local hosting and localhost ports
- understanding how the website could be shared publicly
- understanding Git and the local repository created by Codex
- connecting the existing local repository to GitHub
- pushing the existing project to the GitHub repository
- understanding Vercel deployment and the difference between a local URL and a public deployment URL

ChatGPT also reviewed the generated project against the hackathon requirements and identified missing functionality, particularly that some buttons were static and that the required edge cases were not sufficiently represented.

### Summary

ChatGPT's review identified that the initial version had the three required screens and a strong visual foundation, but needed a functional submission flow, better handling of the required edge cases, and functional behavior for visible interactive elements.

---

## 3. Focused UX and functionality improvement — Codex

The following prompt was given to Codex:

> I need you to make a focused final improvement pass on the existing ABTalks hackathon project.
>
> IMPORTANT:
> - Do NOT rebuild the website from scratch.
> - Keep the current visual design, layout, colors, typography and overall structure.
> - Keep the existing routes:
>   /
>   /dashboard
>   /day/12
> - Keep the project lightweight and use mocked data only. No backend/database/auth is needed.
> - Make the changes directly in the existing project.
>
> Hackathon requirements that must be satisfied:
>
> 1. ACTUAL DAY 12 SUBMISSION
>
> On /day/12, make the "Submit day 12" button functional.
>
> - GitHub repository URL is required.
> - LinkedIn post URL is required.
> - Live demo URL remains optional.
> - Validate that required fields are not empty and look like URLs.
> - When submission succeeds, show a clear success state.
> - Prevent duplicate submission or change the button to "Submitted ✓" after submission.
> - This can be frontend-only with mocked state/localStorage. No backend is required.
>
> 2. FIX DEAD BUTTONS/LINKS
>
> Make visible interactive elements either work or remove them if they aren't necessary.
>
> In particular:
>
> - "Watch 2 min guide" should open a small modal or useful placeholder explaining the guide.
> - "See all" under Recent wins should show the remaining mock wins.
> - Bottom navigation items should have meaningful behavior.
>
> 3. REQUIRED EDGE CASES
>
> The problem statement specifically requires handling:
>
> - First day with no streak
> - A missed day
> - Empty profile
>
> Implement these as realistic mocked states in the existing UI.
>
> 4. THOUGHTFUL UX IDEA
>
> Strengthen the existing product with one small thoughtful idea that helps students stay consistent.
>
> Prefer something such as:
>
> - a "You don't have to restart after missing a day" recovery message, OR
> - a "30-minute focus mode" for today's task.
>
> 5. MOBILE-FIRST
>
> The hackathon judges will open the site at 390px width.
>
> Check all three routes for:
>
> - no horizontal overflow
> - usable buttons
> - readable text
> - inputs fitting the screen
> - cards not breaking
> - usable navigation
>
> 6. ROUTES
>
> Do not break:
>
> /
> /dashboard
> /day/12
>
> 7. FINAL CHECK
>
> Verify all three routes, the submission interaction, the edge-case states, and browser/runtime errors.
>
> Do not change the existing design unnecessarily.
> Do not add authentication, database, backend, or unnecessary dependencies.

### Summary

Codex updated `main.js` and `style.css`.

It added:

- Functional Day 12 submission
- Required GitHub and LinkedIn URL validation
- Optional live demo validation
- Persistent submission state using `localStorage`
- Duplicate-submission prevention
- A guide modal
- Recent-wins expansion
- Functional mobile navigation
- First-day state
- Missed-day state
- Empty-profile state
- Recovery UX
- 30-minute focus mode
- Mobile overflow fix

Codex also tested the three routes, submission flow, edge-case states, and mobile viewport behavior. The Codex transcript records these results. :contentReference[oaicite:2]{index=2}

---

## 4. GitHub and deployment assistance — ChatGPT

ChatGPT was used to guide the Git/GitHub and deployment workflow.

The existing local Git repository created by Codex was preserved rather than creating a new project or copying the files.

ChatGPT helped with:

- identifying the existing local Git repository
- creating the GitHub repository
- connecting the local repository to GitHub
- committing and pushing the project
- interpreting Git errors
- checking that the latest changes reached GitHub
- deploying the GitHub repository using Vercel
- understanding the public Vercel URL
- testing the required routes after deployment

The final GitHub repository used for the project is:

https://github.com/ANJALIcode14/Hackathon_abtalks

The deployed website is:

https://hackathon-abtalks.vercel.app/

---

## 5. Vercel SPA routing fix — Codex

After deployment, the landing page worked but direct requests to `/dashboard` and `/day/12` returned Vercel 404 errors.

The following prompt was given to Codex:

> Fix the Vercel production routing issue only.
>
> The deployed landing page `/` works, but direct requests to `/dashboard` and `/day/12` return Vercel 404 NOT_FOUND.
>
> The application is a client-side routed single-page app where main.js decides what to render based on window.location.pathname.
>
> Create the minimal Vercel configuration needed so these routes work when opened directly:
>
> /
> /dashboard
> /day/12
>
> For Vercel, rewrite the application routes to the existing index.html without changing the existing UI or application logic.
>
> Do NOT rebuild or redesign anything.
> Do NOT change the existing route paths.
> Do NOT change the existing functionality.
> Do NOT modify unrelated files.

### Summary

Codex created `vercel.json` with the required SPA rewrite.

It verified that the three routes returned successfully:

- `/` → 200
- `/dashboard` → 200
- `/day/12` → 200

No application UI or route logic was changed. The actual Codex transcript records the routing fix and verification. :contentReference[oaicite:3]{index=3}

---

## 6. Final AI-assisted review and submission preparation — ChatGPT

ChatGPT was used to review the project after the functionality and deployment changes.

The review focused on whether the project satisfied the hackathon requirements, including:

- the three required routes
- mobile-first design
- dashboard information
- Day 12 task and proof submission
- GitHub and LinkedIn proof
- required edge cases
- functional interactions
- deployment
- route map
- AI-usage documentation

ChatGPT also identified that the AI-usage log should accurately represent the use of both Codex and ChatGPT rather than attributing the entire development process to only one tool.

---

## Notes

- This log focuses on AI-assisted work relevant to the ABTalks hackathon submission.
- Both OpenAI Codex and ChatGPT were used during development.
- Exact prompts are quoted only where they are available from the actual development conversation.
- Sections marked **Summary** are summaries and are not presented as verbatim transcripts.
- Routine conversational messages and unrelated troubleshooting are not reproduced in full.
- No backend, production database, authentication system, or production user data was created for this project.
- Mock data was used as permitted by the hackathon brief.