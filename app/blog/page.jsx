import React from 'react'
import fs from 'fs';
import BlogLayout from './layout'
import Link from 'next/link';
import matter from 'gray-matter';
import getPostMetaData from '../../components/getPostMetaData';
import PostPreview from '../../components/PostPreview';


const Blog = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post)  => (
    <PostPreview key={post.slug} {...post}  />
  ));

  return (
    <div>
      {postPreviews}
    </div>    
  )
}

export default Blog