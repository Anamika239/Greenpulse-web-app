import './assets/css/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import AuthLayout from './layouts/auth';
import AdminLayout from './layouts/admin';
import RTLLayout from './layouts/rtl';
import { ChakraProvider } from '@chakra-ui/react';
import initialTheme from './theme/theme';
import { useState } from 'react';
import { CarbonProvider } from './contexts/CarbonContext';
import ErrorBoundary from './components/ErrorBoundary';

export default function Main() {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  
  return (
    <ErrorBoundary>
      <ChakraProvider theme={currentTheme}>
        <CarbonProvider>
          <Routes>
            <Route path="auth/*" element={<AuthLayout />} />
            <Route
              path="admin/*"
              element={
                <AdminLayout theme={currentTheme} setTheme={setCurrentTheme} />
              }
            />
            <Route
              path="rtl/*"
              element={
                <RTLLayout theme={currentTheme} setTheme={setCurrentTheme} />
              }
            />
            <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
          </Routes>
        </CarbonProvider>
      </ChakraProvider>
    </ErrorBoundary>
  );
}
