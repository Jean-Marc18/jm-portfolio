import type {StructureResolver} from 'sanity/structure'
import {CogIcon} from '@sanity/icons/Cog'
import {UserIcon} from '@sanity/icons/User'

export const SINGLETONS = ['siteSettings', 'aboutPage']

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenu')
    .items([
      S.listItem()
        .title('Réglages du site')
        .icon(CogIcon)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings').title('Réglages du site')),
      S.listItem()
        .title('Page À propos')
        .icon(UserIcon)
        .child(S.document().schemaType('aboutPage').documentId('aboutPage').title('Page À propos')),
      S.divider(),
      S.documentTypeListItem('project').title('Projets'),
      S.documentTypeListItem('experience').title('Expériences'),
      S.divider(),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('faq').title('Questions fréquentes'),
      S.documentTypeListItem('skillCategory').title('Stack technique'),
    ])
