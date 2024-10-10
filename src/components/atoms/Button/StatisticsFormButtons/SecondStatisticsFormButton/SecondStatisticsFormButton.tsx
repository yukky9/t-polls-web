import React from 'react';

type StatisticsPrognozProp = {
    children: string
}

const SecondStatisticsFormButton = ({children}:StatisticsPrognozProp) => {
    return (
        <button className='bg-gray-200 rounded-2xl w-32 h-8'>
            {children}
        </button>
    );
};

export default SecondStatisticsFormButton;