import styles from "../css/About.module.css";

const About = () => {
  return (
    <main>
      <div className={styles.About}>
        <p className={styles.smallNav}>
          About <span>/</span> Home
        </p>
        <h1>Our story</h1>
        <p>
          Launced in 2015, Exclusive is South Asia’s premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.{" "}
          <span>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </span>
        </p>
      </div>
      <div>
        <img src="./src/assets/images/SideImage.svg" alt="" />
      </div>
    </main>
  );
};

export default About;
