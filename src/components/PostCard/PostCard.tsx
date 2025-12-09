import styles from "./post-card.module.css";

interface Tag { id: number; name: string; }
interface Post { id: number; title: string; description: string; image: string; likes: number; tags: Tag[]; }

function PostCard({ post }: { post: Post }) {
    return (
        <div className={styles.gw}>
            <div className={styles.post}>
                
                <div className={styles.nameUser}>
                    <div className={styles.nameUserDiv}>
                        <div><img src="https://i.postimg.cc/bNWnf113/avatar-photo-default-user-icon-600nw-2345549599-removebg-preview-1.png" alt=""/></div>
                        <h2>{post.title}</h2>
                    </div>
                    <div><img src="https://i.postimg.cc/G3YP37hv/image-4.png" alt=""/></div>
                </div>

                <div className={styles.stroke3}></div>

                <div className={styles.postContent}>
                    <div className={styles.descriptionDiv}><h2>{post.description}</h2></div>
                    <div className={styles.imgCat}><img src={post.image} alt=""/></div>
                </div>

                <div className={styles.likes}><p>❤️{post.likes}</p></div>

                <div className={styles.tags}>
                    {post.tags.map(t => <span key={t.id}>#{t.name}</span>)}
                </div>

            </div>
        </div>
    );
}

export default PostCard;