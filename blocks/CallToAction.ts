import { Block } from 'payload/types';
import * as fromFields from '../fields';

export type IAction = {
  link: fromFields.ILink;
};

export type ICallToAction = {
  backgroundColor: fromFields.IBackgroundColor;
  content: unknown;
  actions: IAction[];
  blockType: 'call-to-action';
};

export const CallToAction: Block = {
  slug: 'call-to-action',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    fromFields.backgroundColor,
    {
      name: 'content',
      type: 'richText',
      label: 'Content',
      required: true,
    },
    {
      name: 'actions',
      label: 'Actions',
      type: 'array',
      minRows: 1,
      maxRows: 2,
      fields: [fromFields.link],
    },
  ],
};
