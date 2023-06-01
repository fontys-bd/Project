import {
  FiThumbsUp,
  FiThumbsDown,
  FiMessageSquare,
  FiArchive,
} from "react-icons/fi";
import { useState, useEffect } from "react";
import { env } from "@/env.mjs";
import react from "@/utils/react";
import { GetReactionsByPostId } from "@/hooks/GetReactionsByPostId";

export default function PostFooter(postId: any) {
  const id = postId.postId;
  const { data: reactions, isLoading } = GetReactionsByPostId(id);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    if (reactions) {
      const likesCount = reactions.reactions.filter(
        (reaction: any) => reaction.reaction === "LIKE"
      ).length;
      const dislikesCount = reactions.reactions.filter(
        (reaction: any) => reaction.reaction === "DISLIKE"
      ).length;
      setLikes(likesCount);
      setDislikes(dislikesCount);
    }
  }, [reactions]);

  const handleReaction = async (reaction: string) => {
    const URL = env.NEXT_PUBLIC_GATEWAY + "/post/react";
    if (!URL) {
      console.error("URL is not defined.");
      return;
    }

    const data = {
      postId: id,
      userId: "642abeeb6e7160c651969049", //!CHANGE THIS
      reaction: reaction,
    };

    try {
      await react(URL, data); // Pass the data object to the react function
    } catch (error) {
      console.error("Error reacting to post:", error);
    }

    window.location.reload(); //TODO: Change this
  };

  return (
    <>
      <footer className="m-4 flex justify-between gap-4 align-middle">
        <div className="flex justify-center gap-4 align-middle">
          <button className="hover:bg-blue-100" onClick={() => handleReaction("LIKE")}>
            <FiThumbsUp
              style={{
                height: "2rem",
                width: "2rem",
                display: "inline-block",
                marginRight: "0.5rem",
              }}
            />
            {likes !== undefined ? `${likes} Like` : "Loading..."}
          </button>
          <button className="hover:bg-blue-100" onClick={() => handleReaction("DISLIKE")}>
            <FiThumbsDown
              style={{
                height: "2rem",
                width: "2rem",
                display: "inline-block",
                marginRight: "0.5rem",
              }}
            />
            {dislikes !== undefined ? `${dislikes} Dislike` : "Loading..."}
          </button>
          <button className="hover:bg-blue-100">
            <FiMessageSquare
              style={{
                height: "2rem",
                width: "2rem",
                display: "inline-block",
                marginRight: "0.5rem",
              }}
            />
            Comment
          </button>
        </div>
        <button className="hover:bg-blue-100">
          <FiArchive
            style={{
              height: "2rem",
              width: "2rem",
              display: "inline-block",
              marginRight: "0.5rem",
            }}
          />
          Save
        </button>
      </footer>
    </>
  );
}
