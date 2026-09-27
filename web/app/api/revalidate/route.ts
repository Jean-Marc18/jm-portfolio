import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { PROJECTS_TAG } from "@/lib/projects/getProjects";

type WebhookPayload = { _type?: string };

// Called by a Sanity webhook on every project change, so updates show up
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
    if (body?._type !== "project") {
      return new Response("Ignored", { status: 200 });
    }

    revalidateTag(PROJECTS_TAG, "max");
    return NextResponse.json({ revalidated: PROJECTS_TAG });
  } catch (err) {
    return new Response((err as Error).message, { status: 500 });
  }
}
