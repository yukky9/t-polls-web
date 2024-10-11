import React from 'react';
import DarkTitleText from "../../atoms/TitleText/DarkTitleText";

const HeaderForLight = () => {
    return (
        <div className='p-5 flex'>
            <div className='flex-auto w-9/12'>
                <DarkTitleText/>
            </div>
        </div>
    );
};

export default HeaderForLight;