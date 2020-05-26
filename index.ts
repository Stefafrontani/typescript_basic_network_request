import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then((response) => {
    const todo: Todo = response.data;

    const ID = todo.ID;
    const Title = todo.Title;
    const finished = todo.finished;

    console.log(`
        The todo with id: ${ID}
        Has the title: ${Title}
        Has it been completed: ${finished}
    `);
});
