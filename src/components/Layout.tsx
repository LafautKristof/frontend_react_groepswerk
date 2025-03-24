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
            <main>{children}</main>
            <Outlet />

            <Footer />
        </>
    );
};
export default Layout;
