import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetaData from '../../../../components/getPostMetaData';

const getPostContent = ( slug ) => {
  console.log(slug);
  const folder = "posts/";
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
}

export const generateStaticParams = async() => {
  const posts = getPostMetaData();

  return posts.map((post) => {
    slug: post.slug;
  })
}

const page = ( {params} ) => {
    const slug = params.slug;
    const post = getPostContent(slug);
  return (
    <div>
      page : {post.data.title }
      <div>
        <Markdown>{ post.content }</Markdown>
      </div>
    </div>
    
  )
}

export default page
