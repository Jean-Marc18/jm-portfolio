import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'jmk-portfolio',

  projectId: 'ibpq0dxr',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    internationalizedArray({
      languages: [
        {id: 'fr', title: 'Français'},
        {id: 'en', title: 'English'},
      ],
      defaultLanguages: ['fr', 'en'],
      fieldTypes: ['string', 'text'],
      languageDisplay: 'titleAndCode',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
