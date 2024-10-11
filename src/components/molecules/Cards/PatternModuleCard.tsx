import React from "react";

type props = {
	template: Template;
};

const PatternModuleCard = (props: props) => {
	return (
		<a href={"/editCreateByPattern?id=" + props.template.id}>
			<div className="bg-gray-300 w-72 h-60 rounded-2xl p-3 items-center">
				{props.template.name}
			</div>
		</a>
	);
};

export default PatternModuleCard;
