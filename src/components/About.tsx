import BlackButtons from "./BlackButtons";
import { FaTruck, FaSackDollar } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { IoShieldCheckmark } from "react-icons/io5";
import { CiShop, CiDollar, CiBag1 } from "react-icons/ci";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router";
import styles from "../css/About.module.css";
const About = () => {
    return (
        <div>
            <div className={styles.info}>
                <div>
                    {" "}
                    <h1>Our Story</h1>
                    <p>
                        Launced in 2015, Exclusive is South Asia’s premier
                        online shopping makterplace with an active presense in
                        Bangladesh. Supported by wide range of tailored
                        marketing, data and service solutions, Exclusive has
                        10,500 sallers and 300 brands and serves 3 millioons
                        customers across the region.{" "}
                    </p>
                    <p>
                        Exclusive has more than 1 Million products to offer,
                        growing at a very fast. Exclusive offers a diverse
                        assotment in categories ranging from consumer.
                    </p>
                </div>
                <div>
                    <img src="/src/assets/images/sideImage.png" alt="" />
                </div>
            </div>

            <div className={styles.icons}>
                <div className={styles.container2}>
                    <div className={styles.div}>
                        <BlackButtons
                            icon={<CiShop />}
                            title={"10.5K"}
                            text={"Sellers active our site"}
                        />
                    </div>
                    <div className={styles.div}>
                        <BlackButtons
                            icon={<CiDollar />}
                            title={"33K"}
                            text={"Monthly Prouduct sale "}
                        />
                    </div>
                    <div className={styles.div}>
                        <BlackButtons
                            icon={<CiBag1 />}
                            title={"45.5K"}
                            text={"Customer active in our site"}
                        />
                    </div>
                    <div className={styles.div}>
                        <BlackButtons
                            icon={<FaSackDollar />}
                            title={"25K"}
                            text={"Anual gross sale in our site"}
                        />
                    </div>
                </div>
            </div>

            <div className={styles.pictures}>
                <div className={styles.card}>
                    <div className={styles.imgcontainer}>
                        <img src="../src/assets/images/jorne.jpg" alt="" />
                    </div>
                    <h4>Tom Cruise</h4>
                    <p>Managing Director</p>
                    <div>
                        {" "}
                        <Link to="/">
                            <FaFacebookF />
                        </Link>
                        <Link to="/">
                            <FaTwitter />
                        </Link>
                        <Link to="/">
                            <FaInstagram />
                        </Link>
                        <Link to="/">
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.imgcontainer}>
                        <img src="../src/assets/images/david.jpg" alt="" />
                    </div>
                    <h4>Will Smith</h4>
                    <p>founder &amp; Chairman</p>
                    <div>
                        {" "}
                        <Link to="/">
                            <FaFacebookF />
                        </Link>
                        <Link to="/">
                            <FaTwitter />
                        </Link>
                        <Link to="/">
                            <FaInstagram />
                        </Link>
                        <Link to="/">
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.imgcontainer}>
                        <img src="../src/assets/images/kristof.jpg" alt="" />
                    </div>
                    <h4>Harrison Ford</h4>
                    <p>Product Designer</p>
                    <div>
                        {" "}
                        <Link to="/">
                            <FaFacebookF />
                        </Link>
                        <Link to="/">
                            <FaTwitter />
                        </Link>
                        <Link to="/">
                            <FaInstagram />
                        </Link>
                        <Link to="/">
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="blackButtons">
                <BlackButtons
                    icon={<FaTruck />}
                    title={"FREE AND FAST DELIVERY"}
                    text={"Free delivery for all orders over $140"}
                />
                <BlackButtons
                    icon={<BiSupport />}
                    title={"24/7 CUSTOMER SERVICE"}
                    text={"Friendly 24/7 customer support"}
                />
                <BlackButtons
                    icon={<IoShieldCheckmark />}
                    title={"MONEY BACK GUARANTEE"}
                    text={"We return money within 30 days"}
                />
            </div>
        </div>
    );
};
export default About;
