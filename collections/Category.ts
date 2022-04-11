import { CollectionConfig } from 'payload/types';
import * as fromFields from '../fields';

export type ICategory = {
  title: string;
  slug: string;
};

export const Category: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    fromFields.slug,
  ],
};
