import React from 'react';
import CloseButton from "../../atoms/IconButton/CloseButton/CloseButton";
import CreatePatternForm from "../../organisms/GeneratePatternForm/CreatePatternForm";

const CreatePatternFormPage = () => {
    return (
        <div className='p-10'>
            <a href='/pattern'><CloseButton/></a>
            <CreatePatternForm/>
        </div>
    );
};

export default CreatePatternFormPage;