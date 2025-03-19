import styles from "../css/Contact.module.css";

const Contact = () => {
  return (
    <>
      <p>Home / Contact</p>
      <main className={styles.contact}>
        <div className={styles.contact_card}>
          <h2>Call Us</h2>
          <p>We are available 7 days a week</p>
          <p>Phone: 047727712</p>
          <h2>Write Us</h2>
          <p>Fill out the form and we will contact you in 24 hours</p>
          <p>Email: exclusive@gmail</p>
          <p>Address: 111Bjoy sarani,Dnakia, Dh1515,Bangladesh</p>
        </div>
        <div className={styles.contact_form}>
          <div className={styles.input}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="tel" placeholder="Your Phone" />
          </div>
          <textarea placeholder="Your Message"></textarea>
          <input className={styles.submit} type="submit" value="Send Message" />
        </div>
      </main>
    </>
  );
};

export default Contact;
