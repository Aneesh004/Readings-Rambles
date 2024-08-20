import React from 'react';
import Home from './home/Home';
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from './courses/Courses';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';
import { UseAuth } from './context/AuthProvider';

function App() {
  const [authUser, setAuthUser] = UseAuth()
  console.log(authUser);
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
