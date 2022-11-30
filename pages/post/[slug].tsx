import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: { slug: fileName.replace(".md", "") },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }: any) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: { frontmatter, content },
  };
}

export default function PostPage({ frontmatter, content }: any) {
  return (
    <main className="h-full w-full flex flex-col items-center justify-center my-10">
      <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
      <span className="text-gray-500 text-sm">{frontmatter.date}</span>
      <div className="blog w-7/12 mt-10 text-gray-500 text-lg">
        <div
          dangerouslySetInnerHTML={{
            __html: md({
              html: true,
              linkify: true,
              typographer: true,
            }).render(content),
          }}
        />
      </div>
    </main>
  );
}
