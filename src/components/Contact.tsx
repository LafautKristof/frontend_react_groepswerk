import styles from "../css/contact.module.css";
import { BsTelephone, BsEnvelope } from "react-icons/bs";
const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.header}>
                    <div className={styles.icon}>
                        <BsTelephone />
                    </div>
                    <h2 className={styles.title}> Call to Us</h2>
                </div>
                <div className={styles.text}>
                    <p>We are available 24/7, 7 days a week</p>
                    <p>Phone: +0000-00000-0000</p>
                </div>
                <hr />
                <div className={styles.header}>
                    <div className={styles.icon}>
                        <BsEnvelope />
                    </div>
                    <h2 className={styles.title}>Write to Us</h2>
                </div>
                <div className={styles.text}>
                    <p>
                        Fill out our form and we will contact you within 24
                        hours.
                    </p>
                    <p>Email: customer@exclusive.com</p>
                    <p>Email: support@exclusive.com</p>
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.first_section}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="text" placeholder="Your Email" required />
                    <input type="text" placeholder="Your Phone" required />
                </div>
                <div className={styles.second_section}>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Your Message"
                        required
                    ></textarea>
                </div>
                <div className={styles.third_section}>
                    <button>Send Message</button>
                </div>
            </div>
        </div>
    );
};
export default Contact;
