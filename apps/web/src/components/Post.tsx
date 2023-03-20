interface PostProps {
  key: unknown;
  title: string;
  content: string;
}

export default function Post(props: PostProps) {
  return (
    <article key={`${props.key}`} className="mb-1 h-96 bg-blue-500">
      <header>{props.title}</header>
      <main>{props.content}</main>
    </article>
  );
}
