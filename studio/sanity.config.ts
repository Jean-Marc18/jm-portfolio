import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import {schemaTypes} from './schemaTypes'
import {SINGLETONS, structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'jmk-portfolio',

  projectId: 'ibpq0dxr',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    visionTool(),
    internationalizedArray({
      languages: [
        {id: 'fr', title: 'Français'},
        {id: 'en', title: 'English'},
      ],
      defaultLanguages: ['fr', 'en'],
      fieldTypes: ['string', 'text', 'simpleBlockContent'],
      languageDisplay: 'titleAndCode',
    }),
  ],

  schema: {
    types: schemaTypes,
    // Singletons are opened from the structure, never created from "New document".
    templates: (templates) => templates.filter(({schemaType}) => !SINGLETONS.includes(schemaType)),
  },

  document: {
    actions: (actions, {schemaType}) =>
      SINGLETONS.includes(schemaType)
        ? actions.filter(({action}) => action && ['publish', 'discardChanges', 'restore'].includes(action))
        : actions,
  },
})
