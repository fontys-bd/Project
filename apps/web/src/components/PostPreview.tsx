import Link from "next/link";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { enUS } from 'date-fns/locale';

interface PostProps {
  id: string;
  key: unknown;
  title: string;
  username: string;
  created_at: Date;
  status: string;
}

export default function PostPreview(props: PostProps) {
  const originalDate = new Date(props.created_at);
  const elapsed = Date.now() - originalDate.getTime();
  const elapsedStr = formatDistanceToNow(elapsed, { addSuffix: true, locale: enUS });
  

  return (
    <Link href={`/home/${props.id}`}>
      <article className="mx-3 mb-3 rounded-xl border border-solid border-gray-200 bg-white px-5 transition ease-in-out hover:border-gray-100 hover:shadow-lg">
        <h1 className="mt-2 flex items-center text-xs">
          Posted by:
          <BiUserCircle
            style={{
              fontSize: "1rem",
              marginLeft: "0.5rem",
            }}
          />
          <p className="ml-1 mr-3 text-sm font-bold">{props.username}</p>
          <span className="text-gray-500">{elapsedStr}</span>
          <p className={`ml-auto text-lg ${props.status === 'ACTIVE' ? 'text-green-600' : props.status === 'URGENT' ? 'text-yellow-500' :'text-red-600'}`}>
            {props.status}
          </p>

        </h1>
        <div className="my-3 text-base">{props.title}</div>
        <section className="mb-3 flex w-full flex-row">
          <button className="flex items-center">
            <AiOutlineLike
              style={{
                fontSize: "1.5rem",
              }}
            />
            <p className="mx-2">Like</p>
          </button>
          <button className="flex items-center">
            <AiOutlineDislike
              style={{
                fontSize: "1.5rem",
                marginLeft: "0.5rem",
              }}
            />
            <p className="mx-2">Dislike</p>
          </button>
          <button className="flex items-center ml-auto">
            <IoBookmarkOutline
              style={{
                fontSize: "1.5rem",
              }}
            />
            <p className="mx-2">Save</p>
          </button>
        </section>
      </article>
    </Link>
  );
}
