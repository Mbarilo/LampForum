import { useState, useEffect } from "react";
import styles from "./main.module.css";
import PostCard from "../PostCard/PostCard";

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

function Main () {

    const [searchValue, setSearchValue] = useState("");
    const [selectedTags, setSelectedTags] = useState<number[]>([]);
    const [likesMinimumValue, setLikesMinimumValue] = useState(0);
    const [posts, setPosts] = useState<Post[]>([
        { id: 1, title: "", description: "This is my cat", image: "https://i.postimg.cc/6pxm54XB/image-3-(1).png", likes: 12, tags: [{ id: 1, name: "animals" }] },
        { id: 2, title: "", description: "Trump", image: "https://i.postimg.cc/X7cnzgkY/Donald-J-Trump.webp", likes: 44, tags: [{ id: 2, name: "news" }] }
    ]);

    const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
    const [tags, setTags] = useState<Tag[]>([
        { id: 1, name: "animals" },
        { id: 2, name: "news" },
        { id: 3, name: "funny" }
    ]);

    useEffect(() => {
        let result = [...posts];

        if (searchValue.trim()) {
            result = result.filter(p => p.title.toLowerCase().includes(searchValue.toLowerCase()));
        }

        if (selectedTags.length > 0) {
            result = result.filter(p => selectedTags.every(t => p.tags.some(pt => pt.id === t)));
        }

        if (likesMinimumValue > 0) {
            result = result.filter(p => p.likes >= likesMinimumValue);
        }

        setFilteredPosts(result);

    }, [searchValue, selectedTags, likesMinimumValue, posts]);

    const toggleTag = (tagId: number) => {
        setSelectedTags(prev => prev.includes(tagId) ? prev.filter(id => id !== tagId) : [...prev, tagId]);
    };

    return (
      <main className={styles.mainContent}>
      
          <div className={styles.sideBar}>
              <div className={styles.profileLink}><img src="https://i.postimg.cc/tggq24gq/image-1.png" alt="" /><h2>Profile</h2></div>
              <div className={styles.homeLink}><img src="https://i.postimg.cc/NjMSn9RS/image-2.png" alt="" /><h2>Home</h2></div>
              <footer className={styles.footer}><h3>LampForum, inc.© 2025. All rights reserved.</h3></footer>
          </div>
      
          <div className={styles.stroke2}></div>
      
          <div className={styles.content}>
              
              <div className={styles.topBar}>
                  <input className={styles.searchInput} type="text" placeholder="Find Post..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                  <button className={styles.createBtn}>Create Post</button>
              </div>
      
              <div className={styles.filters}>
                  <div className={styles.tagList}>
                      {tags.map(tag => (
                          <button key={tag.id} className={selectedTags.includes(tag.id) ? styles.tagSelected : styles.tag} onClick={() => toggleTag(tag.id)}>
                              #{tag.name}
                          </button>
                      ))}
                  </div>
      
                  <div className={styles.likesFilter}>
                      <label><input type="radio" name="likes" onChange={() => setLikesMinimumValue(0)} /> All</label>
                      <label><input type="radio" name="likes" onChange={() => setLikesMinimumValue(10)} /> 10+</label>
                      <label><input type="radio" name="likes" onChange={() => setLikesMinimumValue(30)} /> 30+</label>
                  </div>
              </div>
      
              <div className={styles.postsContainer}>
                  {filteredPosts.map(post => <PostCard key={post.id} post={post} />)}
              </div>
      
          </div>
      
      </main>
      )
}

export default Main;