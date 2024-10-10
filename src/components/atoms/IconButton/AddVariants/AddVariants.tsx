import React from 'react';
import addVariants from "../../../../assets/Plus.png";

const AddVariants = () => {
    return (
        <div>
            <button
                className="bg-gray-300 rounded-xl p-0.5 w-96 h-7 pl-44">
                <img className='w-5 h-5' src={addVariants} alt="add icon"/>
            </button>
        </div>
    );
};

export default AddVariants;