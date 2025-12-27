import { useMemo } from "react";
import { Post } from "./UsePostsData";

interface Props {
  posts: Post[];
  searchValue: string;
  selectedTags: number[];
  likesMinimumValue: number;
}

export function useFilteredPosts({
  posts,
  searchValue,
  selectedTags,
  likesMinimumValue,
}: Props) {
  return useMemo(() => {
    let result = [...posts];

    if (searchValue.trim()) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (selectedTags.length) {
      result = result.filter((p) =>
        selectedTags.every((t) => p.tags.some((pt) => pt.id === t))
      );
    }

    if (likesMinimumValue > 0) {
      result = result.filter((p) => p.likes >= likesMinimumValue);
    }

    return result;
  }, [posts, searchValue, selectedTags, likesMinimumValue]);
}