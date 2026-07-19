import { LINKS } from '../links';

export interface MenuItemType {
  title: string;
  link: string;
  icon: string;
  type: string;
  children: MenuItemType[];
};

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
];
