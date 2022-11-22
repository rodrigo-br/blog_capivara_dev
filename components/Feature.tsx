import Link from "next/link";
import Image from "next/image";

export default function Feature({ post }: any) {
  return (
    <Link href={`/post/${post.slug}`}>
      <section className="flex flex-col gap-2">
        <h2 className="text-4xl font-bold">{post.frontmatter.title}</h2>
        <Image
          src={post.frontmatter.banner}
          alt={post.frontmatter.title}
          className="w-full h-96 object-cover overflow-hidden bg-black rounded"
        />
        <p className="text-2xl">{post.frontmatter.metaDesc}</p>
        <span className="text-gray-500 text-sm">{post.frontmatter.date}</span>
      </section>
    </Link>
  );
}
