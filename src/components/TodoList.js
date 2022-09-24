import React from "react";
import ToDoItem from "./TodoItem";

const style = {
    ul: {
      listStyle: "none",
      padding: 0,
      margin: 0,
    },
};

export default function ToDoList(props) {
    return (
        <ul style={ style.ul }>
            {
                props.todos.map((todo, i) => <ToDoItem todo={todo} key={todo.id} index={i} />)
            }
        </ul>
    )
}