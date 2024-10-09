import React from 'react';

type StatisticsProp = {
    children: string
}

const FirstStatisticsFormButton = ({children}:StatisticsProp) => {
    return (
        <button className='bg-light-blue rounded-2xl w-32 h-8'>
            {children}
        </button>
    );
};

export default FirstStatisticsFormButton;