import React from 'react';
import PostCard from './components/PostCard';
import "./app.css";
const App = () => {
  return (
    <div>
      <header className='header'>
          <div><h1>LampForum</h1></div>
          <div><img src="https://i.postimg.cc/bNWnf113/avatar-photo-default-user-icon-600nw-2345549599-removebg-preview-1.png" alt="" /></div>
      </header>
      <div className='stroke'></div>
      <main className='main-content'>
        <div>
          <div className='side-bar'>
            <div className='profile-link'>
              <img src="https://i.postimg.cc/tggq24gq/image-1.png" alt="" />
              <h2>Profile</h2>
            </div>
            <div className='home-link'>
              <img src="https://i.postimg.cc/NjMSn9RS/image-2.png" alt="" />
              <h2>Home</h2>
            </div>
          </div>
          <footer className='footer'>
              <h3>LampForum, inc.© 2025. All rights reserved.</h3>
          </footer>
        </div>
        <div className='card-content'>
          <PostCard></PostCard>
        </div>
      </main>
    </div>
  );
};

export default App;