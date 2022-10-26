import { Navigate, Route, Routes } from 'react-router-dom';
import { Sidebar, Navbar } from '../../ui/components';
import { DashboardPage, PickingsPage, ReportsPage, RoutesPage, UsersPage, VehiclesPage } from '../pages';

export const AdminSystemRoutes = () => {
  return (
    <>
        <Navbar drawerWidth='240' />
        <Sidebar drawerWidth='240' />
        <div className="container">
            <Routes>
                <Route path="dashboard" element={<DashboardPage />} />
                <Route path="reports" element={<ReportsPage />} />
                <Route path="routes" element={<RoutesPage />} />
                <Route path="users" element={<UsersPage />} />
                <Route path="vehicles" element={<VehiclesPage />} />
                <Route path="picking" element={<PickingsPage />} />
                
                <Route path="/*" element={<Navigate to="dashboard" />} />
            </Routes>
        </div>
    </>
  )
}