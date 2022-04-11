import { Block } from 'payload/types';
import * as fromCollections from '../collections';

export type IMedia = {
  media: fromCollections.IMedia;
};

export type IMediaCollage = {
  media: IMedia[];
  blockType: 'media-collage';
};

export const MediaCollage: Block = {
  slug: 'media-collage',
  labels: {
    singular: 'Media Collage',
    plural: 'Media Collages',
  },
  fields: [
    {
      name: 'media',
      label: 'Media',
      type: 'array',
      minRows: 3,
      maxRows: 3,
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
