import { CollectionConfig } from 'payload/types';

import * as fromFields from '../fields';
import * as fromBlocks from '../blocks';

import { IMedia } from './Media';
import { ICategory } from './Category';

export type ILayout =
  | fromBlocks.ICallToAction
  | fromBlocks.IContent
  | fromBlocks.ICTAGrid
  | fromBlocks.IMedia
  | fromBlocks.IMediaCollage
  | fromBlocks.IMediaContentCollage
  | fromBlocks.IMediaGrid
  | fromBlocks.IMediaStatCollage
  | fromBlocks.ISlider
  | fromBlocks.ISpacer
  | fromBlocks.IStatistics
  | fromBlocks.IStickyContent
  | fromBlocks.IStudySlider;

export type IStudy = {
  title: string;
  featuredMedia: IMedia;
  previewMedia: {
    media: IMedia;
  }[];
  layout: ILayout[];
  client?: string;
  location?: string;
  categories?: ICategory[];
  slug: string;
  meta: fromFields.IMeta;
};

export const Study: CollectionConfig = {
  slug: 'studies',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'featuredMedia',
      label: 'Featured Media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'layout',
      label: 'Study Layout',
      type: 'blocks',
      blocks: [
        fromBlocks.CallToAction,
        fromBlocks.Content,
        fromBlocks.CTAGrid,
        fromBlocks.Media,
        fromBlocks.MediaCollage,
        fromBlocks.MediaContentCollage,
        fromBlocks.MediaGrid,
        fromBlocks.MediaStatCollage,
        fromBlocks.Slider,
        fromBlocks.Spacer,
        fromBlocks.Statistics,
        fromBlocks.StickyContent,
        fromBlocks.StudySlider,
      ],
    },
    {
      name: 'previewMedia',
      label: 'Preview Media',
      labels: {
        singular: 'Media',
        plural: 'Media',
      },
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'media',
          label: 'Media',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'client',
      label: 'Client',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'location',
      label: 'Location',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      label: 'Categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },
    fromFields.slug,
    fromFields.meta,
  ],
};
