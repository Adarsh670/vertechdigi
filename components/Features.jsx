import Link from "next/link";
import styles from "../styles/Features.module.css";
import Sliderlap from "./Sliderlap";
import { FaRecycle } from "react-icons/fa";
import Head from "next/head";

const Features = () => {

  const producticons = [
    {
      img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1684134655/Vertecdigi/smartphone_w77sfn.png",
      title: "SmartPhone",
      link:"/products/smartphones"
    },
    {
      img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1686729197/Vertecdigi/router_nqcxpp.png",
      title: "Network",
      link:"/products/network"
    },
    {
      img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1684134655/Vertecdigi/laptop_euh1u5.png",
      title: "Laptop",
      link:"/products/laptop"
    },
    {
      img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1684225551/Vertecdigi/ups_1_ebqk9o.png",
      title: "UPS",
      link:"/products/ups"
    },
    {
      img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1684225697/Vertecdigi/mic_bvds4y.png",
      title: "Mics",
      link:"/products/microphones"
    },
    {
      img: "https://res.cloudinary.com/dqlx1vyne/image/upload/v1684136071/Vertecdigi/printer_haejr7.png",
      title: "Printer",
      link:"/products/printerscanners"
    },
  ];
  return (
    <>
    <Head>
    <title>VertechDigicom - Home</title>
    <link rel="icon" href="/favicon.ico" /> 
    </Head>
      <div className={styles.container}>
        <div className={styles.videoSection}>
          <video autoPlay muted loop className={styles.video}>
            <source
              src="https://res.cloudinary.com/dqlx1vyne/video/upload/v1685608706/Vertecdigi/pexels-matilda-wormwood-4146415-3840x2160-50fps_lv5uok.mp4"
              type="video/mp4"
            />
          </video>
          <div className={styles.headerText}>
            <h1>
              SMART <span>LAPTOPS</span>
            </h1>
            <p>
              <Link href="/products/laptop">VIEW MORE</Link>
            </p>
          </div>
        </div>

        {/* about_process */}
        <div className={styles.about_process}>
          <div className={styles.abt_left}>
            <h4>
              Welcome To <span> Vertech Digicom</span>
            </h4>
            <p>01</p>
          </div>
          <div className={styles.abt_right}>
            <p>
              Vertech Digicom is a Gurgaon based company with a highly dedicated
              sales and support team. We specialize in helping enterprises
              across multiple industries manage and leverage IT to improve their
              business performance. Our industry-recognized best practices and
              structured approaches are designed to meet the business needs,
              build strong business and IT partnerships, and address complex IT
              challenges faced by companies today. We pride ourselves on being
              one of the most trusted solution providers of a wide range of
              products, including mobile phones, smart phones, desktops,
              laptops, audio/video conferencing, CCTV/video surveillance,
              AVSI/board room integration, video walls, IT/networking, document
              management, projectors, interactive whiteboards etc.
            </p>
          </div>
        </div>

        <div className={styles.laptopcontainer}>
          <div className={styles.laptopbanner}></div>
          <div className={styles.laptopbanner_text}>
            <h1>
              Smart <span>Laptops</span>
            </h1>
            <p>
              <Link href="/products/laptop">VIEW MORE</Link>
            </p>
          </div>
        </div>
        <div className={styles.nav_tabs}>
          <ul>
            {producticons.map((item, i) => (
              <li key={i}>
                <Link href={item.link}>
                  <img src={item.img} alt={item.title} />
                <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="overflow-hidden">
        <Sliderlap />
      </div>

      <div className={styles.recycle}>
        <FaRecycle />
        <h1>Give Your Device A Second Life</h1>
        <p>Join us in protecting the planet. Any brand accepted. It’s easy.</p>
        <button className={styles.recycleBtn}>Get Started</button>
      </div>
    </>
  );
};

export default Features;
