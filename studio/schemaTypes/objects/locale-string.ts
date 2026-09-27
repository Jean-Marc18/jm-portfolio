import {defineField, defineType} from 'sanity'

/**
 * Short FR/EN pair for list items (bullets, tags, deliverables), where an
 * internationalized array per item would be heavy to edit.
 */
export const localeString = defineType({
  name: 'localeString',
  title: 'Texte FR / EN',
  type: 'object',
  fields: [
    defineField({name: 'fr', title: 'Français', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'en', title: 'English', type: 'string'}),
  ],
  preview: {
    select: {title: 'fr', subtitle: 'en'},
  },
})
