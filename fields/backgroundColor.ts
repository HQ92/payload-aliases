import { Field } from 'payload/types';

export type IBackgroundColor = 'orange' | 'red' | 'none' | 'blue' | 'gray';

export const backgroundColor: Field = {
  name: 'backgroundColor',
  type: 'radio',
  label: 'Background Color',
  defaultValue: 'none',
  admin: {
    layout: 'horizontal',
  },
  options: [
    {
      label: 'None',
      value: 'none',
    },
    {
      label: 'Red',
      value: 'red',
    },
    {
      label: 'Blue',
      value: 'blue',
    },
    {
      label: 'Orange',
      value: 'orange',
    },
  ],
};
