/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../../styles/accessories.module.css";

const accessories = () => {
  return (
    <>
      <Head>
        <title>VertechDigiCom - UPS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.accessoriesContainer}>
        <div className={styles.upsBanner}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1687936568/Vertecdigi/Printers_3_b8rfsp.jpg"
            alt=""
          />
        </div>

        {/* company logo  */}
        <div className={styles.logos}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117944/Vertecdigi/apc_gqltp5.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117944/Vertecdigi/eaton_jchqa5.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117944/Vertecdigi/numeric_oawfek.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686659083/Vertecdigi/ups/bpe_qo0z93.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686824965/Vertecdigi/ups/microtech_l3ipwx.png"
            alt=""
          />
        </div>

        {/* APC*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117944/Vertecdigi/apc_gqltp5.png"
            alt=""
          />
        </div>

        {/* APC */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686201622/Vertecdigi/ups/apc_1000va_unip04.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>BR1000G-IN</p>
              <span>
                APC Back-UPS Pro, 1000VA/600W, Tower, 230V, 6x India 6A outlets,
                AVR, LCD, User Replaceable Battery
              </span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686201622/Vertecdigi/ups/apc_1500va_em5kle.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>BR1500G-IN</p>
              <span>
                APC Back-UPS Pro, 1500VA/865W, Tower, 230V, 6x 6A Indian
                outlets, AVR, LCD, User Replaceable Battery
              </span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686201621/Vertecdigi/ups/apc_650va_dswz0e.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>BR650MI</p>
              <span>
                APC Back-UPS Pro, 650VA/390W, Tower, 230V, 6x IEC C13 outlets,
                AVR, LCD, User Replaceable Battery
              </span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686201622/Vertecdigi/ups/apc_1600va_xxesxe.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>BR1600MI</p>
              <span>
                APC Back-UPS Pro, 1600VA/960W, Tower, 230V, 8x IEC C13 outlets,
                AVR, LCD, User Replaceable Battery
              </span>
            </div>
          </div>
        </div>

        {/* EATON*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117944/Vertecdigi/eaton_jchqa5.png"
            alt=""
          />
        </div>

        {/* EATON */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686201622/Vertecdigi/ups/Eaton-5S_nk1ayq.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Eaton 5S UPS</p>
              <ul>
                <li>
                  <span>Load Capacity (VA)</span>: 1000 VA
                </li>
                <li>
                  <span>Input Voltage</span>: 110 V AC
                </li>
                <li>
                  <span>Output Voltage</span>: 115 V AC
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686201623/Vertecdigi/ups/eaton-9355_ktepwe.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Eaton 9355 UPS</p>
              <ul>
                <li>
                  <span>FREQUENCY</span>: 50/60 Hz
                </li>
                <li>
                  <span>TOPOLOGY</span>: Double conversion
                </li>
                <li>
                  <span>VOLTAGE (VA)</span>: 208/220/480/600 VAC three phase
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686201622/Vertecdigi/ups/eaton-93pm_sdifci.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Eaton 9355 UPS</p>
              <ul>
                <li>
                  <span>POWER RATING</span>: 10-400kW
                </li>
                <li>
                  <span>FREQUENCY</span>: 50/60 Hz
                </li>
                <li>
                  <span>VOLTAGE (VA)</span>: 480V, 415V, 400V, 380V, 220V, 208V
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686201623/Vertecdigi/ups/eaton-9155_utlrux.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Eaton 9155 UPS</p>
              <ul>
                <li>
                  <span>POWER RATING</span>: 8-15 kVA at 0.9 power factor
                </li>
                <li>
                  <span>FREQUENCY</span>: 50/60 Hz
                </li>
                <li>
                  <span>VOLTAGE (VA)</span>: 200-240 VAC with neutral or with
                  optional input transformer
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Numeric*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117944/Vertecdigi/numeric_oawfek.png"
            alt=""
          />
        </div>

        {/* Numeric */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686201622/Vertecdigi/ups/digital_2000hr_htagx8.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Eaton 5S UPS</p>
              <ul>
                <li>Generator compatibility</li>
                <li>Battery mode start-up</li>
                <li>No-load protection</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686201622/Vertecdigi/ups/premius_hj3nyx.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Eaton 9355 UPS</p>
              <ul>
                <li>Unity power factor delivers upto 25% more active power</li>
                <li>High efficiency of upto 94% for lower operating cost</li>
                <li>5% THDi improves UPS operating capacity</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686201622/Vertecdigi/ups/hpi33evo_ey3iu1.webp"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>HPi 33 EVO</p>
              <ul>
                <li>Unity power factor to offer maximum active power</li>
                <li>Upto 95% efficiency resulting in lower operating costs</li>
                <li>
                  Scalability upto 4 UPS’(N+X redundancy) for maximum uptime
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686201623/Vertecdigi/ups/kero_t_wegqcj.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Eaton 9155 UPS</p>
              <ul>
                <li>IGBT Based Rectifier</li>
                <li>Unity PF Design</li>
                <li>Touch Screen Display</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BPE*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686659083/Vertecdigi/ups/bpe_qo0z93.png"
            alt=""
          />
        </div>

        {/* BPE */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686659046/Vertecdigi/ups/mf_series_ggwy1l.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Online UPS 1 Ph Output MF Series (1-10KVA)</p>
              <ul>
                <li>True Online, Double Conversion & PWM Technology.</li>
                <li>CVCF (Constant Voltage Constant Frequency)</li>
                <li>LC Display and Wide Input Voltage Range</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686659046/Vertecdigi/ups/deii_vckvgq.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Online UPS 1 Ph Output DSII Series (10-40KVA)</p>
              <ul>
                <li>High reliability design</li>
                <li>Comprehensive and reliable protection</li>
                <li>User friendly network management</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686659045/Vertecdigi/ups/cp_series_a456ql.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>CP Series - 5-20kVA</p>
              <ul>
                <li>True Online Double Conversion Topology</li>
                <li>Output Isolation Transformer</li>
                <li>Wide Input Voltage Range</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686659045/Vertecdigi/ups/ep_series_pxi5po.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>EP series 20-60KVA</p>
              <ul>
                <li>DSP Technology Guarantees High Reliability</li>
                <li>
                  Intelligent Battery Management to Prolong Battery Life Cycle
                </li>
                <li>Control Designed to Withstand all kinds of Loads</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Microtech*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686824965/Vertecdigi/ups/microtech_l3ipwx.png"
            alt=""
          />
        </div>

        {/* Microtech */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686824964/Vertecdigi/ups/hightfrequencyE_kkit0o.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>
                High Frequency E² Series (1 PH IN - 1 PH OUT) IGBT Technology
                Based Online UPS
              </p>
              <span>
                Microtek High Frequency Online UPS E² Series Products Range 24
                to 36 VDC provides Uninterrupted Pure Power for Critical
                Applications such as Computer Network, Servers, Cyber Cafes, ATM
                Machines and CCTV Camera etc.
              </span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686824966/Vertecdigi/ups/imaxx_xbc6iz.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>
                Low Frequency iMAXX Series (3 PH IN -1 PH OUT) Transformer Based
                Online UPS
              </p>
              <span>
                Pure Sinewave Output Ratings starting from 15KVA to 20KVA Micro
                Processor based PWM Technology using Hi-Grade IGBTs Advance
                Battery Management (ABM) for Longer Battery Life and Quick
                Charging Static UPS with LCD Display Best Suited for most High
                Capacity Sophisticated Applications.
              </span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686824966/Vertecdigi/ups/maxlife_y4qimn.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>
                High Frequency MAX LiFe Series (1PH IN - 1 PH OUT) IGBT
                Technology Based Online UPS
              </p>
              <span>
                Microtek offers Wide Range of High Frequency MAX LiFe Series
                (1PH IN - 1 PH OUT) IGBT Technology Based Online UPS from 1KVA
                to 30KVA based on World’s Latest Technology to meet the harsh
                Environmental and worst Power Conditions for Applications from
                Small Office requirement to Space Critical Missions with wide
                variety of Backup Range from 5 minutes to 10 hours to meet the
                needs of every individual.
              </span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686824966/Vertecdigi/ups/imaxx_xbc6iz.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>
                Low Frequency iMAXX Series (3 PH IN - 3 PH OUT) Transformer
                Based Online UPS
              </p>
              <span>
                Microtek offers Wide Range of Online UPS from 10KVA to 30KVA
                based on World’s Latest Technology to meet the harsh
                Environmental and worst Power Conditions for Applications from
                Small Office requirement to Space Critical Missions with wide
                variety of Backup Range from 5 minutes to 10 hours to meet the
                needs of every individual.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default accessories;
