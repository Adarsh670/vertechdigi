/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../../styles/accessories.module.css";

const software = () => {
  return (
    <>
      <Head>
        <title>VertechDigiCom - Software</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.accessoriesContainer}>
        <div className={styles.accessorBanner}>
          <h1>Software Solutions</h1>
        </div>

        {/* company logo  */}
        <div className={styles["logos"] + " " + styles["softwarelogos"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686826149/Vertecdigi/software/adobe_x3lwol.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686732623/Vertecdigi/software/logo_iudhle.svg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686732676/Vertecdigi/software/RE1Mu3b_kefoku.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117792/Vertecdigi/Canon_csvy0v.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686826150/Vertecdigi/software/webex_ciyufp.png"
            alt=""
          />
        </div>

        {/* Quick Heal*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686732623/Vertecdigi/software/logo_iudhle.svg"
            alt=""
          />
        </div>

        {/* Quick Heal */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731835/Vertecdigi/software/quickheal-total-security_zbk5o9.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>Quick Heal Total Security</p>
              <span>Best All-round Protection</span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731834/Vertecdigi/software/internet-security_hwaerp.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>Quick Heal Internet Security</p>
              <span>Best Online Security</span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731833/Vertecdigi/software/antivirus-pro_fzyiui.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>Quick Heal AntiVirus Pro</p>
              <span>Best PC Performance</span>
            </div>
          </div>
        </div>

        {/* Microsoft*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686732676/Vertecdigi/software/RE1Mu3b_kefoku.png"
            alt=""
          />
        </div>

        {/* Microsoft */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <ul className={styles.micorsofticons}>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731833/Vertecdigi/software/m1_jq9lt8.webp"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731833/Vertecdigi/software/m2_jafklh.webp"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731834/Vertecdigi/software/m3_ohjtbl.webp"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731834/Vertecdigi/software/m4_ng7ngx.webp"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731834/Vertecdigi/software/m5_pbmzg8.avif"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731834/Vertecdigi/software/m6_eqohbl.webp"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731834/Vertecdigi/software/m7_w4h4xn.avif"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731835/Vertecdigi/software/m8_sampo9.webp"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731835/Vertecdigi/software/m9_hyxqvr.webp"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731835/Vertecdigi/software/m10_v1tvww.avif"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div className={styles.productdesc}>
              <p>Microsoft 365 Family</p>
              <ul>
                <li>For one to six people to share.</li>
                <li>
                  Each person can use on up to five devices simultaneously.
                </li>
                <li>
                  Works on PC, Mac, iPhone, iPad and Android phones and tablets.
                </li>
                <li>Up to 6 TB of cloud storage (1 TB per person).</li>
                <li>Additional features in the Family Safety mobile app.</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <ul className={styles.micorsofticons}>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731833/Vertecdigi/software/m1_jq9lt8.webp"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731833/Vertecdigi/software/m2_jafklh.webp"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731834/Vertecdigi/software/m3_ohjtbl.webp"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731834/Vertecdigi/software/m4_ng7ngx.webp"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731834/Vertecdigi/software/m5_pbmzg8.avif"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731834/Vertecdigi/software/m6_eqohbl.webp"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731834/Vertecdigi/software/m7_w4h4xn.avif"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731835/Vertecdigi/software/m8_sampo9.webp"
                    alt=""
                  />
                </li>
                <li>
                  <img
                    src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731835/Vertecdigi/software/m9_hyxqvr.webp"
                    alt=""
                  />
                </li>
              </ul>
            </div>
            <div className={styles.productdesc}>
              <p>Microsoft 365 Personal</p>
              <ul>
                <li>For one person.</li>
                <li>Use up to five devices simultaneously.</li>
                <li>
                  Works on PC, Mac, iPhone, iPad and Android phones and tablets.
                </li>
                <li>1 TB of cloud storage.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cannon*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117792/Vertecdigi/Canon_csvy0v.png"
            alt=""
          />
        </div>

        {/* Cannon */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731833/Vertecdigi/software/cannon1_w6vf4z.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>Kofax eCopy ShareScan</p>
              <ul>
                <li>Industry-leading mail and file system integration</li>
                <li>Integration with Canon MFD</li>
                <li>The best MFD scanning and OCR experience for users</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731834/Vertecdigi/software/iris_ejrsia.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>IRISPowerscan™</p>
              <ul>
                <li>Indexing</li>
                <li>Scanning & Sorting</li>
                <li>Quality control and validation</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731835/Vertecdigi/software/therefore_g2eix0.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>Therefore™</p>
              <ul>
                <li>Document management software</li>
                <li>Document workflow</li>
                <li>Multi-function Printers (MFP) integration</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686731835/Vertecdigi/software/readiris_eevwx4.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>Readiris™ Pro & Corporate</p>
              <ul>
                <li>Monitor folders for documents</li>
                <li>Convert documents into various formats</li>
                <li>Processing (OCR, Document Editing & Compression)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default software;
