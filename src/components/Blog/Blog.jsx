import React from "react";
import styles from "./Blog.module.css";
import Card1 from "./Card1.jsx"
import Card2 from "./Card2.jsx"
import Card3 from "./Card3.jsx"

const Blog = () => {
  return (
    <section className={styles.container} id="blog">
      <h2 className={styles.title}>Blog</h2>
      <div className={styles.publicacoes}>
        <Card1/>
        <Card2/>
        <Card3/>
      </div>
    </section>
  );
};

export default Blog;
