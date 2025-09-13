import './assets/css/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';
import { ChakraProvider } from '@chakra-ui/react';
import initialTheme from './theme/theme';
import { useState } from 'react';
import { CarbonProvider } from './contexts/CarbonContext';
import { InstituteProvider } from './contexts/InstituteContext';
import { DepartmentProvider } from './contexts/DepartmentContext';
import ErrorBoundary from './components/ErrorBoundary';

export default function Main() {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  
  return (
    <ErrorBoundary>
      <ChakraProvider theme={currentTheme}>
        <InstituteProvider>
          <DepartmentProvider>
            <CarbonProvider>
              <Routes>
                <Route path="auth/*" element={<AuthLayout />} />
                <Route
                  path="admin/*"
                  element={
                    <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} />
                  }
                />
                <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
              </Routes>
            </CarbonProvider>
          </DepartmentProvider>
        </InstituteProvider>
      </ChakraProvider>
    </ErrorBoundary>
  );
}
