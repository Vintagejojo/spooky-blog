import { getSortedPostsData } from "@/lib/posts";
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
  if (!posts.find(post => post.id === postID)) {
    return notFound();
  }

  return <div>page</div>;
}
