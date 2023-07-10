import fs from 'fs';

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
      <p>{content}</p>
    </div>
    
  )
}

export default page
