import React from "react";
import DeletePatternButton from "../../atoms/IconButton/DeletePatternButton/DeletePatternButton";

type props = {
	template: Template;
};

const ModuleCard = (props: props) => (
	<div className="bg-gray-300 w-72 h-60 rounded-2xl p-3">
		<DeletePatternButton id={props.template.id} />
		{props.template.name}
	</div>
);

export default ModuleCard;
