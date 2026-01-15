import React from 'react';
import ReactDOM from 'react-dom/client';
import { FusionProvider, FusionContent } from './fusion';
import { Box, Typography, Container } from '@mui/material';

// Import Builder.io registered components
import './builder/components';

const App: React.FC = () => {
  return (
    <FusionProvider theme="dark">
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
          <Typography variant="h3" gutterBottom>
            Fusion Design System
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Import your Figma designs through Builder.io Fusion
          </Typography>
          
          {/* This will render Builder.io Fusion content */}
          <FusionContent 
            model="page" 
            theme="dark"
            fallback={
              <Box sx={{ py: 4, textAlign: 'center' }}>
                <Typography color="text.secondary">
                  No Fusion content found. Import a Figma design from Builder.io.
                </Typography>
              </Box>
            }
          />
        </Box>
      </Container>
    </FusionProvider>
  );
};

// Only render if we're in a browser environment (not Storybook)
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default App;
