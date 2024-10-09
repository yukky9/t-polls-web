import React from 'react';

type PanelProps = {
    children: string
}

const MainText = ({children}:PanelProps) => {
    return (
        <div className='font-sans text-xl text-black'>
            {children}
        </div>
    );
};

export default MainText;