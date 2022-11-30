import Card from "./Card"

export default function Posts({ posts }: any) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <h2 className="text-4xl font-bold">Latest posts</h2>
      <ul className="grid grid-cols-1 gap-10">
        {posts.map(({ slug, frontmatter }: any) => (
          <Card postData={frontmatter} slug={slug} key={frontmatter.id} />
        ))}
      </ul>
    </div>
  );
}
