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
                        When my three teammates dropped out of the course, I
                        suddenly found myself starring in a one-man show! I
                        became the researcher, coder, writer, presenter—and the
                        entire team. Welcome to the Solo Edition of our IT
                        project, where I handle it all with a smile!
                    </p>
                    <p>
                        In this solo adventure, I’ve taken on every role:
                        developer, project manager, quality assurance tester,
                        and even the occasional debugger. Every bug is just a
                        feature in disguise, and every tight deadline is an
                        opportunity to optimize my code. Who needs a full team
                        when you can be the Swiss Army knife of IT projects?
                    </p>
                    <p>
                        On this About page, I share my journey of turning
                        setbacks into innovative solutions—transforming
                        challenges into stepping stones for creativity, one line
                        of code at a time. Enjoy the ride as I embrace this
                        one-man mission with humor, determination, and plenty of
                        caffeine!
                    </p>
                </div>
                <div>
                    <img src="../images/sideImage.png" alt="" />
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
                        <img src="../images/jorne.jpg" alt="" />
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
                        <img src="../images/david.jpg" alt="" />
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
                        <img src="../images/kristof.jpg" alt="" />
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
