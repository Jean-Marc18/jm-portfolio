import {defineArrayMember, defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons/Case'

const yearRule = /^\d{4}$/

export const experience = defineType({
  name: 'experience',
  title: 'Expérience',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      name: 'company',
      title: 'Entreprise',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'role', title: 'Poste', type: 'internationalizedArrayString'}),
    defineField({
      name: 'sector',
      title: 'Secteur',
      type: 'internationalizedArrayString',
      description: 'Par exemple « Fintech ».',
    }),
    defineField({name: 'location', title: 'Ville', type: 'internationalizedArrayString'}),
    defineField({
      name: 'context',
      title: 'Contexte',
      type: 'internationalizedArrayString',
      description: 'Produits ou clients, par exemple « CDC-CI / Marché UMOA ».',
    }),
    defineField({
      name: 'startYear',
      title: 'Année de début',
      type: 'string',
      validation: (rule) => rule.required().regex(yearRule, {name: 'année sur 4 chiffres'}),
    }),
    defineField({
      name: 'endYear',
      title: 'Année de fin',
      type: 'string',
      description: 'Laisser vide pour un poste en cours.',
      validation: (rule) => rule.regex(yearRule, {name: 'année sur 4 chiffres'}),
    }),
    defineField({
      name: 'highlights',
      title: 'Réalisations',
      type: 'array',
      of: [defineArrayMember({type: 'localeString'})],
    }),
    defineField({
      name: 'stack',
      title: 'Stack',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {layout: 'tags'},
    }),
  ],
  orderings: [
    {title: 'Plus récent', name: 'startYearDesc', by: [{field: 'startYear', direction: 'desc'}]},
  ],
  preview: {
    select: {title: 'company', start: 'startYear', end: 'endYear'},
    prepare: ({title, start, end}) => ({title, subtitle: `${start ?? ''}-${end ?? '…'}`}),
  },
})
