import { Button, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { red } from '@mui/material/colors'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DataLoad = () =>{
    var [users,setUsers]= useState([])


useEffect(() => {
            axios.get("http://jsonplaceholder.typicode.com/users")
            .then((res)=>{
            console.log(res.data)
            setUsers(res.data)
        })
        .catch((err=>console.log(err)))
    },[])
  return (
    <div>
        <Button variant='conntained' onClick={DataLoad}>Load Data</Button>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'red'}}>Id</TableCell>
                        <TableCell style={{color:'red'}}>Name</TableCell>
                        <TableCell style={{color:'red'}}>Email</TableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        {users.map((val,i)=>{
                            return(
                                <TableRow>
                                   <TableCell>{val.id}</TableCell>
                                   <TableCell>{val.name}</TableCell>
                                   <TableCell>{val.email}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default DataLoad