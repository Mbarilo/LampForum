import React from 'react';
import PostCard from './components/PostCard/PostCard';
import styles from "./app.module.css";
import Header from './components/Header/header';
import Main from './components/Main/main';
const App = () => {
  return (
  <>
    <Header></Header>

    <div className={styles.stroke}></div>

    <Main></Main>
  </>
  );
};

export default App;