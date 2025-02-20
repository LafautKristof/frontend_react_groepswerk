import TopBanner from "./TopBanner";
import TopFilter from "./TopFilter";
import TopHeader from "./TopHeader";
import TopNav from "./TopNav";
import Timer from "./Timer";
import Grid1Row from "./Grid1Row";
const Layout = () => {
    return (
        <>
            <TopHeader />
            <TopNav />
            <div className="filter_banner">
                <TopFilter />
                <TopBanner />
            </div>
            <div className="today">
                <Timer date="2025-03-25T17:00:00" />
                <Grid1Row />
            </div>
        </>
    );
};
export default Layout;
