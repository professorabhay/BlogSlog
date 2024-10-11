import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth";
import { login, logout } from './store/authSlice';
import { Footer, Header, Loader } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    };

    checkAuthStatus();
  }, [dispatch]);

  return (
    <div className='min-h-screen flex flex-wrap content-between text-white bg-[#000000] items-center justify-center'>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#000000]">
          <Loader />
        </div>
      )}
      {!loading && (
        <>
          <div className="w-full block">
            <Header />
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        </>
      )}
    </div>
  );
}

export default App;
