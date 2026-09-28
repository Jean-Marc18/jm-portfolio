import {defineField, defineType} from 'sanity'

/** Longer FR/EN pair for list items that need a paragraph (descriptions). */
export const localeText = defineType({
  name: 'localeText',
  title: 'Paragraphe FR / EN',
  type: 'object',
  fields: [
    defineField({name: 'fr', title: 'Français', type: 'text', rows: 3, validation: (rule) => rule.required()}),
    defineField({name: 'en', title: 'English', type: 'text', rows: 3}),
  ],
  preview: {select: {title: 'fr', subtitle: 'en'}},
})
