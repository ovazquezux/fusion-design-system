import type { Meta, StoryObj } from '@storybook/react';
import { Form } from '../src/components/Form';

/**
 * Form component for collecting user input.
 * Built on top of MUI's TextField and FormControl components.
 */
const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Form component for collecting user input',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Form title',
    },
    submitLabel: {
      control: 'text',
      description: 'Submit button label',
    },
    cancelLabel: {
      control: 'text',
      description: 'Cancel button label',
    },
    spacing: {
      control: { type: 'number', min: 1, max: 4 },
      description: 'Form field spacing',
    },
    onSubmit: {
      action: 'submitted',
    },
    onCancel: {
      action: 'cancelled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default contact form
 */
export const Default: Story = {
  args: {
    title: 'Contact Us',
    fields: [
      { id: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Enter your name' },
      { id: 'email', label: 'Email', type: 'email', required: true, placeholder: 'Enter your email' },
      { id: 'message', label: 'Message', type: 'textarea', placeholder: 'Your message...' },
    ],
    submitLabel: 'Send Message',
  },
};

/**
 * Login form
 */
export const LoginForm: Story = {
  args: {
    title: 'Sign In',
    fields: [
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'password', label: 'Password', type: 'password', required: true },
    ],
    submitLabel: 'Sign In',
  },
};

/**
 * Registration form
 */
export const RegistrationForm: Story = {
  args: {
    title: 'Create Account',
    fields: [
      { id: 'firstName', label: 'First Name', type: 'text', required: true },
      { id: 'lastName', label: 'Last Name', type: 'text', required: true },
      { id: 'email', label: 'Email', type: 'email', required: true },
      { id: 'password', label: 'Password', type: 'password', required: true, helperText: 'At least 8 characters' },
      { id: 'confirmPassword', label: 'Confirm Password', type: 'password', required: true },
    ],
    submitLabel: 'Create Account',
    cancelLabel: 'Cancel',
  },
};

/**
 * Form with validation errors
 */
export const WithErrors: Story = {
  args: {
    title: 'Form with Errors',
    fields: [
      { id: 'email', label: 'Email', type: 'email', required: true, error: true, errorMessage: 'Please enter a valid email' },
      { id: 'password', label: 'Password', type: 'password', required: true, error: true, errorMessage: 'Password is required' },
    ],
    submitLabel: 'Submit',
  },
};

/**
 * Form with helper text
 */
export const WithHelperText: Story = {
  args: {
    title: 'Profile Settings',
    fields: [
      { id: 'username', label: 'Username', type: 'text', required: true, helperText: 'This will be your public display name' },
      { id: 'bio', label: 'Bio', type: 'textarea', helperText: 'Tell us a little about yourself (max 200 characters)' },
    ],
    submitLabel: 'Save Changes',
    cancelLabel: 'Cancel',
  },
};
