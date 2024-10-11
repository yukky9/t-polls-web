import React, { useEffect } from "react";
import ModuleCard from "../../molecules/Cards/ModuleCard";
import AddModuleCard from "../../molecules/Cards/AddModuleCard";
import ApiService from "../../../api";

const CardView = () => {
	const [templates, setTemplates] = React.useState<Template[]>([]);

	useEffect(() => {
		new ApiService().getTemplates().then((r) => {
			setTemplates(r);
		});
	});

	return (
		<div className="grid gap-10 grid-cols-3">
			<AddModuleCard />
			{templates.map((val) => {
				return <ModuleCard template={val} />;
			})}
		</div>
	);
};

export default CardView;
