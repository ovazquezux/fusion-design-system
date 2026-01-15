import { Builder } from '@builder.io/react';

// Initialize Builder.io with enhanced settings for visual editing
Builder.set({
  // Enable better visual editing
  apiKey: 'cb19d3954c14488aa64450e699827438',
  canTrack: false,
  // Enable devtools for better debugging
  ...(process.env.NODE_ENV === 'development' && {
    devMode: true,
  })
});

// Set custom component resolution for better visual editing
Builder.register('insertMenu', {
  name: 'Custom Components',
  items: [
    { name: 'Button' },
    { name: 'Card' },
    { name: 'Accordion' },
    { name: 'Form' },
    { name: 'Toast' }
  ]
});

// Enable real-time preview
if (typeof window !== 'undefined') {
  (window as any).Builder = Builder;
}