import { Field } from 'payload/types';
import { cms } from '../utils/index';
// import { cms } from '@utils/index';

export const slug: Field = {
  name: 'slug',
  label: 'Slug',
  type: 'text',
  admin: {
    position: 'sidebar',
  },
  hooks: {
    beforeValidate: [cms.formatSlug('title')],
  },
};
