import {
    CiHeadphones,
    CiKeyboard,
    CiDesktopMouse1,
    CiHardDrive,
} from "react-icons/ci";
import { PiGraphicsCardThin } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import styles from "../css/CategoriesBottom.module.css";
const CategoriesBottom = () => {
    return (
        <div className={styles.categories_bottom}>
            <div>
                <CiHeadphones size={50} />
                <p>Headphones</p>
            </div>
            <div>
                <CiKeyboard size={50} />
                <p>KeyBoards</p>
            </div>
            <div>
                <CiDesktopMouse1 size={50} />
                <p>Mouse</p>
            </div>
            <div>
                <CiHardDrive size={50} />
                <p>RAM</p>
            </div>
            <div>
                <PiGraphicsCardThin size={50} />
                <p>Graphics Card</p>
            </div>
            <div>
                <RiComputerLine size={50} />
                <p>ComputerScreens</p>
            </div>
        </div>
    );
};
export default CategoriesBottom;
