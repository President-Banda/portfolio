import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetaData from '../../../../components/getPostMetaData';

const getPostContent = ( slug ) => {
  // console.log(slug);
  const folder = "posts/";
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
}

export const generateStaticParams = async() => {
  const posts = getPostMetaData();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

const page = ( {params} ) => {
    const slug = params.slug;
    const post = getPostContent(slug);

    const MyArticle = ({ children, ...props }) => (
      <div {...props}>{children}</div>
    );

    const Links = ({ children, ...props }) => (
      <a {...props}>{children}</a>
    );

    const Emphasis = ({ children, ...props }) => (
      <strong {...props}>{children}</strong>
    );


  return (
    <div className='dark:text-white'>
      {/* page : {post.data.title } */}
      <div className="my-12 text-center dark:text-white">
        <h1 className='text-4xl font-extrabold dark:text-white'>
          {post.data.title }
        </h1>
        <p className='text-slate-400 text-xs mt-2 dark:text-white'>
          {post.data.date}
        </p>
      </div>
      <article className='prose lg:prose-xl dark:text-white'>
        <Markdown
          options={{
            overrides: {
                h1: {
                    component: MyArticle,
                    props: {
                        className: 'text-4xl dark:text-white ',
                    },
                },
                p: {
                  component: MyArticle,
                    props: {
                        className: 'dark:text-white',
                    },
                },

                h2: {
                  component: MyArticle,
                    props: {
                        className: 'text-2xl dark:text-white',
                    },
                },
                h3: {
                  component: MyArticle,
                    props: {
                        className: 'text-4xl dark:text-white',
                    },
                },
                p: {
                  component: MyArticle,
                    props: {
                        className: 'dark:text-white',
                    },
                },
                a: {
                  component: Links,
                    props: {
                        className: 'dark:text-white',
                    },
                },
                strong: {
                  component: Emphasis,
                    props: {
                        className: 'dark:text-white',
                    },
                }
            },
        }} 
        >
          { post.content }
        </Markdown>
      </article>
    </div>
    
  )
}

export default page
