import getPostMetaData from '../../components/getPostMetaData'
import BlogClient from '../../components/BlogClient'

const Blog = () => {
  const posts = getPostMetaData()
  return <BlogClient posts={posts} />
}

export default Blog
