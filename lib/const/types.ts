export type ReactChildren = {
  children: React.ReactNode;
};

export interface AuthModeProps {
  mode: "login" | "signup";
}

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

export type NoteCardProps = {
  note: Note;
};

export interface Note {
  _id: string;
  title: string;
  description: string;
  tags?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
