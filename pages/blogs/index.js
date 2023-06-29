import Link from "next/link";
import styles from "../../styles/blogs.module.css";
import Head from "next/head";
const index = ({ data }) => {
  return (
    <>
      <Head>
        <title>VertechDigiCom - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.blogSection}>
        <div className={styles.blogBanner}>
          <h1>Blogs</h1>
        </div>
        <div className={styles.blogs}>
          {data.map((item, i) => (
            <div className={styles.bolg} key={i}>
              <Link href="/blogs/[id]" as={`/blogs/${item.slug}`}>
                <div className={styles.blogImg}>
                  <img src={item.img} alt="blogImage" />
                </div>
                <div className={styles.blogDesc}>
                  <p className={styles.writter}>
                    Posted: {item.posted} Contributor: {item.contributor}
                  </p>
                  <p className={styles.blogTitle}>{item.title}</p>
                  <p className={styles.blogHalf}>
                    {`${item.minidesc.slice(0, 200)}...`}
                  </p>
                </div>
              </Link>
              <p className={styles.readMoreBlog}>
                <Link href="/blogs/[id]" as={`/blogs/${item.slug}`}>
                  Read More
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(`https://laptop-rd4s.onrender.com/blogs`);
  const data = await res.json();
  return {
    props: { data },
  };
}
export default index;
