import fs from 'fs';
import Markdown from 'markdown-to-jsx';

const getPostContent = ( slug ) => {
  console.log(slug);
  const folder = "posts/";
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, "utf8");
  return content;
}

const page = ( {params} ) => {
    const slug = params.slug;
    const content = getPostContent(slug);
  return (
    <div>
      page : {slug }
      <div>
        <Markdown>{content}</Markdown>
      </div>
    </div>
    
  )
}

export default page
