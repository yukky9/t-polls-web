import React from "react";

type props = {
	onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const QuestionInput = (props: props) => {
	return (
		<div className="w-7/12">
			<input
				onChange={props.onChange}
				required={true}
				type="text"
				id="small-input"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>
		</div>
	);
};

export default QuestionInput;
