import React from 'react'
import { createShareFood } from '../firebase/api/shareFood';

const Login = () => {
  const formHandler = (e) => {
    e.preventDefault();
    const photos = e.target[0].files[0];
    createShareFood({photos});
  }
    
  return (
    <>
      <form onSubmit={formHandler}>
        <input type="file" />
        <button type='submit'>Upload</button>
      </form>
    </>
  )
}

export default Login