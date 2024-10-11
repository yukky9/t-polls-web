import React from 'react';
import HeaderForLight from "../../templates/Header/HeaderForLight";
import Navigation from "../../templates/Navigation/Navigation";
import CardView from "../../organisms/CardView/CardView";

const PatternPage = () => {
    return (
        <div>
            <div className='grid grid-rows-none'>
                <HeaderForLight/>
                <div className='flex gap-16'>
                    <Navigation/>
                    <CardView/>
                </div>
            </div>
        </div>
    );
};

export default PatternPage;