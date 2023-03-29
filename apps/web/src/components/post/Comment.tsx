import { FiMessageSquare, FiSend } from "react-icons/fi";

export default function Comment() {
  return (
    <section className="flex items-center bg-slate-100 p-4">
      <FiMessageSquare
        style={{
          height: "2rem",
          width: "2rem",
          display: "inline-block",
          marginRight: "0.5rem",
        }}
      />
      <input type={"text"} className="m-2 h-12 w-full shadow-sm"></input>
      <FiSend
        style={{
          height: "2rem",
          width: "2rem",
          display: "inline-block",
        }}
      />
    </section>
  );
}
