import { CollectionConfig } from 'payload/types';

import { IMedia } from './Media';
import * as fromFields from '../fields';
import * as fromBlocks from '../blocks';

import RedHeadline from '../components/RichText/leaves/RedHeadline';
import RedUnderline from '../components/RichText/leaves/RedUnderline';

export type IPageLayout =
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

export type IPageHeroType = 'minimal' | 'contentAboveMedia' | 'contentLeftOfMedia';

export type IPage = {
  title: string;
  heroType: 'minimal' | 'contentAboveMedia' | 'contentLeftOfMedia';
  heroContent: unknown;
  heroMedia?: IMedia;
  slug: string;
  image?: IMedia;
  layout: IPageLayout[];
  meta: fromFields.IMeta;
};

export const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    {
      type: 'radio',
      name: 'heroType',
      label: 'Hero Type',
      required: true,
      defaultValue: 'minimal',
      options: [
        {
          label: 'Minimal',
          value: 'minimal',
        },
        {
          label: 'Content Above Media',
          value: 'contentAboveMedia',
        },
        {
          label: 'Content Left of Media',
          value: 'contentLeftOfMedia',
        },
      ],
    },
    {
      name: 'heroContent',
      label: 'Hero Content',
      type: 'richText',
      required: true,
      admin: {
        leaves: [RedHeadline, RedUnderline],
      },
    },
    {
      name: 'heroMedia',
      label: 'Hero Media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, siblingData) =>
          siblingData?.heroType === 'contentAboveMedia' || siblingData?.heroType === 'contentLeftOfMedia',
      },
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
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
    fromFields.meta,
    fromFields.slug,
  ],
};
