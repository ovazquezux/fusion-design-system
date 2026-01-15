import React from 'react';
import {
  Box,
  TextField,
  TextFieldProps,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@mui/material';
import { Button } from '../Button';

export interface FormField {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'textarea';
  placeholder?: string;
  required?: boolean;
  helperText?: string;
  error?: boolean;
  errorMessage?: string;
}

export interface FormProps {
  /** Form title */
  title?: string;
  /** Form fields configuration */
  fields: FormField[];
  /** Submit button label */
  submitLabel?: string;
  /** Cancel button label */
  cancelLabel?: string;
  /** Form submit handler */
  onSubmit?: (data: Record<string, string>) => void;
  /** Form cancel handler */
  onCancel?: () => void;
  /** Form spacing */
  spacing?: number;
}

/**
 * Form component for collecting user input
 */
export const Form: React.FC<FormProps> = ({
  title,
  fields,
  submitLabel = 'Submit',
  cancelLabel = 'Cancel',
  onSubmit,
  onCancel,
  spacing = 2,
}) => {
  const [formData, setFormData] = React.useState<Record<string, string>>({});

  const handleChange = (id: string) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [id]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing,
        maxWidth: 400,
      }}
    >
      {title && (
        <FormLabel component="legend" sx={{ fontSize: '1.25rem', fontWeight: 600, mb: 1 }}>
          {title}
        </FormLabel>
      )}
      
      {fields.map((field) => (
        <FormControl key={field.id} fullWidth error={field.error}>
          <TextField
            id={field.id}
            label={field.label}
            type={field.type === 'textarea' ? 'text' : field.type || 'text'}
            placeholder={field.placeholder}
            required={field.required}
            multiline={field.type === 'textarea'}
            rows={field.type === 'textarea' ? 4 : undefined}
            error={field.error}
            value={formData[field.id] || ''}
            onChange={handleChange(field.id)}
            helperText={field.error ? field.errorMessage : field.helperText}
          />
        </FormControl>
      ))}

      <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
        {onCancel && (
          <Button variant="secondary" label={cancelLabel} onClick={onCancel} />
        )}
        <Button variant="primary" label={submitLabel} onClick={() => onSubmit?.(formData)} />
      </Box>
    </Box>
  );
};

export default Form;
