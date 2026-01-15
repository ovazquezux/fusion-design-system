import React from 'react';
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { FusionProvider } from './fusion';
import { Box, CircularProgress, Typography } from '@mui/material';

// Initialize Builder with API key
builder.init('cb19d3954c14488aa64450e699827438');

/**
 * Page component for Builder.io visual editing
 * This is a clean wrapper that renders Builder.io content with your components
 */
export const BuilderPageRenderer: React.FC<{ model?: string }> = ({ model = 'page' }) => {
  const isPreviewing = useIsPreviewing();

  return (
    <FusionProvider theme="dark">
      <React.Suspense
        fallback={
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <CircularProgress />
          </Box>
        }
      >
        {isPreviewing && (
          <Box sx={{ p: 2, bgcolor: 'info.main', color: 'white' }}>
            <Typography variant="body2">🎨 Builder.io Preview Mode</Typography>
          </Box>
        )}
        <BuilderComponent 
          model={model}
          content={{
            // Default empty page
          }}
        />
      </React.Suspense>
    </FusionProvider>
  );
};

export default BuilderPageRenderer;