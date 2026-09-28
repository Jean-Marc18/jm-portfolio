import {defineArrayMember, defineField, defineType} from 'sanity'
import {ProjectsIcon} from '@sanity/icons/Projects'

type LocalizedValue = {language?: string; value?: string}

const firstValue = (items?: LocalizedValue[]) =>
  items?.find((item) => item.language === 'fr')?.value ?? items?.[0]?.value

export const project = defineType({
  name: 'project',
  title: 'Projet',
  type: 'document',
  icon: ProjectsIcon,
  groups: [
    {name: 'content', title: 'Contenu', default: true},
    {name: 'media', title: 'Visuel'},
    {name: 'caseStudy', title: 'Étude de cas'},
    {name: 'meta', title: 'Réglages'},
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Identifiant (slug)',
      type: 'slug',
      group: 'content',
      description: 'Sert d’URL pour une étude de cas, par exemple /projets/ciblea.',
      options: {source: 'name', maxLength: 64},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortName',
      title: 'Nom court',
      type: 'string',
      group: 'content',
      description: 'Affiché en grand sur la couverture quand il n’y a pas de visuel.',
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'internationalizedArrayString',
      group: 'content',
      description: 'Pastille sur la carte, par exemple « AI · SaaS ».',
    }),
    defineField({
      name: 'year',
      title: 'Année',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required().regex(/^\d{4}$/, {name: 'année sur 4 chiffres'}),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'internationalizedArrayString',
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'internationalizedArrayText',
      group: 'content',
    }),
    defineField({
      name: 'role',
      title: 'Rôle',
      type: 'internationalizedArrayString',
      group: 'content',
      description: 'Affiché sur la page Travaux, par exemple « Développeur Front-End · 6 mois ».',
    }),
    defineField({
      name: 'stack',
      title: 'Stack',
      type: 'array',
      group: 'content',
      of: [defineArrayMember({type: 'string'})],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'url',
      title: 'Site en ligne',
      type: 'url',
      group: 'content',
      validation: (rule) => rule.uri({scheme: ['https', 'http']}),
    }),
    defineField({
      name: 'coverImage',
      title: 'Capture de couverture',
      type: 'image',
      group: 'media',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Texte alternatif',
          type: 'string',
          validation: (rule) => rule.required().warning('Le texte alternatif aide l’accessibilité et le SEO.'),
        }),
      ],
    }),
    defineField({
      name: 'hasCaseStudy',
      title: 'Publier une étude de cas',
      type: 'boolean',
      group: 'caseStudy',
      initialValue: false,
      description: 'Active la page /projets/<slug>. Les cartes du projet y mènent au lieu du site en ligne.',
    }),
    defineField({
      name: 'caseStudy',
      title: 'Étude de cas',
      type: 'caseStudy',
      group: 'caseStudy',
      hidden: ({document}) => !document?.hasCaseStudy,
    }),
    defineField({
      name: 'orderRank',
      title: 'Ordre d’affichage',
      type: 'number',
      group: 'meta',
      description: 'Les petits nombres apparaissent en premier.',
      initialValue: 100,
      validation: (rule) => rule.required().integer().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Ordre d’affichage',
      name: 'orderRankAsc',
      by: [{field: 'orderRank', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'name', year: 'year', subtitle: 'subtitle', media: 'coverImage'},
    prepare({title, year, subtitle, media}) {
      const sub = firstValue(subtitle as LocalizedValue[] | undefined)
      return {title, subtitle: [year, sub].filter(Boolean).join(' · '), media}
    },
  },
})
