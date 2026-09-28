import {defineArrayMember, defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons/User'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'Page À propos',
  type: 'document',
  icon: UserIcon,
  groups: [
    {name: 'hero', title: 'En-tête', default: true},
    {name: 'bio', title: 'Bio'},
    {name: 'sections', title: 'Sections'},
    {name: 'home', title: 'Accueil'},
  ],
  fields: [
    defineField({
      name: 'photo',
      title: 'Portrait',
      type: 'image',
      group: 'hero',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Texte alternatif',
          type: 'string',
          validation: (rule) => rule.required().warning('Le texte alternatif aide l’accessibilité.'),
        }),
      ],
    }),
    defineField({
      name: 'portraitRole',
      title: 'Rôle sous le portrait',
      type: 'internationalizedArrayString',
      group: 'hero',
      description: 'Par exemple « Développeur Front-End · 2+ ans ».',
    }),
    defineField({
      name: 'heroLine1',
      title: 'Titre, ligne 1',
      type: 'internationalizedArrayString',
      group: 'hero',
      description: 'Par exemple « Front-end ».',
    }),
    defineField({
      name: 'heroLine2',
      title: 'Titre, ligne 2 (grisée)',
      type: 'internationalizedArrayString',
      group: 'hero',
      description: 'Par exemple « basé à ».',
    }),
    defineField({
      name: 'heroLine3',
      title: 'Titre, ligne 3 (italique, couleur d’accent)',
      type: 'internationalizedArrayString',
      group: 'hero',
      description: 'Par exemple « Abidjan ». Le point final est ajouté automatiquement.',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'internationalizedArraySimpleBlockContent',
      group: 'bio',
      description: 'Un paragraphe par bloc. Le gras met un mot en valeur.',
    }),
    defineField({
      name: 'careerTitle',
      title: 'Parcours : titre',
      type: 'internationalizedArrayString',
      group: 'sections',
    }),
    defineField({
      name: 'careerIntro',
      title: 'Parcours : introduction',
      type: 'internationalizedArrayText',
      group: 'sections',
    }),
    defineField({
      name: 'stackTitle',
      title: 'Stack : titre',
      type: 'internationalizedArrayString',
      group: 'sections',
    }),
    defineField({
      name: 'stackIntro',
      title: 'Stack : introduction',
      type: 'internationalizedArrayText',
      group: 'sections',
    }),
    defineField({
      name: 'valuesTitle',
      title: 'Valeurs : titre',
      type: 'internationalizedArrayString',
      group: 'sections',
    }),
    defineField({
      name: 'values',
      title: 'Valeurs',
      type: 'array',
      group: 'sections',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'value',
          fields: [
            defineField({name: 'title', title: 'Titre', type: 'localeString'}),
            defineField({name: 'description', title: 'Description', type: 'localeText'}),
          ],
          preview: {select: {title: 'title.fr', subtitle: 'description.fr'}},
        }),
      ],
    }),
    defineField({
      name: 'homeIntro',
      title: 'Présentation (section À propos de l’accueil)',
      type: 'internationalizedArraySimpleBlockContent',
      group: 'home',
      description: 'Le premier paragraphe est affiché en grand.',
    }),
  ],
  preview: {prepare: () => ({title: 'Page À propos'})},
})
