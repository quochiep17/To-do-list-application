import React from "react";
import ListName from "./ListName";
// import './styles.scss'


const Todo = ({list}) => {
    return (
        <div className="list">
          <ListName list={list} />
        </div>
      );
}

export default Todo;