export interface AboutMeBlockProps {
  imageSrc: string;
  header: any;
  body1: string;
  body2: string;
  isTopHeading?: boolean;
  isLastHeading?: boolean;
}

export interface BlogCardProps {
  slug: string;
  title: string;
  synopsis: string;
  content: string;
  date: string;
  imagePath: string;
  tags: string[];
}

export interface PillButtonProps {
  label: string;
  isInFooter?: boolean;
  redirectUrl?: any;
}

export interface ProjectCardProps {
  title: string;
  codeUrl: string;
  siteUrl?: string;
  synopsis: string;
}

export interface SkillsBlockProps {
  skillsName: string;
}
