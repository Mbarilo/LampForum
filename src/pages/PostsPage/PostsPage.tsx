import styles from "../../app/Main/main.module.css";
import PostCard from "../../components/PostCard/PostCard";
import SearchPost from "../../components/filters/SeachPost/SearchPost";
import SelectTags from "../../components/filters/SelectTags/SelectTags";
import SelectMinimumLikes from "../../components/filters/SelectMinimumLikes/SelectMinimumLikes";

import { PostsProvider, usePosts } from "../../context/PostsContext";

const PostsContent = () => {
  const {
    filteredPosts,
    loading,
    error,
  } = usePosts();

  if (loading) return <p>Загрузка постов…</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className={styles.topBar}>
        <SearchPost />
        <button className={styles.createBtn}>Create Post</button>
      </div>

      <div className={styles.filters}>
        <SelectTags />
        <SelectMinimumLikes />
      </div>

      <div className={styles.postsContainer}>
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

const PostsPage = () => {
  return (
    <PostsProvider>
      <PostsContent />
    </PostsProvider>
  );
};

export default PostsPage;