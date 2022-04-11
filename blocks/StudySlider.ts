import { Block } from 'payload/types';
import * as fromFields from '../fields';
import * as fromCollections from '../collections';

export type IStudySlider = {
  backgroundColor: fromFields.IBackgroundColor;
  studies: fromCollections.IStudy[];
  blockType: 'study-slider';
};

export const StudySlider: Block = {
  slug: 'study-slider',
  labels: {
    singular: 'Study Slider',
    plural: 'Study Sliders',
  },
  fields: [
    fromFields.backgroundColor,
    {
      name: 'studies',
      type: 'relationship',
      relationTo: 'studies',
      hasMany: true,
      required: true,
    },
  ],
};
