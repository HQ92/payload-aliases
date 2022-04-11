# A Payload CMS running by itself

This repo only contains a payload project that can be used to deploy a separate payload instance by itself.

## Installation

Here is a step-by-step guide for how to use this repo:

1. Clone this repo
1. Run `cp .env.example .env` to create an `.env` file
1. Fill out your `.env` file with values that describe your environment using env.example as a template
1. Run `yarn` or `npm install`
1. Run `yarn dev` or `npm run dev` to open a development environment
1. Go to [http://localhost:3000/admin](http://localhost:3000/admin) to create your first user

## Building and serving in Production

This repo contains everything you need to both build your project for production purposes as well as serve it after it's been built.

- To build, run `yarn build` or `npm run build`.
- To serve, run `yarn serve` or `npm run serve`.
