

## Flux Logic AI — Premium Landing Page

### Global Setup
- Dark theme as default (`#0a0a0a` background, lime `#bef264` accent)
- `scroll-smooth` on html, consistent `max-w-7xl mx-auto px-6` container
- Install **framer-motion** for scroll-triggered fade-in-up animations
- All sections use `py-24` vertical padding

### 1. Sticky Glass Header
- Fixed top, `backdrop-blur-lg`, `border-b border-white/5`
- **Left:** "Flux Logic AI" text logo (white, bold)
- **Center:** Decorative badge: `SYSTEM_STATUS: OPERATIONAL` with pulsing lime dot
- **Right:** Single ghost CTA button "Audit My Business" (lime border) → scrolls to footer form

### 2. Z-Pattern Hero Section
- 60/40 grid layout
- **Left:** ExtraBold H1 "Scale Without Hiring." + slate-400 subheadline about n8n & Gemini + solid lime "Get My Free Audit" button
- **Right:** Animated SVG node-graph diagram with glowing lime-green connections showing a stylized workflow (nodes connected by animated paths)

### 3. Animated Authority Strip
- Full-width band with infinite horizontal scroll (framer-motion)
- "Powering workflows for teams at..." + 6 fake-but-realistic company text logos in grayscale

### 4. Bento Grid Services
Three cards using shadcn Card with `border-white/5` and `hover:border-lime-400/50`:
- **Large (col-span-2):** "GEO & Automated Outreach" — Zap icon, AEO/lead enrichment copy, `font-mono` status label
- **Small:** "Context-Aware RAG Agents" — Bot icon, RAG/CRM support copy
- **Wide (col-span-3):** "Workflow Orchestration (n8n)" — Cpu icon, API integration copy
- Lime green drop-shadow on all icons, `text-sm` descriptions

### 5. Technical Logic Flow
- Horizontal 3-step process: Audit → Build → Scale
- Connected by thin lime-green line
- Each step has an icon, title, and short description

### 6. FAQ Section (Accordion)
- Centered H2 "Common Queries" + lime sub-text
- 4 shadcn Accordion items covering: data security, software replacement, ROI timeline, error handling
- White triggers with lime chevron, slate-400 answer text
- "Still have questions? Book a call" button below → scrolls to footer form

### 7. Footer & Lead Capture
- `#0f172a` background, `py-20`
- H2: "Ready to automate the boring stuff?" + scarcity tag about Q2 audits
- 3-field shadcn form (Name, Work Email, Bottleneck textarea) with dark inputs and lime focus rings
- Full-width solid lime CTA "Get My Free Audit" with `hover:scale-105`
- Sub-footer: copyright left, LinkedIn/X icons right
- Bottom `font-mono` tag: `POWERED_BY_AUTOMATION_LOGIC_V3`

