import React,{useContext} from 'react'
import UserData from '../store/userStore';

function NotFound() {
  const context = useContext(UserData);
  const name = context.name;
  return (
    <div>
      <div className='text-center my-10 text-4xl text-pink-800 font-serif block'>NotFound</div>
      <div>The user logged in is { name}</div>
      </div>
  )
}

export default NotFound