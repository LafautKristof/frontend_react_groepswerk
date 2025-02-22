import TopHeader from "./TopHeader";
import TopNav from "./TopNav";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { type ReactNode } from "react";
type PropTypes = {
    children: ReactNode;
};

const Layout = ({ children }: PropTypes) => {
    return (
        <>
            <TopHeader />
            <TopNav />

            {/* <TopBanner />

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
            </div> */}
            <main>{children}</main>
            <Outlet />

            <Footer />
        </>
    );
};
export default Layout;
