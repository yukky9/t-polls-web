import React from 'react';

const SecondRadioButton = () => {
    return (
        <div className='flex items-center justify-center gap-10'>
            <div className="flex gap-10">
                <div className="inline-flex items-center">
                    <label className="relative flex items-center cursor-pointer">
                        <input name="framework" type="radio"
                               className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-black checked:border-black transition-all"
                               id="html"/>
                        <span
                            className="absolute bg-blue-1 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      </span>
                    </label>
                    <label className="ml-2 text-xl text-black cursor-pointer">Да</label>
                </div>

                <div className="inline-flex items-center">
                    <label className="relative flex items-center cursor-pointer">
                        <input name="framework" type="radio"
                               className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-black checked:border-black transition-all"
                               id="react"/>
                        <span
                            className="absolute bg-blue-1 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      </span>
                    </label>
                    <label className="ml-2 text-xl text-black cursor-pointer">Нет</label>
                </div>
            </div>
        </div>
    );
};

export default SecondRadioButton;