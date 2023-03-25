import React from 'react';
// import "antd/dist/reset.css";
import { CheckOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';

const ListName = ({ list }) => {
  return (
    <div className='list-name-wrapper' style={{display: "flex", justifyContent: "space-between", borderBottom: "3px solid black", margin: "10px"}}>
      <div className='list-content'>
        <h3>{list.listName}</h3>
      </div>
      <div className='list-icon' style={{}}>
      <CheckOutlined className='list-icon__check' style={{paddingRight: "20px", color: "green"}} />
      <CloseOutlined className='list-icon__close'/>
      </div>
    </div>
  )
}

export default ListName;