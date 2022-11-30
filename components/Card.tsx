import Image from "next/image";
import Link from "next/link";

export default function Card({ postData, slug }: any) {
  return (
    <li>
      <Link href={`/post/${slug}`}>
        <article className="flex rounded overflow-hidden shadow-2xl">
          {postData.banner ? (
            <Image
              src={postData.banner}
              alt={postData.title}
              className="block w-1/2 h-48 object-cover overflow-hidden rounded"
            />
          ) : (
            <div className="flex w-1/2 h-48 bg-gray-100 rounded">
              <p className="text-center text-gray-300 font-boldd m-auto">
                No Banner
              </p>
            </div>
          )}
          <div className="flex flex-col p-4 gap-2 w-full">
            <span className="date">{postData.date}</span>
            <h3 className="title">{postData.title}</h3>
            <p className="text_base">{postData.metaDesc}</p>
          </div>
        </article>
      </Link>
    </li>
  );
}
