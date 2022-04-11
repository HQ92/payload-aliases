import { Block } from 'payload/types';
import * as fromFields from '../fields';
import RedUnderline from '../components/RichText/leaves/RedUnderline';
import HR from '../components/RichText/elements/HR';

export type IContentColumnWidth = 'oneThird' | 'half' | 'twoThirds' | 'full';

export type IContentAlignment = 'left' | 'center' | 'right';

export type IContentAccentLineAlignment = 'left' | 'right';

export type IContentPaddingSize = 'none' | 'small' | 'medium' | 'large';

export type IContentColumn = {
  content: unknown;
  width: IContentColumnWidth;
  alignment: IContentAlignment;
};

export type IContent = {
  blockType: 'content';
  blockName?: string;
  columns: IContentColumn[];
  accentLine: boolean;
  accentLineAlignment: IContentAccentLineAlignment;
  paddingTop: IContentPaddingSize;
  paddingBottom: IContentPaddingSize;
  backgroundColor: fromFields.IBackgroundColor;
};

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    fromFields.backgroundColor,
    {
      name: 'columns',
      type: 'array',
      minRows: 1,
      labels: {
        singular: 'Column',
        plural: 'Columns',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'width',
              label: 'Column Width',
              type: 'select',
              defaultValue: 'full',
              required: true,
              options: [
                {
                  label: 'One Third',
                  value: 'oneThird',
                },
                {
                  label: 'Half',
                  value: 'half',
                },
                {
                  label: 'Two Thirds',
                  value: 'twoThirds',
                },
                {
                  label: 'Full Width',
                  value: 'full',
                },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'alignment',
              label: 'Alignment',
              type: 'select',
              defaultValue: 'left',
              required: true,
              options: [
                {
                  label: 'Left',
                  value: 'left',
                },
                {
                  label: 'Center',
                  value: 'center',
                },
                {
                  label: 'Right',
                  value: 'right',
                },
              ],
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
          admin: {
            leaves: [RedUnderline],
            elements: ['h2', 'h3', 'h4', 'h5', 'ul', 'ol', HR, 'link'],
          },
        },
      ],
    },
    {
      name: 'accentLine',
      label: 'Enable Accent Line',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'accentLineAlignment',
      label: 'Accent Line Alignment',
      type: 'radio',
      defaultValue: 'left',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
      admin: {
        condition: (_, siblingData) => Boolean(siblingData.accentLine),
        layout: 'horizontal',
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'paddingTop',
          label: 'Padding Top',
          type: 'select',
          defaultValue: 'medium',
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
        },
        {
          name: 'paddingBottom',
          label: 'Padding Bottom',
          type: 'select',
          defaultValue: 'medium',
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
        },
      ],
    },
  ],
};
