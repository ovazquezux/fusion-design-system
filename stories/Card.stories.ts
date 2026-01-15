import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../src/components/Card';

/**
 * Card component for displaying content in a contained format.
 * Built on top of MUI's Card component with custom styling.
 */
const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Card component for displaying content in a contained format',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    description: {
      control: 'text',
      description: 'Card description',
    },
    image: {
      control: 'text',
      description: 'Image URL',
    },
    primaryAction: {
      control: 'text',
      description: 'Primary action button label',
    },
    secondaryAction: {
      control: 'text',
      description: 'Secondary action button label',
    },
    onPrimaryAction: {
      action: 'primary clicked',
    },
    onSecondaryAction: {
      action: 'secondary clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default card with title and description
 */
export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a description of the card content. It can contain multiple lines of text.',
  },
};

/**
 * Card with image
 */
export const WithImage: Story = {
  args: {
    title: 'Featured Content',
    description: 'A beautiful card with an image at the top.',
    image: 'https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?w=400&h=300&fit=crop',
    imageAlt: 'Abstract colorful image',
  },
};

/**
 * Card with action buttons
 */
export const WithActions: Story = {
  args: {
    title: 'Interactive Card',
    description: 'This card has action buttons at the bottom.',
    primaryAction: 'Learn More',
    secondaryAction: 'Share',
  },
};

/**
 * Complete card with image and actions
 */
export const Complete: Story = {
  args: {
    title: 'Product Card',
    description: 'A complete card with image, description, and action buttons.',
    image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=400&h=300&fit=crop',
    imageAlt: 'Product image',
    primaryAction: 'Buy Now',
    secondaryAction: 'Add to Cart',
  },
};

/**
 * Minimal card with title only
 */
export const Minimal: Story = {
  args: {
    title: 'Simple Card',
  },
};
