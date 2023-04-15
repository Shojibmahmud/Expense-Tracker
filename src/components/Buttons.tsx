import React from "react";

interface properties {
	children: string;
	color?: "primary" | "secondary" | "success" | "Danger";
	onClicked: () => void;
}

const Buttons = ({ children, color = "success", onClicked }: properties) => {
	return (
		<button className={"btn btn-" + color} onClick={onClicked}>
			{children}
		</button>
	);
};

export default Buttons;
