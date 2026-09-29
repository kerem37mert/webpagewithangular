import { LINKS } from '../links';

export interface MenuItemType {
  id: string,
  title: string;
  link: string;
  icon?: string;
  type?: string;
  children?: MenuItemType[];
}

export const MENU: MenuItemType[] = [
  {
    id: "home",
    title: "Home",
    link: LINKS.home,
    icon: "home",
    type: "fdgsss",
    children: [],
  },
  {
    id: "profile",
    title: "Profile",
    link: LINKS.profile,
    children: [],
  },
  {
    id: "dashboard",
    title: "Dashboard",
    link: LINKS.contact,
    icon: "sdfdsf",
    type: "sdfds",
    children: [],
  },
  {
    id: "contact",
    title: "Contact",
    link: LINKS.contact,
    icon: "sdfdsf",
    type: "sdfds",
    children: [],
  },
  {
    id: "about",
    title: "About",
    link: LINKS.contact,
    icon: "sdfdsf",
    type: "sdfds",
    children: [],
  },
  {
    id: "graphs",
    title: "Graphics",
    link: LINKS.contact,
    icon: "sdfdsf",
    type: "sdfds",
    children: [],
  },
  {
    id: "tables",
    title: "Tables",
    link: LINKS.contact,
    icon: "sdfdsf",
    type: "sdfds",
    children: [
      {
        id: "child1",
        title: "Table child 1",
        link: LINKS.contact,
        icon: "sdfdsf",
        type: "sdfds",
        children: [],
      },
      {
        id: "child2",
        title: "Table child 2",
        link: LINKS.contact,
        icon: "sdfdsf",
        type: "sdfds",
        children: [],
      },
      {
        id: "chiild3",
        title: "Table Child 3",
        link: LINKS.contact,
        icon: "sdfdsf",
        type: "sdfds",
        children: [
          {
            id: "childchild",
            title: "child child",
            link: LINKS.contact,
            icon: "sdfdsf",
            type: "sdfds",
            children: [],
          },
        ],
      },
    ],
  },
];
