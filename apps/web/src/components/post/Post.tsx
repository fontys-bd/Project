import Image from "next/image";
import PostFooter from "./PostFooter";
import { PostSchema } from "@/types/post";
import { GetReactionsByPostId } from "@/hooks/GetReactionsByPostId";

export default function Post({ post }: { post: PostSchema }) {
  return (
    <article>
      <p className="flex gap-4 border-b p-4">
        <span> Asked on
          <span className="font-bold"> {new Intl.DateTimeFormat("nl-NL").format(new Date())}</span>
        </span>
        <span>Posted by: User</span>
        <span>
          Status: <span className=" font-bold text-green-600">ACTIVE</span>
        </span>
      </p>

      <main className="grid gap-4 border-b p-4">
        <header>
          <h1 className="text-2xl">{post.title}</h1>
        </header>

        <p className="text-lg">{post.content}</p>

        {post.picture && (
          <Image
            src={post.picture}
            priority
            alt={post.picture_desc as string}
            width={500}
            height={400}
            style={{ objectFit: "cover" }}
            className="justify-self-center rounded-lg"
          />
        )}
      </main>
      <PostFooter postId={post.id} />
    </article>
  );
}
