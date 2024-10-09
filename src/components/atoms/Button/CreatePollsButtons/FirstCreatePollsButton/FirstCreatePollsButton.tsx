import React from 'react';

type CreatePollsProp = {
    children: string
}

const FirstCreatePollsButton = ({children}:CreatePollsProp) => {
    return (
        <button className='bg-light-blue rounded-2xl w-64 h-24'>
            {children}
        </button>
    );
};

export default FirstCreatePollsButton;