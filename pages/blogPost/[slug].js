import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  console.log('slug', slug)
  return (
    <>
      <main className={styles.main}>
        <h1>Tittle of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In facere,
          quo error libero nisi repudiandae eos deleniti tempore ducimus amet.
          Magni repudiandae dolores excepturi, fuga cupiditate numquam repellat
          dolor quidem.
        </div>
      </main>
    </>
  );
}

export default Slug;
