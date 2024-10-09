import React from 'react';
import addPattersIcon from '../../../assets/Plus.png'


const AddModuleCard = () => {
    return (
        <button className='bg-gray-300 w-72 pl-5 rounded-2xl'>
            <div className='pl-28'>
                <img className='w-5 h-5' alt='AddPattersIcon' src={addPattersIcon}/>
            </div>
        </button>
    );
};

export default AddModuleCard;