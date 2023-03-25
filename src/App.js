import React from 'react';
import './App.css';
import Todo from './Component/List/index';
import { Pagination } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';

const dataLists = [
  {
    listName: "Task 3",
  },
  {
    listName: "Task 2",
  },
  {
    listName: "ầdasdasd",
  },
  {
    listName: "hihihaha",
  },
  {
    listName: "đi ngủ thôi",
  },
];

function App() {
  const header = () => {
    return (
      <div className="toDoList" style={{borderBottom: "2px solid black", paddingBottom: "20px", textAlign: "center"
      }}>
        <h2>TO DO LIST APPLICATION</h2>
        <form style={{display: "flex", justifyContent: "center"}}>
          <input type="text" className="input input__lg" style={{width: "400px", height: "30px", borderRadius: "10px", marginRight: "10px"}} placeholder='Add new task in here' />
          <PlusCircleOutlined style={{fontSize: "30px"}}/>
        </form>
      </div>
    );
  };

  const renderLists = (lists) => {
    return lists.map((list) => {
      return <Todo list={list} />;
    });
  };

  const footer = () => {
    return (
      <Pagination style={{textAlign: "center", borderTop: "2px solid black", marginTop: "100px", padding: "10px"}} defaultCurrent={1} pageSize={25} total={50} />
    );
  };

  return (
    <div>
      {header()}
      {renderLists(dataLists)}
      {footer()}
    </div>
  )



}


export default App;
