export interface AboutMeBlockProps {
  imageSrc: string;
  header: any;
  body: string;
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
  action: Function;
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
