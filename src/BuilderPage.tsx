import React from 'react';
import { BuilderComponent, builder } from '@builder.io/react';
import { FusionProvider } from './fusion';

// Initialize Builder with API key
builder.init('cb19d3954c14488aa64450e699827438');

interface BuilderPageProps {
  model?: string;
}

/**
 * Builder.io page renderer component
 * This allows Builder.io to render pages built in their visual editor
 */
export const BuilderPage: React.FC<BuilderPageProps> = ({ model = 'page' }) => {
  return (
    <FusionProvider theme="dark">
      <BuilderComponent model={model} />
    </FusionProvider>
  );
};

export default BuilderPage;