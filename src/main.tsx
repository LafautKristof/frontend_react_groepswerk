import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./components/store/store.ts";
import { Helmet } from "react-helmet";
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Helmet>
                    <meta property="og:title" content="Groepswerk 2" />
                    <meta
                        property="og:description"
                        content="Groepswerk2: Webshop ComputerOnderdelen"
                    />
                    <meta
                        property="og:image"
                        content="../images/SideImage.svg"
                    />
                    <meta
                        property="og:url"
                        content="https://wasditeengroepswerkofzo.surge.sh/"
                    />
                    <meta property="og:type" content="webshop" />
                </Helmet>
                <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
