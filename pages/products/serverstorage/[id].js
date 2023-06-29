/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../../../styles/productdetail.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const product = ({ data }) => {
  const fdata = data[0];
  return (
    <>
    <Head>
      <title>VertechDigiCom - {fdata.model}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.container}>
      <div className={styles.productheader}>
        <div className={styles.left}>
          <img
            className={styles["sliderImg"]+" "+styles["microphone"]}
            src={fdata.imgone}
            alt={fdata.model}
          />
        </div>
        <div className={styles.right}>
          <h1>{fdata.model}</h1>
          <ul>
            <p>Key Features</p>
           {fdata.Articlenumber?(<li>Article number (SKU) &nbsp;:{fdata.Articlenumber}</li>):("")} 
           {fdata.Wearingstyle?(<li>Wearing style &nbsp;:{fdata.Wearingstyle}</li>):("")} 
           {fdata.EarCoupling?(<li>Ear Coupling &nbsp;:{fdata.EarCoupling}</li>):("")} 
           {fdata.Bluetoothversion?(<li>Bluetooth version &nbsp;:{fdata.Bluetoothversion}</li>):("")}  
           {fdata.avidexa?(<li>{fdata.avidexa}</li>):("")}  
           {fdata.avidexb?(<li>{fdata.avidexb}</li>):("")}  
           {fdata.avidexc?(<li>{fdata.avidexc}</li>):("")}  
           {fdata.avidexd?(<li>{fdata.avidexd}</li>):("")}  
           {fdata.avidexe?(<li>{fdata.avidexe}</li>):("")}  
           {fdata.interface?(<li>{fdata.interface}</li>):("")}  
           {fdata.interfaceone?(<li>{fdata.interfaceone}</li>):("")}  
           {fdata.systemrequirementone?(<li>{fdata.systemrequirementone}</li>):("")}  
           {fdata.systemrequirementtwo?(<li>{fdata.systemrequirementtwo}</li>):("")}  
           {fdata.systemrequirementthree?(<li>{fdata.systemrequirementthree}</li>):("")}  
           {fdata.systemrequirementfour?(<li>{fdata.systemrequirementfour}</li>):("")}  
           {fdata.Supportedbrowsersone?(<li>{fdata.Supportedbrowsersone}</li>):("")} 
           {fdata.Supportedbrowserstwo?(<li>{fdata.Supportedbrowserstwo}</li>):("")} 
           {fdata.Supportedbrowsersthree?(<li>{fdata.Supportedbrowsersthree}</li>):("")} 
           {fdata.Supportedbrowsersfour?(<li>{fdata.Supportedbrowsersfour}</li>):("")} 

           {fdata.cpumodel?(<li>{fdata.cpumodel}</li>):("")} 
           {fdata.cpufrequency?(<li>{fdata.cpufrequency}</li>):("")} 
           {fdata.systemmemory?(<li>{fdata.systemmemory}</li>):("")} 
           {fdata.drivebays?(<li>{fdata.drivebays}</li>):("")} 
           {fdata.compatibledrivetype?(<li>{fdata.compatibledrivetype}</li>):("")} 
           {fdata.Portone?(<li>{fdata.Portone}</li>):("")} 
           {fdata.Porttwo?(<li>{fdata.Porttwo}</li>):("")} 


           {fdata.base?(<li>{fdata.base}</li>):("")} 
           {fdata.trustedplatformmodule?(<li>{fdata.trustedplatformmodule}</li>):("")} 
           {fdata.chassis?(<li>{fdata.chassis}</li>):("")} 
           {fdata.processor?(<li>{fdata.processor}</li>):("")} 
           {fdata.MemoryDIMM?(<li>{fdata.MemoryDIMM}</li>):("")} 
           {fdata.Memory?(<li>{fdata.Memory}</li>):("")} 
           {fdata.Raid?(<li>{fdata.Raid}</li>):("")} 
           {fdata.Harddrive?(<li>{fdata.Harddrive}</li>):("")} 
           


           



          
          </ul>
        </div>
      </div>

    
    </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://laptop-rd4s.onrender.com/serverstorage`);
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
  const res = await fetch(`https://laptop-rd4s.onrender.com/serverstorage?slug=${id}`);

  const data = await res.json();
  return {
    props: { data },
  };
}
export default product;
