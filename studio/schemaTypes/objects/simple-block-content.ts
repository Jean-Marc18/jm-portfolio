import {defineArrayMember, defineType} from 'sanity'

/** Paragraphs with bold and italic only: enough for case study prose. */
export const simpleBlockContent = defineType({
  name: 'simpleBlockContent',
  title: 'Texte enrichi',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [{title: 'Paragraphe', value: 'normal'}],
      lists: [],
      marks: {
        decorators: [
          {title: 'Gras', value: 'strong'},
          {title: 'Italique', value: 'em'},
        ],
        annotations: [],
      },
    }),
  ],
})
