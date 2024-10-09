import React from 'react';

type CreateFormatProp = {
    children: string
}

const FirstCreateFormatButton = ({children}:CreateFormatProp) => {
    return (
        <button className='bg-light-blue rounded-2xl w-24 h-8'>
            {children}
        </button>
    );
};

export default FirstCreateFormatButton;