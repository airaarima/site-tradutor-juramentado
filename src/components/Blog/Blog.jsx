import React from "react";
import styles from "./Blog.module.css";
import trabalhos from '../../trabalhos.json';
import Card from "./Card.jsx"

const Blog = () => {
  return (
    <section className={styles.container} id="blog">
      <h2 className={styles.title}>Blog</h2>
      <div className={styles.trabalhos}>
        {trabalhos.map((trabalho, id) => {
          return <Card key={id} trabalho={trabalho} />;
        })}
      </div>
    </section>
  );
};

export default Blog;
