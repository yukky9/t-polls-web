import React from 'react';
import CloseButton from "../../../atoms/IconButton/CloseButton/CloseButton";
import PatternCardView from "../../../organisms/CardView/PatternCardView";
import FirstCreatePollsButton
    from "../../../atoms/Button/CreatePollsButtons/FirstCreatePollsButton/FirstCreatePollsButton";

const CreateFormModal = () => {
    return (
        <div className='p-10'>
            <div className='flex text-3xl font-sans font-bold gap-10'>
                <a href='/'><CloseButton/></a>
                Шаблоны
            </div>
            <a href='/editCreateByPattern'><PatternCardView/></a>
        </div>
    );
};

export default CreateFormModal;