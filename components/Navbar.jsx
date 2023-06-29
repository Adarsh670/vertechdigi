import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.header_main}>
            <div className={styles.logo}>
              <Link href="/">
                <img className={styles.vlogo} src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685606216/Vertecdigi/Vertechlogo_yneios.png" alt="" />
                </Link>
            </div>
            <div
              className={styles.open_nav_menu}
              onClick={() => setOpen(!open)}
            >
              <span>
                {" "}
                <AiOutlineMenu size={25}/>
              </span>
            </div>
            <div
              className={
                open
                  ? `${styles["menu_overlay"]} ${styles["active"]}`
                  : `${styles.menu_overlay}`
              }
              onClick={() => setOpen(!open)}
            ></div>
            <nav
              className={
                open
                  ? `${styles["nav_menu"]} ${styles["open"]}`
                  : `${styles.nav_menu}`
              }
            >
              <div
                className={styles.close_nav_menu}
                onClick={() => setOpen(!open)}
              >
                <IoMdClose size={20} />
              </div>
              <ul className={styles.menu}>
                <li className={styles.menu_item}>
                  <Link href="/" onClick={() => setOpen(!open)}>Home</Link>
                </li>
                <li className={styles.menu_item}>
                  <Link href="/about" onClick={() => setOpen(!open)}>About</Link>
                </li>
                <li
                  className={`${styles["menu_item"]} ${styles["menu_item_has_children"]}`}
                  onClick={() => {
                    setSubmenu(!submenu);
                  }}
                >
                  <Link href="/">
                    Products
                    <AiFillCaretDown className={styles.downarrow} />
                  </Link>
                  {/* <ul className={`${styles["sub_menu"]} ${styles["active"]}`}> */}
                  <ul
                    className={
                      submenu
                        ? `${styles["sub_menu"]} ${styles["active"]}`
                        : `${styles.sub_menu}`
                    }
                  >
                    <li className={styles.menu_item}>
                      <Link href="/products/laptop" onClick={() => setOpen(!open)}>Laptop</Link>
                    </li>
                    <li className={styles.menu_item}>
                      <Link href="/products/desktop" onClick={() => setOpen(!open)}>Desktop</Link>
                    </li>
                    <li className={styles.menu_item}>
                      <Link href="/products/smartphones" onClick={() => setOpen(!open)}>Smart Phones</Link>
                    </li>
                    <li className={styles.menu_item}>
                      <Link href="/products/network" onClick={() => setOpen(!open)}>Network infrastructure</Link>
                    </li>
                    <li className={styles.menu_item}>
                      <Link href="/products/software" onClick={() => setOpen(!open)}>Software Solutions</Link>
                    </li>
                   
                    <li className={styles.menu_item}>
                      <Link href="/products/microphones" onClick={() => setOpen(!open)}>Audio Video solutions</Link>
                    </li>
                    <li className={styles.menu_item}>
                      <Link href="/products/serverstorage" onClick={() => setOpen(!open)}>Servers & Storage</Link>
                    </li>
                    <li className={styles.menu_item}>
                      <Link href="/products/printerscanners" onClick={() => setOpen(!open)}>Printer & Scanners</Link>
                    </li>
                    <li className={styles.menu_item}>
                      <Link href="/products/accessories" onClick={() => setOpen(!open)}>Accessories & peripherals</Link>
                    </li>
                    <li className={styles.menu_item}>
                      <Link href="/products/ups" onClick={() => setOpen(!open)}>UPS</Link>
                    </li>
                 
                   
                  </ul>
                </li>
                <li className={styles.menu_item}>
                  <Link href="/blogs" onClick={() => setOpen(!open)}>Blog</Link>
                </li>
                <li className={styles.menu_item}>
                  <Link href="/contact" onClick={() => setOpen(!open)}>Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
