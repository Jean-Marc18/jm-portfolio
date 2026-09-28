import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCaseStudy } from "@/lib/case-studies/getCaseStudy";
import { pick } from "@/lib/content/localize";
import CaseStudyView from "./CaseStudyView";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) return {};
  const title = study.coverLine1 || slug;
  const description = pick(study.intro, "fr");
  return {
    title,
    description,
    alternates: { canonical: `/projets/${slug}` },
    openGraph: { title, description, url: `/projets/${slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) notFound();
  return <CaseStudyView slug={slug} content={study} />;
}
