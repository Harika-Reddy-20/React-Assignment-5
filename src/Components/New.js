import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';




const New = () => {
  const [state, setState] = useState({
    name: "",
    age: "",
    batch: "",
    course: "",
  });
  const [error, setError] = useState("");



  const { name, age, batch, course } = state;
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !age || !batch || !course){
      setError("please enter valid data")
    }
    else{
      dispatch(addUser(state));
      navigate("/Student");
      setError("");
    }
  };


  return (
    <div>
      
      <form
        onSubmit={handleSubmit}
        style={{textAlign:"center"}}
      >
        <h1>Add Student</h1>
        {error && <h3>error</h3>}
        <TextField
          id="outlined-error"
          label="Name"
          name='name'
          type='name'
          value={name}
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-error"
          label="Age"
          name='age'
          type='number'
          value={age}
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-error"
          label="Batch"
          name='batch'
          type='batch'
          value={batch}
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-error"
          label="Course"
          name='course'
          type='course'
          value={course}
          onChange={handleInputChange}
        />
        <br />
        <button type='submit' onSubmit={handleSubmit}>Submit</button>
        <button onClick={() => navigate("/Student")}>Go Back</button>
      </form>
    </div>
  )
}

export default New