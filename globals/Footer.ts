import { GlobalConfig } from 'payload/types';
import * as fromFields from '../fields';

export type IFooter = {
  nav: {
    link: fromFields.ILink;
  }[];
};

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer',
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
