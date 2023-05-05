import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import all_categories from "../Categories";
import { z } from "zod";

interface Props {
	onSubmit: (data: ExpenseFormData) => void;
}

const schema = z.object({
	description: z
		.string()
		.min(3, { message: "Must contain more than 2 characters" })
		.max(1000),
	amount: z
		.number({ invalid_type_error: "Amount is required" })
		.min(0.1)
		.max(100000),
	category: z.enum(all_categories, {
		errorMap: () => ({ message: "Category is required" }),
	}),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit }: Props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

	return (
		<form
			onSubmit={handleSubmit((form_data) => {
				onSubmit(form_data);
				reset();
			})}>
			<div className="mb-3">
				<label htmlFor="description" className="form-label">
					{" "}
					Description
				</label>
				<input
					{...register("description")}
					id="description"
					type="text"
					className="form-control"
				/>
				{errors.description && (
					<p className="text-danger">{errors.description.message}</p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="amount" className="form-label">
					Amount
				</label>
				<input
					{...register("amount", { valueAsNumber: true })}
					id="amount"
					type="number"
					className="form-control"
				/>
				{errors.amount && (
					<p className="text-danger"> {errors.amount.message} </p>
				)}
			</div>
			<div className="mb-3">
				<label htmlFor="category" className="form-label">
					Category
				</label>
				<select {...register("category")} id="category" className="form-select">
					<option value="">Click Here...</option>
					{all_categories.map((cate) => (
						<option key={cate} value={cate}>
							{cate}
						</option>
					))}
				</select>
				{errors.category && (
					<p className="text-danger"> {errors.category.message} </p>
				)}
			</div>

			<div className="mb-3">
				<button className="btn btn-primary">Insert</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
