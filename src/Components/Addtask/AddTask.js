import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../../Redux/Actions/listTask';
import '../../App.css'

const AddTask = () => {

const [text ,setText] = useState("");
const dispatch = useDispatch();
const handleAdd = (e) => {
   e.preventDefault(); 
  if (text)
    
    { dispatch(addTask({id: Math.random(), text, isDone: false }));

    } else { 

      alert ("Can you add an empty text !!");  

    }
  };

 
  return (
    <div className='Add'>

<form>
  <input type="text" id="name" placeholder='enter your task' onChange={(e) =>  setText(e.target.value)} value={text} />
  
</form>
    
      
     
      <button class="button-adder" onClick={handleAdd}>Add</button>


    

    </div>
  );
};

export default AddTask;
