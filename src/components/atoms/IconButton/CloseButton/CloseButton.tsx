import React from 'react';
import closeBt from "../../../../assets/closeOutlined.png";

const CloseButton = () => {
    return (
        <div>
            <button>
                <img className='w-5 h-5' alt='closeBt' src={closeBt}/>
            </button>
        </div>
    );
};

export default CloseButton;