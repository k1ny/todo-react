import classes from './myInput.module.css'
import React from 'react'
export const MyInput = React.forwardRef((props, ref) => {
  return (
    <input ref={ref} {...props} className={classes.myInput}/>
  )
})
