import { Block } from 'payload/types';

export type ISpacer = {
  size: 'small' | 'medium' | 'large';
  blockType: 'spacer';
};

export const Spacer: Block = {
  slug: 'spacer',
  labels: {
    singular: 'Spacer',
    plural: 'Spacers',
  },
  fields: [
    {
      name: 'size',
      label: 'Size',
      type: 'radio',
      required: true,
      defaultValue: 'medium',
      options: [
        {
          label: 'Small',
          value: 'small',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'Large',
          value: 'large',
        },
      ],
      admin: {
        layout: 'horizontal',
      },
    },
  ],
};
