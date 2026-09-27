import {defineArrayMember, defineField, defineType} from 'sanity'
import {BoltIcon} from '@sanity/icons/Bolt'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: BoltIcon,
  fields: [
    defineField({name: 'title', title: 'Titre', type: 'internationalizedArrayString'}),
    defineField({
      name: 'summary',
      title: 'Résumé (accueil)',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'description',
      title: 'Description (page Services)',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      description: 'L’accueil affiche les 3 premiers.',
      of: [defineArrayMember({type: 'localeString'})],
    }),
    defineField({
      name: 'deliverables',
      title: 'Livrables',
      type: 'array',
      of: [defineArrayMember({type: 'localeString'})],
    }),
    defineField({name: 'featured', title: 'Mis en avant', type: 'boolean', initialValue: false}),
    defineField({
      name: 'badge',
      title: 'Badge',
      type: 'internationalizedArrayString',
      description: 'Affiché sur l’accueil si le service est mis en avant, par exemple « Le plus demandé ».',
      hidden: ({parent}) => !parent?.featured,
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
    select: {title: 'title', featured: 'featured'},
    prepare: ({title, featured}) => ({
      title: (title as {language?: string; value?: string}[] | undefined)?.find((t) => t.language === 'fr')?.value,
      subtitle: featured ? 'Mis en avant' : undefined,
    }),
  },
})
