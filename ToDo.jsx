import { ClassNames } from '@emotion/react'
import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const ToDo= () => {
    const[names,setNames]=useState()
    const[data,setData]=useState([])

    const inputHandler =(e)=>{
        setNames(e.target.value)
    }

    const addHandler =()=>{
        setData((data=>[...data,names]))
        setNames('')
    }
  return (
    <div>
        <TextField variant='outlined' placeholder='enter text' onChange={inputHandler} value={names}/><br /><br />
        <Button variant='contained' color='secondary' onClick={addHandler}>submit</Button><br /><br />

    <ol>
        {data.map((val,i)=>{
            return(
                <li key={i}>{val}</li>
            )
        })}
    </ol>
    </div>
  )
}

export default ToDo
