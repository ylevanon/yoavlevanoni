import React from "react";
import { SanityClient, urlFor } from "../lib/sanity";
import { simpleBlogCard } from "../lib/interface";
import { Card, CardContent } from "@/shared/ui/card";
import Image from "next/image";
import { Button } from "@/shared/ui/button";
import Link from "next/link";

export const revalidate = 30;

async function getPosts() {
  const query = `*[_type == 'blog'] | order(_createdAt desc){
  title, 
  smallDescription,
  "currentSlug":slug.current,
  titleImage
} `;
  const posts = await SanityClient.fetch(query);
  return posts;
}

export default async function page() {
  const data: simpleBlogCard[] = await getPosts();
  console.log(data);
  return (
    <section id="blog" className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 mt-10 pt-16 sm:py-32 md:pt-46 md:pb-48 md:space-x-4 md:text-left">
        <h1 className="text-center font-bold text-4xl pb-8">
          Yoav&apos;s Blogs
          <hr className="w-64 h-1 mx-auto my-4 bg-teal-500 border-0 rounded m-b-19"></hr>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5">
          {data.map((post, idx) => (
            <Card key={idx}>
              <Image
                alt={post.smallDescription}
                src={urlFor(post.titleImage).url()}
                width={500}
                height={500}
                style={{ aspectRatio: "1/1" }}
                className="rounded-t-lg h-[2oopx] object-cover border"
              />
              <CardContent className="mt-5">
                <h3 className="text-lg line-clamp-1 font-bold">{post.title}</h3>
                <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                  {post.smallDescription}
                </p>
                <Button className="w-full mt-7 bg-teal-400" asChild>
                  <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
