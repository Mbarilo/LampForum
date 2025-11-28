import "./post-card.css"

const PostCard = () => {
    return (
    <div className="gw">
        <div className="post">
          <div className="name-user">
            <div className="name-user-div">
              <img src="https://i.postimg.cc/bNWnf113/avatar-photo-default-user-icon-600nw-2345549599-removebg-preview-1.png"alt=""/>
              <h2>Misha</h2>
            </div>
            <div>
              <img src="https://i.postimg.cc/G3YP37hv/image-4.png"alt=""/>
            </div>
          </div>
          <div className="stroke-3"></div>
          <div className="post-content">
            <h2>This is my cat</h2>
            <div className="img-cat"><img src="https://i.postimg.cc/6pxm54XB/image-3-(1).png"alt=""/></div>
          </div>
        </div>
    </div>
    );
}

export default PostCard