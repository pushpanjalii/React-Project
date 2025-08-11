import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css'
import authService from "./appwrite/auth";
import { login, logout } from './store/authSlice';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
       <div className='w-full'>
        <Header />
        <main>

        </main>
        <Footer />
        </div>
    </div>
  ) : null
}

export default App;
