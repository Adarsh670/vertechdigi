/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../../styles/accessories.module.css";

const accessories = () => {
  return (
    <>
    <Head>
      <title>VertechDigiCom - Accessories & Peripherals</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.accessoriesContainer}>
      <div className={styles.accessorBanner}>
        <h1>Accessories & Peripherals</h1>
      </div>

      {/* company logo  */}
      <div className={styles["logos"] + " " + styles["acclogos"]}>
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686119633/Vertecdigi/SanDisk_ppkzt9.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685891362/Vertecdigi/kingston_mrg2qo.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686119922/Vertecdigi/hp_gdm3n3.png"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686119781/Vertecdigi/zevronics_ywma2x.png"
          alt=""
        />
      </div>
      {/* Memory card */}
      <div className={styles["company"] + " " + styles["sandisk"]}>
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685891353/Vertecdigi/sandisk_jop43e.png"
          alt=""
        />
      </div>
      <div className={styles.productsDiv}>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685872494/Vertecdigi/SanDisk_Extreme_PRO_Portable_SSD_V2_ksqdit.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>SanDisk Extreme Portable SSD V2</p>
            <span>Capacity: 500GB-4TB</span>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685872494/Vertecdigi/SanDisk_Extreme_microSDXC_UHS-I_CARD_mlwrfz.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>SanDisk Extreme® microSDXC™ UHS-I CARD</p>
            <span>Capacity: 32GB-1TB</span>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685872494/Vertecdigi/SanDisk_Ultra_3D_SSD_wtskvt.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>SanDisk Ultra 3D SSD</p>
            <span>Capacity: 250GB-4TB</span>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685872493/Vertecdigi/SanDisk_Extreme_Pro_CFexpress_Card_Type_B_kpxxqb.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>SanDisk Extreme Pro CFexpress® Card Type B</p>
            <span>Capacity: 64GB-512TB</span>
          </div>
        </div>
      </div>
      {/* ssd */}
      <div className={styles["company"] + " " + styles["kingston"]}>
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685891362/Vertecdigi/kingston_mrg2qo.png"
          alt=""
        />
      </div>
      <div className={styles.productsDiv}>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685880176/Vertecdigi/KC3000_PCIe_4.0_NVMe_M.2_SSD_v95c4i.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>KC3000 PCIe 4.0 NVMe M.2 SSD</p>
            <ul>
              <li>PCIe 4.0 NVMe</li>
              <li>M.2 2280 form factor</li>
              <li>512GB, 1024GB, 2048GB, 4096GB</li>
              <li>Up to 7,000MB/s read, 7,000MB/s write</li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685880176/Vertecdigi/Kingston_FURY_Renegade_PCIe_4.0_NVMe_M.2_SSD_jqgnq2.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>SanDisk Extreme® microSDXC™ UHS-I CARD</p>
            <ul>
              <li>Ideal for gamers and PC enthusiasts</li>
              <li>PCIe 4.0 NVMe M.2 2280</li>
              <li>500GB, 1TB, 2TB, 4TB</li>
              <li>Up to 7,300MB/s read, 7,000MB/s write</li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685880429/Vertecdigi/NV2_PCIe_4.0_NVMe_SSD_x2xm6w.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>NV2 PCIe 4.0 NVMe SSD</p>
            <ul>
              <li>Ideal for laptops & small-form-factor PCs</li>
              <li>PCIe 4.0 M.2 2280 NVMe form factor</li>
              <li>250GB, 500GB, 1TB, 2TB, 4TB</li>
              <li>Up to 3,500MB/s read, 2,800MB/s write</li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685872493/Vertecdigi/SanDisk_Extreme_Pro_CFexpress_Card_Type_B_kpxxqb.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>A400 SATA SSD</p>
            <ul>
              <li>2.5</li>
              <li>120GB, 240GB, 480GB, 960GB</li>
              <li>Up to 500MB/s read, 450MB/s write</li>
            </ul>
          </div>
        </div>
      </div>

      {/* mouse */}
      {/* {styles["banner_text"]+" "+styles["bannertextcolor"]} */}
      <div className={styles["company"] + " " + styles["hplogo"]}>
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685891066/Vertecdigi/hp_kp8w0e.png"
          alt=""
        />
      </div>
      <div className={styles.productsDiv}>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685881511/Vertecdigi/HP_Z3700_veiqk6.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>HP Z3700 Silver Wireless Mouse</p>
            <span>
              Designed with flair | Wireless convenience | Battery life that
              lasts{" "}
            </span>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685881511/Vertecdigi/HyperX_Pulsefire_Core_cjncwq.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>HyperX Pulsefire Core - Gaming Mouse (Black)</p>
            <span>
              Pixart 3327 optical sensor | Supports native DPI | settings up to
              6200 | Seven programmable buttons | Customizable RGB lighting
            </span>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685881511/Vertecdigi/HP_Dual_Mode_Mouse_qfajxt.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>HP Dual Mode Mouse</p>
            <span>
              Dual Mode Flexibility |Dependable power | Toggle with ease |
              Customizable speed
            </span>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685881511/Vertecdigi/HP_G200_Backlit_USB_djvgy3.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>
              HP G200 Backlit USB Wired Gaming Mouse, Customizable Buttons, upto
              4000 DPI
            </p>
            <span>Control your game | Optimum performance | Compatibility</span>
          </div>
        </div>
      </div>
      {/* keyboard */}
      <div className={styles.productsDiv}>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685886224/Vertecdigi/HP_230_Wireless_i4jhcd.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>HP 230 Wireless Mouse and Keyboard Combo</p>
            <span>
              Stylish design with comfort in mind | Comfort meets durability
              |Free yourself from the wires
            </span>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685886225/Vertecdigi/HP_CS10_Wireless_jrhtvx.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>HP CS10 Wireless Keyboard Mouse Combo</p>
            <span>
              Quiet is just your type | Keystroke of genius | Click real quick
            </span>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685886224/Vertecdigi/HP_150_USB_Wired_tpf5ui.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>
              HP 150 USB Wired Chiclet Keyboard & Mouse Combo for Desktop &
              Laptop
            </p>
            <span>
              Quiet is just your type | Keystroke of genius | Click real quick
            </span>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685886225/Vertecdigi/HyperX_Alloy_Core_RGB_nei7fd.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>HyperX Alloy Core RGB - Gaming Keyboard (US Layout)</p>
            <span>
              Signature light bar with smooth, stylish RGB effects | 5 Zones
              multi-color customization option
            </span>
          </div>
        </div>
      </div>

      {/* Zebronics Motherboard */}
      <div className={styles.company}>
        <img
          src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685890782/Vertecdigi/zebronics_jzgtkk.png"
          alt=""
        />
      </div>
      <div className={styles.productsDiv}>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685886926/Vertecdigi/ZEB-H310-NVMe_s7qctb.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>ZEB-H310-NVMe - LGA 1151 SOCKET</p>
            <ul>
              <li>
                <strong> Supported CPU </strong> : Intel
                i3/i5/i7/Celeron/Pentium 6th,7th,8th & 9th generation series
                processor in LGA 1151
              </li>
              <li>
                <strong> Chipset </strong> : Intel H310 Chipset
              </li>
              <li>
                <strong> Memory Supported </strong> : Memory up to 32GB
              </li>
              <li>
                <strong> BIOS </strong> : AMI BIOS
              </li>
              <li>
                <strong> I/O Interface </strong> : 1 x HDMI port, 1 x VGA Port,
                2 x USB 2.0 Port,2 x USB 3.0 Port, 1 x RJ45 Port
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685886926/Vertecdigi/ZEB-Z310M2_rtoyc5.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>ZEB-Z310M2 - LGA 1151 SOCKET</p>
            <ul>
              <li>
                <strong> Supported CPU</strong> :Intel i3/i5/i7/Celeron/Pentium
                6th,7th,8th & 9th generation series processor in LGA 1151
              </li>
              <li>
                <strong> Chipset</strong> : Intel H110
              </li>
              <li>
                <strong> Memory Supported</strong> : Memory up to 32GB
              </li>
              <li>
                <strong> BIOS</strong> : AMI BIOS
              </li>
              <li>
                <strong> I/O Interface</strong> : 1 x HDMI port, 1 x VGA Port, 2
                x USB 2.0 Port, 2 x USB 3.0 Port, 1 x RJ45 Port
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685886926/Vertecdigi/ZEB-H81M2_emckl8.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>ZEB-H81M2 - LGA 1150 SOCKET</p>
            <ul>
              <li>
                <strong> Supported CPU</strong> :Socket 1150 / Intel Pentium /
                Celeron / i3 / i5 / i7
              </li>
              <li>
                <strong> Chipset</strong> : Intel H81 Chipset
              </li>
              <li>
                <strong> Memory Supported</strong> : Memory up to 16GB
              </li>
              <li>
                <strong> BIOS</strong> : AMI BIOS
              </li>
              <li>
                <strong> I/O Interface</strong> : 1 x HDMI, 1 x VGA, 4 x USB2.0,
                2 x USB3.0, 1 x Rj45, 1x 3-in-1 Audio Jacks
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685886926/Vertecdigi/ZEB-B75M2_zmuy5h.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>ZEB-B75M2 - LGA 1155 Socket</p>
            <ul>
              <li>
                <strong> Supported CPU</strong> :Socket 1155 / Intel Pentium /
                Celeron / i3 / i5 / i7 (2nd & 3rd Generation) Series Processors
              </li>
              <li>
                <strong> Chipset</strong> : Intel B75 Chipset
              </li>
              <li>
                <strong> Memory Supported</strong> : Memory up to 16GB
              </li>
              <li>
                <strong> BIOS</strong> : AMI BIOS
              </li>
              <li>
                <strong> I/O Interface</strong> : 1 x HDMI port, 1 x VGA Port, 4
                x USB 2.0 Port, 2 x USB 3.0 Port
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* zebronics ram */}
      <div className={styles.productsDiv}>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685890369/Vertecdigi/ZEB-DM24G4D4_pnnk44.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>ZEB-DM24G4D4</p>
            <ul>
              <li>
                <strong> Memory Size </strong> : 4GB
              </li>
              <li>
                <strong> Memory Technology </strong> : DDR4
              </li>
              <li>
                <strong> Memory Type </strong> : DRAM
              </li>
              <li>
                <strong> Memory Clock Speed </strong> : 2400 MHz
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685890369/Vertecdigi/ZEB-DM26G16D4_n6l8p1.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>ZEB-DM26G16D4</p>
            <ul>
              <li>
                <strong> Memory Size </strong> : 16GB
              </li>
              <li>
                <strong> Memory Technology </strong> : DDR4
              </li>
              <li>
                <strong> Memory Type </strong> : DRAM
              </li>
              <li>
                <strong> Memory Clock Speed </strong> : 2666 MHz
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685890369/Vertecdigi/ZEB-DM16G8D3_ulzspu.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>ZEB-DM26G16D4</p>
            <ul>
              <li>
                <strong> Memory Size </strong> : 8GB
              </li>
              <li>
                <strong> Memory Technology </strong> : DDR3
              </li>
              <li>
                <strong> Memory Type </strong> : DRAM
              </li>
              <li>
                <strong> Memory Clock Speed </strong> : 1600 MHz
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.productCard}>
          <div className={styles.productImg}>
            <img
              src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1685890369/Vertecdigi/ZEB-DM26G8D4_opogku.webp"
              alt=""
            />
          </div>
          <div className="productdesc">
            <p>ZEB-DM26G16D4</p>
            <ul>
              <li>
                <strong> Memory Size </strong> : 8GB
              </li>
              <li>
                <strong> Memory Technology </strong> : DDR4
              </li>
              <li>
                <strong> Memory Type </strong> : DRAM
              </li>
              <li>
                <strong> Memory Clock Speed </strong> : 2666 MHz
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default accessories;
