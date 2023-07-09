import React from 'react'
import fs from 'fs';
import BlogLayout from './layout'
import Link from 'next/link';

const getPostsMetaData = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));

  return slugs;
};

const Blog = () => {
  const postMetaData = getPostsMetaData();
  const postPreviews = postMetaData.map((slugs)  => (
    <div key={""}>
      <Link>
        <h2>
          {slugs}
        </h2>
      </Link>
    </div>
  ));

  return (
    <div>
      {postPreviews}
    </div>    
  )
}

export default Blog