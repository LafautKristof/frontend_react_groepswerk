import {
    CiHeadphones,
    CiKeyboard,
    CiDesktopMouse1,
    CiHardDrive,
} from "react-icons/ci";
import { PiGraphicsCardThin } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import styles from "../css/CategoriesBottom.module.css";
import { Link } from "react-router-dom";
const CategoriesBottom = () => {
    return (
        <>
            <div className={styles.categories_bottom}>
                <Link to="/allproduct/headphone">
                    <div>
                        <CiHeadphones size={50} />
                        <p>Headphones</p>
                    </div>
                </Link>
                <Link to="/allproduct/keyboard">
                    <div>
                        <CiKeyboard size={50} />
                        <p>KeyBoards</p>
                    </div>
                </Link>
                <Link to="/allproduct/mouse">
                    <div>
                        <CiDesktopMouse1 size={50} />
                        <p>Mouse</p>
                    </div>
                </Link>
                <Link to="/allproduct/ram">
                    <div>
                        <CiHardDrive size={50} />
                        <p>RAM</p>
                    </div>
                </Link>
                <Link to="/allproduct/videocard">
                    <div>
                        <PiGraphicsCardThin size={50} />
                        <p>Graphics Card</p>
                    </div>
                </Link>
                <Link to="/allproduct/computerscreen">
                    <div>
                        <RiComputerLine size={50} />
                        <p>ComputerScreens</p>
                    </div>
                </Link>
            </div>
        </>
    );
};
export default CategoriesBottom;
