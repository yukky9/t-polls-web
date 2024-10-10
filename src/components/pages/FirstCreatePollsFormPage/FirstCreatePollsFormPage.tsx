import React from 'react';
import CreatePollsForm from "../../organisms/CreatePollsForm/CreatePollsForm";
import CloseButton from "../../atoms/IconButton/CloseButton/CloseButton";


const FirstCreatePollsFormPage = () => {
    return (
        <div className='p-10'>
            <a href='/'><CloseButton/></a>
            <CreatePollsForm/>
        </div>
    );
};

export default FirstCreatePollsFormPage;