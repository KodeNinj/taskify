import React from "react";
import { TodoType } from "../Model";
import { FaCheck, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

type Props = {
	index: number;
	eachItem: TodoType;
	TodoList: Array<TodoType>;
	setTodoList: React.Dispatch<React.SetStateAction<TodoType[]>>;
};
const TodoListItems = ({ TodoList, setTodoList, index, eachItem }: Props) => {
	// handle task completion
	const handleCompleted = (index: number) => {
		setTodoList(
			TodoList.map((eachItem) =>
				eachItem.id === index
					? { ...eachItem, isDone: !eachItem.isDone }
					: eachItem
			)
		);
		console.log();
	};
	// handle deletion of task
	const handleDeletion = (index: number) => {
		setTodoList(TodoList.filter((e) => e.id !== index));
	};
	return (
		<div className="items">
			{eachItem.isDone === false ? (
				<p>{eachItem.task}</p>
			) : (
				<s>{eachItem.task}</s>
			)}
			<div className="icons">
				<span className="edit">
					<MdEdit />
				</span>
				<span
					className="completed"
					onClick={() => handleCompleted(eachItem.id)}>
					<FaCheck />
				</span>
				<span className="remove" onClick={() => handleDeletion(eachItem.id)}>
					<FaTrash />
				</span>
			</div>
		</div>
	);
};

export default TodoListItems;
