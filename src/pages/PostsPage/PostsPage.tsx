import { useState } from "react";
import styles from "../../app/Main/main.module.css";
import PostCard from "../../components/PostCard/PostCard";
import SearchPost from "../../components/filters/SeachPost/SearchPost";
import SelectTags from "../../components/filters/SelectTags/SelectTags";
import SelectMinimumLikes from "../../components/filters/SelectMinimumLikes/SelectMinimumLikes";

import { usePostsData } from "../../hooks/UsePostsData";
import { useFilteredPosts } from "../../hooks/UseFilteredPosts";

const PostsPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [likesMinimumValue, setLikesMinimumValue] = useState(0);

  const { posts, tags, loading, error } = usePostsData();

  const filteredPosts = useFilteredPosts({
    posts,
    searchValue,
    selectedTags,
    likesMinimumValue,
  });

  if (loading) return <p>Загрузка постов…</p>;
  if (error) return <p>{error}</p>;

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