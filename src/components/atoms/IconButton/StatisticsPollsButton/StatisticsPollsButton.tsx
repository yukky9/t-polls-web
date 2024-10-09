import React from 'react';
import statisticsIcon from '../../../../assets/statistics.png'

const StatisticsPollsButton = () => {
    return (
        <div>
            <button
                className="bg-none p-0.5 w-14 h-7">
                <img className='w-5 h-5' alt='statisticsIcon' src={statisticsIcon}/>
            </button>
        </div>
    );
};

export default StatisticsPollsButton;