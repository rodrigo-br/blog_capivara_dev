import fs from "fs";
import matter from "gray-matter";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
import Posts from "../components/Posts";

export async function getStaticProps() {
  const files = fs.readdirSync("posts");

  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return { slug, frontmatter };
  });

  return { props: { posts } };
}

export default function Home({ posts }: any) {
  return (
    <>
      <main className="w-screen block h-full">
        <div className="flex flex-col gap-10 w-2/3 mx-auto my-10">
          <Feature post={posts[0]} />
          <Posts posts={posts.slice(1)} />
        </div>
      </main>
      <Footer />
    </>
  );
}
