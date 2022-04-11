import { Field } from 'payload/types';

export type ISizes = 'none' | 'small' | 'medium' | 'large';

export type IOverlap = {
  topOverlap: ISizes;
  bottomOverlap: ISizes;
};

const getOverlap = (name: string): Field => ({
  name,
  type: 'select',
  defaultValue: 'none',
  options: [
    {
      label: 'None',
      value: 'none',
    },
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
    width: '50%',
  },
});

export const overlap: Field = {
  type: 'row',
  fields: [getOverlap('topOverlap'), getOverlap('bottomOverlap')],
};
