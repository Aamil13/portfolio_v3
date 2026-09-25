export type NavItem = {
  name: string;
  link: string;
};

export type GridItem = {
  id?: number;
  title: string;
  description?: string;
  links?: Record<string, string>[];
  className?: string;
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
};

export type Project = {
  title: string;
  description: string;
  link?: string;
  git?: string;
  stack?: string[];
  features?: string[];
  category?: string;
  type?: string | string[];
  img?: string;
};

export type WorkExperience = {
  id?: number;
  title: string;
  desc: string[];
  links?: Record<string, string>[];
  className?: string;
  thumbnail?: string;
};

export type SocialMedia = {
  id?: number;
  link: string;
  img?: string;
};

export type TechStackGroup = {
  title: string;
  items: string[];
};

export type Portfolio = {
  navItems: NavItem[];
  gridItems: GridItem[];
  projects: Project[];
  workExperience: WorkExperience[];
  socialMedia: SocialMedia[];
  techStack: TechStackGroup[];
  isOpenToWork:boolean
};

export type PortfolioApiResponse = {
  success: boolean;
  data?: Portfolio | null;
  message?: string;
  error?: string;
};
