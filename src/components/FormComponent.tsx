import React, { FormEvent, useRef } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	name: z
		.string()
		.nonempty({ message: "The Name field is required" })
		.min(3, { message: "The Name must contain at least 3 letters" }),
	age: z
		.number({ invalid_type_error: "age field is required" })
		.min(15, { message: "You should be more than 14 years old" }),
});

type FormData = z.infer<typeof schema>;

/* interface FormData {
	name: string;
	age: number;
} */

const FormComponent = () => {
	/* const nameRef = useRef<HTMLInputElement>(null);
	const ageRef = useRef<HTMLInputElement>(null); */

	/* const handleEvent = (event: FormEvent) => {
		event.preventDefault();
		const person = { name: "", age: 0 };

		if (nameRef.current !== null) person.name = nameRef.current.value;
		if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
		console.log(person);
	};
 */

	//instead of useRef, it's easy to use react-hook-form

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormData>({ resolver: zodResolver(schema) });
	const onSubmit = (data: FieldValues) => console.log(data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mb-3">
				<label htmlFor="name" className="form-lebel">
					Name
				</label>
				<input
					{...register("name")}
					id="name"
					type="text"
					className="form-control"
				/>
				{errors.name && <p className="text-danger">{errors.name.message}</p>}
			</div>
			<div className="mb-3">
				<label htmlFor="age" className="form-lebel">
					Age
				</label>
				<input
					{...register("age", { valueAsNumber: true })}
					id="age"
					type="number"
					className="form-control"
				/>
				{errors.age && <p className="text-danger">{errors.age.message}</p>}
			</div>
		</form>
	);
};

export default FormComponent;
