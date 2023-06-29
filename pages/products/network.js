/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../../styles/accessories.module.css";

const network = () => {
  return (
    <>
      <Head>
        <title>VertechDigiCom - Network Infrastructure</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.accessoriesContainer}>
        <div className={styles.printerBanner}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1687587503/Vertecdigi/Network_3_pt3ozg.png"
            alt=""
          />
        </div>

        {/* company logo  */}
        <div className={styles.logos}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686719415/Vertecdigi/network/dlink_ahvdjn.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686720956/Vertecdigi/network/HPE_mtfql8.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686721305/Vertecdigi/network/tplink_ilj116.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686722820/Vertecdigi/network/Cisco-logo_p9i79a.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686725245/Vertecdigi/network/hpe_e0fl3v.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686726253/Vertecdigi/network/juniper_loog_zw5okq.webp"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686727410/Vertecdigi/network/phloalro_xetsma.png"
            alt=""
          />
        </div>

        {/* D-Link*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686719415/Vertecdigi/network/dlink_ahvdjn.png"
            alt=""
          />
        </div>

        {/* D-Link */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686719240/Vertecdigi/network/R15_Front_jguimw.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Mesh capability with other Eagle Pro AI devices </p>
              <ul>
                <li>
                  Dual-band 2x2 Wi-Fi 6 delivers blazing fast connectivity with
                  increased range and reliability
                </li>
                <li>Up to 1201Mbps (5GHz) and 300Mbps (2.4GHz) speeds</li>
                <li>Mesh capability with other Eagle Pro AI devices </li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686719239/Vertecdigi/network/DIR-2640_ctswpx.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Smart AC2600 High Power Wi-Fi Gigabit Router DIR-2640</p>
              <ul>
                <li>
                  Say bye to buffer and lag - Speeds up to 800 Mbps (2.4 GHz) +
                  1733 Mbps (5 GHz)
                </li>
                <li>
                  Enhanced Profile Based Parental Controls - Comprehensive
                  parental controls
                </li>
                <li>
                  Easily handles everything you throw at it - with high-power
                  dual-core processor
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686719240/Vertecdigi/network/ppic_k2z0s9.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>DCS-F2712-L1C</p>
              <ul>
                <li>2MP full time color camera</li>
                <li>1/2.9 CMOS Sensor</li>
                <li>4 in 1 camera, AHD/TVI/CVI/CVBS mode</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686719239/Vertecdigi/network/DWR-920V_fyoles.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Wireless N300 4G LTE Router DWR-920V</p>
              <ul>
                <li>
                  Share 4G LTE mobile broadband with various wireless devices
                </li>
                <li>Enhanced reception with external 4G antenna</li>
                <li>Configurable LAN port to WAN and vice versa</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Aruba*/}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686720956/Vertecdigi/network/HPE_mtfql8.png"
            alt=""
          />
        </div>
        {/* Aruba */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686720862/Vertecdigi/network/AP655_nrqh6a.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>650 Series</p>
              <ul>
                <li>Our most powerful Wi-Fi 6E indoor access point</li>
                <li>Up to 7.8 Gbps combined peak datarate</li>
                <li>
                  High availability with configurable 5 Gbps dual Ethernet ports
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686720219/Vertecdigi/network/aruba_switches_sxusrh.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Aruba CX 6400 Switch Series</p>
              <ul>
                <li>2x Fan Trays (R0X32A)</li>
                <li>System Switching Capacity: up to 28 Tbps</li>
                <li>1x 6405 Chassis Switch (R0X24A)</li>
              </ul>
            </div>
          </div>

          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686720525/Vertecdigi/network/9004_oq0wac.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Aruba 9000 Series Gateways</p>
              <ul>
                <li>Maximum campus or remote Access Points 32</li>
                <li>Maximum clients Up to 2,048*</li>
                <li>Active Firewall sessions 64K (128K on SD-Branch 2.3+) 3</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686720787/Vertecdigi/network/edgeconnect-platform_tqmvnf.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Aruba EdgeConnect SD-WAN</p>
              <ul>
                <li>
                  The EdgeConnect SD-WAN platform secures and powers a
                  self-driving wide area network for cloud-first enterprises.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tp-Lnink */}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686721305/Vertecdigi/network/tplink_ilj116.png"
            alt=""
          />
        </div>
        {/* Tp-Lnink */}
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686721305/Vertecdigi/network/TD-W8961_jx9cbb.jpg"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>300Mbps Wireless N ADSL2+ Modem Router</p>
              <ul>
                <li>
                  All-in-One Device: ADSL2+ Modem, NAT Router, 4-Port Switch and
                  Wireless N Access Point
                </li>
                <li>
                  Wireless N speed up to 300Mbps makes it ideal for heavy
                  bandwidth consuming or interruption sensitive applications
                  like online gaming, Internet calls and even the HD video
                  streaming
                </li>
                <li>USB</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686721306/Vertecdigi/network/Archer-AXE75_rxbygf.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>AXE5400 Tri-Band Gigabit Wi-Fi 6E Router</p>
              <ul>
                <li>
                  AXE5400 Tri-Band Wi-Fi delivers Wi-Fi speeds up to 5400 Mbps.
                </li>
                <li>Armed with a 1.7 GHz Quad-Core CPU.</li>
                <li>Duty cycle: Up to 80,000 pages.</li>
                <li>Up to 10× faster transfer speeds than USB 2.0.</li>
              </ul>
            </div>
          </div>

          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686721305/Vertecdigi/network/overview_normal_fzytfg.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>TL-SG105 5-Port 10/100/1000Mbps Desktop Switch</p>
              <ul>
                <li>
                  5× 10/100/1000 Mbps Auto-Negotiation RJ45 ports supporting
                  Auto-MDI/MDIX
                </li>
                <li>Plug and play, no configuration needed</li>
                <li>Supports 802.1p/DSCP QoS and IGMP Snooping functions</li>
                <li>
                  Durable metal casing, desktop/wall-mounting options, and a
                  fanless design
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686721305/Vertecdigi/network/RE700X_fshxjz.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>RE700X AX3000 Mesh WiFi 6 Extender</p>
              <ul>
                <li>
                  Separates 5 GHz (2402 Mbps) and 2.4 GHz (574 Mbps) WiFi bands
                  for faster speeds and greater capacity with the latest
                  technology
                </li>
                <li>
                  Easily create a TP-Link OneMesh™ network for seamless whole
                  home WiFi coverage
                </li>
                <li>
                  Automatically choosing the fastest connection path to the
                  router
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cisco */}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686722820/Vertecdigi/network/Cisco-logo_p9i79a.png"
            alt=""
          />
        </div>
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686722030/Vertecdigi/network/2rack_zp9glh.webp"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Catalyst 8300-2N2S-6T</p>
              <span>
                Cisco SD-WAN-enabled, 5G/LTE-ready modular enterprise branch
                router with 1 x PIM, 2 x NIM, and 2 x SM slots
              </span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686722391/Vertecdigi/network/C9404R_xyz8ke.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Catalyst 9400 Series 4-slot</p>
              <ul>
                <li>90W UPOE+ on every access port</li>
                <li>96 ports and 480 Gbps per slot</li>
                <li>Secure segmentation with SD-Access</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686722524/Vertecdigi/network/CBW145AC_lq2eea.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>Cisco Business 145AC</p>
              <ul>
                <li>2x2 MU-MIMO with two spatial streams</li>
                <li>802.11ac Wave 2 standard</li>
                <li>Four GE ports with PoE support</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686722714/Vertecdigi/network/ISR-4461_ht2tpb.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>ISR 4461</p>
              <ul>
                <li>10-Gbps+ performance</li>
                <li>7-Gbps encrypted throughput</li>
                <li>10 GE SFP+, PoE GE/SFP, GE/SFP integrated WAN ports</li>
              </ul>
            </div>
          </div>
        </div>

        {/* HPT */}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686725245/Vertecdigi/network/hpe_e0fl3v.png"
            alt=""
          />
        </div>
        <div className={styles.productsDiv}>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686723252/Vertecdigi/network/s00012053_ffpvjw.webp"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>HPE StoreOnce Systems</p>
              <ul>
                <li>Deduplication : HPE StoreOnce deduplication</li>
                <li>Transfer rate : 105 TB/hr maximum, depending on model</li>
                <li>
                  Capacity : HPE StoreOnce Gen4: 4 TB starting, 2,240 TB RAW
                  maximum, depending on model
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686723593/Vertecdigi/network/s00009842_jkqvqh.webp"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>HPE Alletra 6000</p>
              <ul>
                <li>CapacityUp to 368 TB</li>
                <li>Storage controllerRedundant storage controllers</li>
                <li>
                  Drive descriptionNVME SSDs: 1.92 TB, 3.84 TB, 7.68 TB, 15.36
                  TB
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686723700/Vertecdigi/network/s00003505_kb5mxh.webp"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>HPE Alletra dHCI</p>
              <ul>
                <li>
                  HPE Alletra dHCI now supports latest versions of VMware ESXi
                  7.0 U3 and 8.0 software
                </li>
                <li>
                  HPE Alletra dHCI has simplified lifecycle management with
                  one-click, unified software upgrades for server firmware,
                  hypervisor and storage software.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686723928/Vertecdigi/network/s00004104_coybot.webp"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>HPE M-series SN2100M Switch</p>
              <ul>
                <li>Port speed : 100 Gbps Ethernet, maximum</li>
                <li>Ports : 16 ports</li>
                <li>Aggregate switch bandwidth : 3.2 Tbps</li>
                <li>Encryption capability : No</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Juniper */}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686726253/Vertecdigi/network/juniper_loog_zw5okq.webp"
            alt=""
          />
        </div>
        <div className={styles.productsDiv}>
        <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686725830/Vertecdigi/network/cq5dam_sd7mhw.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>ACX7024</p>
              <ul>
                <li>
                  Form factor : Compact 1 U, hardened platform with 24-cm depth
                </li>
                <li>Throughput : 360 Gbps</li>
                <li>Port density : 24 x 1/10/25GbE + 4 x 100GbE</li>
              </ul>
            </div>
          </div>
        
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686725830/Vertecdigi/network/srx5600_lxnkpu.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>SRX5400</p>
              <ul>
                <li>Firewall : performance (max) 960 Gbps</li>
                <li>IPS performance : 172 Gbps</li>
                <li>VPN performance : 188 Gbps</li>
                <li>Maximum : concurrent sessions 90 million</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686725829/Vertecdigi/network/jr200_ivvsew.avif"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>JRR200 Route Reflector Appliance</p>
              <ul>
                <li>64-Gbps Packet Forwarding</li>
                <li>20GbE WAN</li>
                <li>Support for 50 Million RIB Entries</li>
                <li>10 x 1/10GbE Ports</li>
              </ul>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686725831/Vertecdigi/network/cq2056_mejvae.png"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>CTP2056</p>
              <ul>
                <li>Up to 56 circuit emulation interfaces</li>
                <li>Serial, T1/E1, and 4WTO</li>
                <li>Analog interface options</li>
                <li>Redundant 250W power supply</li>
              </ul>
            </div>
          </div>
       
        </div>

        {/* Palo Alto */}
        <div className={styles["company"] + " " + styles["sandisk"]}>
          <img
            src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686727410/Vertecdigi/network/phloalro_xetsma.png"
            alt=""
          />
        </div>
        <div className={styles.productsDiv}>
        <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686727083/Vertecdigi/network/pa-7080_azg3pd.webp"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>PA-7000 SERIES</p>
             <span>The platinum standard: our fastest and most scalable firewall</span>
            </div>
          </div>
        
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686727083/Vertecdigi/network/pa-5450-series-thumbnail_rzzwlt.webp"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>PA-5450</p>
             <span>Scalable, high speed performance in an innovative compact design</span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686727083/Vertecdigi/network/pa-5400l_lo8b8g.webp"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>PA-5400 SERIES</p>
              <span>Defend high-speed data centers and campus locations</span>
            </div>
          </div>
          <div className={styles.productCard}>
            <div className={styles.productImg}>
              <img
                src="https://res.cloudinary.com/dqlx1vyne/image/upload/v1686727083/Vertecdigi/network/pa-400_jn6xrp.webp"
                alt=""
              />
            </div>
            <div className="productdesc">
              <p>PA-400 SERIES</p>
             <span>Big security. Small footprint.</span>
            </div>
          </div>
       
        </div>
      </div>
    </>
  );
};

export default network;
