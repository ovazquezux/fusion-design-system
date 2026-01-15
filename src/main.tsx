import React from 'react';
import ReactDOM from 'react-dom/client';
import { FusionProvider, FusionContent } from './fusion';
import { Box, Typography, Container, Button as MuiButton } from '@mui/material';

// Import Builder.io initialization and components
import './builder/init';
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
                <Typography color="text.secondary" paragraph>
                  No Fusion content found. Import a Figma design from Builder.io.
                </Typography>
                <MuiButton 
                  variant="contained" 
                  href="http://localhost:6006"
                  target="_blank"
                >
                  View Storybook Components
                </MuiButton>
              </Box>
            }
          />
        </Box>
      </Container>
    </FusionProvider>
  );
};

// Only render if we're in a browser environment and root hasn't been created
const rootElement = document.getElementById('root');
if (rootElement && !(rootElement as any)._reactRootContainer) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default App;
