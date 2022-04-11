import { Block } from 'payload/types';

export type ISection = {
  label: string;
  description: string;
};

export type IStickyContent = {
  sections: ISection[];
  blockType: 'sticky-content';
};

export const StickyContent: Block = {
  slug: 'sticky-content',
  labels: {
    singular: 'Sticky Content Block',
    plural: 'Sticky Content Blocks',
  },
  fields: [
    {
      name: 'sections',
      label: 'Sections',
      type: 'array',
      minRows: 2,
      maxRows: 8,
      fields: [
        {
          type: 'text',
          name: 'label',
          label: 'Label',
          required: true,
        },
        {
          type: 'textarea',
          name: 'description',
          label: 'Description',
          required: true,
        },
      ],
    },
  ],
};
