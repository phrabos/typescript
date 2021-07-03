import { useEffect } from 'react';
import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';
const logTodo = (id: number, completed: string, title: boolean) => {
	console.log(`
  ${id} id
  ${title} title
  ${completed} completed
  `);
};
interface Todo {
	id: number;
	title: string;
	completed: boolean;
}
const Todos = () => {
	useEffect(() => {
		axios.get(url).then((res) => {
			const todo = res.data as Todo;
			const id = todo.id;
			const title = todo.title;
			const completed = todo.completed;

			logTodo(id, title, completed);
		});
	}, []);

	return (
		<ul>
			<li>todo</li>
		</ul>
	);
};

export default Todos;
