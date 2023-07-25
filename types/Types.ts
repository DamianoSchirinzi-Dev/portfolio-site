export interface AboutMeBlockProps {
  header: any;
  body1: string;
  body2: string;
  isTopHeading?: boolean;
  isLastHeading?: boolean;
}

export interface BlogCardProps {
  key: string;
  post: string;
}

export interface PillButtonProps {
  label: string;
  isInFooter?: boolean;
  redirectUrl?: any;
  onClickFunction?: any;
}

export interface ProjectCardProps {
  title: string;
  codeUrl: string;
  siteUrl?: string;
  synopsis: string;
  icon: any;
}

export interface SkillsBlockProps {
  skillsName: string;
}

export interface ContactModalProps {
  isOpen: boolean;
  onClose: any;
}
