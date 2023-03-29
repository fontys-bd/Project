import {
  FiThumbsUp,
  FiThumbsDown,
  FiMessageSquare,
  FiArchive,
} from "react-icons/fi";

export default function PostFooter() {
  return (
    <>
      <footer className="m-4 flex justify-between gap-4 align-middle">
        <div className="flex justify-center gap-4 align-middle">
          <button className="hover:bg-blue-100">
            <FiThumbsUp
              style={{
                height: "2rem",
                width: "2rem",
                display: "inline-block",
                marginRight: "0.5rem",
              }}
            />
            Like
          </button>
          <button className="hover:bg-blue-100">
            <FiThumbsDown
              style={{
                height: "2rem",
                width: "2rem",
                display: "inline-block",
                marginRight: "0.5rem",
              }}
            />
            Dislike
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
