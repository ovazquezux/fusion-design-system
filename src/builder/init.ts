import { Builder } from '@builder.io/react';
import { Accordion } from '../components/Accordion';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { Toast } from '../components/Toast';

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

// Expose components globally for Builder.io resolution
if (typeof window !== 'undefined') {
  (window as any).__BUILDER_COMPONENTS__ = {
    Button,
    Card,
    Accordion,
    Form,
    Toast
  };
  
  (window as any).Builder = Builder;
}

// Re-register all components to ensure they're available
const components = [
  { Component: Button, name: 'Button' },
  { Component: Card, name: 'Card' },
  { Component: Accordion, name: 'Accordion' },
  { Component: Form, name: 'Form' },
  { Component: Toast, name: 'Toast' }
];

// Force register with simpler config
components.forEach(({ Component, name }) => {
  try {
    Builder.registerComponent(Component, {
      name: name,
      canHaveChildren: name === 'Card' || name === 'Form',
      noWrap: false,
      defaultChildren: []
    });
  } catch (e) {
    console.warn(`Failed to register ${name}:`, e);
  }
});