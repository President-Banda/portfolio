import React from 'react'
import fs from 'fs';
import Link from 'next/link';
import matter from 'gray-matter';

const getPostMetaData = ()=> {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  // const slugs = markdownPosts.map((file) => file.replace(".md", ""));

  // return slugs;

  // Get front end matter from the markdown files

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const matterResult = matter(fileContents);

    return {
      title : matterResult.data.title,
      date : matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md","")
    };
  });

  return posts;
};

export default getPostMetaData