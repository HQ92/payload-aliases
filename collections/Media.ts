import { CollectionConfig } from 'payload/types';

export type IMediaSizeDetails = {
  filename: string;
  width: number;
  height: number;
};

export type IMediaSize = 'card' | 'square' | 'portrait' | 'feature';

export type IMedia = {
  filename: string;
  alt: string;
  mimeType: string;
  sizes: {
    card?: IMediaSizeDetails;
    square?: IMediaSizeDetails;
    portrait?: IMediaSizeDetails;
    feature?: IMediaSizeDetails;
  };
};

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: (): boolean => true, // Everyone can read Media
  },
  admin: {
    useAsTitle: 'filename',
  },
  upload: {
    adminThumbnail: 'card',
    imageSizes: [
      {
        name: 'card',
        width: 640,
        height: 480,
      },
      {
        name: 'portrait',
        width: 768,
        height: 1024,
      },
      {
        name: 'square',
        width: 1200,
        height: 1200,
      },
      {
        name: 'feature',
        width: 1024,
        height: 576,
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      label: 'Alt Text',
      type: 'text',
      required: true,
    },
  ],
};
