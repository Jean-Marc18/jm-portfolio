import {defineArrayMember, defineField, defineType} from 'sanity'

const frValue = (items?: {language?: string; value?: string}[]) =>
  items?.find((i) => i.language === 'fr')?.value

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Étude de cas',
  type: 'object',
  groups: [
    {name: 'hero', title: 'En-tête', default: true},
    {name: 'context', title: 'Contexte'},
    {name: 'approach', title: 'Approche'},
    {name: 'features', title: 'Fonctionnalités'},
    {name: 'stack', title: 'Stack'},
    {name: 'results', title: 'Résultats'},
  ],
  fields: [
    // En-tête
    defineField({
      name: 'kicker',
      title: 'Surtitre',
      type: 'internationalizedArrayString',
      group: 'hero',
      description: 'Pastille à côté de la catégorie, par exemple « Projet personnel / 2025 ».',
    }),
    defineField({name: 'intro', title: 'Introduction', type: 'internationalizedArrayText', group: 'hero'}),
    defineField({
      name: 'facts',
      title: 'Fiche projet',
      type: 'array',
      group: 'hero',
      description: 'Client, rôle, durée, année…',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'fact',
          fields: [
            defineField({name: 'label', title: 'Intitulé', type: 'localeString'}),
            defineField({name: 'value', title: 'Valeur', type: 'localeString'}),
          ],
          preview: {select: {title: 'label.fr', subtitle: 'value.fr'}},
        }),
      ],
    }),
    defineField({
      name: 'coverTitle',
      title: 'Titre de la couverture',
      type: 'object',
      group: 'hero',
      description: 'Deux lignes, la seconde en italique. Par exemple « Ciblea » et « IA. ».',
      fields: [
        defineField({name: 'line1', title: 'Ligne 1', type: 'string'}),
        defineField({name: 'line2', title: 'Ligne 2', type: 'string'}),
      ],
    }),
    defineField({
      name: 'version',
      title: 'Version',
      type: 'string',
      group: 'hero',
      description: 'Par exemple « v1.0 · production ».',
    }),
    defineField({name: 'productType', title: 'Type de produit', type: 'internationalizedArrayString', group: 'hero'}),
    defineField({
      name: 'mainStack',
      title: 'Stack principale',
      type: 'string',
      group: 'hero',
      description: 'Par exemple « Next.js 16 · Supabase · Inngest ».',
    }),

    // Contexte
    defineField({name: 'contextTitle', title: 'Titre', type: 'internationalizedArrayString', group: 'context'}),
    defineField({
      name: 'contextTags',
      title: 'Tags',
      type: 'array',
      group: 'context',
      of: [defineArrayMember({type: 'localeString'})],
    }),
    defineField({
      name: 'contextBody',
      title: 'Texte',
      type: 'internationalizedArraySimpleBlockContent',
      group: 'context',
    }),

    // Approche
    defineField({
      name: 'approachLabel',
      title: 'Surtitre',
      type: 'internationalizedArrayString',
      group: 'approach',
      description: 'Par exemple « L’architecture IA ».',
    }),
    defineField({name: 'approachTitle', title: 'Titre', type: 'internationalizedArrayString', group: 'approach'}),
    defineField({name: 'approachIntro', title: 'Introduction', type: 'internationalizedArrayText', group: 'approach'}),
    defineField({
      name: 'approachPoints',
      title: 'Points clés',
      type: 'array',
      group: 'approach',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'approachPoint',
          fields: [
            defineField({name: 'title', title: 'Titre', type: 'localeString'}),
            defineField({name: 'description', title: 'Description', type: 'localeText'}),
          ],
          preview: {select: {title: 'title.fr'}},
        }),
      ],
    }),

    // Fonctionnalités
    defineField({name: 'featuresTitle', title: 'Titre', type: 'internationalizedArrayString', group: 'features'}),
    defineField({name: 'featuresIntro', title: 'Introduction', type: 'internationalizedArrayText', group: 'features'}),
    defineField({
      name: 'features',
      title: 'Captures',
      type: 'array',
      group: 'features',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'feature',
          fields: [
            defineField({name: 'title', title: 'Titre', type: 'localeString'}),
            defineField({name: 'description', title: 'Description', type: 'localeText'}),
            defineField({name: 'image', title: 'Capture', type: 'image', options: {hotspot: true}}),
            defineField({
              name: 'size',
              title: 'Taille',
              type: 'string',
              initialValue: 'normal',
              options: {
                list: [
                  {title: 'Grande', value: 'large'},
                  {title: 'Normale', value: 'normal'},
                  {title: 'Petite', value: 'small'},
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
            }),
          ],
          preview: {select: {title: 'title.fr', subtitle: 'size', media: 'image'}},
        }),
      ],
    }),

    // Stack
    defineField({name: 'stackTitle', title: 'Titre', type: 'internationalizedArrayString', group: 'stack'}),
    defineField({name: 'stackIntro', title: 'Introduction', type: 'internationalizedArrayText', group: 'stack'}),
    defineField({
      name: 'stackGroups',
      title: 'Groupes',
      type: 'array',
      group: 'stack',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'stackGroup',
          fields: [
            defineField({name: 'title', title: 'Titre', type: 'localeString'}),
            defineField({
              name: 'items',
              title: 'Technologies',
              type: 'array',
              of: [defineArrayMember({type: 'string'})],
              options: {layout: 'tags'},
            }),
          ],
          preview: {select: {title: 'title.fr', items: 'items'}, prepare: ({title, items}) => ({title, subtitle: (items as string[] | undefined)?.join(', ')})},
        }),
      ],
    }),

    // Résultats
    defineField({name: 'resultsTitle', title: 'Titre', type: 'internationalizedArrayString', group: 'results'}),
    defineField({
      name: 'results',
      title: 'Chiffres',
      type: 'array',
      group: 'results',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'result',
          fields: [
            defineField({name: 'value', title: 'Valeur', type: 'string', description: 'Par exemple « 60s ».'}),
            defineField({name: 'label', title: 'Légende', type: 'localeString'}),
          ],
          preview: {select: {title: 'value', subtitle: 'label.fr'}},
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'contextTitle'},
    prepare: ({title}) => ({title: frValue(title as {language?: string; value?: string}[])}),
  },
})
