import React from "react";

type Props = {
	typedValue: string;
	settypedValue: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: ()=> void
};
const InputField = ({ typedValue, settypedValue, handleAdd }: Props) => {
	// handle submit
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
        handleAdd()
		settypedValue("");
	};
	return (
		<form className="searchform" onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Enter your task here"
				value={typedValue}
				onChange={(e) => {
					settypedValue(e.target.value);
				}}
			/>
			<button type="submit">Go</button>
		</form>
	);
};

export default InputField;
