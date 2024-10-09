import React from 'react';
import AddPollsButton from "../../atoms/IconButton/AddPollsButton/AddPollsButton";


const AddModuleCard = () => {
    return (
        <button className='bg-gray-300 w-72 pl-5 rounded-2xl items-center justify-center'>
            <AddPollsButton/>
        </button>
    );
};

export default AddModuleCard;