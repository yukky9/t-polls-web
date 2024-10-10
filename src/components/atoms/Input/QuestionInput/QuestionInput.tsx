import React from 'react';

const QuestionInput = () => {
    return (
        <div className='w-96'>
            <input type="text" id="small-input"
                   className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
    );
};

export default QuestionInput;