import styles from "./header.module.css"

function Header () {
    return (
        <header className={styles.header}>
        <div><h1>LampForum</h1></div>
        <div><img src="https://i.postimg.cc/bNWnf113/avatar-photo-default-user-icon-600nw-2345549599-removebg-preview-1.png" alt="" /></div>
    </header> 
    );
};

export default Header;