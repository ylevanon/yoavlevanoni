// import React from "react";
// import { SanityClient, urlFor } from "../../lib/sanity";
// import { BlogPost } from "@/app/lib/interface";
// import Image from "next/image";
// import { PortableText } from "@portabletext/react";
// import CodeBlock from "@/shared/components/codeBlock";

// export const revalidate = 30;

// async function getData(slug: string) {
//   const query = `*[_type =="blog" && slug.current == '${slug}']{
//     "currentSlug" : slug.current,
//       title,
//       content,
//     titleImage
//   }[0]`;
//   const data = await SanityClient.fetch(query);
//   return data;
// }

// const components = {
//   types: {
//     code: CodeBlock,
//   },
// };

// export default async function page({ params }: { params: { slug: string } }) {
//   const data: BlogPost = await getData(params.slug);
//   return (
//     <div className="mt-48 flex flex-col">
//       <h1 className="text-center font-bold text-5xl pb-8">
//         {data.title}
//         <hr className="w-64 h-1 mx-auto my-4 bg-teal-500 border-0 rounded m-b-19"></hr>
//       </h1>
//       <Image
//         alt={data.title}
//         src={urlFor(data.titleImage).url()}
//         width={800}
//         height={800}
//         priority={true}
//         className={`rounded-lg mt-10 border self-center`}
//       />
//       <div className=" self-center mt-16 prose prose-xl dark:prose-invert prose-li:marker:bg-teal-500">
//         <PortableText value={data.content} components={components} />
//       </div>
//     </div>
//   );
// }

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
    <div className="mt-24 lg:mt-32 px-4   lg:px-6 max-w-4xl mx-auto">
      <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl pb-4 md:pb-6">
        {data.title}
      </h1>
      <hr className="w-32 md:w-48 lg:w-64 h-1 mx-auto my-4 bg-teal-500 border-0 rounded mb-6 md:mb-8" />

      <div className="relative w-full aspect-w-16 aspect-h-9 mt-6 md:mt-8">
        <Image
          alt={data.title}
          src={urlFor(data.titleImage).url()}
          objectFit="cover"
          width={800}
          height={800}
          priority={true}
          className="rounded-lg border"
        />
      </div>

      <div className="mt-8 md:mt-12 prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert prose-li:marker:bg-teal-500 max-w-none">
        <PortableText value={data.content} components={components} />
      </div>
    </div>
  );
}
