import React, { useState,useEffect } from 'react'
import TextField from '@mui/material/TextField';
import { useNavigate,useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import {  getSingleUser,updateUser } from '../redux/actions';




const Edituser = () => {
  const [state, setState] = useState({
    name: "",
    age: "",
    course: "",
    batch: "",
  });
  const [error, setError] = useState("");

let {id} = useParams();
const {user} = useSelector((state) => state.data);
let navigate = useNavigate();
let dispatch = useDispatch();
  const { name, age, course, batch } = state;
  useEffect(() => {
    dispatch(getSingleUser(id))
  },[]);
  useEffect(() =>{
    if(user){
      setState({...user});
    }
  },[user]);


  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !age || !course || !batch){
      setError("please enter valid data")
    }
    else{
      dispatch(updateUser(state ,id));
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
        <h1>Edit Student</h1>
        {error && <h3>error</h3>}
        <TextField
          id="outlined-error"
          label="Name"
          name='name'
          type='name'
          value={name || ''}
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-error"
          label="Age"
          name='age'
          type='number'
          value={age || ''}
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-error"
          label="Course"
          name='course'
          type='course'
          value={course || ''}
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="outlined-error"
          label="Batch"
          name='batch'
          type='batch'
          value={batch || ''}
          onChange={handleInputChange}
        />
        <br />
        <button type='submit' onChange={handleInputChange}>UPDATE</button>
        <button onClick={() => navigate("/Student")}>Go Back</button>
      </form>
    </div>
  )
}

export default Edituser;