import React from 'react';
import ModuleCard from "../../molecules/Cards/ModuleCard";

const CardView = () => {
    return (
        <div className='grid gap-10 grid-cols-3'>
            <ModuleCard/>
            <ModuleCard/>
            <ModuleCard/>
            <ModuleCard/>
            <ModuleCard/>
            <ModuleCard/>
            <ModuleCard/>
            <ModuleCard/>
            <ModuleCard/>
        </div>
    );
};

export default CardView;