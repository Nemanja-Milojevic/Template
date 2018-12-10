import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  
    {
    title: 'Navigation',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard'
  },
  {
    title: 'Pages',
    icon: 'nb-locked',
    children: [
      {
        title: 'All students',
        link: 'students',
      },
      
    ],
  },
];
