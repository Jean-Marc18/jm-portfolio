import {defineArrayMember, defineField, defineType} from 'sanity'
import {CodeIcon} from '@sanity/icons/Code'

export const skillCategory = defineType({
  name: 'skillCategory',
  title: 'Catégorie de stack',
  type: 'document',
  icon: CodeIcon,
  fields: [
    defineField({name: 'title', title: 'Titre', type: 'internationalizedArrayString'}),
    defineField({
      name: 'items',
      title: 'Technologies',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'orderRank',
      title: 'Ordre d’affichage',
      type: 'number',
      initialValue: 100,
      validation: (rule) => rule.required().integer().min(0),
    }),
  ],
  orderings: [{title: 'Ordre d’affichage', name: 'orderRankAsc', by: [{field: 'orderRank', direction: 'asc'}]}],
  preview: {
    select: {title: 'title', items: 'items'},
    prepare: ({title, items}) => ({
      title: (title as {language?: string; value?: string}[] | undefined)?.find((t) => t.language === 'fr')?.value,
      subtitle: (items as string[] | undefined)?.join(', '),
    }),
  },
})
