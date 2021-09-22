import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Post from "../components/Post";
import { sortByDate } from "../utils";
import Header from "../components/Header";

import Modal from "react-modal";

import Head from "next/head";

Modal.setAppElement("#__next");

export default function Home({ posts }) {
  return (
    <div className="theme-color text-gray-50  ubuntu-font mb-0 h-full border">
      <Head></Head>
      <Header />
      <Modal className="">
        <p>in the modal</p>
      </Modal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 my-16  pb-20">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
