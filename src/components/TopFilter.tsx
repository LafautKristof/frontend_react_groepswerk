import styles from "../css/TopFilter.module.css";
import { Link } from "react-router";
const TopFilter = () => {
    return (
        <>
            <div className={styles.topFilter}>
                <ul>
                    <Link to="/allproduct/computerscreen">Computerscreen</Link>
                    <Link to="/allproduct/headphones">Headphone</Link>
                    <Link to="/allproduct/keyboard">Keayboard</Link>
                    <Link to="/allproduct/mouse">Mouse</Link>
                    <Link to="/allproduct/ram">RAM</Link>
                    <Link to="/allproduct/videocard">Videocard</Link>
                </ul>
            </div>
            <div className="seperator"></div>
        </>
    );
};
export default TopFilter;
