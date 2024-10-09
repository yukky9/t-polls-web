import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LightGeneralPage from "../../src/components/pages/GeneralPage/LightGeneralPage";
import PatternPage from "../components/pages/PatternPage/PatternPage";

const MainRouter = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LightGeneralPage/>}/>
                <Route path='/pattern' element={<PatternPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter;