import React, {useState} from 'react';
import DeletePatternButton from "../../../atoms/IconButton/DeletePatternButton/DeletePatternButton";

type props = {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
    value?: string;
};

const AddCriteriyInput = (props:props) => {


    return (
        <div className="w-9/12">
                <div className='flex gap-5'>
                    <input value={props.value}
                           onChange={props.onChange}
                           required={true}
                           type="text"
                           id="large-input"
                           className="bg-gray-50 w-96 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />

                    <button onClick={props.onClose}>
                        <DeletePatternButton/>
                    </button>
                </div>
            </div>
            );
            };

            export default AddCriteriyInput;