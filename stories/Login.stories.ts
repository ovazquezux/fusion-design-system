import type { Meta, StoryObj } from '@storybook/react';
import { Login } from '../src/components/Login';

const meta = {
  title: 'Components/Login',
  component: Login,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#1a1a1a' },
        { name: 'light', value: '#ffffff' },
      ],
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showLogo: {
      control: 'boolean',
      description: 'Show or hide the Arcos logo',
    },
    onLogin: { action: 'login' },
    onCreateAccount: { action: 'createAccount' },
    onForgotPassword: { action: 'forgotPassword' },
  },
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default login form with Arcos logo
 */
export const Default: Story = {
  args: {
    showLogo: true,
    onLogin: (email, password) => {
      console.log('Login:', { email, password });
    },
    onCreateAccount: () => {
      console.log('Create account clicked');
    },
    onForgotPassword: () => {
      console.log('Forgot password clicked');
    },
  },
};

/**
 * Login form without logo
 */
export const WithoutLogo: Story = {
  args: {
    ...Default.args,
    showLogo: false,
  },
};

/**
 * Login form with custom handlers
 */
export const WithCustomHandlers: Story = {
  args: {
    showLogo: true,
    onLogin: (email, password) => {
      alert(`Logging in with: ${email}`);
    },
    onCreateAccount: () => {
      alert('Navigating to create account page...');
    },
    onForgotPassword: () => {
      alert('Opening password reset dialog...');
    },
  },
};
