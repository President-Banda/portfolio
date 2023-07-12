import Link from "next/link";

const PostPreview = ( props ) => {
    return <div className="grid border border-sakura m-2 p-5 items-center justify-center shadow-xl rounded-lg glassmorphic-container transition hover:scale-150">
    <Link href={`/blog/posts/${props.slug}`}>
      <h2 className="font-bold hover:underline">
        {props.title}
      </h2>
      <p className="text-xs text-sakura">
        {props.date}
      </p>
      <p>
        {props.subtitle}
      </p>
    </Link>
  </div>
}

export default PostPreview;