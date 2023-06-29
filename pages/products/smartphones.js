/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../../styles/accessories.module.css";

const accessories = () => {
  return (
    <>
    <Head>
      <title>VertechDigiCom - SmartPhones</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.accessoriesContainer}>
      <div className={styles.mobileBanner}>
      <img src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686122867/Vertecdigi/smartpohnebanner_qe9kig.jpg" alt="" />
      </div>

      {/* company logo  */}
      <div className={styles.logos}>
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117932/Vertecdigi/samsung_oz8r34.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117772/Vertecdigi/apple_kdmhz7.png"
          alt=""
        />
        
      </div>

      {/* Samsung*/}
      <div className={styles["company"] + " " + styles["sandisk"]}>
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117932/Vertecdigi/samsung_oz8r34.png"
          alt=""
        />
      </div>

      {/* samsung */}
      <div className={styles.productsDiv}>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686122306/Vertecdigi/galaxy_s23_lerm6d.avif"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>Samsung Galaxy S23 5G</p>
            <span> (8GB RAM, 256GB, Green)</span>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686122307/Vertecdigi/galaxy_z_fold_4_jybrkp.avif"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>SAMSUNG Galaxy Z Fold4 5G</p>
            <span>(12GB RAM, 256GB, Beige)</span>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686122308/Vertecdigi/samsung_watch2_gjokhu.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>SAMSUNG Galaxy Watch5 Pro Smartwatch with Activity Tracker</p>
            <span>(45mm Super AMOLED Display, 50 Meter Water Resistant, Grey Titanium Strap)</span>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686122307/Vertecdigi/samsung_watch1_kaqlxt.avif"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>SAMSUNG Galaxy Watch5 Smartwatch with Activity Tracker</p>
            <span>(44mm Super AMOLED Display, Water Resistant, White Strap)</span>
          </div>
        </div>
      </div>

       {/* apple*/}
       <div className={styles["company"] + " " + styles["sandisk"]}>
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117772/Vertecdigi/apple_kdmhz7.png"
          alt=""
        />
      </div>

      {/* samsung */}
      <div className={styles.productsDiv}>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686122306/Vertecdigi/apple_14pro_kz65ff.avif"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>Apple iPhone 14</p>
            <span> (128GB, Deep Purple)</span>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686122306/Vertecdigi/apple_13_iva6lf.avif"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>Apple iPhone 13</p>
            <span>(128GB, Pink)</span>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686122306/Vertecdigi/apple_watch1_mt4kyo.avif"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>Apple Watch Series 8 GPS with Sports Band</p>
            <span>(41mm Retina LTPO OLED Display, Midnight Aluminium Case)</span>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686122306/Vertecdigi/apple_watch2_n6raxr.avif"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>Apple Watch SE GPS with Sports Band </p>
            <span>(40mm Retina LTPO OLED Display, Starlight Aluminium Case)
</span>
          </div>
        </div>
      </div>


    
     

     
    </div>
    </>
  );
};

export default accessories;
