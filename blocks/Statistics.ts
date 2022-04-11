import { Block } from 'payload/types';
import * as fromFields from '../fields';

export type IStatistics = {
  stats: fromFields.IStat[];
  backgroundColor: fromFields.IBackgroundColor;
  blockType: 'statistics';
} & fromFields.IOverlap;

export const Statistics: Block = {
  slug: 'statistics',
  labels: {
    singular: 'Statistics',
    plural: 'Statistic Blocks',
  },
  fields: [
    fromFields.backgroundColor,
    fromFields.overlap,
    {
      name: 'stats',
      label: 'Statistics',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [fromFields.stat],
    },
  ],
};
