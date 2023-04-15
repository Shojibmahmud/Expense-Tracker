interface Props {
	itemCount: number;
}
const NavBar = ({ itemCount }: Props) => {
	return <div>NavBar: {itemCount}</div>;
};

export default NavBar;
