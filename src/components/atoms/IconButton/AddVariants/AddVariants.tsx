import React, {useState} from 'react';
import addVariants from "../../../../assets/Plus.png";
import VariantsInput from "../../Input/VariantsInput/VariantsInput";

const AddVariants = () => {
    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
        console.log(counter);
    };
    return (
        <div className=' grid grid-cols-1 gap-3'>
            {Array.from(Array(counter)).map((c, index) => {
                return <VariantsInput key={c}></VariantsInput>;
            })}
            <button onClick={handleClick}
                className="bg-gray-300 rounded-xl p-0.5 w-96 h-7 pl-44">
                <img className='w-5 h-5' src={addVariants} alt="add icon"/>
            </button>
        </div>
    );
};

export default AddVariants;