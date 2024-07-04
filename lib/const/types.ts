export type AuthLayoutProps = {
  children: React.ReactNode;
};

export type LandingLayoutProps = {
  children: React.ReactNode;
};

export type HomeLayoutProps = {
  children: React.ReactNode;
};

export interface FooterMenuItem {
  id: number;
  link: string;
  path: string;
}

export type FooterMenuTypes = FooterMenuItem[];

export interface FooterSocialItem {
  id: number;
  name: string;
  path: string;
  icon: string | JSX.Element;
}

export type FooterSocialTypes = FooterSocialItem[];

export type NoteCardProps ={
  note:Note;
}

export interface Note {
  _id: string;
  title: string;
  description: string;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
};
