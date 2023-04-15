import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface properties {
	onTouch: () => void;
}

const Like = ({ onTouch }: properties) => {
	const [fullHeart, setEmptyHeart] = useState(false);

	const toggle = () => {
		//reverse the action
		setEmptyHeart(!fullHeart);
		onTouch();
	};

	if (fullHeart)
		return (
			<AiFillHeart color="#800000" size={30} onClick={toggle}></AiFillHeart>
		);
	return <AiOutlineHeart size={30} onClick={toggle}></AiOutlineHeart>;
};

export default Like;
