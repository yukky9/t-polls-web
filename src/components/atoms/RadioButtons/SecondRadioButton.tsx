import React from "react";

type props = {
	onChange: (val: boolean) => void;
};

const SecondRadioButton = (props: props) => {
	return (
		<div className="inline-flex rounded-md shadow-sm" role="group">
			<button type="button"
					className="px-4 py-2 text-sm font-medium text-gray-900 bg-blue-1 border border-gray-200 rounded-s-lg hover:bg-blue-1 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-100 dark:border-gray-700 dark:text-black dark:hover:text-black dark:hover:bg-blue-1 dark:focus:ring-blue-500 dark:focus:text-black">
				Да
			</button>
			<button type="button"
					className="px-4 py-2 text-sm font-medium text-gray-900 bg-blue-1 border border-gray-200 rounded-e-lg hover:bg-blue-1 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-100 dark:border-gray-700 dark:text-black dark:hover:text-black dark:hover:bg-blue-1 dark:focus:ring-blue-500 dark:focus:text-black">
				Нет
			</button>
		</div>
	);
};

export default SecondRadioButton;
