import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages';
import { useCheckAuth } from '../hooks/useCheckAuth';
import { AdminSystemRoutes } from '../adminSystem/routes/AdminSystemRoutes';

import { logout } from '../store/slices/auth';
import { useEffect } from 'react';

export const AppRouter = () => {

  const { status } = useCheckAuth();

  useEffect(() => {
    logout();
    console.log('lo');
  }, [status])
  


  if( status === 'checking') {
    return <h1>Cargando</h1>;
  }

  return (
    <>  
        <Routes>
            {
              (status === 'authenticated')
              ? <Route path="/*" element={ <AdminSystemRoutes /> } />
              : <Route path="/*" element={ <LoginPage /> } />
            }

            <Route path="/*" element={ <Navigate to='/login' /> } />    
        </Routes>
    </>
  )
}
