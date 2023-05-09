import Image from "next/image";
import {
  FiThumbsUp,
  FiMessageSquare,
  FiThumbsDown,
  FiArchive,
} from "react-icons/fi";
import PostFooter from "./PostFooter";

interface PostProps {
  id: string;
  key: unknown;
  title: string;
  content: Partial<ContentProps>;
  user: string | null;
  createdAt: string;
  updatedAt: string;
  status: string;
}

interface ContentProps {
  content: string;
}

export default function Post({ id, key, title, content }: PostProps) {
  return (
    <article>
      <p className="flex gap-4 border-b p-4">
        <span>
          <span className="font-bold">Asked on </span>
          {new Intl.DateTimeFormat("nl-NL").format(new Date())}
        </span>
        <span>Posted by User</span>
        <span>
          Status: <span className=" font-bold text-green-600">ACTIVE</span>
        </span>
      </p>
      <main className="grid gap-4 border-b p-4">
        <header>
          <h1 className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quae quod excepturi, quasi iusto aut quaerat enim fuga possimus
            autem culpa repudiandae eos voluptatibus laborum. Harum dolorem
            molestias sunt esse!
          </h1>
        </header>

        <Image
          src={
            "https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg"
          }
          priority
          alt={"Image of a person"}
          width={500}
          height={400}
          style={{ objectFit: "cover" }}
          className="justify-self-center rounded-lg"
        />
      </main>
      <PostFooter />
    </article>
  );
}
