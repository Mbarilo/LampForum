import styles from "./post-card.module.css";

function PostCard () {
    return (
<div className={styles.gw}>
      <div className={styles.post}>
        <div className={styles.nameUser}>
          <div className={styles.nameUserDiv}>
            <div><img src="https://i.postimg.cc/bNWnf113/avatar-photo-default-user-icon-600nw-2345549599-removebg-preview-1.png"alt=""/></div>
            <h2>Misha</h2>
          </div>
          <div>
            <img src="https://i.postimg.cc/G3YP37hv/image-4.png"alt=""/>
          </div>
        </div>
        <div className={styles.stroke3}></div>
        <div className={styles.postContent}>
          <div className={styles.descriptionDiv}><h2>This is my cat</h2></div>
          <div className={styles.imgCat}>
            <img src="https://i.postimg.cc/6pxm54XB/image-3-(1).png"alt=""/>
          </div>
        </div>
      </div>
    </div>
    );
}

export default PostCard