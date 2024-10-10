import React from 'react';
import deleteBt from "../../../../assets/Vector.png";

const DeletePatternButton = () => {
    return (
        <div>
            <button>
                <img className='w-4 h-4' alt='closeBt' src={deleteBt}/>
            </button>
        </div>
    );
};

export default DeletePatternButton;