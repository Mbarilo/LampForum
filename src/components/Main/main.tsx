import styles from "./main.module.css"
import PostCard from "../PostCard/PostCard"

function Main () {
    return (
        <main className={styles.mainContent}>
        <div className={styles.sideBar}>
          <div className={styles.profileLink}>
            <img src="https://i.postimg.cc/tggq24gq/image-1.png" alt="" />
            <h2>Profile</h2>
          </div>

          <div className={styles.homeLink}>
            <img src="https://i.postimg.cc/NjMSn9RS/image-2.png" alt="" />
            <h2>Home</h2>
          </div>

          <footer className={styles.footer}>
            <h3>LampForum, inc.© 2025. All rights reserved.</h3>
          </footer>
        </div>
        <div className={styles.stroke2}></div>
        <PostCard/>
    </main>
    )
}

export default Main