import React from "react";
import deleteBt from "../../../../assets/Vector.png";
import ApiService from "../../../../api";

type props = {
	id: number;
};

const DeletePatternButton = (props: props) => {
	return (
		<div>
			<button
				onClick={() => {
					new ApiService().deleteTemplate(props.id).then(() => {
						window.location.href = "/pattern";
					});
				}}
			>
				<img className="w-4 h-4" alt="closeBt" src={deleteBt} />
			</button>
		</div>
	);
};

export default DeletePatternButton;
