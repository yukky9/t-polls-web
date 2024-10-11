import React, { useEffect, useState } from "react";
import MainTopPanel from "../../molecules/MainTopPanel/MainTopPanel";
import ListViewPolls from "../../molecules/ListView/ListViewPolls/ListViewPolls";

interface props {
	polls: Poll[];
}

const MainForm = (props: props) => {
	console.log(props);
	const [list, setList] = useState<any[]>([]);

	useEffect(() => {
		Promise.all(
			props.polls.map((val, i) => (
				<ListViewPolls
					pollId={val.id}
					theme={val.name}
					date={val.date}
					//@ts-ignore
					count={val.respondent_amount}
					percent={val.rating}
				/>
			))
		).then((v) => {
			setList(v.slice(0, 100));
		});
	}, [props]);

	return (
		<div>
			<MainTopPanel />

			{list}
		</div>
	);
};

export default MainForm;
