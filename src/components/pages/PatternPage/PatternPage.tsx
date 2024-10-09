import React from 'react';
import HeaderForLight from "../../templates/Header/HeaderForLight";
import Navigation from "../../templates/Navigation/Navigation";

const PatternPage = () => {
    return (
        <div className='grid grid-rows-2'>
            <HeaderForLight/>
            <Navigation/>
        </div>
    );
};

export default PatternPage;