import { LINKS } from '../links';

export interface MenuItemType {
  title: string;
  link: string;
  icon: string;
  type: string;
  children?: MenuItemType[];
}

export const MENU: MenuItemType[] = [
  {
    title: "Home",
    link: LINKS.home,
    icon: "home",
    type: "fdgsss",
    children: [],
  },
  {
    title: "Dashboard",
    link: LINKS.contact,
    icon: "sdfdsf",
    type: "sdfds",
    children: [],
  },
  {
    title: "Contact",
    link: LINKS.contact,
    icon: "sdfdsf",
    type: "sdfds",
    children: [],
  },
  {
    title: "About",
    link: LINKS.contact,
    icon: "sdfdsf",
    type: "sdfds",
    children: [],
  },
  {
    title: "Graphics",
    link: LINKS.contact,
    icon: "sdfdsf",
    type: "sdfds",
    children: [],
  },
  {
    title: "Tables",
    link: LINKS.contact,
    icon: "sdfdsf",
    type: "sdfds",
    children: [
      {
        title: "Table child 1",
        link: LINKS.contact,
        icon: "sdfdsf",
        type: "sdfds",
        children: [],
      },
      {
        title: "Table child 2",
        link: LINKS.contact,
        icon: "sdfdsf",
        type: "sdfds",
        children: [],
      },
      {
        title: "Table Child 3",
        link: LINKS.contact,
        icon: "sdfdsf",
        type: "sdfds",
        children: [
          {
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
