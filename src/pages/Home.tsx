import TopBanner from "../components/TopBanner";
import Timer from "../components/Timer";
import Grid1Row from "../components/Grid1Row";
import CategoriesTop from "../components/CategoriesTop";
import CategoriesBottom from "../components/CategoriesBottom";
import OurProductsTop from "../components/OurProductsTop";
import OurProductsBottom from "../components/OurProductsBottom";
import TopFilter from "../components/TopFilter";
import BlackButtons from "../components/BlackButtons";
import About from "../pages/About";

import { FaTruck } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { IoShieldCheckmark } from "react-icons/io5";
const Home = () => {
  return (
    <>
      <div className="filter_banner">
        <TopFilter />
        <TopBanner />
        <About />
      </div>
      <div className="today">
        <Timer date="2025-03-25T17:00:00" />
        <Grid1Row />
      </div>
      <hr />
      <div className="categories">
        <CategoriesTop />
        <CategoriesBottom />
      </div>
      <hr />
      <div className="ourProducts">
        <OurProductsTop />
        <OurProductsBottom />
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
    </>
  );
};
export default Home;
