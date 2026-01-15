import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FusionContent } from '../src/fusion';
import { Box, Typography, Paper } from '@mui/material';
import { Button } from '../src/components/Button';

/**
 * Fusion Content component for rendering Builder.io content
 * This demonstrates how Figma designs imported through Fusion will appear
 */
const meta: Meta<typeof FusionContent> = {
  title: 'Fusion/Content',
  component: FusionContent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Builder.io Fusion Integration

This component renders content from Builder.io Fusion. When you import Figma designs 
through Fusion, they will be rendered using your registered MUI components.

### How it works:
1. **Design in Figma** - Create your UI components
2. **Import via Fusion** - Use Builder.io's Figma Import feature
3. **Map to Components** - Fusion maps designs to your registered MUI components
4. **View in Storybook** - See the result with your dark theme applied
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    model: {
      control: 'select',
      options: ['page', 'section', 'component'],
      description: 'Builder.io model type',
    },
    theme: {
      control: 'select',
      options: ['dark', 'light'],
      description: 'Theme mode',
    },
    contentId: {
      control: 'text',
      description: 'Builder.io content ID',
    },
    url: {
      control: 'text',
      description: 'URL path for content matching',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Fusion content viewer
 */
export const Default: Story = {
  args: {
    model: 'page',
    theme: 'dark',
    fallback: React.createElement(
      Box,
      { sx: { p: 4, textAlign: 'center' } },
      React.createElement(
        Paper,
        { sx: { p: 4, maxWidth: 600, mx: 'auto' } },
        React.createElement(
          Typography,
          { variant: 'h4', gutterBottom: true },
          '🎨 Fusion Ready!'
        ),
        React.createElement(
          Typography,
          { variant: 'body1', color: 'text.secondary', paragraph: true },
          'Your Builder.io Fusion integration is set up. Import a Figma design to see it rendered here with your MUI components.'
        ),
        React.createElement(
          Typography,
          { variant: 'body2', color: 'text.secondary', sx: { mb: 3 } },
          'Go to Builder.io → Click "Figma Import" → Select your Figma frame'
        ),
        React.createElement(Button, { variant: 'primary', label: 'Open Builder.io' })
      )
    ),
  },
};

/**
 * Fusion with specific content ID
 */
export const WithContentId: Story = {
  args: {
    model: 'component',
    contentId: 'your-content-id-here',
    theme: 'dark',
    fallback: React.createElement(
      Box,
      { sx: { p: 4 } },
      React.createElement(
        Typography,
        { color: 'text.secondary' },
        'Enter a valid Builder.io content ID to load content'
      )
    ),
  },
};

/**
 * Light theme variant
 */
export const LightTheme: Story = {
  args: {
    model: 'page',
    theme: 'light',
    fallback: React.createElement(
      Box,
      { sx: { p: 4, textAlign: 'center', minHeight: '100vh', bgcolor: 'background.default' } },
      React.createElement(
        Paper,
        { sx: { p: 4, maxWidth: 600, mx: 'auto' } },
        React.createElement(
          Typography,
          { variant: 'h5', gutterBottom: true },
          'Light Theme Preview'
        ),
        React.createElement(
          Typography,
          { variant: 'body1', color: 'text.secondary' },
          'This shows how Fusion content will appear in light mode'
        )
      )
    ),
  },
};
