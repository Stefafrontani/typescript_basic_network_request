import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => {
    const todo = response.data;

    const ID = todo.ID;
    const Title = todo.Title;
    const finished = todo.finished;

    console.log(`
        The todo with id: ${ID}
        Has the title: ${Title}
        Has it been completed: ${finished}
    `);
});
