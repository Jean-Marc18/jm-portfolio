import {defineField, defineType} from 'sanity'
import {HelpCircleIcon} from '@sanity/icons/HelpCircle'

export const faq = defineType({
  name: 'faq',
  title: 'Question fréquente',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({name: 'question', title: 'Question', type: 'internationalizedArrayString'}),
    defineField({name: 'answer', title: 'Réponse', type: 'internationalizedArrayText'}),
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
    select: {title: 'question'},
    prepare: ({title}) => ({
      title: (title as {language?: string; value?: string}[] | undefined)?.find((t) => t.language === 'fr')?.value,
    }),
  },
})
