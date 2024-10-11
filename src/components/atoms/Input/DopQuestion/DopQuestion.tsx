import React from "react";

type props = {
	onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const DopQuestion = (props: props) => {
	return (
		<div className="w-7/12">
			<label
				htmlFor="base-input"
				className="block mb-2 text-xl font-medium text-gray-900 dark:text-black"
			>
				Специальный вопрос
			</label>
			<input
				onChange={props.onChange}
				required={true}
				type="text"
				id="large-input"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
		</div>
	);
};

export default DopQuestion;
