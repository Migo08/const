import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ForgotPasswordPage, LoginPage } from '../pages'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={ <LoginPage />} />
        <Route path="forgot" element={ <ForgotPasswordPage />} />

        <Route path="/*" element={ <Navigate to="/login" />} />
    </Routes>
  )
}
