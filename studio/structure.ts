import type {StructureResolver} from 'sanity/structure'
import {CogIcon} from '@sanity/icons/Cog'

export const SINGLETONS = ['siteSettings']

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenu')
    .items([
      S.listItem()
        .title('Réglages du site')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings').title('Réglages du site')),
      S.divider(),
      S.documentTypeListItem('project').title('Projets'),
      S.documentTypeListItem('experience').title('Expériences'),
      S.divider(),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('faq').title('Questions fréquentes'),
      S.documentTypeListItem('skillCategory').title('Stack technique'),
    ])
