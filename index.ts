import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then((response) => {
    const todo: Todo = response.data;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(`
        The todo with id: ${id}
        Has the title: ${title}
        Has it been completed: ${completed}
    `);
});
