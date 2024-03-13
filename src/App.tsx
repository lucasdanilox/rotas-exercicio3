import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Promotion from "./routes/Home/Promotion";
import Enrollment from "./routes/Home/ Enrollment ";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";


export default function App() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} >
                    <Route index element={<HomeBody />} />
                    <Route path="promotion" element={<Promotion />} />
                    <Route path="enrollment" element={<Enrollment />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </BrowserRouter >
    );
}


