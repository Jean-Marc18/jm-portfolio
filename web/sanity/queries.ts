import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && defined(slug.current)] | order(orderRank asc, year desc) {
    _id,
    name,
    "slug": slug.current,
    shortName,
    year,
    url,
    stack,
    "tag": { "fr": category[language == "fr"][0].value, "en": category[language == "en"][0].value },
    "sub": { "fr": subtitle[language == "fr"][0].value, "en": subtitle[language == "en"][0].value },
    "description": { "fr": description[language == "fr"][0].value, "en": description[language == "en"][0].value },
    "role": { "fr": role[language == "fr"][0].value, "en": role[language == "en"][0].value },
    coverImage { asset, alt, hotspot, crop }
  }
`);
