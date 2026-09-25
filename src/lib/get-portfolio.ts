import { GET } from "@/app/api/portfolio/route";
import { defaultTechStack } from "@/lib/tech-stack";
import type { NavItem, Portfolio, PortfolioApiResponse } from "@/types/portfolio";

const emptyPortfolio: Portfolio = {
  navItems: [],
  gridItems: [],
  projects: [],
  workExperience: [],
  socialMedia: [],
  techStack: defaultTechStack,
  isOpenToWork:false
};

function withStackNav(navItems: NavItem[]): NavItem[] {
  if (navItems.some((item) => item.link === "#stack")) {
    return navItems;
  }

  const stackItem: NavItem = { name: "Stack", link: "#stack" };
  const aboutIndex = navItems.findIndex((item) => item.link === "#about");

  if (aboutIndex === -1) {
    return [...navItems, stackItem];
  }

  return [
    ...navItems.slice(0, aboutIndex + 1),
    stackItem,
    ...navItems.slice(aboutIndex + 1),
  ];
}

export async function getPortfolio(): Promise<Portfolio> {
  const response = await GET();
  const payload = (await response.json()) as PortfolioApiResponse;

  if (!payload.success || !payload.data) {
    return emptyPortfolio;
  }

  return {
    navItems: withStackNav(payload.data.navItems ?? []),
    gridItems: payload.data.gridItems ?? [],
    projects: payload.data.projects ?? [],
    workExperience: payload.data.workExperience ?? [],
    socialMedia: payload.data.socialMedia ?? [],
    techStack: payload.data.techStack?.length
      ? payload.data.techStack
      : defaultTechStack,
      isOpenToWork:payload.data.isOpenToWork
  };
}
