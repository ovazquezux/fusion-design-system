import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

export interface ButtonProps extends Omit<MuiButtonProps, 'size'> {
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'text' | 'outlined';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Button label */
  label: string;
  /** Click handler */
  onClick?: () => void;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Full width button */
  fullWidth?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  label,
  onClick,
  disabled = false,
  fullWidth = false,
  ...props
}) => {
  // Map our variants to MUI variants
  const getMuiVariant = (): MuiButtonProps['variant'] => {
    switch (variant) {
      case 'primary':
        return 'contained';
      case 'secondary':
        return 'outlined';
      case 'text':
        return 'text';
      case 'outlined':
        return 'outlined';
      default:
        return 'contained';
    }
  };

  // Map our variants to MUI colors
  const getMuiColor = (): MuiButtonProps['color'] => {
    switch (variant) {
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'secondary';
      default:
        return 'primary';
    }
  };

  return (
    <MuiButton
      variant={getMuiVariant()}
      color={getMuiColor()}
      size={size}
      onClick={onClick}
      disabled={disabled}
      fullWidth={fullWidth}
      {...props}
    >
      {label}
    </MuiButton>
  );
};

export default Button;
