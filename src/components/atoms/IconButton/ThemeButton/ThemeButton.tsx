import React from 'react';
import themeIcon from '../../../../assets/themeIcon.png'

const ThemeButton = () => {
    return (
        <div>
            <button
                className="bg-none p-0.5 w-14 h-7 rounded-2xl border-2 border-black">
                <img  className='w-5 h-5 rounded-2xl border-2 border-black' src={themeIcon} alt="theme icon"/>
            </button>
        </div>
    );
};

export default ThemeButton;