import { builder, Builder } from '@builder.io/react';

// Initialize Builder.io with your API key
export const BUILDER_API_KEY = 'cb19d3954c14488aa64450e699827438';

builder.init(BUILDER_API_KEY);

// Export the initialized builder instance
export { builder, Builder };
