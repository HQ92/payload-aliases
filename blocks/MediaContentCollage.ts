import { Block } from 'payload/types';
import * as fromFields from '../fields';
import * as fromCollections from '../collections';

export type IMedia = {
  media: fromCollections.IMedia;
};

export type IMediaContentCollage = {
  backgroundColor: fromFields.IBackgroundColor;
  content: unknown;
  enableCTA: boolean;
  link: fromFields.ILink;
  media: IMedia[];
  blockType: 'media-content-collage';
};

export const MediaContentCollage: Block = {
  slug: 'media-content-collage',
  labels: {
    singular: 'Media Content Collage',
    plural: 'Media Content Collages',
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
      name: 'enableCTA',
      label: 'Enable Call to Action',
      type: 'checkbox',
    },
    {
      ...fromFields.link,
      admin: {
        condition: (_, siblingData) => Boolean(siblingData.enableCTA),
      },
    },
    {
      name: 'media',
      label: 'Media',
      type: 'array',
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          type: 'upload',
          name: 'media',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};
