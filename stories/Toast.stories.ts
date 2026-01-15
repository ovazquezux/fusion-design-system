import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../src/components/Toast';
import { Button } from '../src/components/Button';
import { Box } from '@mui/material';

/**
 * Toast notification component for displaying temporary messages.
 * Built on top of MUI's Snackbar and Alert components.
 */
const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toast notification component for displaying temporary messages',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the toast is visible',
    },
    message: {
      control: 'text',
      description: 'Toast message',
    },
    severity: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info'],
      description: 'Toast severity',
    },
    autoHideDuration: {
      control: 'number',
      description: 'Auto hide duration in milliseconds',
    },
    onClose: {
      action: 'closed',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Success toast
 */
export const Success: Story = {
  args: {
    open: true,
    message: 'Operation completed successfully!',
    severity: 'success',
    autoHideDuration: 6000,
  },
};

/**
 * Error toast
 */
export const Error: Story = {
  args: {
    open: true,
    message: 'An error occurred. Please try again.',
    severity: 'error',
    autoHideDuration: 6000,
  },
};

/**
 * Warning toast
 */
export const Warning: Story = {
  args: {
    open: true,
    message: 'Warning: This action cannot be undone.',
    severity: 'warning',
    autoHideDuration: 6000,
  },
};

/**
 * Info toast
 */
export const Info: Story = {
  args: {
    open: true,
    message: 'New updates are available.',
    severity: 'info',
    autoHideDuration: 6000,
  },
};

/**
 * Interactive toast demo
 */
export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = React.useState<'success' | 'error' | 'warning' | 'info'>('success');

    const showToast = (type: 'success' | 'error' | 'warning' | 'info') => {
      setSeverity(type);
      setOpen(true);
    };

    const messages = {
      success: 'Changes saved successfully!',
      error: 'Failed to save changes.',
      warning: 'Some fields are incomplete.',
      info: 'Click to learn more.',
    };

    return React.createElement(Box, { sx: { display: 'flex', gap: 2, flexWrap: 'wrap' } },
      React.createElement(Button, { variant: 'primary', label: 'Show Success', onClick: () => showToast('success') }),
      React.createElement(Button, { variant: 'secondary', label: 'Show Error', onClick: () => showToast('error') }),
      React.createElement(Button, { variant: 'outlined', label: 'Show Warning', onClick: () => showToast('warning') }),
      React.createElement(Button, { variant: 'text', label: 'Show Info', onClick: () => showToast('info') }),
      React.createElement(Toast, {
        open: open,
        message: messages[severity],
        severity: severity,
        onClose: () => setOpen(false),
        autoHideDuration: 3000,
      })
    );
  },
};
