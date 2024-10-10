import React from 'react';

type PrognozText = {
    title: string;
    text: string;
}

const PrognozCard = ({title, text}:PrognozText) => {
    return (
        <div className='bg-gray-100 w-72 h-60 rounded-2xl p-5'>
            {title}
            {text}
        </div>
    );
};

export default PrognozCard;