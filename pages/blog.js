import React from 'react'
import styles from "../styles/Blog.module.css"
import Link from 'next/link'
function Blog() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.blogs}>
            <h2>Popular Blog</h2>
            <div className={styles.blogItem}>
              <Link href={'/blogpost/learn-javascript'}>
              <h3>How to learn Javascript in 2023?</h3></Link>
              <p>Javascript is the Language use Design logic for Web </p>
            </div>
            <div className={styles.blogItem}>
              <h3>How to learn Javascript in 2023?</h3>
              <p>Javascript is the Language use Design logic for Web </p>
            </div>
            <div className={styles.blogItem}>
              <h3>How to learn Javascript in 2023?</h3>
              <p>Javascript is the Language use Design logic for Web </p>
            </div>
          </div>
      </main>
    </>
  )
}

export default Blog
