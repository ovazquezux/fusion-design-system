import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/components/Button';

/**
 * Primary UI component for user interaction.
 * Built on top of MUI's Button component with custom styling and variants.
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Primary UI component for user interaction',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'text', 'outlined'],
      description: 'Button variant style',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Make button full width',
    },
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Primary button variant - use for main actions
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Primary Button',
    size: 'medium',
  },
};

/**
 * Secondary button variant - use for secondary actions
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary Button',
    size: 'medium',
  },
};

/**
 * Large button size
 */
export const Large: Story = {
  args: {
    variant: 'primary',
    label: 'Large Button',
    size: 'large',
  },
};

/**
 * Small button size
 */
export const Small: Story = {
  args: {
    variant: 'primary',
    label: 'Small Button',
    size: 'small',
  },
};

/**
 * Outlined button variant
 */
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    label: 'Outlined Button',
    size: 'medium',
  },
};

/**
 * Text button variant - minimal styling
 */
export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Text Button',
    size: 'medium',
  },
};

/**
 * Disabled button state
 */
export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: 'Disabled Button',
    size: 'medium',
    disabled: true,
  },
};
