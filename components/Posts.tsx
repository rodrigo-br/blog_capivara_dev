import Card from "./Card";

export default function Posts({ posts }: any) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-4xl font-bold">Latest posts</h2>
      {posts.length > 0 ? (
        <ul className="grid grid-cols-1 gap-10">
          {posts.map(({ slug, frontmatter }: any) => (
            <li key={frontmatter.id}>
              <Card postData={frontmatter} slug={slug} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold">No posts yet</h3>
          <p className="text-gray-500 text-lg">Check back later</p>
        </div>
      )}
    </div>
  );
}
