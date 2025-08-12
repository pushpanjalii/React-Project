import React from 'react'
import {useDispatch} from 'react-redux'
import authservice from '../../appwrite/config.js'
import {logout} from '../../store/authSlice.js'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = async () => {
        authservice.logout().then(() => {
            dispatch(logout());
        })
    }
  return (
    <button className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300'>
        Logout
    </button>
  )
}

export default LogoutBtn