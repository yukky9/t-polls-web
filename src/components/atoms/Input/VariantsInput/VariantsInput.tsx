import React from "react";
import deleteVariant from "../../../../assets/Vector.png";

type props = {
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	onClose?: React.MouseEventHandler<HTMLButtonElement>;
	value: string;
};

const VariantsInput = (props: props) => {
	return (
		<div className="w-96 flex gap-1 items-center justify-center">
			<input
				value={props.value}
				type="text"
				id="small-input"
				onChange={props.onChange}
				className="block w-full p-2 text-black border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
			/>

			<button onClick={props.onClose}>
				<img className="w-5 h-5" alt="delete" src={deleteVariant} />
			</button>
		</div>
	);
};

export default VariantsInput;
