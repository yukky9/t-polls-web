import React, { useEffect, useState } from "react";
import HeaderForLight from "../../templates/Header/HeaderForLight";
import Navigation from "../../templates/Navigation/Navigation";
import MainForm from "../../organisms/MainForm/MainForm";
import ApiService from "../../../api";

const LightGeneralPage = () => {
	const [polls, setPolls] = useState<Poll[]>([]);

	useEffect(() => {
		new ApiService().getPolls().then((val) => {
			setPolls(val);
		});
	}, []);
	return (
		<div>
			<div>
				<HeaderForLight />
				<div className="flex gap-16">
					<Navigation />
					<MainForm polls={polls} />
				</div>
			</div>
		</div>
	);
};

export default LightGeneralPage;
