import { Block } from 'payload/types';
import * as fromFields from '../fields';
import * as fromCollections from '../collections';

export type ISlide = {
  media: fromCollections.IMedia;
};

export type ISlider = {
  backgroundColor: fromFields.IBackgroundColor;
  slides: ISlide[];
  blockType: 'slider';
};

export const Slider: Block = {
  slug: 'slider',
  labels: {
    singular: 'Slider',
    plural: 'Sliders',
  },
  fields: [
    fromFields.backgroundColor,
    {
      name: 'slides',
      label: 'Slides',
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      type: 'array',
      minRows: 3,
      maxRows: 9,
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
