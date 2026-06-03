import { ScreenId } from "./types";

export interface ScreenAnnotation {
  what: string;
  li?: string;
  liLabel?: string;
  // Position of the key interactive moment in the 1440×900 space
  beacon?: { x: number; y: number };
}

export const ANNOTATIONS: Record<ScreenId, ScreenAnnotation> = {
  "s01-brief-arrives": {
    what: "Jordan receives a brief from Laree Ross in Outlook. Commercial has flagged an engagement gap in LillyConnect — NPS at 42, refill rate down, support tickets up. DesignFlow's Outlook add-in detects the brief and begins staging Jordan's workspace automatically.",
    li: "Brief content is parsed in the background — goals, constraints, and stakeholder context extracted before Jordan has even clicked away from her inbox.",
    liLabel: "Brief parsing",
    beacon: { x: 1015, y: 565 },
  },
  "int-a-routing": {
    what: "DesignFlow stages the workspace in seconds. Brief is parsed, stakeholder tensions are surfaced, the team is assembled, and the Portal Redesign skill set begins loading. Jordan doesn't configure anything — she just clicks Open.",
    li: "Workspace configuration happens entirely without Jordan's input. Goals are extracted, tensions are logged, LDS v3.2 is pulled, and skills appropriate to a patient portal redesign are queued. 4.2 seconds from brief to ready.",
    liLabel: "Workspace staging",
    beacon: { x: 720, y: 608 },
  },
  "s02-getting-oriented": {
    what: "Jordan opens DesignFlow and finds everything already configured. The LDS component audit has run automatically, identifying two gaps — medication timeline widget and dosing schedule view — that will need to be built or sourced. Project memory is initialized.",
    li: "LDS v3.2 is scanned against the project scope without Jordan asking. Component gaps are flagged and escalated to the design system team. Every decision from this point is logged and queryable.",
    liLabel: "LDS audit + memory init",
    beacon: { x: 1220, y: 340 },
  },
  "s03-new-project-setup": {
    what: "Jordan uses the DesignFlow slash command interface to finalize project setup. She runs /make-to-project and Claude surfaces the three competing stakeholder tracks before a single frame is drawn — PM wants NPS dashboard-first, Patient Support wants simpler refill, Marketing needs an education module with a HIPAA consent gate.",
    li: "Stakeholder tensions are surfaced by analyzing the brief against known organizational priorities. The Portal Redesign workflow is recommended as the one that covers all three tracks without forcing a choice upfront.",
    liLabel: "Stakeholder tension analysis",
    beacon: { x: 643, y: 716 },
  },
  "s04-select-workflow": {
    what: "Jordan browses the DesignFlow marketplace and confirms the Portal Redesign workflow — a 14-step process with HIPAA compliance checkpoints, LDS audit gates, and Section 508 accessibility gates embedded. Skills begin loading automatically based on her selection.",
    li: "Skill selection is pre-recommended based on the brief and project type. HIPAA, LDS, and 508 skills load immediately. Phase gates at steps 07 and 10 are auto-configured.",
    liLabel: "Workflow recommendation + skill load",
    beacon: { x: 340, y: 488 },
  },
  "s05-project-onboard": {
    what: "Jordan kicks off the project in a Teams call with Maya, Jamie (LDS), and Morgan (copy). She shares the DesignFlow workflow live so the whole team sees the steps, phases, and gates in one view. Role briefs are routed automatically.",
    li: "The shared DesignFlow workspace becomes the source of truth for the entire team from this moment. Roles are auto-assigned based on each person's specialty and the workflow requirements.",
    liLabel: "Team onboarding",
    beacon: { x: 1205, y: 640 },
  },
  "s06-discovery": {
    what: "Jordan is in Claude as her command center. She runs /discovery-synthesis and receives a compiled view of Maya's research — 847 verbatims distilled into key themes, three navigation directions evaluated, and a HIPAA flag raised before any design work begins.",
    li: "Maya's parallel research track — 4 scenarios analyzed, 7 friction points identified — is synthesized and delivered to Jordan automatically. The HIPAA flag on education personalization is surfaced here, not in a review three weeks later.",
    liLabel: "Research synthesis + compliance flag",
    beacon: { x: 558, y: 562 },
  },
  "s07-design-exploration": {
    what: "Jordan is working in Figma, exploring three navigation directions for the portal. Direction A (progressive disclosure) is selected — it reduces cognitive load by revealing complexity progressively. Direction B is flagged as requiring a new LDS component before investment.",
    li: "The decision — direction A selected, direction B flagged, rationale logged — is indexed in project memory immediately. It's queryable at any future handoff without Jordan writing a decision doc.",
    liLabel: "Decision logging",
    beacon: { x: 305, y: 290 },
  },
  "s08-internal-reviews": {
    what: "Jordan hosts a stakeholder review call in Teams with PM Chris Park, Patient Support lead, and Marketing. DesignFlow is live-aggregating feedback across all three tracks simultaneously — 47 items captured, 8 duplicates resolved, 2 conflicts escalated to Jordan for adjudication.",
    li: "Real-time feedback indexing across three stakeholder tracks. Duplicate feedback is automatically merged. Conflicts that can't be auto-resolved are escalated with context.",
    liLabel: "Feedback aggregation + conflict detection",
    beacon: { x: 840, y: 640 },
  },
  "s09-build-iterate": {
    what: "Jordan and Maya are in Figma building the portal at Build v0.4. The refill flow has been confirmed by PM Chris Park directly in the file. The Education Hub is paused — the HIPAA consent gate flagged in discovery is actively enforced every time that frame is touched.",
    li: "The HIPAA constraint flagged in step 06 is still active and visible in the Figma panel. It doesn't fade away — it travels with the work.",
    liLabel: "Compliance enforcement (active)",
    beacon: { x: 1130, y: 280 },
  },
  "s10-finalize-design": {
    what: "Jordan is doing final sign-off in Figma. 14 screens across web and mobile. WCAG 2.1 AA passes at 4.8:1 contrast. Section 508 is verified. All three HIPAA checkpoints are cleared. Tab order is annotated for engineering. 52 decisions are logged.",
    li: "Accessibility verification runs against the finalized designs. All criteria pass. The decision log — 52 decisions from brief to sign-off — is complete and queryable.",
    liLabel: "Accessibility verification + decision log",
    beacon: { x: 1130, y: 296 },
  },
  "s11-package-handoff": {
    what: "Jordan runs /package-handoff in Claude and the full engineering package is generated automatically — 127 annotated specs, LDS component map, HIPAA data handling guide, and WCAG QA checklist. The package is shipped to engineering and they're notified via Slack.",
    li: "127 specs are auto-generated from the design file and decision log. The HIPAA guide is auto-included based on project classification. The decision log ships with the package so engineering can query rationale.",
    liLabel: "Auto-generated handoff package",
    beacon: { x: 643, y: 716 },
  },
  "s12-walk-through": {
    what: "Jordan walks engineering through the handoff package on a Teams call. The decision log answers 34 engineering questions in real time. Two risks are logged: schedule timing and a potential refill API timeout.",
    li: "The decision log surfaces answers to engineering questions without Jordan having to remember context from weeks ago. Two risks flagged here are indexed for the Track Drift phase.",
    liLabel: "Decision log as live Q&A",
    beacon: { x: 840, y: 460 },
  },
  "s13-qa-closeout": {
    what: "Jordan is in Figma triaging QA results. 16 deviations detected — 4 critical (all fixed), 8 deferred to Phase 2, 4 cosmetic accepted. The portal is cleared for Q3 2026 launch.",
    li: "Each QA deviation is cross-referenced against the spec doc and decision log. DesignFlow suggests fixes for critical issues. The triage decision is logged for Phase 2 planning.",
    liLabel: "QA triage + spec matching",
    beacon: { x: 1010, y: 682 },
  },
  "s14-track-drift": {
    what: "It's Day 30 post-launch. NPS has moved from 42 to 54. Refill rate is up 18%, support tickets down 31%. One alert: the refill API timeout flagged in the engineering walkthrough is confirmed as the lag cause.",
    li: "The risk flagged in step 12 has been validated by post-launch data. Three learnings from this project are queued to the DesignFlow Marketplace as reusable skills. Phase 2 scope is automatically staged.",
    liLabel: "Post-launch monitoring + skill extraction",
    beacon: { x: 720, y: 520 },
  },
};
