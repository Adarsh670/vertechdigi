/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../../styles/accessories.module.css";

const printerscanners = () => {
  return (
    <>
    <Head>
      <title>VertechDigiCom - Printer Scanners</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.accessoriesContainer}>
      <div className={styles.printerBanner}>
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1687587912/Vertecdigi/Printters_3_cwl6og.png"
          alt=""
        />
      </div>

      {/* company logo  */}
      <div className={styles.logos}>
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686157855/Vertecdigi/epson_utz2mo.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117792/Vertecdigi/Canon_csvy0v.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686119922/Vertecdigi/hp_gdm3n3.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686157936/Vertecdigi/fujitsu_lgp0ca.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686158035/Vertecdigi/kodak_ggpuqd.png"
          alt=""
        />
      </div>

      {/* canon*/}
      <div className={styles["company"] + " " + styles["sandisk"]}>
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117792/Vertecdigi/Canon_csvy0v.png"
          alt=""
        />
      </div>

      {/* canon */}
      <div className={styles.productsDiv}>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686154534/Vertecdigi/printer/imageClass_mf275_w7fitz.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>imageCLASS MF275dw</p>
            <ul>
              <li>Print, Scan, Copy, Fax</li>
              <li>Print Speed (A4): Up to 29 pages/minute</li>
              <li>First Print Out Time (A4): Approx. 5.4s</li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686154534/Vertecdigi/printer/imageClasslnp722_tpukox.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>imageCLASS LBP722Cx</p>
            <ul>
              <li>
                Print Speed (A4): Up to 38 pages per minute (ppm) (mono/colour)
              </li>
              <li>First Print Out Time (A4): Approx. 5.3 / 6.3s</li>
              <li>Print Resolution: Up to 9600 (equivalent) x 600 dpi</li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686559521/Vertecdigi/printer/imageRUNNERC3226i_jfvy3d.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>PIXMA G3730</p>
            <ul>
              <li>A3 Colour Laser Multifunctional</li>
              <li>7 inch TFT LCD WVGA colour Touch panel</li>
              <li>Print, Copy, Scan, Send, Store and Optional Fax</li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686559521/Vertecdigi/printer/imageRUNNER_ADVANCE_4525_dq3lij.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>PIXMA G4770</p>
            <ul>
              <li>Monochrome Laser Multifunctional</li>
              <li>Print, Copy, Scan, Send, Store and Optional Fax</li>
              <li>Canon Dual Custom Processor (Shared) 1.75 Ghz</li>
            </ul>
          </div>
        </div>
      </div>

      {/* epson*/}
      <div className={styles["company"] + " " + styles["sandisk"]}>
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686157855/Vertecdigi/epson_utz2mo.png"
          alt=""
        />
      </div>
      {/* epson */}
      <div className={styles.productsDiv}>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686154532/Vertecdigi/printer/EcoTank_L1250_rsg7zj.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>imageCLASS MF275dw</p>
            <ul>
              <li>
                Ultra-high page yield of 4,500 pages^ (black) and 7,500 pages^
                (colour)
              </li>
              <li>
                Low printing costs at just 9 paise (black) and 24 paise (colour)
              </li>
              <li>Wi-Fi & Wi-Fi Direct</li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686154532/Vertecdigi/printer/EcoTankL14150_gmfjmd.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>EcoTank L14150</p>
            <ul>
              <li>Print speed of up to 17.0 ipm</li>
              <li>Prints up to A3+ (for simplex)</li>
              <li>Automatic duplex printing</li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686154532/Vertecdigi/printer/epsonDS6500_pty1yx.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>Epson WorkForce DS-6500</p>
            <ul>
              <li>Scan speed up to 50 ipm</li>
              <li>1200 DPI scanning</li>
              <li>Easy File Management software for convenient scans</li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686154533/Vertecdigi/printer/epson_1200xla3_tzgbjn.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>Epson Expression 12000XL</p>
            <ul>
              <li>Scan up to A3 size</li>
              <li>High optical resolution of 2,400 x 4,800 dpi</li>
              <li>
                Scan transparencies up to A3 size with the optional A3
                Transparency Unit
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* hp */}

      <div className={styles["company"] + " " + styles["sandisk"]}>
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686119922/Vertecdigi/hp_gdm3n3.png"
          alt=""
        />
      </div>
      <div className={styles.productsDiv}>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1687936734/Vertecdigi/printer/hpprint1_grjynn.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>HP ScanJet Enterprise Flow 5000 s5</p>
            <ul>
              <li>Scans up to 65 ppm / 130 IPM</li>
              <li>One-pass duplex scanning</li>
              <li>Advanced scanning features</li>
              <li>Includes 80 page ADF and one-touch scanning custom settings</li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1687936874/Vertecdigi/printer/hpprinter1_n7vfoe.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>HP Color LaserJet Pro MFP 4301-4303</p>
            <ul>
              <li>HP Color LaserJet Pro MFP 4301-4303dw/fdn/fdw Printer series</li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686556556/Vertecdigi/printer/hpm72630dn_rrbyrb.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>HP Laserjet MFP M72630dn Printer</p>
            <ul>
              <li><span>Hardware Interface</span> : Ethernet</li>
              <li><span>Printing Media Type</span>: Labels</li>
              <li><span>Model Name</span> : M72630dn</li>
              <li><span>Item Weight</span> : 75 Kilograms</li>
              
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1687937393/Vertecdigi/printer/hpprint3_bfdox8.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>HP Color LaserJet Managed MFP E77822/ E77825/E77830</p>
            <ul>
              <li>Print speed up to 30 ppm (Black and Color)</li>
              <li>Duty Cycle up to 3,00,000 pages</li>
              <li>Processor Speed: 1.2 GHz; Memory: 6GB</li>
              <li>Scan speeds up to 80/160 ipm (simplex / duplex)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* fujitsu */}
      <div className={styles["company"] + " " + styles["sandisk"]}>
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686157936/Vertecdigi/fujitsu_lgp0ca.png"
          alt=""
        />
      </div>
      <div className={styles.productsDiv}>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686154532/Vertecdigi/printer/dotmatrixDl7600_gdmfgw.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>FUJITSU Dot Matrix Printer DL7600 Pro</p>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686154532/Vertecdigi/printer/dotmatrixDl7400_btbunt.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>FUJITSU Dot Matrix Printer DL7400 Pro</p>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686157258/Vertecdigi/printer/scansnapix1400_eqz79k.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>ScanSnap iX1400</p>
            <ul>
              <li>Speed: 40ppm</li>
              <li>ADF Capacity: 50 Sheets</li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686157258/Vertecdigi/printer/snapix1600_odgdly.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>ScanSnap iX1600</p>
            <ul>
              <li>Speed: 40ppm</li>
              <li>ADF Capacity: 50 Sheets</li>
            </ul>
          </div>
        </div>
      </div>

      {/* fujitsu */}
      <div className={styles["company"] + " " + styles["sandisk"]}>
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686158035/Vertecdigi/kodak_ggpuqd.png"
          alt=""
        />
      </div>
      <div className={styles.productsDiv}>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686154534/Vertecdigi/printer/kodak_mini_photo_printer_d9sn0n.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>KODAK Mini Photo Printers</p>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686154534/Vertecdigi/printer/kodak_smile_printer_viflbh.png"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>KODAK SMILE Instant Print Digital Printer</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default printerscanners;
