import { GlobalConfig } from 'payload/types';
import * as fromFields from '../fields';

export type IMegaMenu = {
  nav: {
    link: fromFields.ILink;
  }[];
};

export const MegaMenu: GlobalConfig = {
  slug: 'mega-menu',
  label: 'Mega Menu',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      labels: {
        singular: 'Link',
        plural: 'Links',
      },
      fields: [fromFields.link],
    },
  ],
};
