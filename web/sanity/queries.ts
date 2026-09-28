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
    coverImage { asset, alt, hotspot, crop },
    hasCaseStudy
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
    "about": *[_id == "aboutPage"][0]{
      "photo": photo{ asset, hotspot, crop, alt },
      "portraitRole": { "fr": portraitRole[language == "fr"][0].value, "en": portraitRole[language == "en"][0].value },
      "heroLine1": { "fr": heroLine1[language == "fr"][0].value, "en": heroLine1[language == "en"][0].value },
      "heroLine2": { "fr": heroLine2[language == "fr"][0].value, "en": heroLine2[language == "en"][0].value },
      "heroLine3": { "fr": heroLine3[language == "fr"][0].value, "en": heroLine3[language == "en"][0].value },
      "bio": { "fr": bio[language == "fr"][0].value, "en": bio[language == "en"][0].value },
      "careerTitle": { "fr": careerTitle[language == "fr"][0].value, "en": careerTitle[language == "en"][0].value },
      "careerIntro": { "fr": careerIntro[language == "fr"][0].value, "en": careerIntro[language == "en"][0].value },
      "stackTitle": { "fr": stackTitle[language == "fr"][0].value, "en": stackTitle[language == "en"][0].value },
      "stackIntro": { "fr": stackIntro[language == "fr"][0].value, "en": stackIntro[language == "en"][0].value },
      "valuesTitle": { "fr": valuesTitle[language == "fr"][0].value, "en": valuesTitle[language == "en"][0].value },
      "values": values[]{ "title": title{ fr, en }, "description": description{ fr, en } },
      "homeIntro": { "fr": homeIntro[language == "fr"][0].value, "en": homeIntro[language == "en"][0].value }
    },
    "projectCount": count(*[_type == "project" && defined(slug.current)])
  }
`);

export const CASE_STUDY_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0]{
    name,
    hasCaseStudy,
      "kicker": { "fr": caseStudy.kicker[language == "fr"][0].value, "en": caseStudy.kicker[language == "en"][0].value },
      "intro": { "fr": caseStudy.intro[language == "fr"][0].value, "en": caseStudy.intro[language == "en"][0].value },
      "facts": caseStudy.facts[]{ "label": label{ fr, en }, "value": value{ fr, en } },
      "coverLine1": caseStudy.coverTitle.line1,
      "coverLine2": caseStudy.coverTitle.line2,
      "version": caseStudy.version,
      "productType": { "fr": caseStudy.productType[language == "fr"][0].value, "en": caseStudy.productType[language == "en"][0].value },
      "mainStack": caseStudy.mainStack,
      "contextTitle": { "fr": caseStudy.contextTitle[language == "fr"][0].value, "en": caseStudy.contextTitle[language == "en"][0].value },
      "contextTags": caseStudy.contextTags[]{ fr, en },
      "contextBody": { "fr": caseStudy.contextBody[language == "fr"][0].value, "en": caseStudy.contextBody[language == "en"][0].value },
      "approachLabel": { "fr": caseStudy.approachLabel[language == "fr"][0].value, "en": caseStudy.approachLabel[language == "en"][0].value },
      "approachTitle": { "fr": caseStudy.approachTitle[language == "fr"][0].value, "en": caseStudy.approachTitle[language == "en"][0].value },
      "approachIntro": { "fr": caseStudy.approachIntro[language == "fr"][0].value, "en": caseStudy.approachIntro[language == "en"][0].value },
      "approachPoints": caseStudy.approachPoints[]{ "title": title{ fr, en }, "description": description{ fr, en } },
      "featuresTitle": { "fr": caseStudy.featuresTitle[language == "fr"][0].value, "en": caseStudy.featuresTitle[language == "en"][0].value },
      "featuresIntro": { "fr": caseStudy.featuresIntro[language == "fr"][0].value, "en": caseStudy.featuresIntro[language == "en"][0].value },
      "features": caseStudy.features[]{ "title": title{ fr, en }, "description": description{ fr, en }, image{ asset, hotspot, crop }, size },
      "stackTitle": { "fr": caseStudy.stackTitle[language == "fr"][0].value, "en": caseStudy.stackTitle[language == "en"][0].value },
      "stackIntro": { "fr": caseStudy.stackIntro[language == "fr"][0].value, "en": caseStudy.stackIntro[language == "en"][0].value },
      "stackGroups": caseStudy.stackGroups[]{ "title": title{ fr, en }, items },
      "resultsTitle": { "fr": caseStudy.resultsTitle[language == "fr"][0].value, "en": caseStudy.resultsTitle[language == "en"][0].value },
      "results": caseStudy.results[]{ value, "label": label{ fr, en } }
  }
`);
