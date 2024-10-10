import React from 'react';
import QuestionInput from "../../atoms/Input/QuestionInput/QuestionInput";
import DopQuestion from "../../atoms/Input/DopQuestion/DopQuestion";
import SecondRadioButton from "../../atoms/RadioButtons/SecondRadioButton";
import VariantsInput from "../../atoms/Input/VariantsInput/VariantsInput";
import AddVariants from "../../atoms/IconButton/AddVariants/AddVariants";
import FirstCreateFormatButton
    from "../../atoms/Button/CreateFormatButtons/FirstCreateFormatButton/FirstCreateFormatButton";

const CreatePollsForm = () => {
    return (
        <div className='p-10 grid grid-cols-1 gap-10'>
            <div className='grid grid-cols-1 gap-3'>
            <div className='flex gap-10'>
                <div className='font-sans text-xl items-center'>
                    Название опроса
                </div>
                <QuestionInput/>
            </div>
                <div className='grid grid-cols-1 gap-3'>
            <div className='grid gap-3'>
                <DopQuestion/>
                <SecondRadioButton/>
            </div>
            </div>
            <div className='grid grid-cols-1 gap-3'>
                <VariantsInput/>
                <AddVariants/>
            </div>
            </div>
            <FirstCreateFormatButton children='Создать'/>
        </div>
    );
};

export default CreatePollsForm;