import TopBanner from "../components/TopBanner";
import Timer from "../components/Timer";
import Grid1Row from "../components/Grid1Row";
import CategoriesTop from "../components/CategoriesTop";
import CategoriesBottom from "../components/CategoriesBottom";
import OurProductsTop from "../components/OurProductsTop";
import OurProductsBottom from "../components/OurProductsBottom";
import TopFilter from "../components/TopFilter";

const Home = () => {
    return (
        <>
            <div className="filter_banner">
                <TopFilter />
                <TopBanner />
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
        </>
    );
};
export default Home;
