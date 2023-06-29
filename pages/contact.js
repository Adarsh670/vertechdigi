import styles from "../styles/contact.module.css";
import {
  AiOutlineMail,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsTelephone, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Head from "next/head";
const contact = () => {
  return (
    <>
    <Head>
      <title>VertechDigiCom - Contact Us</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.contact}>
      <div className={styles.left}>
        <div className={styles.contact_info}>
          <div className={styles.contact_heading}>
            <h1>Get in touch</h1>
            <p>
              We love to hear from you. Our friendly team is always here to chat
            </p>
          </div>

          <div className={styles.contact_points}>
            <div className={styles.inner_points}>
              <AiOutlineMail />
              <div className={styles.inner_text}>
                <p>Chat to us</p>
                <span>Our friendly team is here to help.</span>
                <span className={styles.info_contact}>
                  sales@vertechdigi.com
                </span>
              </div>
            </div>
            <div className={styles.inner_points}>
            <MdOutlineLocationOn />
              <div className={styles.inner_text}>
                <p>Office</p>
                <span>941, near Media House Society, Pragati Hills</span>
                <span className={styles.info_contact}>
                Society, Sector 47,Gurugram, Haryana 122001
                </span>
              </div>
            </div>
           
         
            <div className={styles.inner_points}>
              <BsTelephone />
              <div className={styles.inner_text}>
                <p>Phone</p>
                <span>Mon-Sat from 9am to 9pm</span>
                <span className={styles.info_contact}>+91 9910992507</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.social_icons}>
          <ul>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <BsTwitter />
            </li>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <AiFillLinkedin />
            </li>
          </ul>
        </div> */}
      </div>
      <div className={styles.right}>
        <div className={styles.contact_form}>
          <div className={styles.contact_form_heading}>
            <p>Level up your brand</p>
            <p className={styles.contact_form_id}>
              You can reach us anytime via <span>sales@vertechdigi.com</span>
            </p>
          </div>
          <div className={styles.contactform}>
            <form action="">
              <div className={styles.form_box}>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Name" />
              </div>
              <div className={styles.form_box}>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Email" />
              </div>
              <div className={styles.form_box}>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Phone" />
              </div>
              <div className={styles.form_box}>
                <label htmlFor="">Message</label>
                <textarea name="w3review" rows="6" cols="50" />
              </div>
              <button type="submit" className={styles.form_btn}>
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default contact;
