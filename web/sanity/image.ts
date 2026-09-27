import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { dataset, projectId } from "./env";

const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => builder.image(source);
