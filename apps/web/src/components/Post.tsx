interface PostProps {
  id: string;
  key: unknown;
  title: string;
  content: string;
}

export default function Post({ id, key, title, content }: PostProps) {
  return (
    <article>
      <header>Post Title</header>
      <main>Post Content</main>
      <footer>Likes , comemtns, </footer>
    </article>
  );
}
