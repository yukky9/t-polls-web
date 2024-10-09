import React from 'react';
import StatisticsPollsButton from "../../../atoms/IconButton/StatisticsPollsButton/StatisticsPollsButton";

const ListViewPolls = () => {
    return (
        <ul className="list-none font-light text-gray-600">
            <div className='flex justify-between items-center gap-10'>
                <li>cdmslmcdlsd;,c;'s</li>
                <li className='mr-20'>12.02.32</li>
                <div className='flex gap-20'>
                    <li className='mr-16 ml-1'>900</li>
                    <li className='ml-16 mr-1'>93%</li>
                </div>
                <StatisticsPollsButton/>
            </div>
        </ul>
    );
};

export default ListViewPolls;