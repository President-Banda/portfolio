import fs from 'fs';
import matter from 'gray-matter';

const deriveCategory = (title = '', slug = '') => {
  const t = (title + ' ' + slug).toLowerCase();
  if (t.includes('machine learning') || t.includes('ai_vs') || t.includes('ai vs') || t.includes('deep learning')) return 'ML & AI';
  if (t.includes('cloudformation') || t.includes('infrastructure') || t.includes('terraform')) return 'Infrastructure';
  if (t.includes('what is') || t.includes('introduction') || t.includes('what_is')) return 'Fundamentals';
  return 'AWS';
};

const readTime = (content = '') => {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};

const getPostMetaData = () => {
  const folder = 'posts/aws/';
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter(f => f.endsWith('.md'));

  return markdownPosts.map(fileName => {
    const fileContents = fs.readFileSync(`${folder}${fileName}`, 'utf-8');
    const { data, content } = matter(fileContents);
    const slug = fileName.replace('.md', '');

    return {
      title:    data.title    ?? slug,
      date:     data.date     ?? '',
      subtitle: data.subtitle ?? '',
      category: data.category ?? deriveCategory(data.title, slug),
      readTime: readTime(content),
      slug,
    };
  });
};

export default getPostMetaData;
