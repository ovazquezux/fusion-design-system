import { Builder } from '@builder.io/react';
import { Accordion } from '../components/Accordion';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Form } from '../components/Form';
import { Toast } from '../components/Toast';

/**
 * Register your MUI-based components with Builder.io Fusion
 * This allows you to use these components in Builder.io's visual editor
 * and import them from Figma designs
 */

// Register Accordion Component
Builder.registerComponent(Accordion, {
  name: 'Accordion',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Frequently Asked Questions',
    },
    {
      name: 'items',
      type: 'list',
      subFields: [
        { name: 'id', type: 'string', required: true },
        { name: 'question', type: 'string', required: true },
        { name: 'answer', type: 'longText', required: true },
      ],
      defaultValue: [
        {
          id: 'q1',
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, PayPal, and bank transfers.',
        },
      ],
    },
    {
      name: 'allowMultiple',
      type: 'boolean',
      defaultValue: false,
      helperText: 'Allow multiple accordions to be open at once',
    },
    {
      name: 'defaultExpanded',
      type: 'string',
      helperText: 'ID of the item to expand by default',
    },
  ],
});

// Register Button Component
Builder.registerComponent(Button, {
  name: 'Button',
  inputs: [
    {
      name: 'label',
      type: 'string',
      defaultValue: 'Click Me',
      required: true,
    },
    {
      name: 'variant',
      type: 'string',
      enum: ['primary', 'secondary', 'text', 'outlined'],
      defaultValue: 'primary',
    },
    {
      name: 'size',
      type: 'string',
      enum: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    {
      name: 'disabled',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      defaultValue: false,
    },
  ],
});

// Register Card Component
Builder.registerComponent(Card, {
  name: 'Card',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Card Title',
      required: true,
    },
    {
      name: 'description',
      type: 'longText',
    },
    {
      name: 'image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp', 'gif'],
    },
    {
      name: 'imageAlt',
      type: 'string',
      defaultValue: 'Card image',
    },
    {
      name: 'primaryAction',
      type: 'string',
      helperText: 'Primary action button label',
    },
    {
      name: 'secondaryAction',
      type: 'string',
      helperText: 'Secondary action button label',
    },
  ],
});

// Register Form Component
Builder.registerComponent(Form, {
  name: 'Form',
  inputs: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'fields',
      type: 'list',
      subFields: [
        { name: 'id', type: 'string', required: true },
        { name: 'label', type: 'string', required: true },
        {
          name: 'type',
          type: 'string',
          enum: ['text', 'email', 'password', 'number', 'textarea'],
          defaultValue: 'text',
        },
        { name: 'placeholder', type: 'string' },
        { name: 'required', type: 'boolean', defaultValue: false },
        { name: 'helperText', type: 'string' },
      ],
      defaultValue: [
        { id: 'name', label: 'Name', type: 'text', required: true },
        { id: 'email', label: 'Email', type: 'email', required: true },
      ],
    },
    {
      name: 'submitLabel',
      type: 'string',
      defaultValue: 'Submit',
    },
    {
      name: 'cancelLabel',
      type: 'string',
    },
    {
      name: 'spacing',
      type: 'number',
      defaultValue: 2,
    },
  ],
});

// Register Toast Component
Builder.registerComponent(Toast, {
  name: 'Toast',
  inputs: [
    {
      name: 'open',
      type: 'boolean',
      defaultValue: true,
    },
    {
      name: 'message',
      type: 'string',
      defaultValue: 'This is a notification',
      required: true,
    },
    {
      name: 'severity',
      type: 'string',
      enum: ['success', 'error', 'warning', 'info'],
      defaultValue: 'info',
    },
    {
      name: 'autoHideDuration',
      type: 'number',
      defaultValue: 6000,
      helperText: 'Duration in milliseconds before auto-hiding',
    },
  ],
});

export { Accordion, Button, Card, Form, Toast };
