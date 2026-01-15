import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Box, Typography, Button as MuiButton } from '@mui/material';
import { Button } from '../src/components/Button';
import { Card } from '../src/components/Card';
import { Accordion } from '../src/components/Accordion';
import { Form } from '../src/components/Form';
import { Toast } from '../src/components/Toast';

/**
 * Builder.io Component Showcase
 * This story showcases all registered components for Builder.io integration
 */
const meta: Meta = {
  title: 'Builder/Component Showcase',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'All components available for Builder.io Fusion import',
      },
    },
  },
};

export default meta;

export const AllComponents: StoryObj = {
  render: () => (
    <Box sx={{ p: 4, bgcolor: 'background.default', minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom sx={{ mb: 4 }}>
        Available Components for Builder.io
      </Typography>

      {/* Button Component */}
      <Box sx={{ mb: 6, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Button Component
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button label="Primary" variant="primary" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Text" variant="text" />
          <Button label="Outlined" variant="outlined" />
          <Button label="Disabled" variant="primary" disabled />
        </Box>
      </Box>

      {/* Card Component */}
      <Box sx={{ mb: 6, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Card Component
        </Typography>
        <Card title="Sample Card" description="This is a card component with title and description" />
      </Box>

      {/* Accordion Component */}
      <Box sx={{ mb: 6, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Accordion Component
        </Typography>
        <Accordion
          title="FAQ"
          items={[
            { id: '1', question: 'What is this?', answer: 'This is a sample accordion' },
            { id: '2', question: 'How does it work?', answer: 'It uses MUI components' },
          ]}
        />
      </Box>

      {/* Form Component */}
      <Box sx={{ mb: 6, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Form Component
        </Typography>
        <Form
          title="Contact Form"
          fields={[
            { name: 'email', type: 'email', label: 'Email' },
            { name: 'message', type: 'textarea', label: 'Message' },
          ]}
        />
      </Box>

      {/* Toast Component */}
      <Box sx={{ mb: 6, p: 3, bgcolor: 'background.paper', borderRadius: 2 }}>
        <Typography variant="h5" gutterBottom>
          Toast Component (for reference)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Toast components are typically triggered by actions
        </Typography>
        <Toast message="Sample toast notification" type="success" />
      </Box>

      <Box sx={{ mt: 4, p: 2, bgcolor: 'action.hover', borderRadius: 1 }}>
        <Typography variant="body2">
          💡 Tip: Use the Figma Import feature in Builder.io to connect these components to your Figma designs
        </Typography>
      </Box>
    </Box>
  ),
};

export const ButtonShowcase: StoryObj = {
  render: () => (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Button Variants
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button label="Primary" variant="primary" />
        <Button label="Secondary" variant="secondary" />
        <Button label="Text" variant="text" />
        <Button label="Outlined" variant="outlined" />
        <Button label="Small" variant="primary" size="small" />
        <Button label="Large" variant="primary" size="large" />
        <Button label="Full Width" variant="primary" fullWidth />
        <Button label="Disabled" variant="primary" disabled />
      </Box>
    </Box>
  ),
};

export const CardShowcase: StoryObj = {
  render: () => (
    <Box sx={{ p: 4, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
      <Card title="Card 1" description="Description for the first card" />
      <Card title="Card 2" description="Description for the second card" />
      <Card title="Card 3" description="Description for the third card" />
    </Box>
  ),
};
