import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { SANITY_TAG } from "@/lib/projects/getProjects";

type WebhookPayload = { _type?: string };

const CONTENT_TYPES = [
  "project",
  "siteSettings",
  "experience",
  "service",
  "faq",
  "skillCategory",
];

// Called by a Sanity webhook on every content change, so updates show up
// right away instead of waiting for the hourly revalidation.
export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true,
    );

    if (!isValidSignature) {
      return new Response("Invalid signature", { status: 401 });
    }
    if (!body?._type || !CONTENT_TYPES.includes(body._type)) {
      return new Response("Ignored", { status: 200 });
    }

    revalidateTag(SANITY_TAG, "max");
    return NextResponse.json({ revalidated: SANITY_TAG, type: body._type });
  } catch (err) {
    return new Response((err as Error).message, { status: 500 });
  }
}
