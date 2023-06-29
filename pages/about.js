import Link from "next/link";
import styles from "../styles/about.module.css";
import { AiOutlineMail } from "react-icons/ai";
const about = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutBanner}>
       
        <h1>ABOUT US</h1>
      </div>
      
      <div className={styles.aboutdesc}>
        <p>About Company</p>
        <span>
          Vertech Digicom is an emerging and leading provider of information
          technology solutions and services. Our expertise lies in connectivity
          and infrastructure services, where we excel in integrating and
          managing information technology and network infrastructure. With our
          precision in analysis, design, and implementation, we deliver results
          of the highest quality. At Vertech Digicom, our primary focus is on
          building a customer-centric service delivery organization. We achieve
          this by integrating people, processes, and technologies to provide the
          highest level of quality at the lowest costs. With our wealth of
          experience, we take pride in assisting and supporting our customers in
          every way possible. We are committed to delivering the highest level
          of technical support services for information technology and networks.
          We offer end-to-end IT infrastructure solutions for various industry
          verticals, including insurance, banking, software development, media,
          capital markets, mutual funds and asset management, wealth management,
          government, healthcare, education, manufacturing, and retail. Our
          presence on GeM (Government e-Marketplace) ensures accessibility and
          convenience. Our extensive range of solutions and services includes
          managed IT services, office automation, email solutions, power
          solutions, disaster recovery solutions, networking, and data centers.
        </span>

        <div className={styles.vission}>
          <p>Our Vision</p>
          <div className={styles.vissionDiv}>
            <div className={styles.vissionLeft}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685611509/Vertecdigi/vision_vxyl7t.jpg"
                alt="vission"
              />
            </div>
            <div className={styles.vissionRight}>
              <span>
                At Vertech Digicom, we aspire to be the leading provider of
                computer hardware, software, and office equipment solutions in
                Gurugram. Our vision is to establish ourselves as the go-to
                destination for individuals and businesses seeking reliable
                laptop, desktop, printer, and scanner dealers in Gurugram. We
                are driven by our commitment to delivering exceptional customer
                service and ensuring customer satisfaction at every step. Our
                vision encompasses providing the latest and most innovative
                products, combined with personalized support and guidance, to
                meet the diverse needs of our customers. With a focus on staying
                at the forefront of technology trends, we strive to offer a
                comprehensive range of laptops, desktops, printers, and scanners
                that cater to the evolving demands of our customers. Our vision
                is to be recognized as a trusted partner, enabling businesses
                and individuals in Gurugram to harness the power of technology
                for enhanced productivity and efficiency.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.mission}>
          <p>Our Mission</p>
          <div className={styles.missionDiv}>
            <div className={styles.missionLeft}>
                <span>
                At Vertech Digicom, we aspire to be the leading provider of
                computer hardware, software, and office equipment solutions in
                Gurugram. Our vision is to establish ourselves as the go-to
                destination for individuals and businesses seeking reliable
                laptop, desktop, printer, and scanner dealers in Gurugram. We
                are driven by our commitment to delivering exceptional customer
                service and ensuring customer satisfaction at every step. Our
                vision encompasses providing the latest and most innovative
                products, combined with personalized support and guidance, to
                meet the diverse needs of our customers. With a focus on staying
                at the forefront of technology trends, we strive to offer a
                comprehensive range of laptops, desktops, printers, and scanners
                that cater to the evolving demands of our customers. Our vision
                is to be recognized as a trusted partner, enabling businesses
                and individuals in Gurugram to harness the power of technology
                for enhanced productivity and efficiency.
              </span>
            </div>
            <div className={styles.missionRight}>
            <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685611508/Vertecdigi/mission_zzupkr.jpg"
                alt="vission"
              />
            
            </div>
          </div>
        </div>
        
      </div>

     
    </div>
  );
};

export default about;
