export interface NavItem {
  label: string;
  path: string;
}

export const primaryNavItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Our Method', path: '/our-method' },
  { label: 'Programs', path: '/programs' },
  { label: 'Results', path: '/results' },
  { label: "Parents' Guide", path: '/parents-guide' },
  { label: 'Contact', path: '/contact' },
];
