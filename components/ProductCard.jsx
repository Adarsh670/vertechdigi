/* eslint-disable @next/next/no-img-element */
import styles from "../styles/productcard.module.css";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
const ProductCard = ({ item }) => {
  return (
    <div>
        <div className={styles.card}>
          <div className={styles.cardimg}>
            <img src={item.imgone} alt="productimg" />
          </div>
         
          <p className={styles.cardTitle}>{item.model}</p>
          <span className={styles.desc}>
            {item.desc}
          </span>

          <div className={styles.viewDetails}>
            <p>
              <span> View Details </span>
              <AiOutlineArrowRight />
            </p>
          </div>
        </div>
    </div>
  );
};

export default ProductCard;
