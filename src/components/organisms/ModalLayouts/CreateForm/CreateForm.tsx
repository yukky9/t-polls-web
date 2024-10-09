import React from 'react';
import FirstRadioButton from "../../../atoms/RadioButtons/FirstRadioButton/FirstRadioButton";
import FirstCreateFormatButton
    from "../../../atoms/Button/CreateFormatButtons/FirstCreateFormatButton/FirstCreateFormatButton";

const CreateForm = () => {
    return (
        <div className='grid grid-cols-1 gap-10'>
            <FirstRadioButton/>
            <div className='text-center'>
                <FirstCreateFormatButton children='Создать'/>
            </div>
        </div>
    );
};

export default CreateForm;