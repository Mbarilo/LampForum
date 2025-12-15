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

  const [posts] = useState<Post[]>([
    {
      id: 1,
      title: "",
      description: "This is my cat",
      image: "https://i.postimg.cc/6pxm54XB/image-3-(1).png",
      likes: 12,
      tags: [{ id: 1, name: "animals" }],
    },
    {
      id: 2,
      title: "",
      description: "Trump",
      image: "https://i.postimg.cc/X7cnzgkY/Donald-J-Trump.webp",
      likes: 44,
      tags: [{ id: 2, name: "news" }],
    },
  ]);

  const [tags] = useState<Tag[]>([
    { id: 1, name: "animals" },
    { id: 2, name: "news" },
    { id: 3, name: "funny" },
  ]);

  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);

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