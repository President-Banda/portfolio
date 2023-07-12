import getPostMetaData from '../../components/getPostMetaData';
import PostPreview from '../../components/PostPreview';


const Blog = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((post)  => (
    <PostPreview
      key={post.slug} 
      {...post}  
    />
  ));

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3'>
      {postPreviews}
    </div>    
  )
}

export default Blog