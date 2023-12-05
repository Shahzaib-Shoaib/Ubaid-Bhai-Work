export type menuType = {
    id: string;
    name: string;
    href: string;
    children?: {
        id: string;
        name: string;
        href: string;
        children?: {
            id: string;
            name: string;
            href: string;
          }[];
      }[];
  }[];
