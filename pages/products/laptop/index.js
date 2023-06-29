/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../../../styles/laptop.module.css";
import ProductCard from "@/components/ProductCard";
import Head from "next/head";
const lapi = ({ data }) => {
    return (
      <>
      <Head>
        <title>VertechDigiCom - Laptop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.laptopcontainer}>
      <div className={styles.laptopbanner}>
      <div className={styles.banner}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684326734/Vertecdigi/prod-1756-notebook-xps-9320-9500-9700-silver-3440x1800_zfsjuu.jpg"
            alt=""
          />
        </div>
        <div className={styles.banner_text}>
          <h1>Laptop Computer & 2-in-1 PCs</h1>
          <p>
            Shop the best laptops & notebooks from Vertech Digicom. See top laptop
            deals today.
          </p>
        </div>
      </div>
      <div className={styles.laptopmobilebanner}>
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684327074/Vertecdigi/banner1_hqyu5g.jpg"
          alt=""
        />
        <h1>Laptop Computer & 2-in-1 PCs</h1>
        <p>
        Shop the best laptops & notebooks from Vertech Digicom. See top laptop
            deals today.
        </p>
      </div>

      {/* company logo  */}
      <div className={styles.logos}>
        <img src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117772/Vertecdigi/acer_nfiqkr.png" alt="" />
        <img src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117772/Vertecdigi/asus_dt3obn.png" alt="" />
        <img src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117772/Vertecdigi/apple_kdmhz7.png" alt="" />
        <img src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117772/Vertecdigi/dell_k2ndgd.png" alt="" />
        <img src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117773/Vertecdigi/microsoft_veuzvi.png" alt="" />
        <img src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117773/Vertecdigi/hp_dxcf3c.png" alt="" />
        <img src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117773/Vertecdigi/lenovo_h6x9zf.png" alt="" />
      </div>
      {/* dell  */}
      <div className={styles.companylaptop}>
        <div className={styles.companybanner}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684325288/Vertecdigi/delllogo_cqpz1p.png"
            alt="company logo" className={styles.dellLogo}
          />
        </div>

        
        <div className=" mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3 p-2">
          {data
            .filter((x) => x.company === "dell")
            .map((x, i) => (
              <Link href="/products/laptop/[id]" as={`/products/laptop/${x.slug}`} key={i}>
                <ProductCard item={x} />
              </Link>
            ))}
        </div>
      </div>

      {/* hp */}
      <div className={styles.companylaptop}>
        <div className={styles.companybanner}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1684312973/Vertecdigi/hplogo_vcse3u.png"
            alt="company logo"
          />
        </div>
        <div className=" mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3 p-2">
          {data
            .filter((x) => x.company === "hp")
            .map((x, i) => (
              <Link href="/products/laptop/[id]" as={`/products/laptop/${x.slug}`} key={i}>
                <ProductCard item={x} />
              </Link>
            ))}
        </div>
      </div>
      {/* apple */}
      <div className={styles.companylaptop}>
        <div className={styles.companybanner}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685530814/Vertecdigi/apple_ixjq1o.png"
            alt="company logo"
          />
        </div>
        <div className=" mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3 p-2">
          {data
            .filter((x) => x.company === "apple")
            .map((x, i) => (
              <Link href="/products/laptop/[id]" as={`/products/laptop/${x.slug}`} key={i}>
                <ProductCard item={x} />
              </Link>
            ))}
        </div>
      </div>
      {/* apple */}
      <div className={styles.companylaptop}>
        <div className={styles.companybanner}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685529382/Vertecdigi/micro_ks0td1.png"
            alt="company logo"
          />
        </div>
        <div className=" mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-3 p-2">
          {data
            .filter((x) => x.company === "microsoft")
            .map((x, i) => (
              <Link href="/products/laptop/[id]" as={`/products/laptop/${x.slug}`} key={i}>
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
  const res = await fetch(
    `https://laptop-rd4s.onrender.com/laptop`
  );
  const data = await res.json();
  return {
    props: { data },
  };
}
export default lapi;
