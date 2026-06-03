export type ScreenId =
  | "s01-brief-arrives"
  | "int-a-routing"
  | "s02-getting-oriented"
  | "s03-new-project-setup"
  | "s04-select-workflow"
  | "s05-project-onboard"
  | "s06-discovery"
  | "s07-design-exploration"
  | "s08-internal-reviews"
  | "s09-build-iterate"
  | "s10-finalize-design"
  | "s11-package-handoff"
  | "s12-walk-through"
  | "s13-qa-closeout"
  | "s14-track-drift";

export interface ScreenMeta {
  id: ScreenId;
  label: string;
  surface: "outlook" | "transition" | "marketplace" | "teams" | "claude" | "figma";
}

export const JORDAN_SCREENS: ScreenMeta[] = [
  { id: "s01-brief-arrives",      label: "Brief Arrives",       surface: "outlook"      },
  { id: "int-a-routing",          label: "Routing to DesignFlow", surface: "transition" },
  { id: "s02-getting-oriented",   label: "Getting Oriented",    surface: "marketplace"  },
  { id: "s03-new-project-setup",  label: "New Project Setup",   surface: "marketplace"  },
  { id: "s04-select-workflow",    label: "Select Workflow",     surface: "marketplace"  },
  { id: "s05-project-onboard",    label: "Project Onboard",     surface: "teams"        },
  { id: "s06-discovery",          label: "Discovery",           surface: "claude"       },
  { id: "s07-design-exploration", label: "Design Exploration",  surface: "figma"        },
  { id: "s08-internal-reviews",   label: "Internal Reviews",    surface: "teams"        },
  { id: "s09-build-iterate",      label: "Build + Iterate",     surface: "figma"        },
  { id: "s10-finalize-design",    label: "Finalize Design",     surface: "figma"        },
  { id: "s11-package-handoff",    label: "Package + Handoff",   surface: "claude"       },
  { id: "s12-walk-through",       label: "Walk Through",        surface: "teams"        },
  { id: "s13-qa-closeout",        label: "QA + Close Out",      surface: "figma"        },
  { id: "s14-track-drift",        label: "Track Drift",         surface: "claude"       },
];

export const SURFACE_LABELS: Record<ScreenMeta["surface"], string> = {
  outlook:     "Outlook",
  transition:  "",
  marketplace: "DesignFlow",
  teams:       "Teams",
  claude:      "Claude",
  figma:       "Figma",
};

export const SURFACE_COLORS: Record<ScreenMeta["surface"], string> = {
  outlook:     "#0078D4",
  transition:  "#888888",
  marketplace: "#E1251B",
  teams:       "#6264A7",
  claude:      "#CC785C",
  figma:       "#7B61FF",
};
