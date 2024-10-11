import React from "react";

type props = {
	onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Description = (props: props) => {
	return (
		<div className="w-7/12">
			<label htmlFor="base-input"
				   className="block mb-2 text-xl font-medium text-gray-900 dark:text-black">Описание</label>
			<textarea id="message"
					  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					  placeholder="Напишите описание..."></textarea>
		</div>
	);
};

export default Description;
