import getFormattedDate from "@/lib/getFormattedDate";
import { getPostData, getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";
import React from "react";



//WIP metadata function. Will go back and flesh out. 
export function generateMetadata({ params }: { params: { postId: string } }) {
    const postData =  getSortedPostsData().find(
      (post) => post.id === params.postId
    );
  
    const posts = getSortedPostsData(); //deduped! request data when you needed. data was requested on page.tsx
    const { postId } = params;

    const post = posts.find(post => post.id === postId)

    if (!post) {
        return {
            title: "Post not found",
        }
    }

    return {
        title: post.title,
    }
      
}

export default async function Post({ params }: { params: { postId: string } }) {
  const postData = await getSortedPostsData().find(
    (post) => post.id === params.postId
  );

  const posts = getSortedPostsData(); //deduped! request data when you needed. data was requested on page.tsx
  const { postId } = params;
if (!posts.find(post => post.id === postId)) {
    return notFound();
  }

const {title, date, contentHtml} = await getPostData(postId);

const pubDate = getFormattedDate(date)

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
        <h1 className="text-3xl mt-4 mb-0">
        </h1>
        <p className="mt-0">
            {pubDate}
        </p>
        <article>
            
        </article>
    </main>
  )
}
