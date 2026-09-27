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

export const SITE_CONTENT_QUERY = defineQuery(`{
    "settings": *[_id == "siteSettings"][0]{
      "availabilityHeadline": { "fr": availabilityHeadline[language == "fr"][0].value, "en": availabilityHeadline[language == "en"][0].value },
      "availabilityShort": { "fr": availabilityShort[language == "fr"][0].value, "en": availabilityShort[language == "en"][0].value },
      "availabilityDetail": { "fr": availabilityDetail[language == "fr"][0].value, "en": availabilityDetail[language == "en"][0].value },
      "status": { "fr": status[language == "fr"][0].value, "en": status[language == "en"][0].value },
      email,
      socialLinks[]{ label, url },
      "location": { "fr": location[language == "fr"][0].value, "en": location[language == "en"][0].value },
      "languages": { "fr": languages[language == "fr"][0].value, "en": languages[language == "en"][0].value },
      "cvUrl": cv.asset->url,
      yearsOfExperience,
      projectsCount,
      sectorsCount,
      "sectorsList": { "fr": sectorsList[language == "fr"][0].value, "en": sectorsList[language == "en"][0].value },
      technologiesCount,
      homeStack,
      "seoTitle": { "fr": seoTitle[language == "fr"][0].value, "en": seoTitle[language == "en"][0].value },
      "seoDescription": { "fr": seoDescription[language == "fr"][0].value, "en": seoDescription[language == "en"][0].value },
      "ogImage": ogImage.asset->url
    },
    "experiences": *[_type == "experience"] | order(startYear desc){
      company,
      "role": { "fr": role[language == "fr"][0].value, "en": role[language == "en"][0].value },
      "sector": { "fr": sector[language == "fr"][0].value, "en": sector[language == "en"][0].value },
      "location": { "fr": location[language == "fr"][0].value, "en": location[language == "en"][0].value },
      "context": { "fr": context[language == "fr"][0].value, "en": context[language == "en"][0].value },
      startYear,
      endYear,
      highlights[]{ fr, en },
      stack
    },
    "skills": *[_type == "skillCategory"] | order(orderRank asc){
      "title": { "fr": title[language == "fr"][0].value, "en": title[language == "en"][0].value },
      items
    },
    "services": *[_type == "service"] | order(orderRank asc){
      "title": { "fr": title[language == "fr"][0].value, "en": title[language == "en"][0].value },
      "summary": { "fr": summary[language == "fr"][0].value, "en": summary[language == "en"][0].value },
      "description": { "fr": description[language == "fr"][0].value, "en": description[language == "en"][0].value },
      tags[]{ fr, en },
      deliverables[]{ fr, en },
      featured,
      "badge": { "fr": badge[language == "fr"][0].value, "en": badge[language == "en"][0].value }
    },
    "faqs": *[_type == "faq"] | order(orderRank asc){
      "question": { "fr": question[language == "fr"][0].value, "en": question[language == "en"][0].value },
      "answer": { "fr": answer[language == "fr"][0].value, "en": answer[language == "en"][0].value }
    },
    "projectCount": count(*[_type == "project" && defined(slug.current)])
  }
`);
