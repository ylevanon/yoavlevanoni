import React from "react";
import { SanityClient, urlFor } from "../../lib/sanity";
import { BlogPost } from "@/app/lib/interface";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import CodeBlock from "@/shared/components/codeBlock";

export const revalidate = 30;

async function getData(slug: string) {
  const query = `*[_type =="blog" && slug.current == '${slug}']{ 
    "currentSlug" : slug.current,
      title,
      content,
    titleImage
  }[0]`;
  const data = await SanityClient.fetch(query);
  return data;
}

const components = {
  types: {
    code: CodeBlock,
  },
};

export default async function page({ params }: { params: { slug: string } }) {
  const data: BlogPost = await getData(params.slug);
  return (
    <div className="mt-48 flex flex-col">
      <h1 className="text-center font-bold text-5xl pb-8">
        {data.title}
        <hr className="w-64 h-1 mx-auto my-4 bg-teal-500 border-0 rounded m-b-19"></hr>
      </h1>
      <Image
        alt={data.title}
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        priority={true}
        className={`rounded-lg mt-10 border self-center`}
      />
      <div className=" self-center mt-16 prose prose-xl dark:prose-invert prose-li:marker:bg-teal-500">
        <PortableText value={data.content} components={components} />
      </div>
    </div>
  );
}
