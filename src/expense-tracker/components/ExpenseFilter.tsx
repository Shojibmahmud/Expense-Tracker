import all_categories from "../Categories";

interface Props {
	onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
	return (
		<div className="mb-3">
			<select
				className="form-select form-select-lg mb-3"
				aria-label=".form-select-lg example"
				onChange={(event) => onSelectCategory(event.target.value)}>
				<option value="">All Categories</option>
				{all_categories.map((cate) => (
					<option key={cate} value={cate}>
						{cate}
					</option>
				))}
			</select>
		</div>
	);
};

export default ExpenseFilter;
