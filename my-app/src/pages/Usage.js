import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Usage() {

    const value  = useSelector((state)=>{
        return state.value
    })
    console.log(value);
    

    const dispatch  =useDispatch()
  return (

    
    <div className='usage'>
        <div className='usage-item' > </div>
        <button onClick={()=>{
            dispatch({
                type:'increment'
            })
        }}>increment</button>
        <label>{value}</label>
        <button onClick={()=>{
            dispatch({
                type:'decrement'
            })

        }}>decrement</button>
    </div>
  )
}

export default Usage