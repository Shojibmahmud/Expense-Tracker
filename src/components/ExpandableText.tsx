import { useState } from "react";

interface Props {
	children: string;
	maxChar?: number;
}
const ExpandableText = ({ children, maxChar = 100 }: Props) => {
	const [isExpended, setExpended] = useState(false);
	const text = isExpended ? children : children.substring(0, maxChar);
	if (children.length <= maxChar) return <p>{children}</p>;
	return (
		<p>
			{text}...{" "}
			<button onClick={() => setExpended(!isExpended)}>
				{isExpended ? "Less" : "More"}
			</button>
		</p>
	);
};

export default ExpandableText;
