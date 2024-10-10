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
        <div>
            <div>
                <div className='font-sans text-xl'>
                    Название опроса
                </div>
                <QuestionInput/>
            </div>
            <div>
                <DopQuestion/>
                <SecondRadioButton/>
            </div>
            <div>
                <VariantsInput/>
                <AddVariants/>
            </div>
            <FirstCreateFormatButton children='Создать'/>
        </div>
    );
};

export default CreatePollsForm;