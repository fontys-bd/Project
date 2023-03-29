import Link from "next/link";

interface PostProps {
  id: string;
  key: unknown;
  title: string;
  content: string;
}

export default function PostPreview(props: PostProps) {
  return (
    <Link href={`/home/${props.id}`}>
      <article key={`${props.key}`} className="mb-1 h-96 bg-blue-500">
        <header>{props.title}</header>
        <main>{props.content}</main>
      </article>
    </Link>
  );
}
