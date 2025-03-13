import styles from "../css/TopFilter.module.css";
import { Link } from "react-router";
const TopFilter = () => {
    return (
        <>
            <div className={styles.topFilter}>
                <ul>
                    <Link to="/...">Computerscreen</Link>
                    <Link to="/...">Headphone</Link>
                    <Link to="/...">Keayboard</Link>
                    <Link to="/...">Mouse</Link>
                    <Link to="/...">RAM</Link>
                    <Link to="/...">Videocard</Link>
                </ul>
            </div>
            <div className="seperator"></div>
        </>
    );
};
export default TopFilter;
