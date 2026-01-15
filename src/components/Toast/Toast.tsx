import React from 'react';
import {
  Snackbar,
  Alert,
  AlertProps,
  SnackbarProps,
} from '@mui/material';

export interface ToastProps {
  /** Whether the toast is open */
  open: boolean;
  /** Toast message */
  message: string;
  /** Toast severity */
  severity?: 'success' | 'error' | 'warning' | 'info';
  /** Auto hide duration in milliseconds */
  autoHideDuration?: number;
  /** Close handler */
  onClose?: () => void;
  /** Toast position */
  position?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
}

/**
 * Toast notification component for displaying temporary messages
 */
export const Toast: React.FC<ToastProps> = ({
  open,
  message,
  severity = 'info',
  autoHideDuration = 6000,
  onClose,
  position = { vertical: 'bottom', horizontal: 'center' },
}) => {
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    onClose?.();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={position}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
