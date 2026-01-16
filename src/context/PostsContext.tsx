import {createContext, useContext, useEffect, useMemo, useState, ReactNode,} from "react";
  import { Post } from "../hooks/UsePostsData";
  import { usePostsData } from "../hooks/UsePostsData";
  
  interface PostsContextValue {
    posts: Post[];
    filteredPosts: Post[];
  
    search: string;
    setSearch: (value: string) => void;
  
    selectedTags: number[];
    addTag: (id: number) => void;
    removeTag: (id: number) => void;
    hasTag: (id: number) => boolean;
  
    minLikes: number;
    setMinLikes: (value: number) => void;
  
    loading: boolean;
    error: string | null;
  }
  
  const PostsContext = createContext<PostsContextValue | null>(null);
  
  interface PostsProviderProps {
    children: ReactNode;
  }
  
  export const PostsProvider = ({ children }: PostsProviderProps) => {
    const { posts, loading, error } = usePostsData();
  
    const [search, setSearch] = useState("");
    const [selectedTags, setSelectedTags] = useState<number[]>([]);
    const [minLikes, setMinLikes] = useState(0);
  
    const addTag = (id: number) => {
      setSelectedTags((prev) =>
        prev.includes(id) ? prev : [...prev, id]
      );
    };
  
    const removeTag = (id: number) => {
      setSelectedTags((prev) => prev.filter((tagId) => tagId !== id));
    };
  
    const hasTag = (id: number) => {
      return selectedTags.includes(id);
    };
  
    const filteredPosts = useMemo(() => {
      return posts.filter((post) => {
        const matchesSearch =
          post.title.toLowerCase().includes(search.toLowerCase()) ||
          post.description.toLowerCase().includes(search.toLowerCase());
  
        const matchesLikes = post.likes >= minLikes;
  
        const matchesTags =
          selectedTags.length === 0 ||
          selectedTags.every((tagId) =>
            post.tags.some((tag) => tag.id === tagId)
          );
  
        return matchesSearch && matchesLikes && matchesTags;
      });
    }, [posts, search, selectedTags, minLikes]);
  
    const value: PostsContextValue = {
      posts,
      filteredPosts,
  
      search,
      setSearch,
  
      selectedTags,
      addTag,
      removeTag,
      hasTag,
  
      minLikes,
      setMinLikes,
  
      loading,
      error,
    };
  
    return (
      <PostsContext.Provider value={value}>
        {children}
      </PostsContext.Provider>
    );
  };
  
  export const usePosts = () => {
    const context = useContext(PostsContext);
  
    if (!context) {
      throw new Error("usePosts must be used within PostsProvider");
    }
  
    return context;
  };