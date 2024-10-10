import React from "react";
import ModuleCard from "../../molecules/Cards/ModuleCard";
import AddModuleCard from "../../molecules/Cards/AddModuleCard";

const CardView = () => {
	return (
		<div className="grid gap-10 grid-cols-3">
			<AddModuleCard />
			<ModuleCard />
			<ModuleCard />
			<ModuleCard />
			<ModuleCard />
			<ModuleCard />
			<ModuleCard />
			<ModuleCard />
			<ModuleCard />
		</div>
	);
};

export default CardView;
