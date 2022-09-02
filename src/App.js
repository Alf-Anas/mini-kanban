import { BrowserRouter, Route, Routes } from "react-router-dom";
import Component from "./views/Component";
import Home from "./views/Home";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Component />} />
            </Routes>
        </BrowserRouter>
    );
}
