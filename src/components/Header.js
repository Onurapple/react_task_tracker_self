import React from 'react'
import Button from './Button'

const Header = ({title, toggleShow, showAddTask}) => {
    
  return (
    <div className='header'>
      <h1>{title}</h1>
      <Button toggleShow={toggleShow}  color={showAddTask ? "red" : "purple"}
        text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}/>
    </div>
  )
}

export default Header

