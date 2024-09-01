import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";    

export const SanityClient = createClient({
    apiVersion: "2023-05-03",
    projectId: '4xk1nram',
    dataset: 'production',
    useCdn: false,
});

const builder = imageUrlBuilder(SanityClient);

export function urlFor(source: any) {
    return builder.image(source);
}