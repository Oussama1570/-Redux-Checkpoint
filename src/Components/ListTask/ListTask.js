import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import Task from '../Task/Task'
import { Button } from "react-bootstrap"
import '../../App.css';
import Edit from '../Edit/Edit';

const ListTask = () => {

  const list = useSelector((state) => state.listReducer.listTasks );
  const [status, setStatus] = useState("All");

  return (
    <div className='ListTask'>
      
      <Button variant="light" onClick={()=> setStatus("All")}>All</Button>
      <Button variant="light" onClick={()=> setStatus("All")}>Done</Button>
      <Button variant="light" onClick={()=> setStatus("All")}>UnDone</Button>

     {status === "Done" 
     ? list

            .filter((el) => el.isDone === true)
            .map((el) => <Task task ={el} key={el.id} />)

     
           :status === "Undone" 
           ? list


       
             .filter((el) => el.isDone === false)
             .map((el) => <Task task={el} key={el.id} />)
            : list.map((el) => <Task task = {el}  key={el.id} />)}
       
            
    </div>
  );
};

export default ListTask;
