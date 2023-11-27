import React, { useEffect, Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import FallbackLoader from './components/Common/FallbackLoader/FallbackLoader';
import Header from './components/Common/Header/index';

import { scrollToTop } from './utils/helperFunctions';

import { ALL_ROUTES } from './utils/routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  const ToastWrapper = () => (
    <ToastContainer
      position="top-right"
      autoClose={6000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      className="text-xs sm:text-sm toastStyles"
    />
  );

  return (
    <div className="h-screen">
      <ToastWrapper />
      <Header />

      <div className={`marginTopRoot w-full h-full`}>
        <Suspense fallback={<FallbackLoader />}>
          <Routes>
            {ALL_ROUTES.map((item, index) => (
              <Route path={item.pathName} element={<item.Component />} key={index} />
            ))}

            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
