import { Block } from 'payload/types';
import * as fromCollections from '../collections';
import * as fromFields from '../fields';

export type IMedia = {
  media: fromCollections.IMedia;
  content?: string;
};

export type IMediaGrid = {
  backgroundColor: fromFields.IBackgroundColor;
  content?: unknown;
  media: IMedia[];
  blockType: 'media-grid';
};

export const MediaGrid: Block = {
  slug: 'media-grid',
  labels: {
    singular: 'Media Grid',
    plural: 'Media Grids',
  },
  fields: [
    fromFields.backgroundColor,
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
    },
    {
      name: 'media',
      label: 'Media',
      type: 'array',
      minRows: 3,
      maxRows: 12,
      fields: [
        {
          type: 'upload',
          name: 'media',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'content',
          label: 'Content',
          type: 'textarea',
        },
      ],
    },
  ],
};
