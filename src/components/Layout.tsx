import TopBanner from "./TopBanner";
import TopFilter from "./TopFilter";
import TopHeader from "./TopHeader";
import TopNav from "./TopNav";

const Layout = () => {
    return (
        <>
            <TopHeader />
            <TopNav />
            <div className="filter_banner">
                <TopFilter />
                <TopBanner />
            </div>
        </>
    );
};
export default Layout;
