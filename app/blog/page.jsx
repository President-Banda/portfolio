import React from 'react'
import fs from 'fs';
import BlogLayout from './layout'
import Link from 'next/link';
import matter from 'gray-matter';
import getPostMetaData from '../../components/getPostMetaData'


const Blog = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post)  => (
    <div key={""}>
      <Link href={`/blog/posts/${post.slug}`}>
        <h2>
          {post.title}
        </h2>
        <p>
          {post.subtitle}
        </p>
        <p>
          {post.date}
        </p>
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