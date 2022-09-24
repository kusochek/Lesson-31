import React, { useContext } from "react";
import Context from "../context";

export default function ToDoItem({ todo: { title, completed, id }, index, onChange }) {
    const { toggleList, deleteItem } = useContext(Context);
    const classList = ['list'];
    if(completed) classList.push("done");

    return (
        <li className={classList.join(" ")}>
            <div>
                <input type="checkbox" checked={completed} onChange={toggleList.bind(null, id)} />
                <strong>{index + 1}</strong>&nbsp;
                { title }
            </div>
            <button onClick={deleteItem.bind(null, id)}>x</button>
        </li>
    )
}
