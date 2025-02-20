import TopBanner from "./TopBanner";
import TopFilter from "./TopFilter";
import TopHeader from "./TopHeader";
import TopNav from "./TopNav";
import Timer from "./Timer";

const Layout = () => {
    return (
        <>
            <TopHeader />
            <TopNav />
            <div className="filter_banner">
                <TopFilter />
                <TopBanner />
            </div>
            <div className="Today">
                <Timer date="2025-03-25T17:00:00" />
            </div>
        </>
    );
};
export default Layout;
