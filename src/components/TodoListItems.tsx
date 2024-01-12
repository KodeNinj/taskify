import React, { useState } from "react";
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
	// states to handle the edit mode
	const [edit, setedit] = useState<boolean>(false);
	const [editTodo, seteditTodo] = useState<string>(eachItem.task);
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
	const handleEdit = (e: React.FormEvent, id: number) => {
		e.preventDefault();
		setTodoList(
			TodoList.map((eachitem) =>
				eachitem.id === id ? { ...eachitem, task: editTodo } : eachitem
			)
		);
		setedit(!edit);
	};
	return (
		<form className="items" onSubmit={(e) => handleEdit(e, eachItem.id)}>
			{edit ? (
				<input
					type="text"
					className="editmode"
					autoFocus
					value={editTodo}
					onChange={(e) => {
						seteditTodo(e.target.value);
					}}
				/>
			) : eachItem.isDone === false ? (
				<p>{eachItem.task}</p>
			) : (
				<s>{eachItem.task}</s>
			)}

			<div className="icons">
				<span
					className="edit"
					onClick={() => {
						if (!edit && !eachItem.isDone) {
							setedit(!edit);
						}
					}}>
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
		</form>
	);
};

export default TodoListItems;
