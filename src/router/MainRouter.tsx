import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LightGeneralPage from "../../src/components/pages/GeneralPage/LightGeneralPage";
import PatternPage from "../components/pages/PatternPage/PatternPage";
import AddPollsButton from "../components/atoms/IconButton/AddPollsButton/AddPollsButton";
import CreateFormModal from "../components/pages/ModalPages/CreateFormModal/CreateFormModal";
import FirstCreatePollsFormPage from "../components/pages/FirstCreatePollsFormPage/FirstCreatePollsFormPage";
import VariantCreateFormModal from "../components/pages/ModalPages/VariantCreateFormModal/VariantCreateFormModal";
import FirstForm from "../components/organisms/ModalLayouts/StatisticsForm/FirstForm/FirstForm";
import SecondForm from "../components/organisms/ModalLayouts/StatisticsForm/SecondForm/SecondForm";
import GeneratePatternFormPage from "../components/pages/GeneratePatternFormPage/GeneratePatternFormPage";
import CreatePatternFormPage from "../components/pages/CreatePatternFormPage/CreatePatternFormPage";

const MainRouter = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LightGeneralPage/>}/>
                <Route path='/pattern' element={<PatternPage/>}/>
                <Route path='/diagramsFirst' element={<FirstForm/>}/>
                <Route path='/prognoz' element={<SecondForm/>}/>
                <Route path='/formatPolls' element={<AddPollsButton/>}/>
                <Route path='/createByPattern' element={<CreateFormModal/>}/>
                <Route path='/createPolls' element={<FirstCreatePollsFormPage/>}/>
                <Route path='/createPattern' element={<CreatePatternFormPage/>}/>
                <Route path='/generatePattern' element={<GeneratePatternFormPage/>}/>
                <Route path='/editCreateByPattern' element={<VariantCreateFormModal/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default MainRouter;