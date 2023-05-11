import { fetcher } from "../utils/fetcher";
import { Post } from "../types/post";
import useSWR from "swr";

export function GetPosts() {
  const { data, error, isLoading } = useSWR(
    "http://localhost:8080/post",
    fetcher
  );
  // "http://localhost:8080/post"
  // `${process.env.NEXT_PUBLIC_POST_SERVICE_URL}`
  return {
    data,
    error,
    isLoading,
  };
}
