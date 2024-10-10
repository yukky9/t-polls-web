import React from 'react';
import CloseButton from "../../atoms/IconButton/CloseButton/CloseButton";
import GeneratePatternForm from "../../organisms/GeneratePatternForm/GeneratePatternForm";

const GeneratePatternFormPage = () => {
    return (
        <div className='p-10'>
            <a href='/pattern'><CloseButton/></a>
            <GeneratePatternForm/>
        </div>
    );
};

export default GeneratePatternFormPage;