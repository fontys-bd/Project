import Link from "next/link";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";

interface PostProps {
  id: string;
  // key: unknown;
  title: string;
  // content: string;
}

export default function PostPreview(props: PostProps) {
  return (
    <Link href={`/home/${props.id}`}>
      <article className="mx-3 mb-3 rounded-xl border border-solid bg-white px-5 transition ease-in-out hover:border-gray-100 hover:drop-shadow-xl">
        <h1 className="mt-2 flex items-end text-xs">
          Posted by:
          <BiUserCircle
            style={{
              fontSize: "1rem",
              marginLeft: "0.5rem",
            }}
          />
          <p className="ml-1 mr-3 text-sm font-bold">{"User"}</p>
          {"17 hours ago"}
          <p className="ml-24 pl-96 text-lg text-green-600">ACTIVE</p>
        </h1>
        {/* //! REPLACE USER AND TIME WITH PROPS */}
        <div className="my-3 text-base">{props.title}</div>
        <section className="mb-3 flex w-full flex-row">
          <button className="flex">
            <AiOutlineLike
              style={{
                fontSize: "1.5rem",
              }}
            />
            <p className="mx-2">Like</p>
          </button>
          <button className="flex">
            <AiOutlineDislike
              style={{
                fontSize: "1.5rem",
                marginLeft: "0.5rem",
              }}
            />
            <p className="mx-2">Dislike</p>
          </button>
          <button className="flex">
            <IoBookmarkOutline
              style={{
                fontSize: "1.5rem",
                marginLeft: "32rem",
              }}
            />
            <p className="mx-2">Save</p>
          </button>
        </section>
      </article>
    </Link>
  );
}
