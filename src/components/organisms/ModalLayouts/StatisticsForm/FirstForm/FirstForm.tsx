import React from 'react';
import FirstStatisticsFormButton
    from "../../../../atoms/Button/StatisticsFormButtons/FirstStatisticsFormButton/FirstStatisticsFormButton";
import CategoryDiagram from "../../../../molecules/Diagramms/CategoryDiagram/CategoryDiagram";


const FirstForm = () => {
    return (
        <div className='grid grid-cols-1 gap-5'>
            <CategoryDiagram/>
            <div className='text-center'>
                <FirstStatisticsFormButton children='Далее'/>
            </div>
        </div>
    );
};

export default FirstForm;