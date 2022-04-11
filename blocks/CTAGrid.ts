import { Block } from 'payload/types';
import * as fromFields from '../fields';

export type ICTAGridIcon = 'none' | 'arrow';

export type ICTAGridAction = {
  headline: string;
  icon?: ICTAGridIcon;
  link: fromFields.ILink;
};

export type ICTAGrid = {
  actions: ICTAGridAction[];
  blockType: 'cta-grid';
};

export const CTAGrid: Block = {
  slug: 'cta-grid',
  labels: {
    singular: 'CTA Grid',
    plural: 'CTA Grids',
  },
  fields: [
    {
      name: 'actions',
      label: 'Actions',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'headline',
          label: 'Headline',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          label: 'Icon',
          type: 'radio',
          defaultValue: 'arrow',
          options: [
            {
              label: 'None',
              value: 'none',
            },
            {
              label: 'Arrow',
              value: 'arrow',
            },
          ],
        },
        fromFields.link,
      ],
    },
  ],
};
