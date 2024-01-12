import React, { useEffect, useState } from "react";
import InputField from "./components/InputField";
import { TodoType } from "./Model";
import TodoListItems from "./components/TodoListItems";

const App: React.FC = () => {
	const [typedValue, settypedValue] = useState<string>("");
	const [TodoList, setTodoList] = useState<Array<TodoType>>([]);
	useEffect(() => {
		console.log(TodoList);
	}, [TodoList]);

	// handle addition to todoList
	const handleAdd = () => {
		if (typedValue) {
			setTodoList([
				...TodoList,
				{ id: Date.now(), task: typedValue, isDone: false },
			]);
		}
	};

	return (
		<div className="page">
			<h3 className="logo">Taskify</h3>
			<InputField
				typedValue={typedValue}
				settypedValue={settypedValue}
				handleAdd={handleAdd}
			/>
			<section className="tasksContainer">
				{TodoList?.map((eachItem, index) => {
					return (
						<TodoListItems
							TodoList={TodoList}
							eachItem={eachItem}
							index={index}
							key={eachItem.task}
							setTodoList={setTodoList}
						/>
					);
				})}
			</section>
		</div>
	);
};

export default App;
