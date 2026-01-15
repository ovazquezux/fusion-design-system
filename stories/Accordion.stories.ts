import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../src/components/Accordion';

/**
 * FAQ Accordion component for displaying collapsible question/answer content.
 * Built on top of MUI's Accordion component with custom styling.
 */
const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'FAQ Accordion component for displaying collapsible question/answer content',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the accordion section',
    },
    allowMultiple: {
      control: 'boolean',
      description: 'Allow multiple accordions to be open at once',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    id: 'payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For enterprise customers, we also offer invoicing options.',
  },
  {
    id: 'refund',
    question: 'What is your refund policy?',
    answer: 'We offer a 30-day money-back guarantee on all our plans. If you\'re not satisfied, contact our support team for a full refund.',
  },
  {
    id: 'support',
    question: 'How can I contact support?',
    answer: 'You can reach our support team via email at support@example.com, through our live chat, or by calling 1-800-EXAMPLE during business hours.',
  },
];

/**
 * Default accordion with FAQ items
 */
export const Default: Story = {
  args: {
    title: 'Frequently Asked Questions',
    items: defaultItems,
    allowMultiple: false,
  },
};

/**
 * Accordion that allows multiple items to be expanded at once
 */
export const AllowMultiple: Story = {
  args: {
    title: 'Frequently Asked Questions',
    items: defaultItems,
    allowMultiple: true,
  },
};

/**
 * Accordion with custom title
 */
export const CustomTitle: Story = {
  args: {
    title: 'Help & Support',
    items: defaultItems,
    allowMultiple: false,
  },
};

/**
 * Accordion with a single item
 */
export const SingleItem: Story = {
  args: {
    title: 'Quick FAQ',
    items: [defaultItems[0]],
    allowMultiple: false,
  },
};

/**
 * Accordion with many items
 */
export const ManyItems: Story = {
  args: {
    title: 'Complete FAQ',
    items: [
      ...defaultItems,
      {
        id: 'shipping',
        question: 'What are the shipping options?',
        answer: 'We offer standard (5-7 business days), express (2-3 business days), and overnight shipping options.',
      },
      {
        id: 'returns',
        question: 'How do I return a product?',
        answer: 'To return a product, log into your account, go to Order History, select the item, and click "Return Item". Print the return label and ship it back.',
      },
      {
        id: 'warranty',
        question: 'What warranty do you offer?',
        answer: 'All products come with a 1-year limited warranty covering manufacturing defects. Extended warranty options are available at checkout.',
      },
    ],
    allowMultiple: true,
  },
};
