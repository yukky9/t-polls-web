import React, { useEffect } from "react";
import PatternModuleCard from "../../molecules/Cards/PatternModuleCard";
import ApiService from "../../../api";
import ModuleCard from "../../molecules/Cards/ModuleCard";

const PatternCardView = () => {
	const [templates, setTemplates] = React.useState<Template[]>([]);

	useEffect(() => {
		new ApiService().getTemplates().then((r) => {
			setTemplates(r);
		});
	});

	return (
		<div className="grid gap-5 grid-cols-5 p-10">
			{templates.map((val) => {
				return <PatternModuleCard template={val} />;
			})}
		</div>
	);
};

export default PatternCardView;
