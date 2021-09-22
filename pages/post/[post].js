import { useRouter } from "next/router";

function Post() {
  const router = useRouter();
  const { post } = router.query;
  console.log("hello");
  return (
    <div>
      <p>hello {post}</p>
    </div>
  );
}

export default Post;
