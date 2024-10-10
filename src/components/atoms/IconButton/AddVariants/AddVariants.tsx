import React from 'react';
import addVariants from "../../../../assets/Plus.png";

const AddVariants = () => {
    return (
        <div>
            <button
                className="bg-none p-0.5 w-14 h-7">
                <img className='w-5 h-5' src={addVariants} alt="add icon"/>
            </button>
        </div>
    );
};

export default AddVariants;