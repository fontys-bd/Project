import Link from "next/link";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";

interface PostProps {
  id: string;
  key: unknown;
  title: string;
  // content: string;
}

export default function PostPreview(props: PostProps) {
  return (
    <Link href={`/home/${props.id}`}>
      <article key={`${props.key}`} className="border-solid border rounded-xl mx-3 mb-3 bg-white px-5 hover:drop-shadow-xl hover:border-gray-100 transition ease-in-out">
        <h1 className="text-xs mt-2 flex items-end">Posted by:
          <BiUserCircle style={{
            fontSize: "1rem",
            marginLeft: "0.5rem"
          }}/>
          <p className="font-bold text-sm ml-1 mr-3">{"User"}</p>
          {"17 hours ago"}
          <p className="pl-96 ml-24 text-lg text-green-600">ACTIVE</p>
          </h1>{/* //! REPLACE USER AND TIME WITH PROPS */}
        <div className="text-base my-3">{props.title}</div>
        <section className="flex flex-row w-full mb-3">
          <button className="flex">
            <AiOutlineLike style={{
              fontSize: "1.5rem"
            }} />
            <p className="mx-2">Like</p>
          </button>
          <button className="flex">
            <AiOutlineDislike style={{
              fontSize: "1.5rem",
              marginLeft: "0.5rem"
            }} />
            <p className="mx-2">Dislike</p>
          </button>
          <button className="flex">
            <IoBookmarkOutline style={{
              fontSize: "1.5rem",
              marginLeft: "32rem"
            }} />
            <p className="mx-2">Save</p>
          </button>
        </section>
      </article>

    </Link>
  );
}
