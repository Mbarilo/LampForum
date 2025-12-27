import { useEffect, useState } from "react";

export interface Tag {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  likes: number;
  tags: Tag[];
}

export function usePostsData() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const postsRes = await fetch("http://localhost:8001/posts");
        if (!postsRes.ok) throw new Error();
        const postsData = await postsRes.json();

        const tagsRes = await fetch("http://localhost:8001/tags");
        if (!tagsRes.ok) throw new Error();
        const tagsData = await tagsRes.json();

        setPosts(postsData);
        setTags(tagsData);
      } catch {
        setError("Не удалось получить данные с сервера");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { posts, tags, loading, error };
}