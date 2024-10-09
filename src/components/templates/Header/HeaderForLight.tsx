import React from 'react';
import DarkTitleText from "../../atoms/TitleText/DarkTitleText";
import ThemeButton from "../../atoms/IconButton/ThemeButton/ThemeButton";

const HeaderForLight = () => {
    return (
        <div className='p-5 flex'>
            <div className='flex-auto w-9/12'>
                <DarkTitleText/>
            </div>
            <div className='flex-auto max-w-14'>
                <ThemeButton/>
            </div>
        </div>
    );
};

export default HeaderForLight;