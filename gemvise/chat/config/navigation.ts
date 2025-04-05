export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export const mainNavItems: NavItem[] = [
  {
    label: "Docs",
    href: "/docs",
  },
  {
    label: "Blog",
    href: "/blog",
  }
];
