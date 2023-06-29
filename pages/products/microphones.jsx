/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../../styles/accessories.module.css";

const accessories = () => {
  return (
    <>
      <Head>
        <title>VertechDigiCom - Audio Video Solutions </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.accessoriesContainer}>
        <div className={styles.upsBanner}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685601499/Vertecdigi/microphone_keffjd.jpg"
            alt=""
          />
        </div>

        {/* company logo  */}
        <div className={styles.logos}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117757/Vertecdigi/jabra_gh6ov3.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117756/Vertecdigi/Sennheiser_udrt5a.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686561277/Vertecdigi/microphones/polylogo_nl5h1a.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117756/Vertecdigi/Logitech_jls1zs.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686650856/Vertecdigi/microphones/ado_gn8xmv.png"
            alt=""
          />
        </div>

        {/* Sennheiser*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117756/Vertecdigi/Sennheiser_udrt5a.png"
            alt=""
          />
        </div>

        {/* Sennheiser */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1687524086/Vertecdigi/microphones/teamconnect_tutlxt.jpg"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>Sennheiser TeamConnect SL Ceiling 2 Microphone Array</p>
              <ul>
                <li>For Fixed Conference Installations</li>
                <li>28 Sennheiser KE 10-237 Mic Capsules</li>
                <li>Automatic Beamforming Technology</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1687524412/Vertecdigi/microphones/voki_dffrcc.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>XSW IEM SET</p>
              <ul>
                <li>Frequency range : 476-500 MHz</li>
                <li>High Boost (EQ) : +10 dB at 13 kHz</li>
                <li>AF frequency response : 45 Hz to 15 kHz</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686642568/Vertecdigi/microphones/h280pro_xwquhp.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>HD 280 PRO</p>
              <ul>
                <li>Ear coupling : circumaural</li>
                <li>Jack plug : 3,5 / 6,3 mm stereo</li>
                <li>Connection cable : Coiled Cable (min. 1.3m / max. 3m)</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685600760/Vertecdigi/CX_Plus_True_vvls3c.webp"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>MOMENTUM 4 Wireless</p>
              <ul>
                <li>True wireless stereo earphones</li>
                <li>Bluetooth 5.2</li>
                <li>Ear canal</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Polymor*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686561277/Vertecdigi/microphones/polylogo_nl5h1a.png"
            alt=""
          />
        </div>

        {/* Polymor */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1687933495/Vertecdigi/microphones/videoconference_phinuk.webp"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>EAGLEEYE IV</p>
              <ul>
                <li>Catch every detail during meetings</li>
                <li>Use it in any-size room for a perfect fit</li>
                <li>See a wide view and never miss a thing</li>
                <li>Mount it near or far to suit your space</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686561442/Vertecdigi/microphones/savi_7300_moimyo.webp"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>SAVI 7300 OFFICE SERIES</p>
              <ul>
                <li>
                  <span>Connects To</span> : Desk phone and PC
                </li>
                <li>
                  <span>Battery Capacity</span> : 500mAH
                </li>
                <li>
                  <span>Microphone and Technology</span> : Noise cancelling with
                  Acoustic Fence Technology. Meets Microsoft Teams Open office
                  requirements
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1687933485/Vertecdigi/microphones/poly-studio_yyem7i.webp"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>POLY STUDIO P15</p>
              <ul>
                <li>
                  Show up and stand out with exceptional optics and powerful
                  audio
                </li>
                <li>Automatic camera framing lets you move with confidence</li>
                <li>Up and running in seconds with easy set up</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1687933485/Vertecdigi/microphones/Trio_8300_mn61vf.webp"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>TRIO 8300</p>
              <ul>
                <li>Hear and be heard with incredible clarity</li>
                <li>Join meetings with a single touch</li>
                <li>Easy setup and management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* jabra*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686568290/Vertecdigi/microphones/jabralogo_y8s9pe.png"
            alt=""
          />
        </div>

        {/* Jabra */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686567239/Vertecdigi/microphones/jabra_elite4_m6wpud.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>
                Jabra Elite 4 Active TWS Earbuds with Active Noise Cancellation
              </p>
              <ul>
                <li>
                  <span>Connectivity</span> : Bluetooth, Version 5.2
                </li>
                <li>
                  <span>Battery Life</span> : 28 Hours Playtime
                </li>
                <li>
                  <span>Noise Cancellation</span> : Active Noise Cancellation
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686567238/Vertecdigi/microphones/evolve2_stjl4a.webp"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>Jabra Evolve2 65 Flex</p>
              <ul>
                <li>
                  <span>Connectivity</span> : Bluetooth, Version 5.2
                </li>
                <li>
                  <span>Battery Life</span> : Up to 21 hours battery talk-time
                </li>
                <li>
                  <span>Noise Cancellation</span> : Active Noise Cancellation
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1687588228/Vertecdigi/microphones/jabra_speaker_rmnmmt.avif"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>Jabra Speak2 40 - UC, Dark Grey</p>
              <ul>
                <li>Full duplex audio for natural conversations</li>
                <li>Four beamforming noise-cancelling microphones</li>
                <li>Voice Level Normalization equalises all voices</li>
                <li>Full-range 50mm speaker & wideband audio</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1687588456/Vertecdigi/microphones/jabra_bar_yg2o7d.avif"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>Jabra PanaCast 50 Room System MS</p>
              <ul>
                <li>
                  Intelligent meeting Room System with Lenovo ThinkSmart Core
                </li>
                <li>
                  Preloaded with your choice of either Microsoft Teams Rooms or
                  Zoom Rooms
                </li>
                <li>
                  Innovative software experiences for immersive and natural
                  virtual collaboration
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logitech*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117756/Vertecdigi/Logitech_jls1zs.png"
            alt=""
          />
        </div>

        {/* Logitech */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686825993/Vertecdigi/microphones/bcc950_tij9rj.webp"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>BCC950</p>
              <span>
                Desktop video conferencing solution for private offices, home
                offices, and most any semi-private space
              </span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686568931/Vertecdigi/microphones/h390_cs6gmy.webp"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>H390 USB COMPUTER HEADSET</p>
              <ul>
                <li>
                  <span>Microphone Type</span> : Bi-directional
                </li>
                <li>
                  <span>Input Impedance</span> : 32 Ohm
                </li>
                <li>
                  <span>Frequency response</span> : 20 Hz - 20 kHz
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686825782/Vertecdigi/microphones/rallyplus_fla0gk.webp"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>RALLY PLUS</p>
              <span>
                Premium Ultra-HD ConferenceCam system with automatic camera
                control
              </span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686825927/Vertecdigi/microphones/rally_camera_aiv0n0.webp"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>RALLY CAMERA</p>
              <span>
                Premium PTZ camera with Ultra-HD imaging system and automatic
                camera control
              </span>
            </div>
          </div>
        </div>

        {/* Adonis*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686650856/Vertecdigi/microphones/ado_gn8xmv.png"
            alt=""
          />
        </div>

        {/* Adonis */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686650371/Vertecdigi/microphones/muse_ohcydf.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>MUSE</p>
              <span>
                Unified Communication Microphone Highly Sensitive
                Omni-Directional Pickup with USB
              </span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686650371/Vertecdigi/microphones/muse_head_set_sbpdgg.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>MUSE HeadSet</p>
              <span>Stereo Headset with Mic USB 2.0 & 3.5mm Connectivity</span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686650371/Vertecdigi/microphones/muse2_zs2zdn.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>Muse 2</p>
              <span>
                Unified Communication Mic with Inbuilt Speaker || Highley
                Sensitive USB Microphone with 360° Pickup
              </span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686650371/Vertecdigi/microphones/muse_2_wireless_yjzhrr.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>Muse 2 | Wireless</p>
              <span>
                Unified Communication Mic with Inbuilt Speaker Highley Sensitive
                2.4GHz Wireless Microphone with 360° Pickup
              </span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686650370/Vertecdigi/microphones/helios_ge6iat.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>Helios</p>
              <span>
                Pro Box with Inbuilt Mic, Speaker, 1080p/4K Resolution Camera
              </span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686650370/Vertecdigi/microphones/cadmus_ckyfm6.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>Cadmus Lite</p>
              <span>
                Professional PTZ Camera Series FHD Video Output Up to 1080/60p
                via USB 3.0 and HDMI
              </span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686650370/Vertecdigi/microphones/cadmus_mini_aiem9p.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>Cadmus Mini - ONE</p>
              <span>
                Advanced Webcam Full HD 1080p, USB 2.0, Dual Microphone Stereo
                Effect
              </span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686650370/Vertecdigi/microphones/cronus._v4w0x2.png"
                alt=""
              />
            </div>
            <div className={styles.productdesc}>
              <p>Cronus</p>
              <span>USB 3.0 Long Range Hybrid Active Optical Cables</span>
            </div>
          </div>
        </div>

        <div className={styles.upsBanner}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686592734/Vertecdigi/tv/Add_a_heading_zitplz.jpg"
            alt=""
          />
        </div>

        <div className={styles.logos}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589812/Vertecdigi/tv/LG-Logo-2014_s2jvec.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117932/Vertecdigi/benq_bmllrd.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117932/Vertecdigi/Panasonic_qdkxqg.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117932/Vertecdigi/samsung_oz8r34.png"
            alt=""
          />
        </div>

        {/* Samsung*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117932/Vertecdigi/samsung_oz8r34.png"
            alt=""
          />
        </div>

        {/* Samsung */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589893/Vertecdigi/tv/SAMSUNG_Series_6_hrcc0t.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>
                SAMSUNG Series 6 163 cm (65 inch) QLED 4K Ultra HD Tizen TV with
                Alexa Compatibility
              </p>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589891/Vertecdigi/tv/SAMSUNG_Series_7_irgxqr.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>
                SAMSUNG Series 7 138 cm (55 inch) 4K Ultra HD LED Tizen TV with
                Alexa Compatibility (2021 model)
              </p>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589890/Vertecdigi/tv/SAMSUNG_Series_9_ldlthd.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>
                SAMSUNG Series 9 216 cm (85 inch) QLED 4K Ultra HD Tizen TV with
                Alexa Compatibility
              </p>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589889/Vertecdigi/tv/samsung_crystal_4k_ki9swz.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>
                SAMSUNG Crystal 4K Neo 108 cm (43 inch) 4K Ultra HD LED Tizen TV
                with Voice Assistance (2022 model)
              </p>
            </div>
          </div>
        </div>

        {/* LG*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589812/Vertecdigi/tv/LG-Logo-2014_s2jvec.png"
            alt=""
          />
        </div>

        {/* Lg */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589861/Vertecdigi/tv/LG_UQ80_mv4gd7.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>
                LG UQ80 139 cm (55 inch) 4K Ultra HD LED WebOS TV with Voice
                Assistance (2022 model)
              </p>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589861/Vertecdigi/tv/LG_NANO75_yfml0z.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>
                LG NANO75 127 cm (50 inch) 4K Ultra HD Nano Cell WebOS TV with
                Voice Assistance (2022 model)
              </p>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589861/Vertecdigi/tv/LG_LQ63_ugzn8m.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>
                LG LQ63 81.28 cm (32 inch) HD Ready LED Smart WebOS TV with
                Alexa Compatibility (2020 model)
              </p>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589860/Vertecdigi/tv/LG_LM562_bo8f34.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>
                LG LM562 108.22 cm (43 inch) Full HD LED Smart WebOS TV with
                Dolby Audio
              </p>
            </div>
          </div>
        </div>

        {/* Benq*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117932/Vertecdigi/benq_bmllrd.png"
            alt=""
          />
        </div>

        {/* Benq */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589838/Vertecdigi/tv/PD2500Q_n5dpha.webp"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>PD2500Q｜25-inch 2K QHD sRGB Designer Monitor</p>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589838/Vertecdigi/tv/01ew2780-front_bz13h4.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>EW2780｜27 FHD 16:9 HDR IPS LED Monitor</p>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589838/Vertecdigi/tv/GW2780T_emobse.webp"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>GW2780｜ 27 1080p Eye-Care IPS Monitor</p>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589838/Vertecdigi/tv/EW3880R_ke5sxc.webp"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>EW3880R | 38” WQHD+ HDRi IPS Curved Ultrawide Monitor</p>
            </div>
          </div>
        </div>

        {/* Panasonic*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686117932/Vertecdigi/Panasonic_qdkxqg.png"
            alt=""
          />
        </div>

        {/* Panasonic */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589815/Vertecdigi/tv/Panasonic_LX_avqg1z.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>
                Panasonic LX 108 cm (43 inch) 4K Ultra HD LED Android TV with
                Google Assistant
              </p>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589815/Vertecdigi/tv/Panasonic_LX_avqg1z.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>
                Panasonic 80 cm (32 inch) HD Ready LED Smart Android TV with
                Voice Assiatant
              </p>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589815/Vertecdigi/tv/Panasonic_LX_avqg1z.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>
                Panasonic Viera 105 cm (42 inch) Full HD LED Smart Android TV
                with Google Assistant
              </p>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686589815/Vertecdigi/tv/Panasonic_LX_avqg1z.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>
                Panasonic LX 189 cm (75 inch) 4K Ultra HD LED Android TV with
                Google Assistant
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default accessories;
