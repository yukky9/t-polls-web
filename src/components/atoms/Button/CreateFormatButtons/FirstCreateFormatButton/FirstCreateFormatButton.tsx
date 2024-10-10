import React from "react";

type props = {
	children: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const FirstCreateFormatButton = (props: props) => {
	return (
		<button
			onClick={props.onClick}
			className="bg-light-blue rounded-2xl w-32 h-8"
		>
			{props.children}
		</button>
	);
};

export default FirstCreateFormatButton;
