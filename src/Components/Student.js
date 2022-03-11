import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { loadUsers } from '../redux/actions';

function createData(name, age, course, batch, change) {
  return { name, age, course, batch, change };

}
const user = [
  createData("Jhon", 24, "MERN", "October"),
  createData("Doe", 25, "MERN", "November"),
  createData("Biden", 26, "MERN", "September"),
  createData("Barar", 22, "MERN", "September"),
  createData("Christ", 23, "MERN", "October"),
  createData("Elent", 24, "MERN", "November")
];

const Student = () => {

  let dispatch = useDispatch();
  const { users } = useSelector(state => state.data)
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(loadUsers());
  },)
  return (
    <>
      <button onClick={() => navigate("/New")}>Add Student</button>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell><h5>Name</h5></TableCell>
              <TableCell align="center"><h5>Age</h5></TableCell>
              <TableCell align="center"><h5>Course</h5></TableCell>
              <TableCell align="center"><h5>Batch</h5></TableCell>
              <TableCell align="center"><h5>Change</h5></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map((user) => (
              <TableRow
                key={user.id}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="center">{user.age}</TableCell>
                <TableCell align="center">{user.course}</TableCell>
                <TableCell align="center">{user.batch}</TableCell>
                <TableCell align="center">{user.change}
                  <button onClick={() => navigate(`/editUser/${user.id}`)}> Edit </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>





    </>
  )
}
export default Student;