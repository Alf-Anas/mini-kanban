import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </HashRouter>
    );
}
