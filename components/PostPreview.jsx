import Link from "next/link";

const PostPreview = ( props ) => {
    return <div>
    <Link href={`/blog/posts/${props.slug}`}>
      <h2>
        {props.title}
      </h2>
      <p>
        {props.subtitle}
      </p>
      <p>
        {props.date}
      </p>
    </Link>
  </div>
}

export default PostPreview;