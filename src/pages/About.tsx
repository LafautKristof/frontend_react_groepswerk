import styles from "../css/About.module.css";

const About = () => {
  return (
    <main className={styles.aboutPage}>
      <p className={styles.smallNav}>
        About <span>/</span> Home
      </p>
      <div className={styles.about}>
        <div className={styles.text}>
          <h1>Our story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
            <span>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </span>
          </p>
        </div>
        <img src="./src/assets/images/SideImage.svg" alt="" />
      </div>
      <div className={styles.sqaures}>
        <article>
          <h1>45k</h1>
        </article>
        <article>
          <h1>45k</h1>
        </article>
        <article>
          <h1>45k</h1>
        </article>
        <article>
          <h1>45k</h1>
        </article>
      </div>
      <div className={styles.imggrid}>
        <article>
          <img src="./src/assets/images/dummyimg.png" alt="image" />
        </article>
        <article>
          <img src="./src/assets/images/dummyimg.png" alt="image" />
        </article>
        <article>
          <img src="./src/assets/images/dummyimg.png" alt="image" />
        </article>
      </div>
      <div className={styles.icongrid}>
        <img src="./src/assets/images/dummyicon.png" alt="icon" />
        <img src="./src/assets/images/dummyicon.png" alt="icon" />
        <img src="./src/assets/images/dummyicon.png" alt="icon" />
      </div>
    </main>
  );
};

export default About;
