import TopBanner from "./TopBanner";

import TopHeader from "./TopHeader";
import TopNav from "./TopNav";
import Timer from "./Timer";
import Grid1Row from "./Grid1Row";
import Footer from "./Footer";
import CategoriesTop from "./CategoriesTop";
import CategoriesBottom from "./CategoriesBottom";
const Layout = () => {
    return (
        <>
            <TopHeader />
            <TopNav />

            <TopBanner />

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
            <Footer />
        </>
    );
};
export default Layout;
