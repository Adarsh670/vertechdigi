/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../../../styles/laptop.module.css";
import ProductCard from "@/components/ProductCard";
import Head from "next/head";
const lapi = ({ data }) => {
  return (
    <>
    <Head>
      <title>VertechDigiCom - ServerStorage</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.laptopcontainer}>
      <div className={styles.laptopbanner}>
        <div className={styles.banner}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685895632/Vertecdigi/serverbanner_v7ceg1.avif"
            alt=""
          />
        </div>
        <div className={styles["banner_text"] + " " + styles["serverbanner"]}>
          <h1>Servers and Storage</h1>
          <p>
            Accelerate your transformation anywhere with a broad portfolio of
            servers optimized for the latest workloads.
          </p>
        </div>
      </div>
      <div
        className={styles["laptopmobilebanner"] + " " + styles["serverbanner"]}
      >
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685896081/Vertecdigi/serverbanner_vpkdjn.png"
          alt=""
        />
        <h1>Servers</h1>
        <p>
          Accelerate your transformation anywhere with a broad portfolio of
          servers optimized for the latest workloads.
        </p>
      </div>

{/* company logo  */}
<div className={styles.logos}>
        <img src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117772/Vertecdigi/dell_k2ndgd.png" alt="" />
        <img src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117773/Vertecdigi/hp_dxcf3c.png" alt="" />
        <img src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685894407/Vertecdigi/image_840987_m33lx5.webp" alt="" />
        <img src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117772/Vertecdigi/acer_nfiqkr.png" alt="" />
      </div>
      {/* dell  */}
      <div className={styles.companylaptop}>
        <div className={styles.companybanner}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685894407/Vertecdigi/image_840987_m33lx5.webp"
            alt="company logo"
            className={styles["dellLogo"] + " " + styles["sennheiserlogo"]}
          />
        </div>

        <div className=" mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3 p-2">
          {data
            .filter((x) => x.company === "westernDigital")
            .map((x, i) => (
              <Link
                href="/products/serverstorage/[id]"
                as={`/products/serverstorage/${x.slug}`}
                key={i}
              >
                <ProductCard item={x} />
              </Link>
            ))}
        </div>
      </div>

      {/* hp */}
      <div className={styles.companylaptop}>
        <div className={styles.companybanner}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685894397/Vertecdigi/synology_rb8tip.png"
            alt="company logo"
          />
        </div>
        <div className=" mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3 p-2">
          {data
            .filter((x) => x.company === "synology")
            .map((x, i) => (
              <Link
                href="/products/serverstorage/[id]"
                as={`/products/serverstorage/${x.slug}`}
                key={i}
              >
                <ProductCard item={x} />
              </Link>
            ))}
        </div>
      </div>
      {/* hp */}
      <div className={styles.companylaptop}>
        <div className={styles.companybanner}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685894397/Vertecdigi/dell_llxyue.png"
            alt="company logo"
          />
        </div>
        <div className=" mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3 p-2">
          {data
            .filter((x) => x.company === "dell")
            .map((x, i) => (
              <Link
                href="/products/serverstorage/[id]"
                as={`/products/serverstorage/${x.slug}`}
                key={i}
              >
                <ProductCard item={x} />
              </Link>
            ))}
        </div>
      </div>
    </div>
    </>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(`https://laptop-rd4s.onrender.com/serverstorage`);
  const data = await res.json();
  return {
    props: { data },
  };
}
export default lapi;
