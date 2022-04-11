import { Block } from 'payload/types';
import * as fromCollections from '../collections';
import * as fromFields from '../fields';

export type IMediaStatCollage = {
  media: {
    media: fromCollections.IMedia;
  };
  stats: {
    stat: fromFields.IStat[];
  };
  blockType: 'media-stat-collage';
} & fromFields.IOverlap;

export const MediaStatCollage: Block = {
  slug: 'media-stat-collage',
  labels: {
    singular: 'Media Stat Collage',
    plural: 'Media Stat Collages',
  },
  fields: [
    fromFields.overlap,
    {
      name: 'stats',
      label: 'Statistics',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [fromFields.stat],
    },
    {
      name: 'media',
      label: 'Media',
      type: 'array',
      minRows: 3,
      maxRows: 4,
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
