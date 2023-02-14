
export interface IUserWebData {
  navItems: NavItem[];
  sections: Section[];
  palette: {
    primaryColor: string
  }
}

export type NavItem = {
  label: string;
  href: string;
};

export type Section = {
  header?: string;
  content?: {
    paragraph?: string;
    media?: {
      images?: {
        src: string;
        description?: string;
      }[];
      videos?: {
        src: string;
        description?: string;
      }[];
    };
  };
};
