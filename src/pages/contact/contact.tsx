import React from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios';
export default function ContainedButtons() {
  return (
   <Button onClick={handleClick} >blick me</Button>
  )
}
function handleClick(e: React.MouseEvent) {
  axios.get('http://localhost:3000/api/me').then((res)=> {
    console.log('r r r', res)
  })
} 
