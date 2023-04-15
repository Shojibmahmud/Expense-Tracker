import { Children } from "react";

interface properties {
	children: string;
	onClose: () => void;
}

const Alert = ({ children, onClose }: properties) => {
	return (
		<div className="alert alert-primary alert-dismissible" onClick={onClose}>
			{children}
			<button
				type="button"
				className="btn-close"
				data-bs-dismiss="alert"
				aria-label="Close"></button>
		</div>
	);
};

export default Alert;
