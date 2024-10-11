import React from "react";
import NavForm from "../../organisms/NavForm/NavForm";
import NavLine from "../../atoms/NavLine/NavLine";

const Navigation = () => {
	return (
		<div className="grid grid-rows-1 h-14">
			<div className="flex">
				<NavForm />
				<NavLine />
			</div>
		</div>
	);
};

export default Navigation;
