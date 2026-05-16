export type SectorKey = "land" | "mining" | "marine";

export const SECTOR_THEME: Record<
  SectorKey,
  {
    accent: string;
    badgeBg: string;
    badgeText: string;
    ring: string;
    softBg: string;
    softText: string;
    dot: string;
  }
> = {
  land: {
    accent: "#f59e0b",
    badgeBg: "bg-amber-500",
    badgeText: "text-amber-50",
    ring: "ring-amber-400",
    softBg: "bg-amber-50",
    softText: "text-amber-700",
    dot: "bg-amber-400",
  },
  mining: {
    accent: "#ea580c",
    badgeBg: "bg-orange-600",
    badgeText: "text-orange-50",
    ring: "ring-orange-400",
    softBg: "bg-orange-50",
    softText: "text-orange-700",
    dot: "bg-orange-400",
  },
  marine: {
    accent: "#0891b2",
    badgeBg: "bg-cyan-600",
    badgeText: "text-cyan-50",
    ring: "ring-cyan-400",
    softBg: "bg-cyan-50",
    softText: "text-cyan-700",
    dot: "bg-cyan-400",
  },
};
