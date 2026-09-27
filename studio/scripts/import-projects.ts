/**
 * Imports the projects currently hard-coded in the web app into Sanity.
 *
 * Run once from the studio folder, while logged in (`npx sanity login`):
 *   npm run import-projects
 *
 * Projects whose slug already exists in the dataset are skipped, so the
 * script can be re-run safely.
 */
import {createReadStream, existsSync} from 'node:fs'
import {randomUUID} from 'node:crypto'
import path from 'node:path'
import {getCliClient} from 'sanity/cli'
import {dictionaries} from '../../web/lib/i18n/dictionaries'

const client = getCliClient({apiVersion: '2026-09-27'})

const WEB_PUBLIC = path.resolve(process.cwd(), '../web/public')

// Same mapping as LOCAL_SCREENSHOTS in the web app.
const COVERS: Record<string, string> = {
  ciblea: '/projects/ciblea/hero.png',
  'pipv-pped': '/projects/pipv-pped.png',
  'e-panacee': '/projects/e-panacee.png',
  'maedow-flow': '/projects/maedow-flow.png',
  'maedow-arch-docs': '/projects/maedow-arch-docs.png',
}

type Kind = 'String' | 'Text'

const localized = (kind: Kind, fr?: string, en?: string) =>
  (
    [
      ['fr', fr],
      ['en', en],
    ] as const
  )
    .filter(([, value]) => value)
    .map(([language, value]) => ({
      _key: randomUUID().slice(0, 12),
      _type: `internationalizedArray${kind}Value`,
      language,
      value,
    }))

async function uploadCover(slug: string, alt: string) {
  const file = COVERS[slug]
  if (!file) return undefined
  const filePath = path.join(WEB_PUBLIC, file)
  if (!existsSync(filePath)) return undefined
  const asset = await client.assets.upload('image', createReadStream(filePath), {
    filename: path.basename(filePath),
  })
  return {_type: 'image', asset: {_type: 'reference', _ref: asset._id}, alt}
}

async function run() {
  const fr = dictionaries.fr
  const en = dictionaries.en
  const existing = new Set(
    await client.fetch<string[]>(`*[_type == "project" && defined(slug.current)].slug.current`),
  )

  for (const [index, item] of fr.projects.items.entries()) {
    if (existing.has(item.slug)) {
      console.log(`- ${item.name} existe déjà, ignoré`)
      continue
    }
    const itemEn = en.projects.items.find((p) => p.slug === item.slug)
    const coverImage = await uploadCover(item.slug, `${item.name}, ${item.sub}`)

    const doc = await client.create({
      _type: 'project',
      name: item.name,
      slug: {_type: 'slug', current: item.slug},
      shortName: item.shortName,
      category: localized('String', item.tag, itemEn?.tag),
      year: item.year,
      subtitle: localized('String', item.sub, itemEn?.sub),
      description: localized('Text', item.description, itemEn?.description),
      role: localized(
        'String',
        fr.travauxPage.roleByName[item.name],
        en.travauxPage.roleByName[item.name],
      ),
      stack: item.stack,
      url: item.url,
      ...(coverImage ? {coverImage} : {}),
      orderRank: (index + 1) * 10,
    })
    console.log(`+ ${item.name} importé (${doc._id})`)
  }
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
