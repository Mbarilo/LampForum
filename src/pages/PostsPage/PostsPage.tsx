import { useState, useEffect } from "react";
import styles from "../../components/Main/main.module.css";
import PostCard from "../../components/PostCard/PostCard";
import SearchPost from "../../components/filters/SeachPost/SearchPost";
import SelectTags from "../../components/filters/SelectTags/SelectTags";
import SelectMinimumLikes from "../../components/filters/SelectMinimumLikes/SelectMinimumLikes";

interface Tag {
  id: number;
  name: string;
}

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  likes: number;
  tags: Tag[];
}

const PostsPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [likesMinimumValue, setLikesMinimumValue] = useState(0);

  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
  
        const postsRes = await fetch("http://localhost:8001/posts");
        if (!postsRes.ok) throw new Error("Ошибка загрузки постов");
        const postsData = await postsRes.json();
  
        const tagsRes = await fetch("http://localhost:8001/tags");
        if (!tagsRes.ok) throw new Error("Ошибка загрузки тегов");
        const tagsData = await tagsRes.json();
  
        setPosts(postsData);
        setFilteredPosts(postsData);
        setTags(tagsData);
      } catch (e: unknown) {
        setError("Не удалось получить данные с сервера");
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  useEffect(() => {
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

    setFilteredPosts(result);
  }, [searchValue, selectedTags, likesMinimumValue, posts]);

  if (loading) {
    return (
      <div>
        <p>Загрузка постов…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.topBar}>
        <SearchPost value={searchValue} onChange={setSearchValue} />
        <button className={styles.createBtn}>Create Post</button>
      </div>

      <div className={styles.filters}>
        <SelectTags
          tags={tags}
          value={selectedTags}
          onChange={setSelectedTags}
        />

        <SelectMinimumLikes
          value={likesMinimumValue}
          onChange={setLikesMinimumValue}
        />
      </div>

      <div className={styles.postsContainer}>
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
    
  );
};
export default PostsPage;