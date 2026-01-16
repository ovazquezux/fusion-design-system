import React from 'react';
import ReactDOM from 'react-dom/client';
import { FusionProvider } from './fusion';
import { Box, Container } from '@mui/material';
import { Login } from './components/Login';

// Import Builder.io initialization and components
import './builder/init';
import './builder/components';

// Suppress ResizeObserver loop warning (harmless third-party library warning)
// This is a known issue with Material-UI and other libraries that use ResizeObserver
const originalError = console.error;
beforeEach(() => {
  console.error = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('ResizeObserver loop completed with undelivered notifications')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

// Restore console.error after initialization
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    console.error = originalError;
  });
}

const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt:', { email, password });
    // Add your login logic here
    alert(`Login with: ${email}`);
  };

  const handleCreateAccount = () => {
    console.log('Create account clicked');
    // Add your create account navigation logic here
    alert('Navigating to create account page...');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Add your forgot password logic here
    alert('Opening password reset dialog...');
  };

  return (
    <FusionProvider theme="dark">
      <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            py: 4,
          }}
        >
          <Login
            onLogin={handleLogin}
            onCreateAccount={handleCreateAccount}
            onForgotPassword={handleForgotPassword}
            showLogo={true}
          />
        </Box>
      </Container>
    </FusionProvider>
  );
};

// Only render if we're in a browser environment (not Storybook)
const rootElement = document.getElementById('root');
if (rootElement) {
  // Store the root instance to avoid creating multiple roots on the same element
  let root = (rootElement as any)._reactRoot;

  if (!root) {
    root = ReactDOM.createRoot(rootElement);
    (rootElement as any)._reactRoot = root;
  }

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default App;
