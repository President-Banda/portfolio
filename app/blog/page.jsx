import React from 'react'
import fs from 'fs';
import BlogLayout from './layout'

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
    <div>
      <h2>
        {slugs}
      </h2>
    </div>
  ));

  return (
    <div>
      
    </div>    
  )
}

export default Blog