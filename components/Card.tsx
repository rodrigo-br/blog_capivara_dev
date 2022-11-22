import Image from "next/image";
import Link from "next/link";

export default function Card({ postData, slug }: any) {
  return (
    <Link href={`/post/${slug}`}>
      <article className="flex rounded overflow-hidden shadow-2xl">
        <Image className="block w-1/2 h-48 bg-black" src="" alt="Mountain" />
        <div className="flex flex-col p-4 gap-2 w-full">
          <span className="date">{postData.date}</span>
          <h3 className="title">{postData.title}</h3>
          <p className="text_base">{postData.metaDesc}</p>
        </div>
      </article>
    </Link>
  );
}
