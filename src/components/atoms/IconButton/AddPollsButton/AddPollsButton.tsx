import React from 'react';
import addPollsIcon from '../../../../assets/Plus.png'

const AddPollsButton = () => {
    return (
        <div>
            <button
                className="bg-none p-0.5 w-14 h-7">
                <img className='w-5 h-5' src={addPollsIcon} alt="add icon"/>
            </button>
        </div>
    );
};

export default AddPollsButton;