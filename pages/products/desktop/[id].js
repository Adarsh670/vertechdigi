/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../../../styles/productdetail.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const product = ({ data }) => {
  const fdata = data[0];
  return (
    <>
      <Head>
        <title>VertechDigiCom - {fdata.desc}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.container}>
      <div className={styles.productheader}>
        <div className={styles.left}>
          <img
            className={styles.sliderImg}
            src={fdata.imgone}
            alt={fdata.model}
          />
        </div>
        <div className={styles.right}>
          <h1>{fdata.desc}</h1>
          <ul>
            <p>Key Features</p>
            {fdata.display?(<li>{fdata.display}</li>):("")} 
           {fdata.memory?(<li>{fdata.memory}</li>):("")} 
           {fdata.processor?(<li>{fdata.processor}</li>):("")} 
           {fdata.os?(<li>{fdata.os}</li>):("")}  
           {fdata.graphics?(<li>{fdata.graphics}</li>):("")} 
           {fdata.includedsoftware?(<li>{fdata.includedsoftware}</li>):("")} 
           {fdata.warranty?(<li>{fdata.warranty}</li>):("")} 
          </ul>
        </div>
      </div>

      <div className={styles.specifications}>
        <p>Specifications</p>
        <div className="mt-5">
          <h1 className={styles.specificationheading}>LAPTOP CATEGORY</h1>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 border-b-2 py-4">
            <div className="flex flex-col">
              <p className="font-bold">Condition</p>
              <span>New</span>
            </div>
            <div className="flex flex-col">
              <p>Laptop Type</p>
              <span>Thin and Light</span>
            </div>
            <div className="flex flex-col mt-5 lg:mt-0 col-span-2 md:col-span-1">
              <p>Lifestyle</p>
              <span>Everyday Use | Office Use | Work</span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1 className={styles.specificationheading}>MANUFACTURER DETAILS</h1>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 border-b-2 py-4">
            <div className="flex flex-col">
              <p className="font-bold">Brand</p>
              <span>{fdata.brand}</span>
            </div>
            <div className="flex flex-col">
              <p>Model Number</p>
              <span>{fdata.modelseries}</span>
            </div>
            <div className="flex flex-col mt-3 lg:mt-0 col-span-2 md:col-span-1">
              <p>Model Series</p>
              <span>{fdata.modelnumber}</span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h1 className={styles.specificationheading}>OPERATING SYSTEM</h1>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 border-b-2 py-4">
            <div className="flex flex-col">
              <p className="font-bold">OS Type</p>
              <span>{fdata.ostype} </span>
            </div>

            <div className="flex flex-col">
              <p>OS Architecture</p>
              <span>64-bit</span>
            </div>
            <div className="flex flex-col mt-3 lg:mt-0 col-span-2 md:col-span-1">
              <p>OS Name & Version</p>
              <span>{fdata.osnameversion}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://laptop-rd4s.onrender.com/desktop`);
  const data = await res.json();
  const paths = data.map((curElem) => {
    return {
      params: { id: curElem.slug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://laptop-rd4s.onrender.com/desktop?slug=${id}`);

  const data = await res.json();
  return {
    props: { data },
  };
}
export default product;
