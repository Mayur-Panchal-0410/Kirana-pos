import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Billingtable from "../pages/Billingtable";

function AppRoute(props) {
    return (
        <Router {...props}>
            <Routes>
                <Route exact path="/" element={<Billingtable />} />

            </Routes>
        </Router>
    );
}
export default AppRoute;