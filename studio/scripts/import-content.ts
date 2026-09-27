/**
 * Imports the site-wide content currently bundled in the web app (settings,
 * experiences, stack, services, FAQ) into Sanity.
 *
 * Run once from the studio folder, while logged in (`npx sanity login`):
 *   npm run import-content
 *
 * Existing content is never overwritten: the settings are skipped if they
 * already exist, and each list is skipped if it already has documents.
 */
import {createReadStream, existsSync} from 'node:fs'
import {randomUUID} from 'node:crypto'
import path from 'node:path'
import {getCliClient} from 'sanity/cli'
import {DEFAULT_SITE_CONTENT} from '../../web/lib/content/defaults'
import type {Localized} from '../../web/lib/content/types'

const client = getCliClient({apiVersion: '2026-09-27'})
const key = () => randomUUID().slice(0, 12)

const localized = (kind: 'String' | 'Text', value: Localized) =>
  (['fr', 'en'] as const)
    .filter((language) => value[language])
    .map((language) => ({
      _key: key(),
      _type: `internationalizedArray${kind}Value`,
      language,
      value: value[language],
    }))

const localeStrings = (values: Localized[]) =>
  values.map((v) => ({_key: key(), _type: 'localeString', fr: v.fr, en: v.en}))

async function hasDocuments(type: string) {
  return (await client.fetch<number>(`count(*[_type == $type])`, {type})) > 0
}

async function importSettings() {
  if (await client.fetch<boolean>(`defined(*[_id == "siteSettings"][0]._id)`)) {
    console.log('- Réglages du site : existent déjà, ignorés')
    return
  }
  const s = DEFAULT_SITE_CONTENT.settings
  const cvPath = path.resolve(process.cwd(), '../web/public', s.cvUrl.replace(/^\//, ''))
  const cvAsset = existsSync(cvPath)
    ? await client.assets.upload('file', createReadStream(cvPath), {
        filename: path.basename(cvPath),
        contentType: 'application/pdf',
      })
    : null

  await client.createIfNotExists({
    _id: 'siteSettings',
    _type: 'siteSettings',
    availabilityHeadline: localized('String', s.availabilityHeadline),
    availabilityShort: localized('String', s.availabilityShort),
    availabilityDetail: localized('String', s.availabilityDetail),
    status: localized('String', s.status),
    email: s.email,
    socialLinks: s.socialLinks.map((l) => ({_key: key(), _type: 'socialLink', ...l})),
    location: localized('String', s.location),
    languages: localized('String', s.languages),
    ...(cvAsset ? {cv: {_type: 'file', asset: {_type: 'reference', _ref: cvAsset._id}}} : {}),
    yearsOfExperience: s.yearsOfExperience,
    projectsCount: s.projectsCount,
    sectorsCount: s.sectorsCount,
    sectorsList: localized('String', s.sectorsList),
    technologiesCount: s.technologiesCount,
    homeStack: s.homeStack,
    seoTitle: localized('String', s.seoTitle),
    seoDescription: localized('Text', s.seoDescription),
  })
  console.log('+ Réglages du site importés')
}

async function importList<T>(type: string, label: string, items: T[], toDoc: (item: T, index: number) => object) {
  if (await hasDocuments(type)) {
    console.log(`- ${label} : déjà présents, ignorés`)
    return
  }
  const tx = client.transaction()
  items.forEach((item, i) => tx.create({_type: type, ...toDoc(item, i)}))
  await tx.commit()
  console.log(`+ ${label} importés (${items.length})`)
}

async function run() {
  const c = DEFAULT_SITE_CONTENT
  await importSettings()
  await importList('experience', 'Expériences', c.experiences, (e) => ({
    company: e.company,
    role: localized('String', e.role),
    sector: localized('String', e.sector),
    location: localized('String', e.location),
    context: localized('String', e.context),
    startYear: e.startYear,
    ...(e.endYear ? {endYear: e.endYear} : {}),
    highlights: localeStrings(e.highlights),
    stack: e.stack,
  }))
  await importList('skillCategory', 'Catégories de stack', c.skills, (sk, i) => ({
    title: localized('String', sk.title),
    items: sk.items,
    orderRank: (i + 1) * 10,
  }))
  await importList('service', 'Services', c.services, (sv, i) => ({
    title: localized('String', sv.title),
    summary: localized('Text', sv.summary),
    description: localized('Text', sv.description),
    tags: localeStrings(sv.tags),
    deliverables: localeStrings(sv.deliverables),
    featured: sv.featured,
    badge: localized('String', sv.badge),
    orderRank: (i + 1) * 10,
  }))
  await importList('faq', 'Questions fréquentes', c.faqs, (f, i) => ({
    question: localized('String', f.question),
    answer: localized('Text', f.answer),
    orderRank: (i + 1) * 10,
  }))
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
