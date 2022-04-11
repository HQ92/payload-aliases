import { buildConfig } from 'payload/config';
import { Configuration } from 'webpack';
import path from 'path';
import dotenv from 'dotenv';
import * as fromCollections from './collections';
import * as fromGlobals from './globals';

dotenv.config();

const webpackConfig = (config: Configuration) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      ...config.resolve?.alias,
      '@utils': path.resolve(__dirname, './utils'),
    },
  },
});

export default buildConfig({
  serverURL: 'http://localhost:3000',
  collections: [
    fromCollections.Page,
    fromCollections.Study,
    fromCollections.Media,
    fromCollections.FormSubmission,
    fromCollections.Category,
  ],
  globals: [fromGlobals.MegaMenu, fromGlobals.SocialMedia, fromGlobals.Footer],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  admin: {
    webpack: webpackConfig,
  },
});
