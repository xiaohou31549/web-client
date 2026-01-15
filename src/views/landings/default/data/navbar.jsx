// @project
import { landingMegamenu, pagesMegamenu } from '../../common-data';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_PATH, ADMIN_PATH, BUY_NOW_URL, DOCS_URL, FREEBIES_URL, PAGE_PATH } from '@/path';

/***************************  DEFAULT - NAVBAR  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer', variant: 'text' };
export const navbar = {
  customization: true,
  secondaryBtn: {
    children: 'Log In',
    href: PAGE_PATH.login,
    ...linkProps,
    sx: { width: 50, p: 1 }
  },
  primaryBtn: { children: 'Registry', href: PAGE_PATH.register, ...linkProps, sx: { p: 1 } },
  navItems: [
    { id: 'community', title: 'Community', link: '/community' },
    { id: 'tariff-calculator', title: 'Tariff Calculator', link: '/tariff-calculator' },
    { id: 'tariff-pulse', title: 'Tariff Pulse', link: '/tariff-pulse' },
    { id: 'industry-partner-directory', title: 'Industry Partner Directory', link: '/industry-partner-directory' },
    { id: 'country-guides', title: 'Country Guides', link: '/country-guides' },
    { id: 'about', title: 'About', link: '/about' },
    { id: 'contact', title: 'Contact', link: '/contact' }
    // landingMegamenu,
    // { id: 'components', title: 'Blocks', link: SECTION_PATH },
    // { id: 'dashboard', title: 'Dashboard', link: ADMIN_PATH, ...linkProps },
    // pagesMegamenu,
    // { id: 'docs', title: 'Docs', link: DOCS_URL, ...linkProps, icon: 'tabler-pin-invoke' }
  ]
};
