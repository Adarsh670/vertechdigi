/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import styles from "../../styles/blogs.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const product = ({ data }) => {
  const fdata = data[0];
  return (
    <>
      <Head>
        <title>VertechDigiCom - {fdata.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className={styles.blogScreen}>
      <img src={fdata.img} className={styles.blogScreenImg} alt="" />

      <div className={styles.blogScreenDes}>
        <h1 className={styles.title}>{fdata.title}</h1>
        <p>{fdata.minidesc}</p>
        {/*  */}
        {fdata.automation ? (
          <div className={styles.titleHeading}>
            <p>{fdata?.automation}</p>
            <span>{fdata?.automationdesc}</span>
          </div>
        ) : (
          ""
        )}

        {/*  */}
        {fdata.access ? (
          <div className={styles.titleHeading}>
            <p>{fdata?.access}</p>
            <span>{fdata?.accessdesc}</span>
          </div>
        ) : (
          ""
        )}

        {/*  */}
        {fdata.engagement ? (
          <div className={styles.titleHeading}>
            <p>{fdata?.engagement}</p>
            <span>{fdata?.engagementdesc}</span>
          </div>
        ) : (
          ""
        )}

        {/*  */}
        {fdata.security ? (
          <div className={styles.titleHeading}>
            <p>{fdata?.security}</p>
            <span>{fdata?.securitydesc}</span>
          </div>
        ) : (
          ""
        )}

        {/*  */}
        {fdata.thepoweroftechnology ? (
          <div className={styles.titleHeading}>
            <p>{fdata?.thepoweroftechnology}</p>
            <span>{fdata?.thepoweroftechnologydesc}</span>
          </div>
        ) : (
          ""
        )}

        {/*  */}
        {fdata.leveraging ? (
          <div className={styles.titleHeading}>
            <p>{fdata?.leveraging}</p>
            <span>{fdata?.leveragindesc}</span>
          </div>
        ) : (
          ""
        )}

        {/*  */}
        {fdata.enhancingcustomer ? (
          <div className={styles.titleHeading}>
            <p>{fdata?.enhancingcustomer}</p>
            <span>{fdata?.echancingcustomerdesc}</span>
          </div>
        ) : (
          ""
        )}

        {/*  */}
        {fdata.thecloudadvantage ? (
          <div className={styles.titleHeading}>
            <p>{fdata?.thecloudadvantage}</p>
            <span>{fdata?.thecloudadvantagedesc}</span>
          </div>
        ) : (
          ""
        )}

        {/*  */}
        {fdata.securingyourgrowingbsiness ? (
          <div className={styles.titleHeading}>
            <p>{fdata?.securingyourgrowingbsiness}</p>
            <span>{fdata?.securingyourgrowingbsinessdesc}</span>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        {fdata.Conclusiondesc ? (
          <div className={styles.titleHeading}>
            <p>Conclusion</p>
            <span>{fdata?.Conclusiondesc}</span>
          </div>
        ) : (
          ""
        )}

        {/*  */}
        {fdata.identify ? (
          <div className={styles.titleHeading}>
            <p>Identify</p>
            <span>{fdata?.identify}</span>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        {fdata.cpuandgraphics ? (
          <div className={styles.titleHeading}>
            <p>CPU and Graphics</p>
            <span>{fdata?.cpuandgraphics}</span>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        {fdata.ramandstorage ? (
          <div className={styles.titleHeading}>
            <p>Ram and Storage</p>
            <span>{fdata?.ramandstorage}</span>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        {fdata.display ? (
          <div className={styles.titleHeading}>
            <p>Display</p>
            <span>{fdata?.display}</span>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        {fdata.battery ? (
          <div className={styles.titleHeading}>
            <p>Battery</p>
            <span>{fdata?.battery}</span>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        {fdata.brand ? (
          <div className={styles.titleHeading}>
            <p>Brand</p>
            <span>{fdata?.brand}</span>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        {fdata.reviews ? (
          <div className={styles.titleHeading}>
            <p>Reviews</p>
            <span>{fdata?.reviews}</span>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        {fdata.upgradability ? (
          <div className={styles.titleHeading}>
            <p>Upgradability</p>
            <span>{fdata?.upgradability}</span>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        {fdata.comparingprices ? (
          <div className={styles.titleHeading}>
            <p>Comparing Prices</p>
            <span>{fdata?.comparingprices}</span>
          </div>
        ) : (
          ""
        )}

        {/*  */}
        {fdata.Question1 ? (
          <div className={styles.titleHeading}>
            <p>Question: {fdata?.Question1}</p>
            <span><strong>Ans:</strong> {fdata?.ans1}</span>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        {fdata.Question2 ? (
          <div className={styles.titleHeading}>
            <p>Question: {fdata?.Question2}</p>
            <span><strong>Ans:</strong> {fdata?.ans2}</span>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        {fdata.Question3 ? (
          <div className={styles.titleHeading}>
            <p>Question: {fdata?.Question3}</p>
            <span><strong>Ans:</strong> {fdata?.ans3}</span>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        {fdata.Question4 ? (
          <div className={styles.titleHeading}>
            <p>Question: {fdata?.Question4}</p>
            <span><strong>Ans:</strong> {fdata?.ans4}</span>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        {fdata.Question5 ? (
          <div className={styles.titleHeading}>
            <p>Question: {fdata?.Question5}</p>
            <span><strong>Ans:</strong> {fdata?.ans5}</span>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        {fdata.Question6 ? (
          <div className={styles.titleHeading}>
            <p>Question: {fdata?.Question6}</p>
            <span><strong>Ans:</strong> {fdata?.ans6}</span>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        {fdata.Question7 ? (
          <div className={styles.titleHeading}>
            <p>Question: {fdata?.Question7}</p>
            <span><strong>Ans:</strong> {fdata?.ans7}</span>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        {fdata.Question8 ? (
          <div className={styles.titleHeading}>
            <p>Question: {fdata?.Question8}</p>
            <span><strong>Ans:</strong> {fdata?.ans8}</span>
          </div>
        ) : (
          ""
        )}
        {/*  */}
        {fdata.Question9 ? (
          <div className={styles.titleHeading}>
            <p>Question: {fdata?.Question9}</p>
            <span><strong>Ans:</strong> {fdata?.ans9}</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`https://laptop-rd4s.onrender.com/blogs`);
  const data = await res.json();
  const paths = data.map((curElem) => {
    return {
      params: { id: curElem.slug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://laptop-rd4s.onrender.com/blogs?slug=${id}`);

  const data = await res.json();
  return {
    props: { data },
  };
}
export default product;
