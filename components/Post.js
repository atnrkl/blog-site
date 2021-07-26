import Link from "next/link";

const Post = ({ post }) => {
  return (
    <div>
      <div className="container items-center px-5 py-12">
        <div className="flex flex-wrap ">
          <div className="w-full mx-auto my-4 bg-white border rounded-lg shadow-xl ">
            <div className="p-6">
              <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font">
                {" "}
                {post.frontmatter.date}
              </h2>
              <h4 className="mb-8 text-2xl font-semibold leading-none tracking-tighter text-black lg:text-3xl title-font ">
                {" "}
                {post.frontmatter.title}
              </h4>
              <img className="rounded-md" src={post.frontmatter.cover_image} />
              <p className="mb-3 text-base leading-relaxed text-blueGray-500">
                {" "}
                {post.frontmatter.excerpt}{" "}
              </p>
              <p></p>
              <Link href={`/blog/${post.slug}`}>
                <a
                  className="text-sm font-semibold text-blue-600 uppercase hover:text-black"
                  title="read more"
                >
                  {" "}
                  Read More - Article 1 »{" "}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <img src={post.frontmatter.cover_image} />
<h1>{post.frontmatter.title}</h1> */
}
export default Post;
