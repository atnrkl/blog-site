import Link from "next/link";
import Image from "next/image";

const Post = ({ post }) => {
  const type = post.frontmatter.type;

  console.log(post.slug);

  const flair = (type) => {
    switch (type) {
      case "General":
        return (
          <h1 className="text-purple-600 text-lg font-semibold">{type}</h1>
        );
      case "React":
        return <h1 className="text-blue-500 text-lg font-semibold">{type}</h1>;
      case "JS":
        return (
          <h1 className="text-yellow-700 text-lg font-semibold">{type}</h1>
        );
      case "CSS":
        return <h1 className="text-blue-300 text-lg font-semibold">{type}</h1>;
      case "Python":
        return <h1 className="text-green-400 text-lg font-semibold">{type}</h1>;
      case "PHP":
        return <h1 className="text-pink-400 text-lg font-semibold">{type}</h1>;

      default:
        break;
    }
  };

  return (
    <Link href={`/?post=${post}`} as={`/post/${post.slug}`}>
      <div className=" hover:scale-110 duration-75 cursor-pointer">
        <div className="items-center theme-color  border p-4 h-64 ">
          <div>
            {/* flair */}
            {flair(type)}
            {/* date */}
            <h3 className="text-sm text-gray-300">{post.frontmatter.date}</h3>
          </div>
          <div className="py-4">
            <h1>{post.frontmatter.title}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

{
  /* <img src={post.frontmatter.cover_image} />
<h1>{post.frontmatter.title}</h1> */
}
export default Post;
